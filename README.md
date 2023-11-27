# Kratin

Kratin is a web application that combines **JWT authentication** with the convenience of scheduling home appointments for doctors and nurses. The project has the potential for further development, including features like medication reminders. This README provides an overview of the project, its features, and instructions on how to use it.

## Features

### JWT Authentication

- **Secure Authentication:** Kratin uses JSON Web Token (JWT) authentication to protect user data and sessions.

### Schedule Home Appointments

- **Book Doctor Appointments:** Users can easily schedule appointments with doctors to be conducted at the comfort of their home.
  
- **Book Nurse Appointments:** Similarly, users can schedule appointments with nurses for home visits.

### Medication Reminder (Future Development)

- **Enhanced Healthcare Experience:** The project has the potential for further development, including the implementation of a medication reminder feature. Users could receive timely reminders for their medication schedules, enhancing the overall healthcare experience.

## Usage

1. **Installation:**
   - Clone the repository: `git clone https://github.com/yash1997verma/kratin.git`
   - Navigate to the project directory: `cd kratin`
   - Install dependencies: `npm install`

2. **Configuration:**
   - Set up your MongoDB database and obtain the connection URL.
   - Create a `.env` file in the root directory with the following:

     ```plaintext
     MONGODB_URI=mongodb_connection_url
     SECRET_KEY=secret
     ```

3. **Run the Application:**
   - Start the server: `npm start`
   - Visit `http://localhost:8000` in your web browser.

4. **Screenshots**

   Insert screenshots or images showcasing different sections of your application.

   - ![Screenshot 1](/client/public//screenshots/signIn.jpeg)
     *Sign In Page*

   - ![Screenshot 2](screenshots/screenshot2.png)
     *Caption for Screenshot 2*

   



---


