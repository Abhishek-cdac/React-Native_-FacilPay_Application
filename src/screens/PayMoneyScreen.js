import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';
import Colors from '../constants/Colors';
import GlobalText from '../components/GlobalText';
import RecentRecharges from '../components/RecentRecharges';
import { QRCodeScanner } from '../assets';

const {height, width} = Dimensions.get('window')

const PayMoneyScreen = props => {
    const [mobileNumber, setMobileNumber] = useState('913874833');
    const [isTyping, setTyping] = useState(false);
    const [isCloseClicked, setCloseClicked] = useState(false);

    useEffect(() => {

      updateData()
  
    }, [props.route.params.contact])

    const updateData = () => {
    if (props.route.params.contact) {
      setMobileNumber(props.route.params.contact);
      setTyping(true)
      setCloseClicked(true);
    }
  }

  const backBtnClicked = () => {
      props.navigation.goBack();
  }

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
      operator: 'PayMoney'
    })
  }

  const onCantactClickHandler = (item) => {
    console.log(item.name)
    console.log(item.mobileNumber)
    props.navigation.navigate('PayMoneyPayment', {
      itemName: item.name,
      itemMobile: item.mobileNumber,
    });
  }
    
  return (
    <View style={styles.container}>
      <CustomNavigationBar
        style={{marginTop: -20}}
        title="Pay Money"
        backBtnClicked={backBtnClicked}
      />
      <RechargeTxtfldContainer
        txtFieldType = "Mobile"
        placeHolderName="Enter Name or Mobile Number"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={textInputHandler}
        didStartTyping={isTyping}
        closeTypingHandler={closeTypingHandler}
        enterValue={mobileNumber}
        isCloseBtnTapped={isCloseClicked}
        contactListPressed = {contactListClicked}
       />

       <View style = {styles.recentsContactsContianer}>
       <GlobalText style= {{color: Colors.placeholderColor}}>Recents</GlobalText>
       <RecentRecharges status="horizontalRecharges" onItemClicked= {onCantactClickHandler} />
       </View>
       
       <View style= {styles.scanQRCodeContainer}>
       <GlobalText style= {{color: 'white',marginBottom: 20}}>Scan QR code to Pay</GlobalText>
       <Image style= {{height: width / 3, width: width / 3, resizeMode: 'cover'}} source= {QRCodeScanner}/>
       </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  recentsContactsContianer: {
      marginHorizontal: 20, 
      marginVertical: 30,
      height: 120,
  },
  scanQRCodeContainer:{
      backgroundColor: 'rgba(51,51,51,1.0)',
      flex: 1,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default PayMoneyScreen;
