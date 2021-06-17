/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import CalculatorButton from './src/CalculatorButton';
import CalculatorScreen from './src/CalculatorScreen';
export default function App(props: any) {
  const [text, setText] = useState("");

  const press = function (value: any) {
    console.log(value);
    if ((value == "+" || value == "x" || value == '\/') && text == '')
      return;

    setText(text + value)
  }

  const clear = function (value: any) {
    setText("");
  }

  const equals = function () {
    if (text)
      setText(eval(text.replace("x", "*")));
  }

  return (
    <View style={{backgroundColor:"black"}}>
      <View style={style.main}>
        <CalculatorScreen style={style.screen} screenStyle={style.screenStyle} text={text} />
      </View>
      <View style={style.buttons}>
        <View style={style.container}>
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="7" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="8" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="9" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="+" onPress={press} />
        </View>
        <View style={style.container}>
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="4" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="5" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="6" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="-" onPress={press} />
        </View>
        <View style={style.container}>
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="1" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="2" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="3" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="x" onPress={press} />
        </View>
        <View style={style.container}>
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="." onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="0" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="/" onPress={press} />
          <CalculatorButton style={style.button} textStyle={style.textStyle} title="C" onPress={clear} />
        </View>
        <View style={style.container}>
          <CalculatorButton style={style.cButton} textStyle={style.textStyle} title="=" onPress={equals} />
        </View>
      </View>
    </View>
  )
};

export const style = StyleSheet.create({
  main: {
    flexDirection: 'column',
    height: 450,
  },
  buttons: {
    flexDirection: 'column'
  },
  container: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  button: {
    width: 100,
    height: 60,
    backgroundColor: "#333"
  },
  textStyle: {
    textAlign: "center",
    lineHeight: 60,
    fontSize: 20,
    color: "white"
  },
  screen: {
  },
  screenStyle: {
    fontSize: 50,
    fontFamily: 'tahoma',
    textAlignVertical:"bottom",
    textAlign:"right",
    height:450,
    color:"white"
  },
  cButton: {
    width: 450,
    height: 70,
    backgroundColor: "#1675E4"
  }
})
