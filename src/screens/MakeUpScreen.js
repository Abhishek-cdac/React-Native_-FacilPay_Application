import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  DatePickerIOS,
  Platform,
  DatePickerAndroid,
  
} from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import CustomImageButton from '../components/CustomImageButton';
import {CalenderIcon, TimeIcon, DownArrow, Close_White} from '../assets';
import Colors from '../constants/Colors';
import RechargeTxtfldContainer from '../components/RechargeTxtfldContainer';
import CustomButton from '../components/CustomButton';
import GlobalText from '../components/GlobalText';
import moment from 'moment';
import {GetTime} from '../constants/Utilities';


const {height, width} = Dimensions.get('window');

const MakeUpScreen = props => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isTypingMobileNumber, setTypingMobileNumber] = useState(false);
  const [isMobileNumberCloseClicked, setMobileNumberCloseClicked] = useState(
    false,
  );

  const [addrs1, setAddrs1] = useState('');
  const [isTypingAddrs1, setTypingAddrs1] = useState(false);
  const [isAddrs1CloseClicked, setAddrs1CloseClicked] = useState(false);

  const [addrs2, setAddrs2] = useState('');
  const [isTypingAddrs2, setTypingAddrs2] = useState(false);
  const [isAddrs2CloseClicked, setAddrs2CloseClicked] = useState(false);

  const [cityName, setCityName] = useState('');
  const [isTypingCityName, setTypingCityName] = useState(false);
  const [isCityNameCloseClicked, setCityNameCloseClicked] = useState(false);

  const [selectedArtist, setArtistSelection] = useState('');
  const [isTypingArtist, setTypingArtist] = useState(false);
  const [isArtistCloseClicked, setArtistCloseClicked] = useState(false);

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  //date selected
  const [chosenDate, setChosenDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDateMode, setSelectedDateMode] = useState('');

  const backBtnHandler = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    if (props.route.params?.post) {
      console.log(props.route.params.post);
      setArtistSelection(props.route.params.post);
      setTypingArtist(false);
      setArtistCloseClicked(true);
    }
  }, [props.route.params?.post]);

  const mobileNumberTextInputHandler = inputText => {
    if (inputText !== '') {
      setMobileNumber(inputText);
      setTypingMobileNumber(true);
      setMobileNumberCloseClicked(false);
    } else {
      setMobileNumber('');
      setTypingMobileNumber(false);
      setMobileNumberCloseClicked(false);
    }
  };
  const mobileCloseTypingHandler = () => {
    setMobileNumber('');
    setTypingMobileNumber(false);
    setMobileNumberCloseClicked(true);
  };

  const addrs1TextInputHandler = inputText => {
    if (inputText !== '') {
      setAddrs1(inputText);
      setTypingAddrs1(true);
      setAddrs1CloseClicked(false);
    } else {
      setAddrs1('');
      setTypingAddrs1(false);
      setAddrs1CloseClicked(false);
    }
  };
  const addrs1CloseTypingHandler = () => {
    setAddrs1('');
    setTypingAddrs1(false);
    setAddrs1CloseClicked(true);
  };

  const addrs2TextInputHandler = inputText => {
    if (inputText !== '') {
      setAddrs2(inputText);
      setTypingAddrs2(true);
      setAddrs2CloseClicked(false);
    } else {
      setAddrs2('');
      setTypingAddrs2(false);
      setAddrs2CloseClicked(false);
    }
  };
  const addrs2CloseTypingHandler = () => {
    setAddrs2('');
    setTypingAddrs2(false);
    setAddrs2CloseClicked(true);
  };

  const cityTextInputHandler = inputText => {
    if (inputText !== '') {
      setCityName(inputText);
      setTypingCityName(true);
      setCityNameCloseClicked(false);
    } else {
      setCityName('');
      setTypingCityName(false);
      setCityNameCloseClicked(false);
    }
  };
  const cityCloseTypingHandler = () => {
    setCityName('');
    setTypingCityName(false);
    setCityNameCloseClicked(true);
  };

  const selectArtistBtnHandler = () => {
    props.navigation.navigate('SearchScreen', {
      type: 'MakeUp',
    });
  };

  const dateIconClicked = () => {
    if (Platform.OS == 'android') {
      showDatePicker(new Date());
    } else {
      setSelectedDateMode('date');
      setDatePickerVisible(true);
    }
  };

  const timeIconClicked = () => {
    if (Platform.OS == 'android') {
      showAndroidTimePicker(new Date());
    } else {
      setSelectedDateMode('time');
      setDatePickerVisible(true);
    }
    
  };

  const dateChangedMethod = date => {
    setChosenDate(date);
    if (selectedDateMode == 'date') {
      var ds = date.toString();
      var date = moment(new Date(ds.substr(0, 16)));
      setSelectedDate(date.format('DD/MM/YYYY'));
    } else {
      let time = GetTime(date);
      console.log(time);
      setSelectedTime(time);
    }
  };

  const showDatePicker = async options => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        let date = new Date(year, month, day);
        // let newState = {};
        // newState['date'] = date;
        // newState['dateText'] = date.toLocaleDateString("en-US");
        setSelectedDate(date.toLocaleDateString('en-US'));
        setChosenDate(date);
      }
    } catch ({code, message}) {
      console.warn(`error `, code, message);
    }
  }



  const showAndroidTimePicker = async options => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {

        let date = new Date(hour, minute);
        // let newState = {};
        // newState['date'] = date;
        // newState['dateText'] = date.toLocaleDateString("en-US");
        setSelectedTime(date.toLocaleDateString('en-US'));
        setChosenDate(date);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  // showTimePicker = async options => {
  //   try {
  //     const {action, hour, minute} = await TimePickerAndroid.open(options);

  //     if (action !== TimePickerAndroid.dismissedAction) {

  //       let date = new Date(hour, minute);
  //       // let newState = {};
  //       // newState['date'] = date;
  //       // newState['dateText'] = date.toLocaleDateString("en-US");
  //       setSelectedTime(date.toLocaleDateString('en-US'));
  //       setChosenDate(date);
  //     }
  //   } catch({code, message}) {
  //     console.log('error',code, message)
  //   }
  // };

  function DatePickerComponent() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={datePickerVisible}
        onRequestClose={() => {
          alert('Model has been closed');
        }}>
        <View style={styles.modelContainer}>
          <View style={styles.modalBaseView}>
            <GlobalText
              style={{right: 15, position: 'absolute', marginTop: 15}}
              onPress={() => setDatePickerVisible(false)}>
              Done
            </GlobalText>

            <GlobalText style={{marginTop: 15, alignSelf: 'center'}}>
              Choose Date
            </GlobalText>

            {
              <DatePickerIOS
                style={{marginHorizontal: 10, marginVertical: 10}}
                date={chosenDate}
                onDateChange={dateChangedMethod}
                mode={selectedDateMode}
              />
            }
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <ScrollView style={styles.scrollViewContianer}>
      <DatePickerComponent />
      <View style={styles.container}>
        <CustomNavigationBar
          style={{marginTop: -20}}
          title="Book Make-up Artist"
          backBtnClicked={backBtnHandler}
        />
        <View style={styles.dateContainer}>
          <View style={styles.dateBaseContainer}>
            <TextInput
              style={styles.LeftMarginStyle}
              placeholder="dd/mm/yyyy"
              value={selectedDate}
            />
            <CustomImageButton
              style={styles.dateIconBaseView}
              onPress={dateIconClicked}>
              <Image style={styles.imageStyle} source={CalenderIcon} />
            </CustomImageButton>
          </View>
          <View style={styles.timeBaseContainer}>
            <TextInput
              style={styles.LeftMarginStyle}
              placeholder="hh : mm"
              value={selectedTime}
            />
            <CustomImageButton
              style={styles.dateIconBaseView}
              onPress={timeIconClicked}>
              <Image style={styles.imageStyle} source={TimeIcon} />
            </CustomImageButton>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RechargeTxtfldContainer
            txtFieldType=""
            placeHolderName="Select Make-up Artist"
            enterValue={selectedArtist}

            // numberOfChars={9}
            // textInputHandler={}
            // didStartTyping={isCustomerIdyping}
            // closeTypingHandler={custIdCloseTypingHandler}
            // isCloseBtnTapped={isCustomerIdCloseClicked}
          />
          <CustomImageButton
            style={styles.selectArtistDropDownStyle}
            onPress={selectArtistBtnHandler}>
            <Image
              style={{height: 30, width: 30, marginTop: 20}}
              source={DownArrow}
            />
          </CustomImageButton>
        </View>

        <RechargeTxtfldContainer
          txtFieldType="Amount"
          placeHolderName="Your Mobile No."
          textInputHandler={mobileNumberTextInputHandler}
          didStartTyping={isTypingMobileNumber}
          closeTypingHandler={mobileCloseTypingHandler}
          enterValue={mobileNumber}
          isCloseBtnTapped={isMobileNumberCloseClicked}
        />

        <RechargeTxtfldContainer
          txtFieldType="Amount"
          placeHolderName="Address line 1"
          textInputHandler={addrs1TextInputHandler}
          didStartTyping={isTypingAddrs1}
          closeTypingHandler={addrs1CloseTypingHandler}
          enterValue={addrs1}
          isCloseBtnTapped={isAddrs1CloseClicked}
        />

        <RechargeTxtfldContainer
          txtFieldType="Amount"
          placeHolderName="Address line 2"
          textInputHandler={addrs2TextInputHandler}
          didStartTyping={isTypingAddrs2}
          closeTypingHandler={addrs2CloseTypingHandler}
          enterValue={addrs2}
          isCloseBtnTapped={isAddrs2CloseClicked}
        />
        <RechargeTxtfldContainer
          txtFieldType="Amount"
          placeHolderName="City / Locality"
          textInputHandler={cityTextInputHandler}
          didStartTyping={isTypingCityName}
          closeTypingHandler={cityCloseTypingHandler}
          enterValue={cityName}
          isCloseBtnTapped={isCityNameCloseClicked}
        />
      </View>
      <CustomButton
        style={styles.sendRequestBtnStyle}
        buttonTitle="Send Request"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContianer: {
    flex: 1,
    height: height,
  },
  container: {
    flex: 1,
    height: height - 80,
  },
  modelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  modalBaseView: {
    height: 300,
    width: 300,

    shadowColor: 'black',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.26,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 20,
    marginTop: 20,
  },
  selectArtistDropDownStyle: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
  },
  dateBaseContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 1,
    marginRight: 10,
  },
  timeBaseContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 1,
  },
  dateIconBaseView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    marginRight: 10,
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
  LeftMarginStyle: {
    marginLeft: 10,
  },
  sendRequestBtnStyle: {
    width: '85%',
    alignSelf: 'center',
    bottom: 0,
    position: 'absolute',
  },
});

export default MakeUpScreen;
