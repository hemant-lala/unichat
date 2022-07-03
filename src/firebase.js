import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCxCF1Qqdy_QHuBYp8sVRqsHPCXiJrBFZk",
  authDomain: "unichat-f958e.firebaseapp.com",
  projectId: "unichat-f958e",
  storageBucket: "unichat-f958e.appspot.com",
  messagingSenderId: "637340393274",
  appId: "1:637340393274:web:c60c5e075dadfcbe70fa03"
}).auth()

// import firebase from "firebase/app";
// import "firebase/auth";


// export const auth=firebase.initializeApp({
//     apiKey: "AIzaSyCxCF1Qqdy_QHuBYp8sVRqsHPCXiJrBFZk",
//     authDomain: "unichat-f958e.firebaseapp.com",
//     projectId: "unichat-f958e",
//     storageBucket: "unichat-f958e.appspot.com",
//     messagingSenderId: "637340393274",
//     appId: "1:637340393274:web:c60c5e075dadfcbe70fa03"
//   }).auth();