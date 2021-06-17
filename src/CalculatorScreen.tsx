import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function CalculatorScreen(props: any) {
    console.log('text',props.text);
    return (
        <View style={props.style}>
            <Text style={props.screenStyle}> {props.text} </Text>
        </View>
    )
}