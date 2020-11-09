import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
  } from 'react-native';
  
  import Colors from '../constants/Colors';
  import GlobalText from '../components/GlobalText';
  import CustomTextField from '../components/CustomTextField';
  import CustomTextInput from '../components/CustomTextInput';
  import CustomButton from '../components/CustomButton';
  import SocialMediaLogin from '../components/SocialMediaLogin';
  import {UnCheck, RegisterLogoBG, CheckBox} from '../assets';

const OTPLoginScreen = ({navigation}) => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setRememberMe] = useState(false);

  const mobileNoExt = "+244 ";

  const userInputHandler = (userText) => {

    if (isNumeric(userText)) {
        let newStr = ""

        if (userText.length === 0) {
            console.log(userText);            
            setMobileNumber('')
            return;
        }

        if (userText.length > 0 || userText === mobileNoExt) {
            
            console.log(mobileNumber);            
            newStr = mobileNoExt + userText;
            setMobileNumber(newStr);
        }
         
    }else {
        setMobileNumber(userText);
    }
  };

  const passwordInputHandler = passText => {
    setPassword(passText);
  };

  const rememberMeInputhandler = () => {
    if (isRememberMe) {
      setRememberMe(false);
    } else {
      setRememberMe(true);
    }
  };
  
  //check whether number or not
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  //validate email id
  function validateEmailAddress(emailId) {
        console.log(emailId);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(emailId) === false) {
          console.log("Email is Not Correct");
          return false;
        }
        else {
          console.log("Email is Correct");
        }
  }

  function validateFields() {

    if (mobileNumber === '') {
        Alert.alert('Validation Error', 'Please enter Mobile No.', [
          {text: 'OK', style: 'default'},
        ]);
        return false;
      }else if (isNumeric(mobileNumber) || mobileNumber.charAt(0) === '+') {

        if (mobileNumber.length <= 0 || mobileNumber.length > 14 || mobileNumber.length < 14) {
            Alert.alert('Validation Error', 'Please enter valid Mobile No', [
                {text: 'OK', style: 'default'},
              ]);
              return false
        }

      }else if (!validateEmailAddress(mobileNumber)) {
        Alert.alert('Validation Error', 'Please enter valid Email Address', [
            {text: 'OK', style: 'default'},
          ]);
          return false
      }
      
      if (password === '') {
        Alert.alert('Validation Error', 'Please enter password', [
          {text: 'OK', style: 'default'},
        ]);
        return false
      }

      return true

  }

  const loginBtnInputHandler = () => {

    if (validateFields()) {
      //validation success Goes to Dashboard
    navigation.navigate('Dashboard');
    }
    

  };

  let space = " "


    return (
        
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView indicatorStyle="white">

        <View style={styles.container}>
          {/* Top Image  */}
          <Image style={styles.topImageContainer} source={RegisterLogoBG} />

          {/* Login Title  */}
          <GlobalText style={styles.titleStyle}>Login to FacilPay</GlobalText>

          {/* Username Custom TextField */}
          <CustomTextField
            style={styles.mobileTxtStyle}
            >
            <CustomTextInput
              style={styles.inputTextStyle}
              placeholder="Mobile No."
              autoCapitalize = 'none'
              placeholderTextColor={Colors.placeholderColor}
              maxLength = {isNumeric ? 14 : 25}
              keyboardType = 'number-pad'
              onChangeText={userInputHandler}
              value={mobileNumber}
            />
          </CustomTextField>

          {/* password Custom TextField */}
          <CustomTextField style={styles.mobileTxtStyle}>
            <CustomTextInput
              style={styles.inputTextStyle}
              placeholder="OTP"
              autoCapitalize = 'none'
              placeholderTextColor={Colors.placeholderColor}
              secureTextEntry={true}
              onChangeText={passwordInputHandler}
              value={password}
            />
          </CustomTextField>

          {/* Remember me section */}
          <View style={styles.rememberMeContainer}>
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
              I Accept T & C
            </GlobalText>
          </View>

          {/* Login Button section */}
          <CustomButton
            style={styles.loginBtnStyle}
            buttonTitle = "LOGIN"
            onPress={loginBtnInputHandler}
          />

          {/* Login with Social media section */}
          <SocialMediaLogin style={styles.socialMediaContainer} title = "or Register using"/>
        </View>
        
        </ScrollView>
    </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      topImageContainer: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        marginBottom: 8,
      },
      titleStyle: {
        color: Colors.primary,
        alignSelf: 'center',
        fontSize: 21,
        marginVertical: 25,
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
      rememberMeContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        height: 30,
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
      loginBtnStyle: {
        alignSelf: 'center',
        marginTop: 25,
      },
      forgotPassContainer: {
        width: '60%',
        height: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
        flexDirection: 'row',
      },
      forgotTextStyle1: {
        color: Colors.placeholderColor,
        fontSize: 14,
        fontWeight: '400',
      },
      forgotTextStyle2: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: '600',
      },
      socialMediaContainer: {
        alignSelf: 'center',
        marginVertical: 80,
      },
      usernameTitleStyle: {
        marginLeft: 20,
        marginTop: -36,
        width: 80,
        height: 18,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: Colors.placeholderColor,
      },

});

export default OTPLoginScreen;