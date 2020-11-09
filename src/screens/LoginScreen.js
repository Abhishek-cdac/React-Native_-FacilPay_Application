import React, {useState, useEffect} from 'react';
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
import {connect} from 'react-redux';
import {fetchLoginRequest} from '../redux/actions/loginScreenActions';

import Colors from '../constants/Colors';
import GlobalText from '../components/GlobalText';
import CustomTextField from '../components/CustomTextField';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import SocialMediaLogin from '../components/SocialMediaLogin';
import {UnCheck, LoginLogoBG, CheckBox} from '../assets';
import {FlatList} from 'react-native-gesture-handler';
import {login_success} from '../redux/actions/loginScreenActions';
import {
  GraphRequest,
  GraphRequestManager,
  AccessToken,
  LoginButton,
  LoginManager,
} from 'react-native-fbsdk';
// import statusCodes along with GoogleSignin
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';

const LoginScreen = ({navigation, login_success}) => {
  const [username, setUsername] = useState('sagar');
  const [password, setPassword] = useState('1212');
  const [isRememberMe, setRememberMe] = useState(false);
  const [loginUserObject, setLoginUserobject] = useState({});

  useEffect(()=> {

    googleLoginConfigure();

  }, [])

  function googleLoginConfigure() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '181225724744-b0umf3f360bas7j13529nadgicvavfv8.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  //Facebook Login methods
  const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name, first_name, last_name',
      },
    };

    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('Login Info has an error', error);
        } else {
          setLoginUserobject(result);
          console.log('User Object', result);
          navigation.push('Dashboard');
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  //logout from fb
  const logoutWithFacebook = () => {
    LoginManager.logOut();
    setLoginUserobject({});
  };

  const loginWithFacebook = () => {
    //loginmanagar used to log in & logout also
    LoginManager.logInWithPermissions(['public_profile']).then(login => {
      if (login.isCancelled) {
        console.log('login canceled');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          const accessToken = data.accessToken.toString();
          getInfoFromToken(accessToken);
        });
      }
    }),
      error => {
        console.log('Login fail with error: ' + console.error());
      };
  };

  //google login
   const signWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      setLoginUserobject(userInfo);
      navigation.push('Dashboard');

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('User cancelled the login flow')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        alert('Operation (e.g. sign in) is in progress already')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log('Error occured', error);
    }
  }

  const userInputHandler = userText => {
    setUsername(userText);
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

  const otpLoginHandler = () => {
    navigation.navigate('OTPLoginScreen');
  };

  const loginBtnInputHandler = () => {
    if (username === '') {
      Alert.alert('Validation Error', 'Please enter username', [
        {text: 'OK', style: 'default'},
      ]);
      return;
    } else if (password === '') {
      Alert.alert('Validation Error', 'Please enter password', [
        {text: 'OK', style: 'default'},
      ]);
      return;
    }

    login_success({username: {username}, password: {password}});
    // call Login API & then navigates to Dashboard
    navigation.navigate('Dashboard');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView indicatorStyle="white">
        <View style={styles.container}>
          {/* Top Image  */}
          <Image style={styles.topImageContainer} source={LoginLogoBG} />

          {/* Login Title  */}
          <GlobalText style={styles.titleStyle}>Login to FacilPay</GlobalText>

          {/* Username Custom TextField */}
          <CustomTextField
            style={styles.mobileTxtStyle}
            placeHolderTitle="Username">
            <CustomTextInput
              style={styles.inputTextStyle}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor={Colors.placeholderColor}
              onChangeText={userInputHandler}
              value={username}
            />
          </CustomTextField>

          {/* password Custom TextField */}
          <CustomTextField style={styles.mobileTxtStyle}>
            <CustomTextInput
              style={styles.inputTextStyle}
              placeholder="Password"
              placeholderTextColor={Colors.placeholderColor}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={passwordInputHandler}
              value={password}
            />
          </CustomTextField>

          {/* Remember me section */}
          <View style={styles.rememberMeContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
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
                Keep me logged in
              </GlobalText>
            </View>

            <GlobalText
              style={styles.rememberMeTitle1}
              onPress={otpLoginHandler}>
              Login with OTP
            </GlobalText>
          </View>

          {/* Login Button section */}
          <CustomButton
            style={styles.loginBtnStyle}
            buttonTitle="LOGIN"
            onPress={loginBtnInputHandler}
          />

          {/* Forgot Password section */}
          <TouchableOpacity style={styles.forgotPassContainer}>
            <GlobalText style={styles.forgotTextStyle}>
              Forgot Password
            </GlobalText>
          </TouchableOpacity>

           {/* <GoogleSigninButton style= {{height: 48, width: 192}}
          //  Size= {GoogleSigninButton.Size.Wide}
          //  color= {GoogleSigninButton.Color.Dark}
           onPress= {() => signIn()}
           /> */}
        
          {/* Login with Social media section */}
          <SocialMediaLogin
            style={styles.socialMediaContainer}
            title="or Login with"
            fbBtnHandler={loginWithFacebook}
            googleBtnHandler = {() => signWithGoogle()}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login_success: () => dispatch(login_success()),
  };
};

const styles = StyleSheet.create({
  loadingStrStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    // fontFamily: 'AvenirNextLTPro-DemiCn_0',
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
    justifyContent: 'space-between',
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
  rememberMeTitle1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.primary,
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
  },
  forgotTextStyle: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '400',
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
