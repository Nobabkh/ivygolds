import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function DownTable(props) {
  let Data = props.data;
  let prev = props.prev;
  const getColorask = () => {
    if (parseFloat(Data.GOLDOZ.ASK) > parseFloat(prev.GOLDOZ.ASK))
    {
      return 'green';
    }
    else if (parseFloat(Data.GOLDOZ.ASK) < parseFloat(prev.GOLDOZ.ASK))
    {
      return 'red';
    }
    else
    {
      return 'black';
    }
  };
  return (
    <View style={Styles.container}>
{/*Start of row 1*/}
      {/* <View style={Styles.tablerow}>
        <View style={Styles.startcolumn}>
          <Text style={Styles.txtstyle}>GOLD</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>1 GM</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>USD</Text>
        </View>
        <View style={Styles.endcolumn}>
          <Text style={Styles.txtstyle}>228.62</Text>
        </View>
      </View> */}
      {/*Start of row 2*/}
      <View style={Styles.tablerow}>
        <View style={Styles.startcolumn}>
          <Text style={Styles.txtstyle}>KILOBAR 995</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>1 KG</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>AED</Text>
        </View>
        <View style={Styles.endcolumn}>
          <Text style={{textAlign: 'center', color: getColorask()}}>{Data.KILOBAR995}</Text>
        </View>
      </View>
      {/*Start of row 3*/}
      <View style={Styles.tablerow}>
        <View style={Styles.startcolumn}>
          <Text style={Styles.txtstyle}>KILOBAR 9999</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>1 KG</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>AED</Text>
        </View>
        <View style={Styles.endcolumn}>
          <Text style={{textAlign: 'center', color: getColorask()}}>{Data.KILOBAR9999}</Text>
        </View>
      </View>
      {/*Start of row 4*/}
      <View style={Styles.tablerow}>
        <View style={Styles.startcolumn}>
          <Text style={Styles.txtstyle}>TEN TOLA BAR</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>TTB</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>AED</Text>
        </View>
        <View style={Styles.endcolumn}>
          <Text style={{textAlign: 'center', color: getColorask()}}>{Data.TENTOLABAR}</Text>
        </View>
      </View>
      {/*Start of row 5*/}
      <View style={Styles.tablerow}>
        <View style={Styles.startcolumn}>
          <Text style={Styles.txtstyle}>GOLD 9999</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>1 GM</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>AED</Text>
        </View>
        <View style={Styles.endcolumn}>
          <Text style={{textAlign: 'center', color: getColorask()}}>{Data.GOLD9999}</Text>
        </View>
      </View>
      {/*Start of row 6*/}
      <View style={Styles.tablerow}>
        <View style={Styles.startcolumn}>
          <Text style={Styles.txtstyle}>SILVER KILOBAR</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>1 KG</Text>
        </View>
        <View style={Styles.midcolumn}>
          <Text style={Styles.txtstyle}>AED</Text>
        </View>
        <View style={Styles.endcolumn}>
          <Text style={{textAlign: 'center', color: getColorask()}}>{Data.SILVERKILOBAR}</Text>
        </View>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  tablerow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  startcolumn: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
    marginRight: 2,
    height: 40,
  },
  midcolumn: {
    backgroundColor: '#ffffff',
    width: '15%',
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endcolumn: {
    backgroundColor: '#ffffff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
  },
  txtstyle: {
    color: 'black',
    textAlign: 'center',
  },
});

export default memo(DownTable);
