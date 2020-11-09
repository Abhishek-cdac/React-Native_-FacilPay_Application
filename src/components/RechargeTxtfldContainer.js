import React from 'react';
import {StyleSheet, View, Image, Button, Text} from 'react-native';

import MobileTxt from '../components/MobileTxt';
import {Close, ContactsImage} from '../assets';
import CustomImageButton from '../components/CustomImageButton';
import Colors from '../constants/Colors';
import GlobalText from './GlobalText';
import { HardCodedData } from '../constants/Utilities';

const RechargeTxtfldContainer = ({
  txtFieldType,
  didStartTyping,
  placeHolderName,
  keyboardtype,
  numberOfChars,
  textInputHandler,
  closeTypingHandler,
  enterValue,
  isCloseBtnTapped,
  contactListPressed,
  browsePressed,
}) => {
  return (
    <View
      style={[
        styles.grayMobileNoContainerStyle,
        {didStartTyping} ? styles.accentMobileNoContainerStyle : {},
        txtFieldType === 'Recharge' ? styles.accentRechargeContainerStyle : {},
      ]}>
      <MobileTxt
        style={styles.mobileStyle}
        placeHolderName={placeHolderName}
        keyboardtype={keyboardtype}
        numberOfChars={numberOfChars}
        textInputHandler={textInputHandler}
        closeTypingHandler={closeTypingHandler}
        enterValue={enterValue}
        didStartTyping={didStartTyping}
        isCloseBtnTapped={isCloseBtnTapped}
        textFieldType= {txtFieldType}
      />
      <View
        style={[
          styles.optionsBaseView,
          txtFieldType === 'Recharge'
            ? styles.optionsBaseViewForRecharge
            : styles.optionsBaseView,
        ]}>
       
        {txtFieldType == "Recharge" || txtFieldType == "Normal"  ? <GlobalText>{HardCodedData.Currency}</GlobalText> : null}

        {didStartTyping ? (
          <CustomImageButton onPress={closeTypingHandler}>
            <Image
              style={{height: 30, width: 30}}
              source={Close}
              resizeMode="cover"
            />
          </CustomImageButton>
        ) : null}

        {txtFieldType === 'Mobile' ? (
          <CustomImageButton onPress={contactListPressed}>
            <Image
              style={{height: 30, width: 30}}
              source={ContactsImage}
              resizeMode="cover"
            />
          </CustomImageButton>
        ) : txtFieldType === 'Recharge' ? (
          <View
            style={styles.checkBestOffersTitleStyle}>
            <GlobalText
              style={{fontSize: 10, fontWeight: '300', textAlign: 'center'}}>
              Check for best offers
            </GlobalText>
            <Text style={styles.browseTitleStyle} onPress = {browsePressed}> Browse Plans</Text>
          </View>
        ) : null }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grayMobileNoContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  accentMobileNoContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 1,
    marginTop: 20,
  },
  accentRechargeContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginLeft: 20,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 1,
    marginTop: 30,
  },
  optionsBaseView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  optionsBaseViewForRecharge: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 150,
    height: 60,
    position: 'absolute',
    right: 0,
  },
  browseTitleStyle: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
    color: Colors.primary,
  },
  checkBestOffersTitleStyle: {
      height: 60,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default RechargeTxtfldContainer;
