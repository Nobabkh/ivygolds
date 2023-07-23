import React, { memo } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function About()
{
    return (
        <View style={Style.container} >
            <View style={Style.topbox}>
                <View style={Style.topimbxst}>
                    <Image
                        source={require('../images/logoivwt.png')}
                        style={Style.topimst}
                    />
                </View>
            </View>
            <View style={Style.contactcontainer} >
                <Text style={Style.title}>Welcome to Ivy Gold and Jewelry!</Text>
                <View style={Style.scrolvist}>
                    <ScrollView>
                        <Text style={{textAlign: 'center'}}>With our app, you can conveniently track the fluctuating prices of gold in real-time. We gather data from trusted sources, ensuring accuracy and reliability. Whether you're a seasoned investor or simply interested in monitoring gold prices, our app delivers the information you need in a user-friendly and intuitive interface.

Stay informed about the market trends and make informed decisions with Ivy Gold and Jewelry. Our app allows you to customize notifications, so you receive alerts whenever the gold price reaches your desired threshold. This feature ensures that you never miss an opportunity to seize the perfect moment for buying or selling gold.

We take pride in providing a seamless and efficient user experience. Our app is designed to be responsive and easy to navigate, making it effortless to access the latest gold prices whenever and wherever you are. We strive to deliver accurate and up-to-date information, empowering you to make informed decisions about your gold investments.

Thank you for choosing Ivy Gold and Jewelry. Download our app today and stay ahead of the market with real-time gold prices. Should you have any questions or need assistance, our dedicated support team is here to help.

Start your journey to informed gold investments with Ivy Gold and Jewelry. Stay connected and make the most of the ever-changing gold market.</Text>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: '#01141b',
        flex: 1,
    },
    topimst: {
        width: 140,
        flex: 1,
    },
    topimbxst: {
      height: 60,
      width: 150,
      margin: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    topbox: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
    },
    title: {
        color: '#b99055',
        fontSize: 20,
        marginBottom: 30,
    },
    contactcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineview: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    divider: {
        margin: 15,
    },
    scrolvist: {
        height: 350,
        width: '85%',
    },
})

export default memo(About);