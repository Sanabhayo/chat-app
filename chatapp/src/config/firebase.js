
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDl2h4bU2dHdl0VxB4flxhBEfw-tD43OwU",
  authDomain: "chatapp-gs-eb245.firebaseapp.com",
  projectId: "chatapp-gs-eb245",
  storageBucket: "chatapp-gs-eb245.firebasestorage.app",
  messagingSenderId: "445996356619",
  appId: "1:445996356619:web:8a4eff12c2d057beaf630e",
  measurementId: "G-76ELXNS8MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (username,email,password) =>{
    try{
      const res = await createUserWithEmailAndPassword(auth,email.password);
      const user = res.user;
      await setDoc(doc(db,"user",user.uid),{
        id:user.uid,
        username:username.toLowerCase(),
        email,
        name:"",
        avatar:"",
        bio:"Hey, There i am using chat app",
        lastSeen:Date.ow()
      })
      await setDoc(doc(db,"chats,user.uid"),{
        chatData:[]
      })
    } catch (error){
      console.error(error) 
      toast.error(error.code)
    }

}
export {signup}