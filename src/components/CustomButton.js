import React from 'react';
import { TouchableOpacity, 
    StyleSheet,
    Dimensions } from 'react-native';
import GlobalText from './GlobalText';
import Colors from '../constants/Colors';

const CustomButton = (props) => {
    return (
        <TouchableOpacity {...props} style = {{...styles.container, ...props.style}}>
            <GlobalText style = {styles.titleStyle}>{props.buttonTitle}</GlobalText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 55,
        backgroundColor: Colors.primary,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        color: 'white',
        fontSize: 18,

    }
    

});

export default CustomButton;