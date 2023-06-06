import './App.css';
import { db } from './firebase/config';
import { doc, collection , getDocs , addDoc , deleteDoc, updateDoc } from 'firebase/firestore/lite';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <button onClick={() => {
    //display in console the products in firestore database 
        getDocs(collection(db, 'products')).then(snapshot => {
          snapshot.docs.forEach((obj) => {
            console.log(obj.data(),obj.id);
          })  
        })
      }}>click me</button>
//add data to firestore database
      <button onClick={() => {
        addDoc(collection(db, 'products'), {
          name: 'iphone 13',
          Price: 120000,
          type:'mobile'
        })
      }}>add</button>
//delete product using id
      <button onClick={() => {
        deleteDoc(doc(db, 'products', 'xvLlUatJjSsQE4V11kSm')).then(() => {
          console.log('deleted');
        })
      }}>delete</button>
//upadte product using id
      <button onClick={() => {
        updateDoc(doc(db, 'products', 'qgns6CuicNz20xeudMIb'), {
          name: 'iphone 14',
          Price: 120000,
          type:'mobile'
        })
      }}>update</button>
//signup function
      <button onClick={() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,'sudeep1@gmail.com', '123456').then((userCredential) => {
        // Signed up 
          
          var user = userCredential.user;
          getDocs(collection(db, 'products')).then(snapshot => {
          snapshot.docs.forEach((obj) => {
            console.log(obj.data(),obj.id);
          })  
        })

        // ...
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
      // ..
        });
      }}>sign up</button>
    </div>
  );
}

export default App;
