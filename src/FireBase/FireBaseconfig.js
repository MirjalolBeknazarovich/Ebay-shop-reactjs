import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVOaeysBOtPxutMT5sq37xwAkblVYs-us",
    authDomain: "shunqorebay.firebaseapp.com",
    projectId: "shunqorebay",
    storageBucket: "shunqorebay.appspot.com",
    messagingSenderId: "177682901027",
    appId: "1:177682901027:web:b3844419a0ce3ffdc1a996",
    measurementId: "G-G7QQ8S2ZCZ"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()

export{ auth, provider}