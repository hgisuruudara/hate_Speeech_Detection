Deployment and Running
Please follow the following steps to the run and serve the AI model in fast api in the localhost port

1: Install Python 3.10 

	a. If the deployment is being done in ubuntu, run the following commands in the terminal

	sudo apt-get install python3 python3-pip python3-tk
	sudo pip install virtualenv


2: Download all the files from this drive folder and place it all in a single folder

3: Once downloaded, navigate to that folder through the IDE(ex-Visual Studio Code) and run "pip install -r requirements.txt" in the terminal

4: Once all the requirements are installed, run "python -m uvicorn main:app --reload" to run the fastapi server 

5: Once the server is up go to your browser and navigate to "http://127.0.0.1:8000/docs" to see server