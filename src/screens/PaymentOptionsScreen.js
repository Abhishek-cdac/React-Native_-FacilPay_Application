import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Image, ScrollView} from 'react-native';

import CustomStatusBar from '../components/CustomStatusBar';
import CustomNavigationBar from '../components/CustomNavigationBar';
import Colors from '../constants/Colors';
import GlobalText from '../components/GlobalText';
import CustomButton from '../components/CustomButton';
import {VisaCardImage, MasterCardImage, PayPalImage, UnCheck} from '../assets';
import PaymentOptionsList from '../components/PaymentOptionsList';
import CustomImageButton from '../components/CustomImageButton';
import { PaymentOptionsData } from '../data/DummyData';
import ExpandableView from '../components/ExpandableView';

const paymentOptionsArray = PaymentOptionsData;

const {height, width} = Dimensions.get('window');

const PaymentOptionsScreen = props => {

    const [isDebitCardsAvailable, setisDebitCardsAvailable] = useState(true)

    useEffect(() => {
        
    }, )

  const backBtnClicked = () => {
    props.navigation.goBack();
  };

  const processBtnHandler = () => {
    props.navigation.navigate("PaymentSuccess")
  }
  
  return (
    <ScrollView style={styles.scrollviewContainer}>
    <View style={styles.container}>
      <View style={styles.topBaseView}>
        <CustomNavigationBar
         style = {{marginTop: -20}}
          title="Select Payment Options"
          backBtnClicked={backBtnClicked}
        />
        <GlobalText style={styles.titleStyle}>Amount to Pay</GlobalText>
        <GlobalText style={styles.amountTitleStyle}>4,250 Kz</GlobalText>
      </View>

      <View style={styles.baseViewContainer}>
      <View style= {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <CustomImageButton style={styles.imageContainerStyle}>
          <Image
            style={styles.walletSquareImageStyle}
            source={UnCheck} resizeMode = 'cover'
          />
        </CustomImageButton>
        <GlobalText style={styles.itemTitleStyle}>Use Wallet Balance</GlobalText>
        </View>
        <GlobalText style={styles.walletTitleStyle}>5000 Kz</GlobalText>
      </View>
      
      {isDebitCardsAvailable ? <PaymentOptionsList style = {styles.SavedDebitCardsStyle}>
        <GlobalText style= {{marginLeft: 20, marginTop: 20,color: '#3e3e3e'}}>Saved Cards</GlobalText>
      </PaymentOptionsList> :
      <View style={styles.separator}/>
      }
      <ExpandableView />

      <View style={styles.bottomBaseView}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={VisaCardImage} />
          <Image style={styles.imageStyle} source={MasterCardImage} />
          <Image style={styles.imageStyle} source={PayPalImage} />
        </View>
        <CustomButton
          style={styles.payButtonStyle}
          buttonTitle="PAY 4,250 Kz"
          onPress={processBtnHandler}
        />
      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 1,
    height: height,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    height: height,
    backgroundColor: 'white'
  },
  topBaseView: {
    height: height / 4,
    width: width,
    backgroundColor: Colors.lightGreen,
    // position: 'absolute',
    // top: 0,
  },
  titleStyle: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 13,
    fontWeight: '400',
    color: Colors.accentColor,
  },
  amountTitleStyle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 21,
    fontWeight: '400',
    color: Colors.placeholderColor,
  },
  bottomBaseView: {
    height: 130,
    width: width,
    bottom: 0,
    position: 'absolute',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  imageStyle: {
    height: 35,
    width: 70,
    marginHorizontal: 10,
    resizeMode: 'cover',
  },
  payButtonStyle: {
    alignSelf: 'center',
    marginTop: 20,
  },
  walletSquareImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
  },
  baseViewContainer: {
    marginLeft: 5,
    marginRight: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
  },
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  SavedDebitCardsStyle: {
    height: 55 * 2 + 40,
    marginVertical: 10,
    backgroundColor: 'rgba(242,242,242,1.0)',
  },

  imageContainerStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitleStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.placeholderColor,
    alignSelf: 'center',
  },
  walletTitleStyle:{
      fontSize: 16,
      fontWeight: '600',
      color: Colors.primary,
      alignSelf: 'center',
      right: 0,
      // position: 'absolute',
  }
});

export default PaymentOptionsScreen;
