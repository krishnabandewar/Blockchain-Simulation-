# Simple Blockchain Simulation

## Overview

This project is a simple blockchain simulation that mimics the core features of a blockchain. It includes the following components:
- Block structure with index, timestamp, transactions, previous block hash, and current block hash.
- Hashing using SHA-256.
- Blockchain class to manage the chain of blocks.
- Methods to add new blocks and validate the chain's integrity.
- Basic proof-of-work mechanism.
- Frontend to display the blockchain and interact with it.
- Docker setup for easy deployment.

## Features

- Simulate a blockchain with linked blocks.
- Validate the chain's integrity to detect tampered data.
- Basic proof-of-work mechanism.
- Dynamically add transactions to blocks before mining.
- Dockerized setup for frontend and backend.

## Prerequisites

- Docker
- Docker Compose

## Setup and Execution Instructions

### Cloning the Repository

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
Running the Project with Docker
Build and run the Docker containers:

Access the frontend at http://localhost:5000 and the backend at http://localhost:3000.

Project Structure
Dockerfile: Docker configuration for the backend.
public/Dockerfile: Docker configuration for the frontend.
docker-compose.yml: Docker Compose configuration to run both frontend and backend.
src: Source code for the backend.
public: Source code for the frontend.
Backend API Endpoints
GET /blockchain: Fetch the entire blockchain.
POST /mineBlock: Mine a new block with the provided data.
GET /validateChain: Validate the integrity of the blockchain.
Frontend
The frontend is a simple web interface to display the blockchain and interact with it. It allows you to:

View the current blockchain.
Mine new blocks with custom data.
Validate the blockchain's integrity.
Tampering Detection
The blockchain includes a method to validate its integrity. If any block's data is tampered with, the validation method will detect the inconsistency in the hashes and report the chain as invalid.

Proof-of-Work
A basic proof-of-work mechanism is implemented to make block creation computationally intensive. The condition for the proof-of-work can be adjusted in the code.

Example Usage
Start the Docker containers:

Open your web browser and navigate to http://localhost:5000 to see the frontend.

Use the frontend to:

View the current blockchain.
Mine new blocks with custom data.
Validate the blockchain's integrity.
Contact Information
For queries, email hr@quadbtech.com with the subject "Full Stack Developer Task Query".
