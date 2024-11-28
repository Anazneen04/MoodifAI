// import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
// import React from 'react';

// const LinkButtons = ({ url }) => {
//   function handlePress() {
//     Linking.openURL(url);
//   }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Predict mood</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Find Song</Text>
//       </TouchableOpacity>
//       {/* <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>GitHub</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   button: {
//     backgroundColor: '#FFC107', // Dodger Blue
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     elevation: 3, // Adds shadow for Android
//     shadowColor: '#000', // Adds shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     margin: 10
//   },
//   buttonText: {
//     color: '#212121', // White
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LinkButtons;
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LinkButtons = ({ url }) => {
  function handlePress() {
    Linking.openURL(url);
  }

  return (
    <View style={tw`flex-row justify-center items-center my-4`}>
      <TouchableOpacity style={tw`bg-yellow-500 px-4 py-2 rounded-lg shadow m-2`} onPress={handlePress}>
        <Text style={tw`text-gray-900 text-lg font-bold`}>Predict Mood</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-yellow-500 px-4 py-2 rounded-lg shadow m-2`} onPress={handlePress}>
        <Text style={tw`text-gray-900 text-lg font-bold`}>Find Song</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkButtons;