# Configurations

VQA App developer documentation  v0.0: 

Overview
The current version of the app is based on the traditional three tier architecture where the android app being the client and the django programme being the server.
To install and run the project, one needs to have the basic understanding of how client-server architecture works. The more information on it could be found at - https://www.britannica.com/technology/client-server-architecture 
In this document you will get to know the instructions to run, deploy and test the project. You will be given a quick walkthrough of the code structure as well.
Prerequisites 
This project has three main parts. Each one focuses on the different aspects of the project.
The Android application is developed using React-js. The server code is written in Django(python). And the Machine Learning model in python using various packages.
So, the prerequisites are you should have some idea about python programming language, nodejs, react-js, react-native and some third party packages such as numpy, pandas, keras, tensorflow, etc.




Tools and resources
For the app development you will need to install tools in following sequence
Nodejs
React
React-native
React-native-cli
Expo-cli
Github
For the server development you will need to install tools in following sequence
Python (v3.6 or higher)
Pip (v19.0 or higher)
Django (v3.0.13 or higher)

For the app development you will need to install tools in following sequence
Python (v3.6 or higher)
Pip (v19.0 or higher)
Jupyter notebook
Pycharm community






Installations and environment setup
Nodejs : 
Download the executable installer / binaries from the source - https://nodejs.org/en/download/ 
Installation steps are also provided there.
With the node installed, npm is also installed automatically.
React-native :
Use the following command to install react native on your machine.


```npm install -g react-native-cli```


Expo-cli : 
Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

```npm install -g expo-cli```


Python
Download the executable installer / binaries from the source - https://www.python.org/downloads/source/ 
Installation steps are also provided there.

Pip
Python >=3.4 can self-bootstrap pip with the built-in ensurepip module. Refer to the standard library documentation for more details. Make sure to upgrade pip after ensurepip installs pip.
To manually install pip, securely  download get-pip.py by following this link: get-pip.py. Alternatively, use curl:

```curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py```


Then run the following command in the folder where you have downloaded get-pip.py:

```python get-pip.py```





Django 
Use the following command to install Django on your machine 

```Python -m pip install django```


Github 
For linux based OS use following command in terminal to install git


```sudo apt install git-all```


For Windows OS you can download and install git from the following sources.
https://git-scm.com/download/win 

Deployment
First of all download the project folder by executing following command in terminal

```git clone https://github.com/OmkarDeshpande7/BE_PROJECT.git```


In step 2 navigate to the “server” folder and run the following command

```Python manage.py runserver <your-ip-address>```


You can find your own ip address by using the “ipconfig” command on Windows and “ifconfig” command on linux.
***NOTE : The model will be already trained and included in the server code. No need to train model again***
In step 3 open a new terminal, navigate to the “App” folder and run the following command.
### Though the code is still available in the ML folder. You can just run the (.py) file to get the model.

npm install

This will install all the dependencies required for your app.
Then execute the following command to start your app as a metro bundler.

expo start


Wooah! Your project is running ! Now, as the last step you will need to install the “expo go” app on your phone and scan the QR code generated in step 3.

 
