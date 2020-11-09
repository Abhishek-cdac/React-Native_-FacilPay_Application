import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import Colors from '../constants/Colors';
import GlobalText from '../components/GlobalText';
import CustomTextField from '../components/CustomTextField';
import CustomTextInput from '../components/CustomTextInput';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { amountList } from '../data/DummyData';
import CustomButton from '../components/CustomButton';
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';


const {height, width} = Dimensions.get('window');
const amountData = amountList;

function AddMoneyToWallet({navigation}) {
    const [textAmount, setAmount] = useState('');
    const [isTyping, setTyping] = useState(false);
    const [isCloseClicked, setCloseClicked] = useState(false);

  const backBtnClicked = () => {
    navigation.goBack();
  };

  const userInputHandler = userText => {
    setAmount(userText);
  };

  const amountSelectionHandler = amount => {
      console.log('Hello')
      console.log(amount)
     setAmount(amount);
  }

  const loadAmountList = item => {
      return (
          <TouchableOpacity style= {styles.amountContainerStyle} onPress= {() => amountSelectionHandler(item.amount)}>
              <GlobalText style= {styles.amountTextStyle}>{item.amount}</GlobalText>
          </TouchableOpacity>
      );
  }

  const textInputHandler = inputText => {

    if (inputText !== '') {
      setAmount(inputText.replace(/[^0-9]/g, ''));
      setTyping(true);
      setCloseClicked(false);
    } else {
      setAmount('');
      setTyping(false);
      setCloseClicked(false);
    }
  };

  const closeTypingHandler = () => {
    setAmount('');
    setCloseClicked(true);
    setTyping(false);

  };

  const proceedBtnHandler = () => {
      if (textAmount.length == 0 && textAmount == '') {
          alert('Please enter valid amount')
          return;
      }else {
        navigation.navigate('PaymentOptionsScreen');
      }

  }

  return (
    <ScrollView style={styles.container}>
      <CustomNavigationBar
        style={{marginTop: -20}}
        title="Add Money To Wallet"
        backBtnClicked={backBtnClicked}
      />
      <View style={styles.topBaseView}>
        <GlobalText
          style={{fontSize: 14, fontWeight: '300', color: Colors.accentColor}}>
          Available Balance
        </GlobalText>
        <GlobalText style={styles.walletAmountStyle}>102 Kz</GlobalText>
        </View>

        <RechargeTxtfldContainer
        txtFieldType = "Normal"
        placeHolderName="Enter Amount to add"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={textInputHandler}
        didStartTyping={isTyping}
        closeTypingHandler={closeTypingHandler}
        enterValue={textAmount}
        isCloseBtnTapped={isCloseClicked}
      />

          <View style= {styles.specificAmountsContainer}>
          <FlatList
              data= {amountData}
              keyExtractor= {(item) => item.id}
              numColumns = {3}
              renderItem = {({item}) => loadAmountList(item)
              }
          />
          </View>

          <CustomButton style = {styles.proceedBtnStyle} buttonTitle = 'PROCEED' onPress = {proceedBtnHandler}></CustomButton>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBaseView: {
    height: height / 4,
    backgroundColor: Colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletAmountStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.placeholderColor,
    marginTop: 10,
  },
  mobileTxtStyle: {
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    marginBottom: 25,
  },
  inputTextStyle: {
    padding: 10,
  },
  specificAmountsContainer:{
    //   width: width,
      marginHorizontal: 20,
      marginTop: 15,
      height: 50,
      justifyContent: 'space-between'
  },
  proceedBtnStyle: {
      marginTop: 150,
      alignSelf: 'center',
  }, 
  amountContainerStyle: {
    width: width / 3 - 20,
    height: 45, 
    borderRadius: 5, 
    borderColor: Colors.accentColor, 
    borderWidth: 1, 
    marginRight: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }, 
  amountTextStyle: {
      color: Colors.placeholderColor, 
      fontSize: 15, 
      fontWeight: '400'
    },
});

export default AddMoneyToWallet;
