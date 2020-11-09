import {Alert} from 'react-native';
import { Movicel, Unitel, ZapTVIcon, DirectTVIcon } from '../assets';


export const displayLogoutAlert = (alertTitle, alertMessage, onYesPress, onNoPress) => {
    Alert.alert(
        alertTitle,
        alertMessage,
        [
            {
                text: 'Yes',
                onPress: () => onYesPress(),
                style: 'destructive'
            },
            {
                text: 'No',
                onPress: () => onNoPress(),
                style: 'cancel'
            },
        ],
        { cancelable: false }
    );
}

export const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  //validate email id
  export const validateEmailAddress = (emailId) => {
    console.log(emailId);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailId) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      console.log("Email is Correct");
      return true
    }
}

export const AsyncStorageKeys = {
    PlanCost: 'PlanCost',
 }
 export const HardCodedData = {
     UseWalletBalance: 'Use Wallet Ballance : 5000 Kz',
     Currency: 'Kz',
 }

 export const ValidationMessages = {
     EmptyMobile: 'Please enter mobile number',
     InValidMobile: 'Please enter valid mobile number',
     EmptyRecharge: 'Please enter amount',
     InValidRecahrge: 'Please enter valid amount',
     EmptyAccount: 'Please enter account number',
     EmptyIFSCCode: 'Please enter IFSC Code',
     EmptyEletrBoard: 'Please enter electricity board name',
     EmptyDistrictName: 'Please enter district name',
     EmptyCustomerId: 'Please enter customer id',
     EmptyBillAmount: 'Please enter bill amount',

 }

 export const GetTime = selectedDate =>  {

    // Creating variables to hold time.
    var date, TimeType, hour, minutes, seconds, fullTime;

    // Creating Date() function object.
    date = selectedDate;

    // Getting current hour from Date object.
    hour = date.getHours(); 

    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if(hour <= 11)
    {
      TimeType = 'AM';
    }
    else{
      // If the Hour is Not less than equals to 11 then Set the Time format as PM.
      TimeType = 'PM';
    }
    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if( hour > 12 )
    {
      hour = hour - 12;
    }
    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
    if( hour == 0 )
    {
        hour = 12;
    } 
    // Getting the current minutes from date object.
    minutes = date.getMinutes();
    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if(minutes < 10)
    {
      minutes = '0' + minutes.toString();
    }


    //Getting current seconds from date object.
    seconds = date.getSeconds();

    // If seconds value is less than 10 then add 0 before seconds.
    if(seconds < 10)
    {
      seconds = '0' + seconds.toString();
    }
    // Adding all the variables in fullTime variable.
    fullTime = hour.toString() + ':' + minutes.toString() +  ' ' + TimeType.toString();

    return fullTime;    
  }

 export const getImage = (name) => {
    switch(name) {
        case 'Movicel': {
            return Movicel
        }
        case 'Unitel': {
            return Unitel
        }
        case 'ZapTV': {
            return ZapTVIcon
        }
        case 'DirecTV': {
            return DirectTVIcon
        }
    }
}


 
 export default {
    AsyncStorageKeys,
    displayLogoutAlert,
    HardCodedData,
    getImage,
 
 }