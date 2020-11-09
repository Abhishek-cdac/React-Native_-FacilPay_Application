import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';
import CustomNavigationBar from '../components/CustomNavigationBar';
import HorizontalBar from '../components/HorizontalBar';
import GlobalText from '../components/GlobalText';
import PromoCodesList from '../components/PromoCodesList';
import RecentRecharges from '../components/RecentRecharges';
import Colors from '../constants/Colors';
import {UnCheck, CheckBox, Plus_Icon} from '../assets';
import Utilities, { AsyncStorageKeys, HardCodedData, isNumeric, ValidationMessages, getImage } from '../constants/Utilities';
import CustomButton from '../components/CustomButton';




const BankTransfer = props => {

    const [amount, setAmount] = useState('');
    const [isAmountTyping, setAmountTyping] = useState(false);
    const [isAmountCloseClicked, setAmountCloseClicked] = useState(false);

    const [accountNumber, setAccountNumber] = useState('');
    const [isAccountTyping, setAccountTyping] = useState(false);
    const [isAccountCloseClicked, setAccountCloseClicked] = useState(false);

    const [IFSCCodeNumber, setIFSCCodeNumber] = useState('');
    const [isIFSCTyping, setIFSCTyping] = useState(false);
    const [isIFSCCloseClicked, setIFSCCloseClicked] = useState(false);

    const [isRechargeDetailsTyped, setRechargeDetailsTyped] = useState(false);

    const amountTextInputHandler = inputText => {
        if (inputText !== '') {
          setAmount(inputText.replace(/[^0-9]/g, ''));
          setAmountTyping(true);
          setAmountCloseClicked(false);
        } else {
          setAmount('');
          setAmountTyping(false);
          setAmountCloseClicked(false);
        }
      };
      const amountCloseTypingHandler = () => {
        setAmount('');
        setAmountCloseClicked(true);
        setAmountTyping(false);
      };

      const accountTextInputHandler = inputText => {
        if (inputText !== '') {
            setAccountNumber(inputText.replace(/[^0-9]/g, ''));
            setAccountTyping(true);
            setAccountCloseClicked(false);
        } else {
            setAccountNumber('');
            setAccountTyping(false);
            setAccountCloseClicked(false);
        }
      };
      const accountCloseTypingHandler = () => {
        setAccountNumber('');
        setAccountCloseClicked(true);
        setAccountTyping(false);
      };

      const ifscTextInputHandler = inputText => {
        if (inputText !== '') {
          setIFSCCodeNumber(inputText.replace(/[^0-9]/g, ''));
          setIFSCTyping(true);
          setIFSCCloseClicked(false);
        } else {
            setIFSCCodeNumber('');
          setIFSCTyping(false);
          setIFSCCloseClicked(false);
        }
      };
      const ifscCloseTypingHandler = () => {
        setIFSCCodeNumber('');
        setIFSCCloseClicked(true);
        setIFSCTyping(false);
      };

      const backBtnClicked = () => {
        props.navigation.goBack();
      };

      const proceedBtnHandler = () => {
        if (amount.length === 0) {
          alert(ValidationMessages.EmptyRecharge);
          return;
        }else if (accountNumber.length === 0) {
          alert(ValidationMessages.EmptyAccount);
          return;
        }else if (IFSCCodeNumber.length === 0) {
            alert(ValidationMessages.IFSCCodeNumber);
          return;
        }
        props.navigation.navigate('PaymentOptionsScreen');
      }

    return (
        <View style= {styles.container}>
        <CustomNavigationBar
        style={{marginTop: -20}}
        title="Bank Transfer"
        backBtnClicked={backBtnClicked}
      />
        <RechargeTxtfldContainer
        txtFieldType="Amount"
        placeHolderName="Enter Amount"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={amountTextInputHandler}
        didStartTyping={isAmountTyping}
        closeTypingHandler={amountCloseTypingHandler}
        enterValue={amount}
        isCloseBtnTapped={isAmountCloseClicked}
      />
      <RechargeTxtfldContainer
        txtFieldType="Amount"
        placeHolderName="Enter Account Number"
        keyboardtype="number-pad"
        // numberOfChars={9}
        textInputHandler={accountTextInputHandler}
        didStartTyping={isAccountTyping}
        closeTypingHandler={accountCloseTypingHandler}
        enterValue={accountNumber}
        isCloseBtnTapped={isAccountCloseClicked}
      />
      <RechargeTxtfldContainer
        txtFieldType="Amount"
        placeHolderName="IFSC Code"
        keyboardtype="number-pad"
        // numberOfChars={9}
        textInputHandler={ifscTextInputHandler}
        didStartTyping={isIFSCTyping}
        closeTypingHandler={ifscCloseTypingHandler}
        enterValue={IFSCCodeNumber}
        isCloseBtnTapped={isIFSCCloseClicked}
      />

      <HorizontalBar>
        <GlobalText style={styles.titleStyle}>
          {isRechargeDetailsTyped ? 'Promo Codes' : 'Recents'}
        </GlobalText>
      </HorizontalBar>

      {isRechargeDetailsTyped ? (
        <PromoCodesList />
      ) : (
        <RecentRecharges operator= 'Mobile' />
      )}

      <View style={styles.bottomProceedContainer}>
        

        <CustomButton
          style={styles.proceedBtnStyle}
          buttonTitle="PROCEED"
          onPress={proceedBtnHandler}
        />
      </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'gray',
        marginLeft: 20
    },
    bottomProceedContainer:{
        height: 100,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'white'
      },
      
      proceedBtnStyle: {
        marginTop: 20,
        alignSelf: 'center',
      },

});

export default BankTransfer
