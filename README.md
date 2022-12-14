1- for building image firstly
   docker build . -f Dockerfile --tag frontend_app

2- checking image is created succssfully 
   docker image ls

3- Running a Container (instance from the image) with name frontend_containerfile
   docker run -d --name  frontend_containerfile --env API_URL="http://localhost:8080/api" frontend_app


docker run -d -p 4200:4200 --name  frontend_containerfile1 frontend_app