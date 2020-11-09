import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';
import HorizontalBar from '../components/HorizontalBar';
import GlobalText from '../components/GlobalText';
import PromoCodesList from '../components/PromoCodesList';
import RecentRecharges from '../components/RecentRecharges';
import CustomButton from '../components/CustomButton';
import Utilities, { AsyncStorageKeys, HardCodedData, isNumeric, ValidationMessages, getImage } from '../constants/Utilities';
import Colors from '../constants/Colors';
import {UnCheck, CheckBox, Plus_Icon} from '../assets';
import {DataCardRecentsData} from '../data/DummyData';

const dataCardArray = DataCardRecentsData;

const DataCardRecharge = props => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isTyping, setTyping] = useState(false);
  const [isCloseClicked, setCloseClicked] = useState(false);

  const [rechargeAmount, setRechargeAmount] = useState('');
  const [isTypingInReachargeField, setTypingInReachargeField] = useState(false);
  const [isRechargeFieldCloseClicked, setRechargeFieldCloseClicked] = useState(
    false,
  );
  const [isRechargeDetailsTyped, setRechargeDetailsTyped] = useState(false);
  const [isRememberMe, setRememberMe] = useState(false);

  React.useEffect(() => {
    if (props.route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
        setMobileNumber(props.route.params.post);
        setTyping(true)
        setCloseClicked(true);
    }
    if (props.route.params?.plan) {
      setRechargeAmount(props.route.params?.plan);
      setRechargeFieldCloseClicked(true);
      setTypingInReachargeField(false);
    }
    if (props.route.params?.post && props.route.params?.plan) {
      setRechargeDetailsTyped(true)
    }
  }, [props.route.params?.post, props.route.params?.plan]);

    
  const backBtnClicked = () => {
    props.navigation.goBack();
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
  const contactListClicked = () => {
    props.navigation.navigate('ContactsListScreen', {
      operator: 'DataCard',
    });
  };

  const rechargeAmtInputHandler = inputText => {
    if (inputText !== '') {
      setRechargeAmount(inputText.replace(/[^0-9]/g, ''));
      setUpdatedPlanCost('');
      setTypingInReachargeField(true);
      setRechargeFieldCloseClicked(false);

      if (
        mobileNumber !== '' &&
        rechargeAmount !== ''
      ) {
        setRechargeDetailsTyped(true);
      } else {
        setRechargeDetailsTyped(false);
      }
    } else {
      setRechargeAmount('');
      setTypingInReachargeField(false);
      setRechargeFieldCloseClicked(false);
    }
  };

  const rechargeAmtCloseTypingHandler = () => {
    setRechargeAmount('');
    setRechargeFieldCloseClicked(true);
    setTypingInReachargeField(false);
  };
  const browseBtnPressed = () => {
    props.navigation.push('BrowsePlansScreen', {
      previousScreen: 'DataCard'
    });
  };

  const recentItemHandler = (Id) => {
    var obj = dataCardArray.filter(item => {
      return item.id == Id
    })

      setMobileNumber(obj[0].mobile);
      setTyping(false);
      setCloseClicked(true);

      setRechargeAmount(obj[0].amount);
      setRechargeFieldCloseClicked(true);
      setTypingInReachargeField(false);
      
      setRechargeDetailsTyped(true)
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
  const rememberMeInputhandler = () => {
    if (isRememberMe) {
      setRememberMe(false);
    } else {
      setRememberMe(true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomNavigationBar
        style={styles.navigationBarStyle}
        title="Data Card Recharge"
        backBtnClicked={backBtnClicked}
      />

      <RechargeTxtfldContainer
        txtFieldType="Mobile"
        placeHolderName="Data Card"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={textInputHandler}
        didStartTyping={isTyping}
        closeTypingHandler={closeTypingHandler}
        enterValue={mobileNumber}
        isCloseBtnTapped={isCloseClicked}
        contactListPressed={contactListClicked}
      />

      <RechargeTxtfldContainer
        txtFieldType="Recharge"
        placeHolderName="Recharge Amount"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={rechargeAmtInputHandler}
        didStartTyping={isTypingInReachargeField}
        closeTypingHandler={rechargeAmtCloseTypingHandler}
        enterValue={rechargeAmount}
        isCloseBtnTapped={isRechargeFieldCloseClicked}
        browsePressed={browseBtnPressed}
      />

      <HorizontalBar>
        <GlobalText style={styles.titleStyle}>
          {isRechargeDetailsTyped ? 'Promo Codes' : 'Recents'}
        </GlobalText>
      </HorizontalBar>

      {isRechargeDetailsTyped ? (
        <PromoCodesList />
      ) : (
        <RecentRecharges status= 'dataCard' dataCardNextBtnHandler = {recentItemHandler}/>
      )}

      <View style={styles.bottomProceedContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 20,
          }}>
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

        <CustomButton
          style={styles.proceedBtnStyle}
          buttonTitle="PROCEED"
          onPress={proceedBtnHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBarStyle: {
    marginTop: -20,
  },
  
  proceedBtnStyle: {
    marginTop: 20,
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
});

export default DataCardRecharge;
