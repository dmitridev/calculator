import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import EventBus from 'react-native-event-bus'

export default function CalculatorButton(props: any) {
    return (
        <Pressable style={props.style} onPress={() => props.onPress(props.title)}>
            <Text style={props.textStyle}>{props.title}</Text>
        </Pressable>
    );
}
