import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MainTable(props) {
  let Data = props.data;
  let prev = props.prev;

  const getColorask = () => {
    if (parseFloat(Data.GOLDOZ.ASK) > parseFloat(prev.GOLDOZ.ASK))
    {
      console.log(parseFloat(Data.GOLDOZ.ASK));
      console.log('up');
      console.log(parseFloat(Data.GOLDOZ.ASK));
      return 'green';
    }
    else if (parseFloat(Data.GOLDOZ.ASK) < parseFloat(prev.GOLDOZ.ASK))
    {
      console.log('down');
      return 'red';
    }
    else
    {
      return '#ffffff';
    }
  };
  const getColorbid = () => {
    if (Data.GOLDOZ.BID > prev.GOLDOZ.ASK)
    {
      return 'green';
    }
    else if (Data.GOLDOZ.BID < prev.GOLDOZ.BID)
    {
      return 'red';
    }
    else
    {
      return '#ffffff';
    }
  };
  return (
    <View style={Styles.tablest}>
      <View style={Styles.tablerowst}>
        <View style={Styles.box50}>
          <View style={Styles.td1}>
            <Text>{'Spot Rate'}</Text>
          </View>
        </View>
        <View style={Styles.box50}>
          <View style={Styles.td0}>
            <Text>{'BID($)'}</Text>
          </View>
          <View style={Styles.td2}>
            <Text>{'ASK($)'}</Text>
          </View>
        </View>
      </View>
      <View style={Styles.tablerowst}>
        <View style={Styles.box50}>
          <View style={Styles.td01}>
            <Text>{'GOLD OZ'}</Text>
          </View>
        </View>
        <View style={Styles.box50}>
          <View style={Styles.td}>
            <View style={{width: '100%', borderBottomWidth: 1, borderColor: '#ffffff'}}>
              <Text style={{color: getColorask(), textAlign: 'center'}}>{Data.GOLDOZ.BID}</Text>
            </View>
            <View>
              <Text>{Data.GOLDOZ.HIGH}</Text>
            </View>
          </View>
          <View style={Styles.td02}>
            <View style={{width: '100%', borderBottomWidth: 1, borderColor: '#ffffff'}}>
            <Text style={{color: getColorask(), textAlign: 'center'}}>{Data.GOLDOZ.ASK}</Text>
            </View>
            <View>
            <Text>{Data.GOLDOZ.LOW}</Text>
          </View>
          </View>
        </View>
      </View>
      {/* <View style={Styles.tablerowst}>
        <View style={Styles.box50}>
          <View style={Styles.td3}>
            <Text>{'SILVER OZ'}</Text>
          </View>
        </View>
        <View style={Styles.box50}>
          <View style={Styles.td03}>
            <Text>{silverData === undefined ? '85.25' : silverData.ask}</Text>
          </View>
          <View style={Styles.td4}>
            <Text>{silverData === undefined ? '83.25' : silverData.ask}</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
}

const Styles = StyleSheet.create({
  tablest: {
    width: '95%',
    backgroundColor: '#12312b',
  },
  tablerowst: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box50: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  td: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    flex: 1,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  td0: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderColor: '#ffffff',
    borderWidth: 1,
    flex: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  td01: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderColor: '#ffffff',
    borderWidth: 1,
    flex: 1,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 10,
  },
  td02: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderColor: '#ffffff',
    borderWidth: 1,
    flex: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderBottomRightRadius: 10,
  },
  td03: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderColor: '#ffffff',
    borderWidth: 1,
    flex: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  td1: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderTopLeftRadius: 10,
    flex: 1,
  },
  td2: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderTopRightRadius: 10,
    flex: 1,
  },
  td3: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  td4: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b99055',
    borderBottomRightRadius: 10,
    flex: 1,
  },
});

export default memo(MainTable);
