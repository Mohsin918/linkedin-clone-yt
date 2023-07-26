# Getting Started with LinkedIn clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

This is a React-based LinkedIn clone app using Redux for state management and Firebase as the backend database.

# Screenshots
![first](https://github.com/Mohsin918/linkedin-clone-yt/assets/58115232/2a955bae-28f9-4170-adf9-7d3dc9b6c8fb)
![second](https://github.com/Mohsin918/linkedin-clone-yt/assets/58115232/10422a7b-32fd-4d6e-89ff-dde4bdf40f81)

# Features

1. User Authentication: Users can sign up, log in, and log out securely using Firebase authentication.

2. Real-time Updates: Data is synchronized in real-time between users, ensuring seamless and up-to-date information.

3. Data Persistence: User-generated data is stored in Firebase, allowing users to access their content across different devices.

4. Redux-powered State Management: The app utilizes Redux to manage the application's state efficiently, providing a smooth and consistent user experience.

5. Responsive Design: The app is built with a responsive design, ensuring compatibility across various devices and screen sizes.

# Configuration
Before running the app, you need to configure Firebase settings:

Go to the Firebase Console, create a new project (if you haven't already), and obtain your Firebase configuration credentials.
Update the Firebase configuration in src/firebase.js

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

# Installation
 npm install
 
# Start
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.




