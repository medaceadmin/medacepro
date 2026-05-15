import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Ye wala part tere Firebase Console se copy hoga
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdSSe28bs23DaTgKG-9PZQ67flvqcvEFk",
    authDomain: "medace-pro.firebaseapp.com",
      projectId: "medace-pro",
        storageBucket: "medace-pro.firebasestorage.app",
          messagingSenderId: "506244600111",
            appId: "1:506244600111:web:a86136f46621787d0951da"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);

            // Export instances taaki App.jsx aur Admin.jsx inhen use kar saken
            export const db = getFirestore(app);
            export const auth = getAuth(app);
