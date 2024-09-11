const axios = require('axios');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const Product = require('../models/Product');
const Request = require('../models/Request');
const { webhookURL } = require('../config');
const path = require('path');
const fs = require('fs');

async function processImage(url) {
    try {
        // Download the image from the URL
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data, 'binary');

        // Generate a unique filename for the processed image
        // ########---->    If we want to then change the output url according to our need (exp:-'www.public-mage-output-url.jpeg')     <<-------------- #############
        const fileName = `${uuidv4()}.jpg`;
        const outputDir = path.join(__dirname, '../compressed-images'); // Directory to save the compressed images
        const outputPath = path.join(outputDir, fileName);

        // Ensure the output directory exists
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Compress the image and save it locally
        await sharp(buffer)
            .jpeg({ quality: 50 }) // Reduce quality by 50% 
            .toFile(outputPath);

        // Return the local file path as the output URL ----------------
        return outputPath;
    } catch (error) {
        console.error('Error processing image:', error);
        throw error;
    }
}

async function processImages(requestId) {
    try {
        const products = await Product.find({ requestId });

        for (const product of products) {
            const outputImageUrls = [];

            for (const inputImageUrl of product.inputImageUrls) {
                const outputImageUrl = await processImage(inputImageUrl);
                outputImageUrls.push(outputImageUrl);
            }

            // Update the product with the output image URLs
            product.outputImageUrls = outputImageUrls;
            await product.save();
        }

        // Update the request status to 'COMPLETED'
        await Request.updateOne({ id: requestId }, { status: 'COMPLETED', updatedAt: new Date() });
    } catch (error) {
        console.error('Error processing images:', error);

        // Update the request status to 'FAILED' in case of an error
        await Request.updateOne({ id: requestId }, { status: 'FAILED', updatedAt: new Date() });
    }
}

module.exports = { processImages };