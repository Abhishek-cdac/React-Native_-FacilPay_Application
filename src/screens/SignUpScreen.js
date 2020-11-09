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
  import { connect } from 'react-redux'; 
  
  import Colors from '../constants/Colors';
  import GlobalText from '../components/GlobalText';
  import CustomTextField from '../components/CustomTextField';
  import CustomTextInput from '../components/CustomTextInput';
  import CustomButton from '../components/CustomButton';
  import SocialMediaLogin from '../components/SocialMediaLogin';
  import {UnCheck, RegisterLogoBG, CheckBox} from '../assets';
  import CustomImageButton from '../components/CustomImageButton';
  import Utilities, { isNumeric, validateEmailAddress } from '../constants/Utilities';
  import Loader from '../constants/Loader.js';
  import { registration_Success } from '../redux/actions/signUpActions';

const SignUpScreen = ({navigation, isSignedUp, registration_Success, status}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setRememberMe] = useState(false);
  const [isSignUp, setSignUp] = useState('')

  const mobileNoExt = "+244 ";

  const userInputHandler = (userText) => {

    if (isNumeric(userText)) {
        let newStr = ""

        if (userText.length === 0) {
            console.log(userText);            
            setUsername('')
            return;
        }

        if (userText.length > 0 || userText === mobileNoExt) {
            
            console.log(username);            
            newStr = mobileNoExt + userText;
            setUsername(newStr);
        }
         
    }else {
        setUsername(userText);
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

  function validateFields() {
    if (username === '') {
        Alert.alert('Validation Error', 'Please enter username', [
          {text: 'OK', style: 'default'},
        ]);
        return false
      }else if (isNumeric(username) || username.charAt(0) === '+') {

        if (username.length <= 0 || username.length > 14 || username.length < 14) {
            Alert.alert('Validation Error', 'Please enter valid Mobile No', [
                {text: 'OK', style: 'default'},
              ]);
              return false
        }

      }else if (!validateEmailAddress(username)) {
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

  const signUpBtnInputHandler = () => {

    if(validateFields()) {
      registration_Success();
    
    // setSignUp(status)
    //validation success navigates to Dashboard
     navigation.navigate('Dashboard');

    }

    
  };

  // let contentOutput;
  // if (isSignUp !== '') {
  //     contentOutput = (
  //     <GlobalText>Sagar Ranshur</GlobalText>
  //     )
  // }else {
  //   contentOutput = (
  //     <GlobalText>Sarika Ranshur</GlobalText>
  //     )
  // }

    return (
        
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView indicatorStyle="white">

        <View style={styles.container}>
          {/* Top Image  */}
          <Image style={styles.topImageContainer} source={RegisterLogoBG} />

          {/* Login Title  */}
          <GlobalText style={styles.titleStyle}>Register to FacilPay</GlobalText>

          {/* { contentOutput } */}

          {/* Username Custom TextField */}
          <CustomTextField
            style={styles.mobileTxtStyle}
            >
            <CustomTextInput
              style={styles.inputTextStyle}
              placeholder="Email / Mobile No."
              placeholderTextColor={Colors.placeholderColor}
              autoCapitalize = 'none'
              maxLength = {isNumeric(username) ? 14 : 25}
              onChangeText={userInputHandler}
              value={username}
            />
          </CustomTextField>

          {/* password Custom TextField */}
          <CustomTextField style={styles.mobileTxtStyle}>
            <CustomTextInput
              style={styles.inputTextStyle}
              placeholder="Password"
              autoCapitalize = 'none'
              placeholderTextColor={Colors.placeholderColor}
              secureTextEntry={true}
              onChangeText={passwordInputHandler}
              value={password}
            />
          </CustomTextField>

          {/* Remember me section */}
          <View style={styles.rememberMeContainer}>

          <CustomImageButton
          onPress={rememberMeInputhandler}
          >
            <Image
                style={styles.rememberMecheckBoxStyle}
                source={isRememberMe ? CheckBox : UnCheck}
              />
          </CustomImageButton>



            {/* <TouchableOpacity
              style={styles.baseRememberMeStyle}
              activeOpacity={2}
              onPress={rememberMeInputhandler}>
              <Image
                style={styles.rememberMecheckBoxStyle}
                source={isRememberMe ? CheckBox : UnCheck}
              />
            </TouchableOpacity> */}
            <GlobalText style={styles.rememberMeTitle}>
              I Accept T & C
            </GlobalText>
          </View>

          {/* Login Button section */}
          <CustomButton
            style={styles.loginBtnStyle}
            buttonTitle = "REGISTER"
            onPress={signUpBtnInputHandler}
          />

          {/* Forgot Password section */}
          <TouchableOpacity style={styles.forgotPassContainer} onPress = {() => {
              navigation.navigate('LoginScreen')
          }}>
            <GlobalText style={styles.forgotTextStyle1}>
              Already have account?
            </GlobalText>
            <GlobalText style={styles.forgotTextStyle2}> Login
            </GlobalText>
          </TouchableOpacity>

          {/* Login with Social media section */}
          <SocialMediaLogin style={styles.socialMediaContainer} title = "or Register using"/>
        </View>
        
        </ScrollView>
    </TouchableWithoutFeedback>
    );

}

const mapStateToProps = state => {
  return {
    isSignedUp: state.isSignedUp,
    status: state.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registration_Success: () => dispatch(registration_Success())
  }
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
        marginVertical: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)