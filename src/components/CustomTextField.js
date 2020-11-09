import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Colors from '../constants/Colors';

const CustomTextField = props => {
  return (
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 60,
    borderRadius: 12,
    borderColor: Colors.customTextBorder,
    borderWidth: 1,
    // backgroundColor:'red'
  },
});

export default CustomTextField;
