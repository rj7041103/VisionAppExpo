import React, { useContext } from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";

import { ButtonApp } from "../components/ButtonApp.js";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../context/LoginContext.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { auth } from "../firebase-config.js";
import InputApp from "../components/InputApp.js";

// Inicializa Firebase fuera del componente

const Login = (prop) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: 0,
    payMethod: "",
    degreeOfVision: 0,
  });

  const [sigin, setSigin] = useState(false);
  const [loginTab, setLogin] = useState(0);
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleChangeUser = (name, value) => {
    setUser({ ...user, [name]: value });
    console.log("Se actualizó el estado de la app");
  };

  const saveNewUser = async () => {
    if (
      user.name == "" ||
      user.email == "" ||
      user.password == "" ||
      user.phone == 0 ||
      user.payMethod == "" ||
      user.degreeOfVision == 0
    ) {
      Alert.alert("Complete todos los campos");
      console.log(user);
    } else {
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);

        //Guardar en la base de datos
        const db = getFirestore(); // Obtén una referencia a Firestore
        const usersCollection = collection(db, "users"); // Selecciona la colección "users"
        await addDoc(usersCollection, user);
        login(user.email, user.password);
        //prop.navigation.navigate("Home");
        Alert.alert("Bienvenido a tu 1era terapia visual");
        console.log("Datos enviados:", user);
      } catch (e) {
        Alert.alert(`Error al crear el usuario: ${e.message}`);
      }
    }
  };

  return (
    <ScrollView className=" bg-slate-800">
      {/*seccion de imagen login*/}
      <View id={"container-img"} className="flex-1 h-[500px] mt-[110px]">
        <ImageBackground
          className="w-full h-5/6 mt-[15px]"
          source={require("../assets/logoEmpresaDefinitivo.png")}
        />
      </View>

      {/*Verification if the user has or not has an account */}
      {!sigin ? (
        /*seccion de inputs sigin with out an account*/
        <View
          id={"section-sigin"}
          className="flex-1 h-auto items-center  bg-slate-800 p-[35] gap-1 -mt-9"
        >
          <InputApp
            placeholder={"User name:"}
            inputName={"name"}
            iconName={"user"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
          />
          <InputApp
            placeholder={"Email:"}
            inputName={"email"}
            iconName={"envelope"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
          />
          <InputApp
            placeholder={"Password:"}
            inputName={"password"}
            iconName={"lock"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
            type={"password"}
          />

          <InputApp
            placeholder={"Phone:"}
            inputName={"phone"}
            iconName={"phone"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
            type={"number"}
          />

          <InputApp
            placeholder={"Pay method:"}
            inputName={"payMethod"}
            iconName={"credit-card"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
          />
          <InputApp
            placeholder={"Degree of vision:"}
            inputName={"degreeOfVision"}
            iconName={"eye"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
            type={"number"}
          />
        </View>
      ) : (
        /*seccion de inputs Login with an account */
        <View
          id={"section-login"}
          className="flex-1 h-auto items-center  bg-slate-800 p-[35] gap-1"
        >
          <InputApp
            placeholder={"Email:"}
            inputName={"email"}
            iconName={"envelope"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
          />
          <InputApp
            placeholder={"Password:"}
            inputName={"password"}
            iconName={"lock"}
            iconColor={"black"}
            user={user}
            setUser={setUser}
            type={"password"}
          />
        </View>
      )}

      {/*seccion de botones de loggin*/}
      <View className="flex-1 h-full items-center  bg-slate-800 p-[30]">
        {!sigin ? (
          <ButtonApp
            onPress={() => {
              saveNewUser();
            }}
            text={"Sig up"}
            textColor={"white"}
            gradientColors={["#6165F3", "#270091"]}
          />
        ) : null}
        <ButtonApp
          onPress={() => {
            if (loginTab == 0) {
              setLogin(loginTab + 1);
              setSigin(!sigin);
            } else {
              //prop.navigation.navigate("Home");
              login(user.email, user.password);
            }
          }}
          text={"Login"}
          gradientColors={["#FFFFFF", "#FFFFFF"]}
        />
      </View>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({});
