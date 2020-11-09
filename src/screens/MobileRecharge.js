import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Keyboard,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';

import CustomNavigationBar from '../components/CustomNavigationBar';
import CustomStatusBar from '../components/CustomStatusBar';
import Colors from '../constants/Colors';
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';
import HorizontalBar from '../components/HorizontalBar';
import RecentRecharges from '../components/RecentRecharges';
import ContactsListScreen from './ContactsListScreen';
import GlobalText from '../components/GlobalText';
import Utilities, { AsyncStorageKeys, HardCodedData, isNumeric, ValidationMessages, getImage } from '../constants/Utilities';
import CustomImageButton from '../components/CustomImageButton';
import {UnCheck, CheckBox, Plus_Icon} from '../assets';
import CustomButton from '../components/CustomButton';
import PromoCodesList from '../components/PromoCodesList';
import { RecentRechargesData, RecentDTHRechargesData } from '../data/DummyData';

const currencyCode = HardCodedData.Currency;
const recentRechargesArray = RecentRechargesData;
const dthRecentsArray = RecentDTHRechargesData;

const MobileRecharge = props => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isTyping, setTyping] = useState(false);
  const [isCloseClicked, setCloseClicked] = useState(false);

  // States for recharge amount textfield
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [isTypingInReachargeField, setTypingInReachargeField] = useState(false);
  const [isRechargeFieldCloseClicked, setRechargeFieldCloseClicked] = useState(false);

  const [contactListMobileNo, setContactListMobileNo] = useState('');
  const [updatedPlanCost, setUpdatedPlanCost] = useState('');
  const [isRememberMe, setRememberMe] = useState(false);
  const [isRechargeDetailsTyped, setRechargeDetailsTyped] = useState(false);
  const [isContentChanged, setContentChanged] = useState(false)


  const { screenName } = props.route.params;

  useEffect(() => {

    updateData()

    if (screenName === 'DTH') {
      setContentChanged(true)
    }else {
      setContentChanged(false)
    }
  }, [props.route.params.contact, props.route.params.plan, props.route.params.dth])

  const updateData = () => {
    if (props.route.params.contact) {
      setMobileNumber(props.route.params.contact);
      setTyping(true)
      setCloseClicked(true);
    }
    if (props.route.params.plan) {
      setRechargeAmount(props.route.params.plan);
      setUpdatedPlanCost('');
      setTypingInReachargeField(true);
      setRechargeFieldCloseClicked(true);
      if (mobileNumber.length == 9) {
        setRechargeDetailsTyped(true);
      }
    }
    if (props.route.params.dth) {
      setMobileNumber(props.route.params.dth);
      setTyping(false)
      setCloseClicked(false);
    }
  }

  const backBtnClicked = () => {
    props.navigation.goBack()
  };

  const textInputHandler = inputText => {

    if (inputText !== '') {
      setMobileNumber(inputText.replace(/[^0-9]/g, ''));
      setTyping(true);
      setCloseClicked(false);
    } else {
      setMobileNumber('');
      setTyping(false);
      setCloseClicked(false);
    }
  };
  const closeTypingHandler = () => {
    setMobileNumber('');
    setCloseClicked(true);
    setTyping(false);

  };

  const rechargeAmtInputHandler = inputText => {
    if (inputText !== '') {
      setRechargeAmount(inputText.replace(/[^0-9]/g, ''));
      setUpdatedPlanCost('');
      setTypingInReachargeField(true);
      setRechargeFieldCloseClicked(false);

      if (mobileNumber.length > 0 && mobileNumber.length === 9 && rechargeAmount.length > 2){
        setRechargeDetailsTyped(true);
      }else {
        setRechargeDetailsTyped(false);
      }
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

  const contactListClicked = () => {

    props.navigation.push('ContactsListScreen', {
        operator: 'Mobile'
      })
  }

  const browseBtnPressed = () => {
    console.log("navigates to brows plan")
    props.navigation.push('BrowsePlansScreen', {
      previousScreen: 'Mobile'
    });
  }

  const rememberMeInputhandler = () => {
    if (isRememberMe) {
      setRememberMe(false);
    } else {
      setRememberMe(true);
    }
  };

  const recentsItemHandler = (Id) => {
    var obj = recentRechargesArray.filter(item => {
      return item.id === Id
    })

    setMobileNumber(obj[0].mobileNumber);
    setCloseClicked(true);
    setTyping(false);

    setRechargeAmount(obj[0].amount);
    setRechargeFieldCloseClicked(true);
    setTypingInReachargeField(false);

    if (mobileNumber !== '' && rechargeAmount !== '') {
      setRechargeDetailsTyped(true)
    }
  }

  const recentsDTHItemHandler = (Id) => {
    var obj = dthRecentsArray.filter(item => {
      return item.id === Id
    })

    setMobileNumber(obj[0].name);
    setCloseClicked(true);
    setTyping(false);

    setRechargeAmount(obj[0].amount);
    setRechargeFieldCloseClicked(true);
    setTypingInReachargeField(false);

    if (mobileNumber !== '' && rechargeAmount !== '') {
      setRechargeDetailsTyped(true)
    }
  }

  const proceedBtnHandler = () => {
    if (mobileNumber.length === 0) {
      alert(ValidationMessages.EmptyMobile);
      return;
    }else if (!isNumeric(mobileNumber)) {
      alert(ValidationMessages.InValidMobile);
      return;
    }else if (mobileNumber.length < 9 || mobileNumber.length > 9){
      alert('Please enter valid mobile number');
      return;
    }else if (rechargeAmount.length === 0) {
      alert(ValidationMessages.EmptyRecharge);
      return;
    }
    props.navigation.navigate('PaymentOptionsScreen');
  }

  const addDTHOperatorHandler = () => {
    props.navigation.navigate('ContactsListScreen',{
       operator: 'DTH'
    })
  }

  return (

    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
    
      {/* <CustomStatusBar backgroundColor="transparent" barStyle="dark-content" /> */}
      {
        (isContentChanged) ? 
        (<CustomNavigationBar
        style = {styles.navigationBarStyle}
        title="DTH Recharge"
        backBtnClicked={backBtnClicked} 
      />) : (<CustomNavigationBar
        style = {styles.navigationBarStyle}
        title="Mobile Prepaid Recharge"
        backBtnClicked={backBtnClicked} 
      />)
      }

     {
      (isContentChanged && !props.route.params.dth) ? (
        <View style= {styles.AddDTHOperatorStyle}>
          <CustomImageButton style= {styles.addBtnContainerStyle} onPress= {addDTHOperatorHandler}>
              <Image style= {styles.addIconStyle} source= {Plus_Icon}/>
          </CustomImageButton>
          <GlobalText style = {styles.addTitleStyle}>Add DTH Operator</GlobalText>
        </View> ) : (
          <View style= {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, height: 70}}>
          <GlobalText style= {{fontSize: 19, fontWeight: '600', color: Colors.darkGray}}>{props.route.params.dth}</GlobalText>
          <Image style = {{height:40, width: 40, resizeMode: 'cover'}} source= {getImage(props.route.params.dth)} />
          </View>
        )
     }
      
      {
        (isContentChanged) ? (
          
        <RechargeTxtfldContainer
        txtFieldType = ""
        placeHolderName="DTH Account Number"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={textInputHandler}
        didStartTyping={isTyping}
        closeTypingHandler={closeTypingHandler}
        enterValue={mobileNumber}
        isCloseBtnTapped={isCloseClicked}
      /> ) :  (
        
        <RechargeTxtfldContainer
        txtFieldType = "Mobile"
        placeHolderName="Mobile Number"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={textInputHandler}
        didStartTyping={isTyping}
        closeTypingHandler={closeTypingHandler}
        enterValue={mobileNumber}
        isCloseBtnTapped={isCloseClicked}
        contactListPressed = {contactListClicked}
      /> )
      } 

      {
        (isContentChanged) ? (
          
        <RechargeTxtfldContainer
        txtFieldType = "Normal"
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
      /> ) :  (
        
        <RechargeTxtfldContainer
        txtFieldType = "Recharge"
        placeHolderName="Recharge Amount"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={rechargeAmtInputHandler}
        didStartTyping={isTypingInReachargeField}
        closeTypingHandler={rechargeAmtCloseTypingHandler}
        enterValue={rechargeAmount}
        isCloseBtnTapped={isRechargeFieldCloseClicked}
        browsePressed = {browseBtnPressed}
      /> )
      } 

      
    
      <HorizontalBar>
      <GlobalText style = {styles.titleStyle}>{isRechargeDetailsTyped ? "Promo Codes" : "Recents"}</GlobalText>
      </HorizontalBar>

      {isRechargeDetailsTyped ? <PromoCodesList /> : 
        
      ( isContentChanged ? 
      <RecentRecharges status={screenName} dthNextBtnHandler= {recentsDTHItemHandler} />
      :
      <RecentRecharges status={screenName} mobileNextBtnHandler= {recentsItemHandler} />
      )
      }

      <View style= {styles.bottomProceedContainer}>

      <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center',marginLeft: 20}}>
            <TouchableOpacity
              style={styles.baseRememberMeStyle}
              activeOpacity={2}
              onPress={rememberMeInputhandler}>
              <Image
                style={styles.rememberMecheckBoxStyle}
                source={isRememberMe ? CheckBox : UnCheck}
              />
            </TouchableOpacity>
            <GlobalText style={styles.rememberMeTitle}>
              {HardCodedData.UseWalletBalance}
            </GlobalText>
         </View>

         <CustomButton style = {styles.proceedBtnStyle} buttonTitle = 'PROCEED' onPress = {proceedBtnHandler}></CustomButton>

      </View>

    </View>
   </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBarStyle:{
    marginTop: -20,
  },
  mobileStyle: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignSelf: 'center',
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
baseRememberMeStyle: {
  height: 25,
  width: 25,
  borderWidth: 1,
  borderColor: Colors.customTextBorder,
  borderRadius: 4,
},
rememberMecheckBoxStyle: {
  height: 25,
  width: 25,
  alignSelf: 'center',
  resizeMode: 'cover',
},
rememberMeTitle: {
  fontSize: 16,
  fontWeight: '300',
  marginLeft: 10,
  color: Colors.placeholderColor,
},
proceedBtnStyle: {
  marginTop: 20,
  alignSelf: 'center',
},

// DTH styling
AddDTHOperatorStyle: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginHorizontal: 20,
  height: 40,
  marginTop: 20
},
addBtnContainerStyle: {
  height: 40,
  width: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20, 
  backgroundColor: Colors.customTextBorder
},
addIconStyle: {
  height: 20,
  width: 20, 
  resizeMode: 'cover',
},
addTitleStyle: {
  marginLeft: 20,
  alignSelf: 'center',
  fontSize: 14,
  fontWeight: '400',
  color: 'gray',
},

});

export default MobileRecharge;
