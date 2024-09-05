This section contains 3 sections as follows
1: the BERT multi label classification model
2: Social Media Web App,
3: Detection Model's stats panel 

An Overview of the Whole Solution
Prediction API is where the main component is based on. It has the saved classification model packaged into a dockerized image along with the FASTAPI environment. This runs in a Google Cloud Run Container. Social Media Web App and it’s RESTful API will depict the use cases of a typical social media application. This will allow our Research Component which is the classification model to be demonstrated for a better understanding. Cloudinary is used for media uploads and downloads. This is used to make the RESTful API very minimal. MongoDB is used as the DBMS for the social media app. Along with its uses, this can also be used for further enhancement of the classification model in the future.
