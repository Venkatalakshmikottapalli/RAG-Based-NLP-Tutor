# RAG-Based-NLP-Tutor
RAG-Based-NLP-Tutor is an intelligent academic chatbot designed to answer questions related to Natural Language Processing (NLP) using the Retrieval-Augmented Generation (RAG) approach. It leverages content from Language Processing by Jurafsky &amp; Martin as its primary knowledge source.

# RAG-Based NLP Tutor - Angular UI

This project is the **Angular frontend UI** for the **RAG-Based NLP Tutor**, which interacts with the backend APIs to provide an interactive experience for users learning NLP concepts with the support of Retrieval Augmented Generation (RAG).

## Project Structure

This Angular project serves as the client-side application, built with:
- Angular 17+
- Angular Material UI components
- REST API communication with Python FastAPI backend

## Features

- Interactive chatbot interface for NLP Q&A
- Supports context-aware responses powered by RAG models
- Modern, responsive, and user-friendly UI
- Clean conversational interface with history and message alignment

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 16 or later)
- [Angular CLI](https://angular.io/cli) (version 17 or later)

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Visit: http://localhost:4200

### API Configuration
Ensure the backend API is running (Python FastAPI ), and update the API base URL in the Angular app if necessary.

```bash
http://127.0.0.1:5000
```
