import { ScrollView } from "react-native";
import React from "react";
import CardApp from "../components/CardApp";
import { Card } from "react-native-elements";
import TextApp from "../components/TextApp";
import { ImageBackground } from "react-native";
const Home = () => {
  return (
    <ScrollView className="  bg-slate-100 dark:bg-slate-900 h-screen ">
      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp
          text={"Recomendaciones para el Cuidado de la Vista\n"}
          typeOfText={"title"}
        />

        <TextApp
          text={
            "1. Hidratación: Mantén los ojos húmedos para evitar sequedad y fatiga ocular. Puedes hacerlo tomando pequeñas pausas para mirar hacia abajo y bajar los párpados lentamente varias veces durante el día."
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgVistaHidratada.jpg")}
        />

        <TextApp
          text={
            "2. Descanso Regular: Toma descansos regulares de al menos 20 segundos cada 20 minutos si pasas mucho tiempo frente a pantallas brillantes, como computadoras o teléfonos móviles. \n"
          }
        />

        <TextApp
          text={
            "3.Iluminación Adecuada: Trabaja bajo una iluminación adecuada para reducir la tensión ocular. Evita la luz directa y considera el uso de gafas de sol si trabajas cerca de fuentes de luz intensa.\n"
          }
        />

        <TextApp
          text={
            "4. Examen Oftalmológico: Realiza exámenes oftalmológicos regulares, especialmente si tienes antecedentes familiares de enfermedades oculares o si eres mayor de 40 años."
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgVistaExamen.jpg")}
        />

        <TextApp
          text={
            "5. Uso de Protección Solar: Usa gafas de sol con filtro UV para proteger tus ojos de daños causados por la radiación solar.\n"
          }
        />

        <TextApp
          text={
            "6. Evita el Estrés Visual: Si pasas mucho tiempo leyendo o viendo televisión, asegúrate de darle un descanso a tus ojos. Levanta la cabeza y mira lejos cada 20 minutos.\n"
          }
        />
      </Card>

      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp
          text={"Instrumentos utilizados para examinar la vista\n"}
          typeOfText={"title"}
        />

        <TextApp
          text={
            "Lupa Oftálmica: Se utiliza para acercar el ojo del paciente al ojo del médico, permitiendo una inspección detallada de la conjuntiva, córnea, iris, lente del cristalino y retina sin sombrear la visión del paciente. \n"
          }
        />

        <TextApp
          text={
            "Esferoide Oftálmico: También conocido como esferoide de Hruby, este instrumento permite al médico examinar la parte posterior de la cápsula del cristalino y la retina sin dilatar el pupilario. \n"
          }
        />

        <TextApp
          text={
            "Lampara de Velo: Utilizada para examinar la retina y la parte posterior del ojo. El velo actúa como una pantalla, filtrando la luz blanca en luz amarilla, lo que ayuda a resaltar detalles sutiles en la retina.\n"
          }
        />

        <TextApp
          text={
            "Gonioscopio: Instrumento utilizado para examinar el ángulo irideo y la cámara anterior de la uvea. Permite al médico evaluar la presencia de cataratas, glaucoma y anomalías en el ángulo irideo."
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgGonioscopio.jpg")}
        />

        <TextApp
          text={
            "Tonoquimiotipio: Dispositivo utilizado para medir la presión intraocular (PIO), un indicador importante para el diagnóstico y tratamiento del glaucoma.\n"
          }
        />

        <TextApp
          text={
            "Retinófono: Un dispositivo que emite un sonido agudo para estimular la respuesta de la retina a la luz, lo que puede ayudar a detectar ciertas condiciones oculares.\n"
          }
        />

        <TextApp
          text={
            "Tomografía Óptica: Una máquina que genera imágenes tridimensionales de la retina y la macula, útil para el diagnóstico temprano de enfermedades degenerativas de la retina."
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgTomografiaOptica.jpg")}
        />

        <TextApp
          text={
            "Microscopio Oftálmico: Utilizado para obtener una visión ampliada de la retina y la parte posterior del ojo, especialmente útil para el diagnóstico de enfermedades retinianas."
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgMicroscopioOftalmico.jpg")}
        />

        <TextApp
          text={
            "Proyectores de Luz: Incluyen lámparas de halógena, láseres y dispositivos LED que proporcionan luz de alta intensidad para examinar la retina y otras partes del ojo.\n"
          }
        />

        <TextApp
          text={
            "Máquina de Refractometría: Utilizada para determinar el índice de refracción del ojo, lo que permite calcular la prescripción de los lentes correctivos.\n"
          }
        />
      </Card>

      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp text={"Grados de Agudeza Visual\n"} typeOfText={"title"} />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgAgudezaVisual.jpg")}
        />
      </Card>

      <Card className="flex-1 h-auto w-10/12 relative justify-center  bg-slate-100 dark:bg-slate-800 p-8 mb-10 ">
        <TextApp
          text={"Tratamiento para los tipos de Infecciones Oculares\n"}
          typeOfText={"title"}
        />

        <TextApp text={"Conjuntivitis \n"} typeOfText={"subtitle"} />
        <TextApp
          text={
            "Para la conjuntivitis bacteriana, se pueden administrar gotas antibacterianas.\n"
          }
        />
        <TextApp
          text={
            "En casos de conjuntivitis viral, el tratamiento suele ser sintomático, incluyendo el uso de gotas para aliviar la inflamación y el dolor.\n"
          }
        />
        <TextApp
          text={
            "Para la conjuntivitis alérgica, se recomienda evitar los irritantes y alergenos, y se pueden usar gotas de corticosteroides bajo prescripción médica."
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgConjuntivitis.jpg")}
        />

        <TextApp text={"Córnea\n"} typeOfText={"subtitle"} />
        <TextApp
          text={
            "Las infecciones de la córnea pueden requerir el uso de gotas antibióticas o antifúngicas.\n"
          }
        />

        <TextApp
          text={
            "En algunos casos, se puede necesitar un tratamiento con láser o cirugía para eliminar la infección."
          }
        />

        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgCorneaInfectada.jpg")}
        />

        <TextApp text={"Glaucoma Infeccioso\n"} typeOfText={"subtitle"} />
        <TextApp
          text={
            "El glaucoma infeccioso requiere tratamiento con medicamentos para controlar la presión intraocular y combatir la infección. En algunos casos, se puede necesitar cirugía para bajar la presión intraocular.\n"
          }
        />

        <TextApp text={"Endoftalmitis\n"} typeOfText={"subtitle"} />
        <TextApp
          text={
            "La endoftalmitis es una  del interior del ojo que puede resultar en la pérdida de la visión. El tratamiento inicial suele ser con intravenosos antibióticos seguido de medicamentos inyectados directamente en el ojo.En muchos casos, puede ser necesario remover el ojo infectado (enucleación)."
          }
        />
        <ImageBackground
          className="w-full h-72 mt-[35px] object-contain mb-7"
          source={require("../assets/imgEndoftalmitis.jpg")}
        />
      </Card>
    </ScrollView>
  );
};

export default Home;
