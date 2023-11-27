import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe7fGdnV2pYumGv3HhusNdB3_sdyq3e5U",
  authDomain: "smart-money-e1c75.firebaseapp.com",
  projectId: "smart-money-e1c75",
  storageBucket: "smart-money-e1c75.appspot.com",
  messagingSenderId: "451954913956",
  appId: "1:451954913956:web:437202cdc537b458232c31",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
