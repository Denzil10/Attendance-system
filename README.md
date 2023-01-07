# Modern Attendace System 
Super fast one-page react app using MERN 
##  Setup guide 
You can see static design on https://denzil10.github.io/Attendance-system/. 
But since this app has backend you wont see any data records. Even if I add dummy data it not of much use as most features use api to provide fresh data.

### Solutions to see the complete working
**Do setup on your pc** 
 1. Clone project
 2. Create local DB using sql file (Then you can run it quickly through Xampp)
 3. Type node install on terminal to install dependancies
 4. Run Api from server folder(npm run dev)
 5. Run react app from my-app folder (npm start) 

**Or simply watch the video where I cover all features**

## Features
 - Super-fast UI 
 - Current data reflection and modifications are done without refresh
 - It is able to track the date 
 - Data is shown directly from node api
 - On clicking on mark attendace current data is stored in DB
 -  New students can be added to DB by using Add button 
 - Checkin checkout times are tracked  
 - Also it can understand whether this is first visit of the day
 ( done by maintaining calendar) 
 - Currently on first visit of any date it shows msg that attendance is pending
 - This feature  will later help in deciding which user data is displayed according to date
