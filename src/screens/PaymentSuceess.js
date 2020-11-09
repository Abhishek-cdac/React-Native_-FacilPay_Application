import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {
  FacilpayTextImage,
  shareImage,
  successImage,
  walletMoneyImage,
  Pay_Money,
  NextImage,
} from '../assets';
import CustomImageButton from '../components/CustomImageButton';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import GlobalText from '../components/GlobalText';
import Colors from '../constants/Colors';

const {height, width} = Dimensions.get('window');

function PaymentSuceess(props) {
  const nextButtonHandler = () => {
    props.navigation.navigate('Dashboard');
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.topFacilPayImageStyle} source={FacilpayTextImage} />
      <CustomImageButton style={styles.shareImageContaier}>
        <Image style={styles.walletMoneyImageStyle} source={shareImage} />
      </CustomImageButton>
      <Image style={styles.successImageStyle} source={successImage} />
      <GlobalText style={styles.paidMoneyTextStyle}>
        Paid Money Successfully to{' '}
      </GlobalText>
      <GlobalText style={styles.custNameTextStyle}>ANDREW GARFELL</GlobalText>
      <GlobalText style={styles.orderAmountTextStyle}>4250 Kz</GlobalText>
      <View style={styles.orderIdContainer}>
        <GlobalText style={styles.orderIdTextStyle}>ORDER ID: </GlobalText>
        <GlobalText style={styles.orderIdValueTextStyle}>
          20200523001512
        </GlobalText>
      </View>
      <GlobalText style={styles.dateTextStyle}>
        23 JUNE 2020, 12:43 PM{' '}
      </GlobalText>
      <View style={styles.separator} />
      <View style={styles.balanceContainerStyle}>
        <View style={{flexDirection: 'column'}}>
          <GlobalText style={styles.walletBalanceTextStyle}>750 Kz </GlobalText>
          <GlobalText style={styles.closingBalanceStyle}>
            CLOSING WALLET BALANCE{' '}
          </GlobalText>
        </View>
        <TouchableOpacity style={styles.walletMoneyContainer}>
          <Image
            style={styles.walletMoneyImageStyle}
            source={walletMoneyImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bigseparator} />
      <View style={styles.payMoneyMainContainerStyle}>
        <View style={styles.payMoneyContainer}>
          <Image style={styles.payMoneyStyle} source={Pay_Money} />
        </View>
        <GlobalText style={styles.nextTextStyle}>
          Initiate Another Payment
        </GlobalText>
        <CustomImageButton
          style={styles.nextImageContainer}
          onPress={nextButtonHandler}>
          <Image style={styles.nextImageStyle} source={NextImage} />
        </CustomImageButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  orderIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paidMoneyTextStyle: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
  },
  orderAmountTextStyle: {
    alignSelf: 'center',
    marginVertical: 30,
    fontSize: 19,
    fontWeight: '700',
    color: Colors.primary,
  },
  custNameTextStyle: {
    alignSelf: 'center',
    marginTop: 4,
    fontSize: 19,
    fontWeight: '300',
  },
  successImageStyle: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: 100,
    resizeMode: 'cover',
  },
  shareImageContaier: {
    marginTop: 20,
    right: 20,
    height: 30,
    width: 30,
    position: 'absolute',
  },
  topFacilPayImageStyle: {
    height: 19,
    width: 120,
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: 'cover',
  },
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 50,
  },
  bigseparator: {
    marginTop: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 5,
  },
  orderIdTextStyle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: Colors.placeholderColor,
  },
  orderIdValueTextStyle: {
    alignSelf: 'center',
    fontSize: 19,
    fontWeight: '700',
    color: Colors.placeholderColor,
  },
  dateTextStyle: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
  },
  walletBalanceTextStyle: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '700',
    color: Colors.placeholderColor,
  },
  balanceContainerStyle: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  payMoneyMainContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  closingBalanceStyle: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.placeholderColor,
  },
  walletMoneyImageStyle: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  walletMoneyContainer: {
    height: 45,
    width: 45,
    backgroundColor: Colors.lightGreen,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payMoneyContainer: {
    height: 45,
    width: 45,
    backgroundColor: Colors.lightGreen,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payMoneyStyle: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
  },
  nextTextStyle: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 60,
    position: 'absolute',
    color: 'gray',
  },
  nextImageContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
  },
});

export default PaymentSuceess;
