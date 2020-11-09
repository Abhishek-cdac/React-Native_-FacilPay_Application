import React from 'react';
import {TouchableOpacity,Image,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const CustomImageButton = (props) => {
    return (
        <TouchableOpacity
              {...props}
              style={{...styles.container, ...props.style}}
              activeOpacity={2}
              >{props.children}
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        height: 25,
        width: 25,
        borderRadius: 4,
      },
});

export default CustomImageButton;