KamakNe Social Web App general instructions for both web app and the admin panel.
To run the app, please download all the files and place them in one directory and run the following commands:
And next, follow these steps

1:First sign up to mongoDB and get a MONGO_URI apikey for the database
2:Next sign up to cloudinary and get CLOUDINARY_CLOUDNAME
3:Next get CLOUDINARY_API_KEY from cloudinary
4:Next get CLOUDINARY_API_SECRET from cloudinary

Once you obtain all the necessary keys and uri, place them all in a .env file in the directory

The .env Structre should look like as follows:
MONGO_URI=
JWT_TIMEOUT_DURATION=10d
JWT_SECRET=kamakneSecret
PORT=3004
CLOUDINARY_CLOUDNAME=
CLOUDINARY_URL=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

Finally once all set up, please run
npm install 
npm run dev
If all sucessful, the server will run in port 3004

Note: My personal secrets are already added in this codebase just for demonstration purpose, any accounts or databases created using these secrets will be deleted in the future.
        Therefore, please make sure node and python(for the detection model to work) installed and then run the following commands,
        npm install 
        npm run dev