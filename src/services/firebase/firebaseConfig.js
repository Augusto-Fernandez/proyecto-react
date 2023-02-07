/*85) Crea firebaseConfig*/
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCV6SQACnpYEKkn8D91zX8BHin0qcJoiYI",
  authDomain: "proyecto-react-coderhous-a8cb9.firebaseapp.com",
  projectId: "proyecto-react-coderhous-a8cb9",
  storageBucket: "proyecto-react-coderhous-a8cb9.appspot.com",
  messagingSenderId: "939892612270",
  appId: "1:939892612270:web:165de1f92674ac5b70e13f"
};

const app = initializeApp(firebaseConfig); /*86) funcion que permite conectar con Firebase */
export const db = getFirestore(app); /*87) funcion que conecta con la base de datos y la exporta para poder usarla despues*/