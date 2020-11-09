import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import GlobalText from '../components/GlobalText';
import Colors from '../constants/Colors';
import CustomNavigationBar from '../components/CustomNavigationBar';
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';
import CustomImageButton from '../components/CustomImageButton';
import { UnCheck } from '../assets';
import PaymentOptionsList from '../components/PaymentOptionsList';
import ExpandableView from '../components/ExpandableView';
import { PaymentOptionsData } from '../data/DummyData';
import CustomButton from '../components/CustomButton';



const PayMoneyPayment = ({route, navigation}) => {

  const [rechargeAmount, setRechargeAmount] = useState('2354');
  const [isTypingInReachargeField, setTypingInReachargeField] = useState(false);
  const [isRechargeFieldCloseClicked, setRechargeFieldCloseClicked] = useState(false);
  const [updatedPlanCost, setUpdatedPlanCost] = useState('');
  const [isDebitCardsAvailable, setisDebitCardsAvailable] = useState(true)


  const { itemName } = route.params;
  const { itemMobile } = route.params;

  const backBtnClicked = () => {
    navigation.goBack();
  };

  const rechargeAmtInputHandler = inputText => {
    if (inputText !== '') {
      setRechargeAmount(inputText.replace(/[^0-9]/g, ''));
      setUpdatedPlanCost('');
      setTypingInReachargeField(true);
      setRechargeFieldCloseClicked(false);

    } else {
      setRechargeAmount('');
      setTypingInReachargeField(false);
      setRechargeFieldCloseClicked(false);
    }
  }

  const rechargeAmtCloseTypingHandler = () => {
    setRechargeAmount('');
    setRechargeFieldCloseClicked(true);
    setTypingInReachargeField(false);
  }

  const browseBtnPressed = () => {
    navigation.navigate('BrowsePlansScreen');
  }

  const processBtnHandler = () => {
    navigation.navigate("PaymentSuccess")
  }

  return (
    <ScrollView style= {styles.container}>
      <CustomNavigationBar
        style={{marginTop: -20}}
        title="Pay Money"
        backBtnClicked={backBtnClicked}
      />
      <GlobalText style= {styles.nameTitleStyle}>{itemName}</GlobalText>
      <GlobalText style= {styles.mobileTitleStyle}>{ itemMobile }</GlobalText>

      <RechargeTxtfldContainer
        txtFieldType = "Recharge"
        placeHolderName="Recharge Amount"
        keyboardtype="number-pad"
        autoCapitalize = "none"
        autoCorrect = {false}
        numberOfChars={10}
        textInputHandler={rechargeAmtInputHandler}
        didStartTyping={isTypingInReachargeField}
        closeTypingHandler={rechargeAmtCloseTypingHandler}
        enterValue={rechargeAmount}
        isCloseBtnTapped={isRechargeFieldCloseClicked}
        browsePressed = {browseBtnPressed}
      />
      <GlobalText style={{marginTop: 20, marginLeft: 20}}>Select payment options</GlobalText>
       
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
      <CustomButton
          style={styles.payButtonStyle}
          buttonTitle="PROCEED TO PAY"
          onPress={processBtnHandler}></CustomButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nameTitleStyle: {
      marginTop: 20, 
      marginLeft: 20,
      color: Colors.placeholderColor,
      fontSize: 16,
      fontWeight: '500',
  },
  mobileTitleStyle: {
    marginTop: 8, 
    marginLeft: 20,
    color: 'gray',
    fontSize: 21,
    fontWeight: '700',
  }, 
  baseViewContainer: {
    marginLeft: 5,
    marginRight: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
  },
  imageContainerStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletSquareImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
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
},
SavedDebitCardsStyle: {
    height: 55 * 2 + 40,
    marginVertical: 10,
    backgroundColor: 'rgba(242,242,242,1.0)',
  },
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  payButtonStyle: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default PayMoneyPayment;
