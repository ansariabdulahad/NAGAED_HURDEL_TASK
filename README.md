TASK 1 : simply run the project with live server or open in web browser.

Checkout live Link : https://nagaed-hurdel-task-c8686emjm-ansariabdulahads-projects.vercel.app/

![image](https://github.com/user-attachments/assets/18ec61ce-92ed-4670-a69f-68901df10c81)


TASK 2 process:

Clone this project - https://github.com/ansariabdulahad/NAGAED_HURDEL_TASK.git

Go to the directory
cd Task2
cd Build a Simple API

Install packages - npm install

Run project - npm run dev

Usage of Task 2 apis

1. create new course
API - http://localhost:5000/api/course/create
body - {
	"title": "New Course Added",
    "description": "New the basics COURSES.",
    "duration": "5 hourse"
}

2. Get all course
API - http://localhost:5000/api/course

3. Update course by ID
API - http://localhost:5000/api/course/7
body : {
	"title": "Updated new course or update",
    "description" : "updated",
    "duration": "1 hr"
}

4. Delete course by id
API - http://localhost:5000/api/course/6
