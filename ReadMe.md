# AI Framework for Analyzing Online Behavioral Patterns

## Overview
This project explores the use of Artificial Intelligence (AI) frameworks to detect and analyze behavioral patterns of toxicity, hetaerism, and terrorism in online spaces. The aim is to provide a proactive tool for countering harmful content in digital environments while promoting a peaceful and inclusive online community.

The core output of this research is an AI-powered prototype integrated into a social media web application. The solution employs Natural Language Processing (NLP) techniques, specifically leveraging BERT (Bidirectional Encoder Representations from Transformers) for multi-class text classification.

Prediction API is where the main component is based on. It has the saved classification model packaged into a dockerized image along with the FASTAPI environment. This runs in a Google Cloud Run Container. Social Media Web App and it’s RESTful API will depict the use cases of a typical social media application. This will allow our Research Component which is the classification model to be demonstrated for a better understanding. Cloudinary is used for media uploads and downloads. This is used to make the RESTful API very minimal. MongoDB is used as the DBMS for the social media app. Along with its uses, this can also be used for further enhancement of the classification model in the future.

This section contains 3 sections as follows
- 1: the BERT multi label classification model
- 2: Social Media Web App,
- 3: Detection Model's stats panel 


---

## Key Features
- **Behavioral Pattern Detection**: Identifies toxic, hateful, and extremist content based on user-generated text.
- **Deep Learning Models**: Utilizes advanced deep learning architectures, including BERT, for accurate phrasal analysis.
- **Scalable Web Integration**: Provides a microservice endpoint for content moderation, deployable via Docker.
- **Real-Time Moderation**: Supports real-time detection and evaluation of user comments within a social media platform.

---

## Architecture
The solution comprises two main components:

1. **AI Model**: A multi-class classification model trained on preprocessed datasets to identify categories such as terrorism, abusiveness, and toxicity.
   - **Frameworks/Tools Used**: TensorFlow, Keras, Pandas, NumPy, and BERT.
   - **Preprocessing**: Regex-based data cleaning, noise reduction, and normalization of informal/slang language.
   - **Deployment**: Hosted as a RESTful microservice using FastAPI and Docker.

2. **Social Media Web Application**:
   - **Frontend**: Built with Next.js for an interactive user interface.
   - **Backend**: Node.js and Express.js manage the server-side logic.
   - **Database**: MongoDB for storing user data and comments.
   - **Libraries**: 
     - Redux and Redux Toolkit for state management.
     - Formik and Yup for form validation.

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or above)
- Python (v3.8 or above)
- Docker

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/ai-behavior-analysis.git
   cd ai-behavior-analysis
   ```

2. **Install Dependencies**:
   ```bash
   # Backend dependencies
   cd backend
   npm install
   
   # Frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in both `backend` and `frontend` directories with the following:
   ```
   MONGO_URI=<your-mongodb-uri>
   API_URL=<backend-url>
   ```

4. **Run the Application**:
   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend server
   cd ../frontend
   npm run dev
   ```

5. **Deploy AI Microservice**:
   ```bash
   cd ai-service
   docker build -t ai-service .
   docker run -p 5000:5000 ai-service
   ```

---

## Usage

### Social Media Web Application
1. **Post Content**: Users can create posts and comments.
2. **Real-Time Moderation**: Comments are analyzed and flagged based on their toxicity level.

### API Endpoints
- **POST /analyze**: Accepts text input and returns a classification result.
  Example request:
  ```json
  {
    "text": "Your comment here"
  }
  ```
  Example response:
  ```json
  {
    "label": "Toxic",
    "confidence": 0.92
  }
  ```

---

## Evaluation
- **Accuracy**: The model achieved an accuracy of 93% on the test dataset.
- **Real-World Testing**: Deployed in a simulated social media environment for user feedback.
- **Ethics**: Adheres to strict data privacy and ethical guidelines.

---

## Future Improvements
- Expand the training dataset to include more diverse languages and contexts.
- Integrate advanced contextual models for better detection of subtle toxicity.
- Extend compatibility to other social media platforms via APIs.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgments
- Project Supervisor: Mr. Dimuthu Thammitage
- Faculty: School of Computing, MSc. Software Engineering Program
- Tools and Libraries: TensorFlow, FastAPI, Next.js, Docker, MongoDB.

