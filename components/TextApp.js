import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  query,
  orderBy,
  limit,
  getDocs,
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
const TextApp = ({ text, color, typeOfText }) => {
  const [fontSize, setFontSize] = useState(14);
  const [fontSizeSubtitle, setFontSizeSubtitle] = useState(24);
  const [fontSizeTitle, setFontSizeTitle] = useState(30);

  useEffect(() => {
    const fetchDegreeOfVision = async () => {
      try {
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const lastUser = querySnapshot.docs[0];
          const rawDegreeOfVision = lastUser.data().degreeOfVision; // Obtiene el valor como string
          const degreeOfVision = parseFloat(rawDegreeOfVision); // Convierte a float
          if (degreeOfVision > -0.5) {
            setFontSize(18); // Máximo tamaño de fuente
            setFontSizeSubtitle(30);
            setFontSizeTitle(45);
          } else {
            setFontSize(14); // Tamaño de fuente mínimo
            setFontSizeSubtitle(24);
            setFontSizeTitle(40);
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchDegreeOfVision();
  }, []);

  const returnText = () => {
    if (typeOfText === "title") {
      return (
        <Text
          style={{ fontSize: fontSizeTitle, color: color }}
          className="text-center font-bold  text-slate-900 dark:text-slate-100"
        >
          {text}
        </Text>
      );
    } else if (typeOfText === "subtitle") {
      return (
        <Text
          style={{ fontSize: fontSizeSubtitle, color: color }}
          className="text-justify font-semibold text-slate-900 dark:text-slate-100"
        >
          {text}
        </Text>
      );
    } else {
      return (
        <Text
          style={{ fontSize: fontSize, color: color }}
          className="text-justify text-2xl  text-slate-900 dark:text-slate-100"
        >
          {text}
        </Text>
      );
    }
  };

  return <>{returnText()}</>;
};

export default TextApp;
