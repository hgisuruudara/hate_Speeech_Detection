# KamakNe Social Web App

## Requirements

#### 1: MongoDB

#### 2: Cloudinary URI Keys(Used to manage medias used in development)

#### 3: BERT Detection Model
#### 4: All the comments that are passed thru the model are saved in a mongoDB for further model training and dataset creation and db.py Code can be found 
#### 5: Adminpanel Link:(The Admin panel created for the this app to manage the comments saved in tabular manner and is able to export the comments in CSV format with the hate speech model annoted results)

Social Media Web App with an NLP Hate Speech Classification BERT Based Model Integrated to Detect Comment Toxicity

This component is a social media web application. It depicts the typical use case of a social media application. Which is the uploading of a post,reacting to it and
most importantly commenting on it. This web application will have the main component
integrated into the server of the web application. Whenever the user inputs a comment,
the server sends a request to the microservice and evaluates the aggressiveness of the
user’s input.
This application is written in NEXT Js for both the client and Node Js for the server, with
MongoDb as the database management system. Furthermore, this application makes use
of a number of well-known libraries to improve its usefulness. Some of the libraries that
were used are listed below.

- Express Js
- Mongoose
- Redux and Redux Toolkit for state management and caching mechanisms for HTTP requests
- Formik , Yup for form validation

# This is a Next.js project bootstrapped with create-next-app.

## Getting Started

// "build": "next build", // "start": "next start", First, run the development server:

npm run dev

### or

yarn dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.js.

The pages/api directory is mapped to /api/\*. Files in this directory are treated as API routes instead of React pages.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
