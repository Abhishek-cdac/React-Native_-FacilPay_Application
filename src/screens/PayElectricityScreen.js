import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import CustomNavigationBar from '../components/CustomNavigationBar'
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';
import HorizontalBar from '../components/HorizontalBar';
import GlobalText from '../components/GlobalText';
import PromoCodesList from '../components/PromoCodesList';
import RecentRecharges from '../components/RecentRecharges';
import CustomButton from '../components/CustomButton';
import Utilities, { AsyncStorageKeys, HardCodedData, isNumeric, ValidationMessages, getImage } from '../constants/Utilities';
import Colors from '../constants/Colors';
import CustomImageButton from '../components/CustomImageButton';
import {DownArrow} from '../assets';
import {RecentRechargesData, RecentDTHRechargesData, ElectricityRecharges, WaterRecentsData } from '../data/DummyData';

const electricityDataArray = ElectricityRecharges;
const waterDataArray = WaterRecentsData;


const PayElectricityScreen = props => {

    const [electricityBoardName, setelectricityBoardName] = useState('');
    const [isEltrBoardNameTyping, setEltrBoardNameTyping] = useState(false);
    const [isEltrBoardNameCloseClicked, setEltrBoardNameCloseClicked] = useState(false);

    const [waterBoardName, setWaterBoardName] = useState('');

    const [districtName, setDistrictName] = useState('');
    const [isDistrictNameTyping, setDistrictNameTyping] = useState(false);
    const [isDistrictNameCloseClicked, setDistrictNameCloseClicked] = useState(false);

    const [customerId, setCustomerId] = useState('');
    const [isCustomerIdyping, setCustomerIdTyping] = useState(false);
    const [isCustomerIdCloseClicked, setCustomerIdCloseClicked] = useState(false);

    const [billAmount, setBillAmount] = useState('');
    const [isBillAmountTyping, setBillAmountTyping] = useState(false);
    const [isBillAmountCloseClicked, setBillAmountCloseClicked] = useState(false);

    const [isRechargeDetailsTyped, setRechargeDetailsTyped] = useState(false);
    const [isContentChanged, setContentChanged] = useState(false);

    const { screenName } = props.route.params;

    useEffect(() => {

      if (props.route.params?.post) {
        console.log(props.route.params?.post);
        setelectricityBoardName(props.route.params?.post);
        setEltrBoardNameTyping(false);
        setEltrBoardNameCloseClicked(true);
      }

        if (screenName == 'WaterBill') {
            setContentChanged(true)
        }else {
            setContentChanged(false)
        }
    },[props.route.params?.post]);


    const eltrcBoardTextInputHandler = inputText => {
        if (inputText !== '') {
          setelectricityBoardName(inputText);
          setEltrBoardNameTyping(true);
          setEltrBoardNameCloseClicked(false);
        } else {
            setelectricityBoardName('');
            setEltrBoardNameTyping(false);
            setEltrBoardNameCloseClicked(false);
        }
      };
      const eltrcBoardCloseTypingHandler = () => {
        setelectricityBoardName('');
        setEltrBoardNameCloseClicked(true);
        setEltrBoardNameTyping(false);
      };

      const districtNameTextInputHandler = inputText => {
        if (inputText !== '') {
            setDistrictName(inputText);
            setDistrictNameTyping(true);
            setDistrictNameCloseClicked(false);
        } else {
            setDistrictName('');
            setDistrictNameTyping(false);
            setDistrictNameCloseClicked(false);
        }
      };
      const districtNameCloseTypingHandler = () => {
        setDistrictName('');
        setDistrictNameCloseClicked(true);
        setDistrictNameTyping(false);
      };

      const custIdTextInputHandler = inputText => {
        if (inputText !== '') {
          setCustomerId(inputText);
          setCustomerIdTyping(true);
          setCustomerIdCloseClicked(false);
        } else {
            setCustomerId('');
            setCustomerIdTyping(false);
            setCustomerIdCloseClicked(false);
        }
      };
      const custIdCloseTypingHandler = () => {
        setCustomerId('');
        setCustomerIdCloseClicked(true);
        setCustomerIdTyping(false);
      };

      const billAmountTextInputHandler = inputText => {
        if (inputText !== '') {
          setBillAmount(inputText);
          setBillAmountTyping(true);
          setBillAmountCloseClicked(false);
        } else {
            setBillAmount('');
            setBillAmountTyping(false);
            setBillAmountCloseClicked(false);
        }
        if (electricityBoardName !== '' && districtName !== '' && customerId !== '' && billAmount !== '') {
          setRechargeDetailsTyped(true)
        }
      };
      const billAmountCloseTypingHandler = () => {
        setBillAmount('');
        setBillAmountCloseClicked(true);
        setBillAmountTyping(false);
      };

    const backBtnClicked = () => {
        props.navigation.goBack();
    }

    const selectElectricityBoardHandler = () => {
      props.navigation.navigate('SearchScreen',{
        type: 'Electricity'
      });
    }

    const nextBtnHandler = (Id) => {
      
      let obj= electricityDataArray.filter(item => {
        return item.id = Id
      })
      
      //setting boardName
      setelectricityBoardName(obj[0].boardName);
      setEltrBoardNameTyping(false);
      setEltrBoardNameCloseClicked(true);

      //setting district
      setDistrictName(obj[0].district);
      setDistrictNameTyping(false);
      setDistrictNameCloseClicked(true);

      //setting cust id
      setCustomerId(obj[0].name);
      setCustomerIdTyping(false);
      setCustomerIdCloseClicked(true);

      //setting Amount
      setBillAmount(obj[0].amount);
      setBillAmountTyping(false);
      setBillAmountCloseClicked(true);

      setRechargeDetailsTyped(true)
    }

    const waterNextBtnHandler = (Id) => {

      let obj= waterDataArray.filter(item => {
        return item.id = Id
      })

      setWaterBoardName(obj[0].name);
      
      //setting cust id
      setCustomerId(obj[0].customerId);
      setCustomerIdTyping(false);
      setCustomerIdCloseClicked(true);

      //setting Amount
      setBillAmount(obj[0].amount);
      setBillAmountTyping(false);
      setBillAmountCloseClicked(true);

      setRechargeDetailsTyped(true)

    }



    const proceedBtnHandler = () => {
      if (isContentChanged) {
        if (waterBoardName === '') {
          alert(ValidationMessages.EmptyEletrBoard);
          return;
        }else if (customerId.length === 0) {
            alert(ValidationMessages.EmptyCustomerId);
          return;
        }else if (billAmount.length === 0) {
            alert(ValidationMessages.EmptyBillAmount);
          return;
        }
      }else {
        if (electricityBoardName.length === 0) {
          alert(ValidationMessages.EmptyEletrBoard);
          return;
        }else if (districtName.length === 0) {
          alert(ValidationMessages.EmptyDistrictName);
          return;
        }else if (customerId.length === 0) {
            alert(ValidationMessages.EmptyCustomerId);
          return;
        }else if (billAmount.length === 0) {
            alert(ValidationMessages.EmptyBillAmount);
          return;
        }
      }
        
        props.navigation.navigate('PaymentOptionsScreen');
      }

    return (
        <View style= {styles.contianer}>

        {
            (isContentChanged) ? (
                <CustomNavigationBar style={{marginTop: -20}}
        title="Pay Water Bill"
        backBtnClicked={backBtnClicked}
         />
            ) : (
                <CustomNavigationBar style={{marginTop: -20}}
        title="Pay Electricity Bill"
        backBtnClicked={backBtnClicked}
         /> )
        }

        {
            (isContentChanged) ? (
                <View style= {{marginHorizontal: 20, height: 50, marginTop: 10,borderBottomWidth:1,borderBottomColor: Colors.placeholderColor}}>
                <GlobalText style= {{fontSize: 12, fontWeight: '300',color: Colors.placeholderColor }}>Water Board</GlobalText>
                <GlobalText style = {{fontSize: 21, fontWeight: '500',color: Colors.placeholderColor }}>WSIDP</GlobalText>
                </View>
            ) : (
                <View>

                <View style = {{flexDirection:'row',alignItems:'center'}}>

                <RechargeTxtfldContainer 
        txtFieldType="Amount"
        placeHolderName="Electricity Board"
        keyboardtype="number-pad"
        numberOfChars={9}
        textInputHandler={eltrcBoardTextInputHandler}
        didStartTyping={isEltrBoardNameTyping}
        closeTypingHandler={eltrcBoardCloseTypingHandler}
        enterValue={electricityBoardName}
        isCloseBtnTapped={isEltrBoardNameCloseClicked}
      />
       
       <CustomImageButton 
      style= {styles.selectArtistDropDownStyle}
      onPress = {selectElectricityBoardHandler}
      >
        <Image style= {{height: 30, width: 30, marginTop: 20}} source= {DownArrow}/>
      </CustomImageButton>
      </View>
                
      <RechargeTxtfldContainer
        txtFieldType="Amount"
        placeHolderName="District"
        keyboardtype="number-pad"
        // numberOfChars={9}
        textInputHandler={districtNameTextInputHandler}
        didStartTyping={isDistrictNameTyping}
        closeTypingHandler={districtNameCloseTypingHandler}
        enterValue={districtName}
        isCloseBtnTapped={isDistrictNameCloseClicked}
      />
      </View>
        )
        }

      <RechargeTxtfldContainer
        txtFieldType="Amount"
        placeHolderName="Customer Id"
        keyboardtype="number-pad"
        // numberOfChars={9}
        textInputHandler={custIdTextInputHandler}
        didStartTyping={isCustomerIdyping}
        closeTypingHandler={custIdCloseTypingHandler}
        enterValue={customerId}
        isCloseBtnTapped={isCustomerIdCloseClicked}
      />

      <RechargeTxtfldContainer
        txtFieldType="Amount"
        placeHolderName="Bill Amount"
        keyboardtype="number-pad"
        // numberOfChars={9}
        textInputHandler={billAmountTextInputHandler}
        didStartTyping={isBillAmountTyping}
        closeTypingHandler={billAmountCloseTypingHandler}
        enterValue={billAmount}
        isCloseBtnTapped={isBillAmountCloseClicked}
      />
      <HorizontalBar>
        <GlobalText style={styles.titleStyle}>
          {isRechargeDetailsTyped ? 'Promo Codes' : 'Recents'}
        </GlobalText>
      </HorizontalBar>

      {isRechargeDetailsTyped ? (
        <PromoCodesList />
      ) : (
        (isContentChanged) ? (
          <RecentRecharges status="waterBill" waterNextBtnHandler= {waterNextBtnHandler}/>
        ) : (
          <RecentRecharges status="electricityBill" nextBtnHandler= {nextBtnHandler}/>
        )

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
    contianer: {
        flex: 1,
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
      selectArtistDropDownStyle: {
        height: 30, 
        width: 30, 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute', 
        right: 20, 
      },
})

export default PayElectricityScreen
