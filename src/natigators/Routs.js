import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routnames from '../constant/Routnames';
import Rates from '../Pages/Rates';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Phone from '../Pages/Phone';
import Whatsapp from '../components/Whatsapp';
import Bank from '../Pages/Bank';
import About from '../Pages/About';

export default function Routs() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            position: 'absolute',
            bottom: 15,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
          },
        }}>
        <Tab.Screen
          name={Routnames.LIVE_RATES}
          component={Rates}
          options={{
            tabBarIcon: ({ focused, size }) => {
              return <FontAwesome name={'bar-chart'} color={focused ? '#b99055' : 'black'} size={size} />;
            },
          }}
        />
        <Tab.Screen name={Routnames.PHONE} component={Phone} options={{
          tabBarIcon: ({ focused, size }) => {
            return <FontAwesome name={'phone'} color={focused ? '#b99055' : 'black'} size={size} />
          },
        }} />
        <Tab.Screen name={Routnames.WHATSAPP} component={Whatsapp} options={{
          tabBarIcon: ({ focused, size }) => {
            return (<View style={{position: 'absolute', bottom: 25, borderRadius: 40, backgroundColor: 'green'}}><TouchableOpacity onPress={sendWhatsApp} ><Image source={require('../images/whatsapp.png')} style={{width: 40, height: 40}} /></TouchableOpacity></View>)
          },
        }} />
        <Tab.Screen name={Routnames.BANK} component={Bank} options={{
          tabBarIcon: ({ focused, size }) => {
            return <FontAwesome name={'bank'} color={focused ? '#b99055' : 'black'} size={size} />
          },
        }} />
        <Tab.Screen name={Routnames.ABOUT} component={About} options={{
          tabBarIcon: ({ focused, size }) => {
            return <FontAwesome name={'info'} color={focused ? '#b99055' : 'black'} size={size} />
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

sendWhatsApp = () => {
  let msg = "Hello";
  let phoneWithCountryCode = "+8801766632383";

  let mobile =
    Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
      Linking.openURL(url)
        .then(data => {
          console.log("WhatsApp Opened");
        })
        .catch(() => {
          alert("Make sure WhatsApp installed on your device");
        });
    } else {
      alert("Please insert message to send");
    }
  } else {
    alert("Please insert mobile no");
  }
};
