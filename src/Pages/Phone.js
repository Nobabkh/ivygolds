import React, { memo } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Phone()
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
                <Text style={Style.title}>SALES DESK</Text>
                <View style={Style.lineview}>
                    <FontAwesome name={'phone'} size={14} />
                    <Text> Phone: +880121329392  </Text>
                    <FontAwesome name={'whatsapp'} size={18} color={'green'} />
                </View>
                <View style={Style.lineview}>
                    <FontAwesome name={'phone'} size={14} />
                    <Text> Phone: +880121329392  </Text>
                    <FontAwesome name={'whatsapp'} size={18} color={'green'} />
                </View>
                <View style={Style.lineview}>
                    <Ionicons name={'mail'} size={14} />
                    <Text> Email: info@example.com  </Text>
                </View>

                <View style={Style.divider} />

                <Text style={Style.title}>DEAL FIXING DESK</Text>
                <View style={Style.lineview}>
                    <FontAwesome name={'phone'} size={14} />
                    <Text> Phone: +880121329392  </Text>
                    <FontAwesome name={'whatsapp'} size={18} color={'green'} />
                </View>
                <View style={Style.lineview}>
                    <Ionicons name={'mail'} size={14} />
                    <Text> Email: info@example.com  </Text>
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
    }
})

export default memo(Phone);