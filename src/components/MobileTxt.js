import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

import renderIf from '../constants/renderIf';
import GlobalText from './GlobalText';
import Colors from '../constants/Colors';
import DismissKeyboard from './DismissKeyboard';

const {height, width} = Dimensions.get('window');

const MobileTxt = ({
  didStartTyping,
  placeHolderName,
  keyboardtype,
  numberOfChars,
  textInputHandler,
  closeTypingHandler,
  enterValue,
  isCloseBtnTapped,
  textFieldType,
}) => {
  return (
    
    <View
      style={[
        styles.container,
        didStartTyping ? styles.accentBottomBorder : {},
      ]}>
      {renderIf(didStartTyping)(
        <GlobalText style={styles.titleStyles}>{placeHolderName}</GlobalText>,
      )}

      {isCloseBtnTapped ? (
        <TextInput
          style={styles.textInputStyle}
          didStartTyping={didStartTyping}
          placeholder={placeHolderName}
          keyboardType={keyboardtype}
          maxLength={numberOfChars}
          onChangeText={textInputHandler}
          closeTypingHandler={closeTypingHandler}
          isCloseBtnTapped={isCloseBtnTapped}
          value={enterValue}
        />
      ) : (textFieldType == 'Normal' || textFieldType == '') ? ( <TextInput
          style={styles.textInputStyle}
          didStartTyping={didStartTyping}
          placeholder={placeHolderName}
          keyboardType={keyboardtype}
          maxLength={numberOfChars}
          onChangeText={textInputHandler}
          closeTypingHandler={closeTypingHandler}
          isCloseBtnTapped={isCloseBtnTapped}
          value={enterValue}
        /> ) :  (
        <TextInput
          style={styles.textInputStyle}
          didStartTyping={didStartTyping}
          placeholder={placeHolderName}
          keyboardType={keyboardtype}
          maxLength={numberOfChars}
          onChangeText={textInputHandler}
          isCloseBtnTapped={isCloseBtnTapped}
          closeTypingHandler={closeTypingHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '80%',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  accentBottomBorder: {
    height: 60,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  titleStyles: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
    marginTop: -10,
    marginLeft: 10,
  },
  textInputStyle: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    marginTop: 10,
    height: 40,
    // backgroundColor: 'purple',
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
  },
});

export default MobileTxt;
