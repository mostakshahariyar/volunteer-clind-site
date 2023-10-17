import firebaseConfig from './FirebaseConfi';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const FirebaseInitialize = () => {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
};

export default FirebaseInitialize;