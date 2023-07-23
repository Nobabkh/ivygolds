import React, { memo, useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  View,
  ActivityIndicator,
  Modal,
} from 'react-native';
import MainTable from '../components/MainTable';
import {
  GoldPrice,
} from '../functions/APIParser';
import DownTable from '../components/DownTable';
import SplashScreen from 'react-native-splash-screen';

function Rates() {
  const [rates, setRates] = useState(null);
  const [prevRates, setPrevrates] = useState(null);
  useEffect(() => {
    GoldPrice(setRates);
    GoldPrice(setPrevrates);
  }, []);
    useEffect(() => {
      SplashScreen.hide();
    }, []);

  setTimeout(() => {
    setPrevrates(rates);
    GoldPrice(setRates);
  }, 1000);
  
  if(rates !== null && prevRates !== null) {
  // console.log(rates.ASK);
  // console.log(prevRates.ASK);
  return (
    <ScrollView style={{ backgroundColor: '#12312b', flex: 1 }}>
      <View style={Styles.topbox}>
        <View style={Styles.topimbxst}>
          <Image
            source={require('../images/logoivwt.png')}
            style={Styles.topimst}
          />
        </View>
      </View>
      <View style={Styles.tablest}>
        <MainTable data={rates} prev={prevRates} />
      </View>
      <DownTable data={rates} prev={prevRates} />
    </ScrollView>
  );
  }
  else {
    return <Modal><View style={{flex: 1, backgroundColor: '#12312b'}}><Image source={require('../images/logoivwt.png')} style={{height: '240px', width: '600px'}} /></View></Modal>
  }
}
const Styles = StyleSheet.create({
  tablest: {
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});

export default memo(Rates);
