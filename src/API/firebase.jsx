import {initializeApp} from 'firebase/app';
import {getDatabase, get, set, ref} from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCQrrr1d9MKrS94emnqUqKuOiq0K_BoEWM",
    authDomain: "myreactshop-c5f21.firebaseapp.com",
    databaseURL: "https://myreactshop-c5f21-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myreactshop-c5f21",
    storageBucket: "myreactshop-c5f21.appspot.com",
    messagingSenderId: "860055452807",
    appId: "1:860055452807:web:bdf7710c0a479e1c3b4c22",
    measurementId: "G-DF1L59PSJM"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getDataList = async (recourse) => {
  const recourseRef = ref(db, recourse);
  try{
    const data = await get(recourseRef);
    const recourseValue = data.val();
    return recourseValue;
  } catch(err) {
    console.error(err);
  }
}

export const postDataList = async (recourse, elem, id) => {
  const recourseRef = ref(db,`${recourse}/${id}`);

  try{
    set(recourseRef, elem);
    console.log('good')
  } catch(err) {
    console.error(err);
  }
}



