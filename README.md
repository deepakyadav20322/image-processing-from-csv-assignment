# Image Processing From CSV

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Upload API](#upload-api)
  - [Status API](#status-api)
  - [Webhook API](#webhook-api)
- [Database Schema](#database-schema)
  - [Request Collection](#request-collection)
  - [Product Collection](#product-collection)
- [Asynchronous Workers Documentation](#asynchronous-workers-documentation)
- [LLD Draw.io Diagram PDF](#lld-draw.io-diagram-pdf)

## Introduction

This project is an image processing system designed to handle CSV files containing product information and associated image URLs. The system performs the following tasks:
1. Receives and validates CSV files.
2. Asynchronously processes images (compressing them by 50%).
3. Stores the processed image data and associated product information in a database.
4. Provides an API to check the processing status using a unique request ID.
5. Uses webhooks to notify the completion of image processing tasks.

## Features

- Asynchronous image processing.
- Validation of CSV file format.
- Database storage of product and request data.
- Webhook notifications upon completion of processing.
- Clear API endpoints for uploading CSV files and checking processing status.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Processing**: Sharp
- **HTTP Requests**: Axios

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/image-processing-from-csv-file
   cd image-processing-from-csv-file

## Configuration

1. MongoDB: Set up your MongoDB connection string in the .env file.
2. Port: Configure the server port in the .env file.
3. Webhook URL: Specify the webhook URL to receive notifications upon completion of image processing.

## Running the Application

1. Start the server:
   ```bash
   npm start
2. Run the worker script for processing images:
   ```bash
   node workers/processImages.js
## API Documentation

1: API Documentation PDF Provided in Repository

## Database Schema

1: Database Schema PDF provided in Repository

## Asynchronous Workers Documentation

1: Asynchronous Workers Documentation PDF provided in Repository

# LLD Draw IO

Click the image below to view [LLD.pdf](#https://deepakyadav20322.github.io/lld.pdf) (provided into repositry)
