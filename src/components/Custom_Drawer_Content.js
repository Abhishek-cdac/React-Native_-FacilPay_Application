import React from 'react';
import {StyleSheet, View, Image, Text, Alert } from 'react-native';
import { Mobile_Recharge, DTH_Recharge, Data_Card_Refill, Pay_Electricity_Bill, Pay_Water_Bill, Make_Up, Add_Money, walletMoneyImage, Passbook, SettingIcon, HelpIcon, LogoutIcon } from '../assets';
import { ScrollView } from 'react-native-gesture-handler';
import MakeUpArtists from './MakeUpArtists';
import CustomDrawerItem from './CustomDrawerItem';
import Colors from '../constants/Colors';

const Custom_Drawer_Content = props => {

      const logoutBtnHandler = () => {
        // alert('Logout Clicked')
        Alert.alert("Message", 'Are you want to logout?',
        [
          {text: "Cancel", style: 'cancel'}, 
          {text: 'Ok', style: 'default', onPress: () => props.navigation.navigate('LoginScreen')}
      ],
      { cancelable: false }
      )
      }

      return (
  
        <View style={styles.sideMenuContainer}>
  
          <View style= {{flexDirection: 'row', alignItems: 'center',}}>
          <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
            style={styles.sideMenuProfileIcon} />
            <View>
            <Text style= {{marginBottom: 20, fontSize: 18, color: Colors.primary, fontWeight: '600'}}>Hello Sagar</Text>
            <Text>Wallet balance: 12,842 Kz</Text>
            </View>
          </View>
  
          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
  
          <ScrollView style={{width: '100%', backgroundColor: 'white'}}>
              <CustomDrawerItem title = "Mobile Recharge" status= "mobile" sourceImage = {Mobile_Recharge} menuClicked= {() => props.navigation.navigate('MobileRecharge',{
            screenName: 'Mobile'
          }) }/>

              <CustomDrawerItem title = "DTH Recharge"  status= "dth"  sourceImage = {DTH_Recharge} menuClicked= {() => props.navigation.navigate('MobileRecharge',{
            screenName: 'DTH'
          }) }/>

              <CustomDrawerItem title = "Data Card Recharge" status= "datacard" sourceImage = {Data_Card_Refill} menuClicked= {() => props.navigation.navigate('DataCardRecharge')}/>

              <CustomDrawerItem title = "Pay Electricity Bill" status= "electricity" sourceImage = {Pay_Electricity_Bill} menuClicked= {() => props.navigation.navigate('PayElectricityScreen',{
            screenName: 'Electricity'
          }) }/>

              <CustomDrawerItem title = "Pay Water Bill" status= "water" sourceImage = {Pay_Water_Bill} menuClicked= {() => props.navigation.navigate('PayElectricityScreen',{
            screenName: 'WaterBill'
          }) }/>

              <CustomDrawerItem title = "Book Make-up Artist" status= "makeup" sourceImage = {Make_Up} menuClicked= {() => props.navigation.navigate('MakeUpScreen')  }/>

              <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

              <CustomDrawerItem title = "Wallet Balance" sourceImage = {walletMoneyImage} menuClicked= {() => alert('Wallet Balance Clicked')}/>

              <CustomDrawerItem title = "Passbook" sourceImage = {Passbook} menuClicked= {() => props.navigation.navigate('PassbookList')}/>

              <CustomDrawerItem title = "Settings" sourceImage = {SettingIcon} menuClicked= {() => alert('Settings Clicked')}/>
              <CustomDrawerItem title = "Help & Support" sourceImage = {HelpIcon} menuClicked= {() => alert('Help & Support Clicked')}/>

              <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

              <CustomDrawerItem title = "Logout" sourceImage = {LogoutIcon} menuClicked= {logoutBtnHandler}/>  
         </ScrollView>
         <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
        </View>
      );
    
  }

  const styles = StyleSheet.create({
 
    MainContainer: {
   
      flex: 1,
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
   
    },
   
    sideMenuContainer: {
   
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(234,234,244)',
    //   alignItems: 'center',
      paddingTop: 20,
    },
   
    sideMenuProfileIcon:
    {
      resizeMode: 'center',
      width: 50, 
      height: 50, 
      borderRadius: 50/2,
      marginLeft: 20,
      marginRight: 20,

    },
   
    sideMenuIcon:
    {
      resizeMode: 'center',
      width: 28, 
      height: 28, 
      marginRight: 10,
      marginLeft: 20
      
    },
   
    menuText:{
   
      fontSize: 15,
      color: '#222222',
      
    }
   
  });

  export default Custom_Drawer_Content;