import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import { ButtonApp } from "../components/ButtonApp";
import React from "react";
import { Card } from "react-native-elements";
import TextApp from "../components/TextApp";
const KnowScreen = () => {
  return (
    <ScrollView>
      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp
          text={"¿Cómo afecta la luz azul a la Vista?"}
          typeOfText={"title"}
        />
        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/luzAzul.jpg")}
        />

        <TextApp
          text={
            "La luz azul puede provocar irritación ocular, cansancio, pesadez o falta de concentración. También hay estudios que muestran una clara evidencia de que puede causar la degradación y muerte de las células en organismos vivos. Sin olvidar que afecta al ojo humano a corto y largo plazo.\n"
          }
        />

        <TextApp
          text={"¿Cómo proteger tus ojos de la luz azul? \n"}
          typeOfText={"subtitle"}
        />

        <TextApp
          text={
            "1. Utilizar un filtro para la luz azul en tu dispositivo móvil, ordenador o tablet para evitar que grandes cantidades de esta luz lleguen a los ojos.\n"
          }
        />

        <TextApp
          text={
            "2. Usar gafas que bloqueen un porcentaje de luz azul para reducir el índice de células en la retina que se degradan o mueren.\n"
          }
        />

        <TextApp
          text={
            "3. Utilizar gafas pensadas para reducir la fatiga visual que causa el estar todo el día pegado a una pantalla electrónica y a la luz azul.\n"
          }
        />

        <TextApp
          text={
            "4. Utilizar un filtro para la luz azul en tu dispositivo móvil, ordenador o tablet para evitar que grandes cantidades de esta luz lleguen a los ojos.\n"
          }
        />
      </Card>

      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp
          text={"Datos Interesantes sobre la Vista \n"}
          typeOfText={"title"}
        />

        <TextApp
          text={
            "✔ Diversidad de Colores: La vista humana puede distinguir aproximadamente 10 millones de colores. Esto se debe a la combinación de células sensibles a rojo, verde y azul en la retina.\n"
          }
        />

        <TextApp
          text={
            "✔ Velocidad de la Luz: Los humanos perciben movimientos visuales gracias a la velocidad a la que viajan los fotones (partículas de luz). Nuestros ojos pueden detectar cambios en la posición de un objeto si este cambia de ubicación a velocidades superiores a 5 grados por segundo.\n"
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgVista2.jpg")}
        />

        <TextApp
          text={
            "✔ Visión Binocular: Gracias a nuestros dos ojos, podemos apreciar la profundidad y la tridimensionalidad de nuestro entorno. Este fenómeno se llama visión estereoscópica.\n"
          }
        />

        <TextApp
          text={
            "✔ Adaptabilidad a la Oscuridad: La pupila del ojo humano puede dilatarse hasta 7 mm en condiciones de oscuridad, permitiendo captar más luz y mejorar la visión nocturna.\n"
          }
        />

        <TextApp
          text={
            "✔ Punto Ciego: Es la zona de nuestra visión donde no vemos nada, ya que los rayos de luz que llegan a esta área no se reflejan en ninguna parte de la retina.\n"
          }
        />
      </Card>

      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp text={"Anatomía del ojo"} typeOfText={"title"} />
        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgVista1.png")}
        />

        <TextApp
          text={
            "Córnea: La capa transparente que cubre la parte frontal del ojo.\n"
          }
        />

        <TextApp
          text={
            "Iris: La parte coloreada del ojo que controla la cantidad de luz que entra en el ojo. \n"
          }
        />

        <TextApp text={"Pupila: La abertura negra en el centro del iris.\n"} />

        <TextApp
          text={
            "Cristalino: El lente transparente que se encuentra detrás del iris y la pupila. Enfoca la luz sobre la retina.\n"
          }
        />

        <TextApp
          text={
            "Nervio óptico: El nervio que transporta las señales eléctricas desde la retina hasta el cerebro.\n"
          }
        />

        <TextApp
          text={
            "Cerebro: El cerebro interpreta las señales del nervio óptico y crea una imagen del mundo que nos rodea.\n"
          }
        />
      </Card>

      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp text={"Tipos de visión 👀\n"} typeOfText={"title"} />

        <TextApp
          text={
            "Visión normal: Es la capacidad de ver objetos nítidamente a todas las distancias.\n"
          }
        />

        <TextApp
          text={
            "Miopía (vista corta): Dificultad para ver objetos lejanos con claridad. \n"
          }
        />

        <TextApp
          text={
            "Hipermetropía (vista cansada): Dificultad para ver objetos cercanos con claridad.\n"
          }
        />

        <TextApp
          text={
            "Astigmatismo: Visión borrosa o distorsionada debido a una irregularidad en la forma de la córnea.\n"
          }
        />

        <TextApp
          text={
            "Presbicia (vista cansada relacionada con la edad): Dificultad para enfocar objetos cercanos, especialmente con poca luz.\n"
          }
        />

        <TextApp
          text={
            "Daltonismo (ceguera de color): Dificultad para distinguir ciertos colores, especialmente el rojo y el verde.\n"
          }
        />
        <ImageBackground
          className="w-full h-[700px] mt-[35px] object-contain mb-7"
          source={require("../assets/imgVista3.jpg")}
        />
      </Card>

      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp
          text={"Problemas de visión más comunes \n"}
          typeOfText={"title"}
        />

        <TextApp
          text={
            "Cataratas: Opacidad del cristalino que puede causar visión borrosa o nublada.\n"
          }
        />

        <TextApp
          text={
            "Glaucoma: Daño al nervio óptico que puede provocar pérdida de visión."
          }
        />

        <ImageBackground
          className="w-full h-[350px] mt-[35px] object-contain mb-7"
          source={require("../assets/imgVista4.png")}
        />

        <TextApp
          text={
            "Degeneración macular: Deterioro de la mácula, la parte central de la retina, que puede causar pérdida de visión central.\n"
          }
        />

        <TextApp
          text={
            "Cristalino: El lente transparente que se encuentra detrás del iris y la pupila. Enfoca la luz sobre la retina.\n"
          }
        />

        <TextApp
          text={
            "Retinopatía diabética: Daño a los vasos sanguíneos de la retina que puede causar pérdida de visión si no se trata.\n"
          }
        />

        <ImageBackground
          className="w-full h-[370px] mt-[35px] object-contain mb-7"
          source={require("../assets/imgVista5.jpg")}
        />
      </Card>
    </ScrollView>
  );
};

export default KnowScreen;
