import React from 'react';
import { TextInput,StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import GlobalText from './GlobalText';

const CustomTextInput = (props) => {
    return (
        <TextInput {...props} style = {{...styles.inputStyle, ...props.style}}>
        {props.children}
        </TextInput>
    );
}

const styles = StyleSheet.create({
    
    inputStyle: {
        fontSize: 15,
        fontWeight: '400',
        justifyContent: 'center',
        height: 40,
    },
});

export default CustomTextInput;