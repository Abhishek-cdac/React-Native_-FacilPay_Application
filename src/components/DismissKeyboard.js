import React from 'react';
import {TouchableWithoutFeedback, Keyboard, View, StyleSheet} from 'react-native';

const DismissKeyboard = (props) => (
    // return (
        <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}> {props.children}
       </TouchableWithoutFeedback>
    // );
    
);


export default DismissKeyboard;