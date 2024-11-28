// import { SafeAreaView, Text, ScrollView } from 'react-native';
// import { useState } from 'react';
// import FlatCards from "../components/FlatCards";
// import tw from 'tailwind-react-native-classnames';
// import { useFonts } from 'expo-font'; // Import font functionality
// import AppLoading from 'expo-app-loading'; // For font loading

// export default function HomeScreen() {
//   const [fontsLoaded] = useFonts({
//     FancyFont: require('../assets/fonts/FancyFont.ttf'), // Replace with the actual font file
//   });

//   // Hooks must always be called in the same order
//   const [accelerometer, setAccelerometer] = useState({ x: 0, y: 0, z: 0 });
//   const [lightsensor, setLightsensor] = useState(0);
//   const [weather, setWeather] = useState({ temp: 0, weather: "default" });
//   const [gyroscope, setGyroscope] = useState({ x: 0, y: 0, z: 0 });
//   const [message, setMessage] = useState("");
//   const [mood, setMood] = useState("");
//   const [genre, setGenre] = useState("");

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   return (
//     <SafeAreaView style={tw`bg-blue-50 flex-1`}>
//       {/* Styled heading */}
//       <Text
//         style={[
//           tw`text-center text-blue-600 text-center py-3`,
//           { fontFamily: 'FancyFont', fontSize: 50, letterSpacing: 3 },
//         ]}
//       >
//         Moodify
//       </Text>
//       <ScrollView>
//         <FlatCards
//           accelerometer={accelerometer}
//           setAccelerometer={setAccelerometer}
//           lightsensor={lightsensor}
//           setLightsensor={setLightsensor}
//           weather={weather}
//           setWeather={setWeather}
//           gyroscope={gyroscope}
//           setGyroscope={setGyroscope}
//           message={message}
//           setMessage={setMessage}
//           mood={mood}
//           setMood={setMood}
//           genre={genre}
//           setGenre={setGenre}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }



import { SafeAreaView, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import FlatCards from "../components/FlatCards";
import LinkButtons from "../components/LinkButtons";
import tw from 'tailwind-react-native-classnames';
// import LinearGradient from 'react-native-linear-gradient';



export default function HomeScreen() {

    const [accelerometer, setAccelerometer ] = useState({
        x: 0,
        y: 0,
        z:0
    });
    const [lightsensor, setLightsensor] = useState(0);
    const [weather, setWeather] = useState({ 
        temp: 0, weather: "default"
    });
    const [gyroscope, setGyroscope ] = useState({
        x: 0,
        y: 0,
        z:0
    });

    const [message, setMessage] = useState("")
    const [mood, setMood] = useState("")
    const [genre, setGenre] = useState("")

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.appName}>MoodifAI</Text>
      <ScrollView>
        <FlatCards 
        accelerometer={accelerometer} 
        setAccelerometer={setAccelerometer}
        lightsensor = {lightsensor}
        setLightsensor = {setLightsensor}
        weather = {weather}
        setWeather = {setWeather}
        gyroscope={gyroscope}
        setGyroscope={setGyroscope}
        message = {message}
        setMessage = {setMessage}
        mood = {mood}
        setMood = {setMood}
        genre = {genre}
        setGenre= {setGenre}
        />


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: '#f8fafc', // Light background color
      flex: 1,
    },
    appName: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#f1697a', // Darker text for contrast    1f2937
      textAlign: 'center',
      paddingVertical: 16,
      fontFamily: 'Arial', // Add your preferred font family
      textShadowColor: '#d1d5db', // Light shadow for text
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    flatCards: {
      margin: 8,
      padding: 16,
      backgroundColor: '#ffffff', // White card background
      borderRadius: 8,
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Offset for shadow
      shadowOpacity: 0.1, // Shadow opacity
      shadowRadius: 4, // Shadow blur radius
      elevation: 2, // For Android shadow
    },
  });

// const styles = StyleSheet.create({
//     appName: {
//       fontSize: 32, 
//       fontWeight: 'bold',
//       color: '#e5e7eb', 
//       textAlign: 'center', 
//       paddingVertical: 16, 
//     },
//     safeArea: {
//         backgroundColor: '#111827', 
//         flex: 1, 
//       },
//   });

// const styles = StyleSheet.create({
//     gradientBackground: {
//       flex: 1, // Fills the entire screen
//     },
//     safeArea: {
//       flex: 1,
//       backgroundColor: 'transparent', // Allows gradient to show through
//       paddingHorizontal: 16, // Padding for inner content
//     },
//     appName: {
//       fontSize: 36, // Slightly larger for emphasis
//       fontWeight: 'bold',
//       color: '#374151', // Dark gray for contrast against the gradient
//       textAlign: 'center',
//       marginVertical: 20, // Space above and below the title
//       textShadowColor: 'rgba(0, 0, 0, 0.1)',
//       textShadowOffset: { width: 1, height: 1 },
//       textShadowRadius: 3,
//     },
//     scrollView: {
//       paddingBottom: 16, // Space at the bottom of the scroll view
//     },
//   });
  
  




{/* <LinkButtons url={"https://github.com/AyaanEhsan"} /> */}
        {/* <Text style={{color:"white", paddingLeft:30}}>
            Accelerometer: 
            x: {accelerometer.x}  
            y: {accelerometer.y}  
            z: {accelerometer.z}
            </Text>

        <Text style={{color:"white", paddingLeft:30}}>
            Light Sensor:  
            {lightsensor} lx 
            </Text>
        <Text style={{color:"white", paddingLeft:30}}>
            Weather: 
            temp:{weather.temp}
            weather:{weather.weather}
            </Text>
        <Text style={{color:"white", paddingLeft:30}}>
            Gyroscope: 
            x: {gyroscope.x}  
            y: {gyroscope.y}  
            z: {gyroscope.z}
            </Text> */}