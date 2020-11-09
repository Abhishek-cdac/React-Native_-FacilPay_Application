import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';
import MobileRecharge from '../screens/MobileRecharge';
import ContactsListScreen from '../screens/ContactsListScreen';
import BrowsePlansScreen from '../screens/BrowsePlansScreen';
import PaymentOptionsScreen from '../screens/PaymentOptionsScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPLoginScreen from '../screens/OTPLoginScreen';
import PaymentSuccess from '../screens/PaymentSuceess';
import PayMoneyScreen from '../screens/PayMoneyScreen';
import PayMoneyPayment from '../screens/PayMoneyPayment';
import AddMoneyToWallet from '../screens/AddMoneyToWallet';
import PassbookList from '../screens/PassbookList';
import DataCardRecharge from '../screens/DataCardRecharge';
import  BankTransfer  from '../screens/BankTransfer';
import PayElectricityScreen from '../screens/PayElectricityScreen';
import MakeUpScreen from '../screens/MakeUpScreen';
import SearchScreen from '../screens/CommonScreens/SearchScreen';
import Custom_Drawer_Content from '../components/Custom_Drawer_Content';


const PostLoginStack = (props) => {

    const Drawer = createDrawerNavigator();

    const Stack = createStackNavigator();
    const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions = {
            {
                headerShown: false
            }
        }>
        <Stack.Screen name= "Dashboard" component = {Dashboard} />
        <Stack.Screen name="MobileRecharge" component = {MobileRecharge}/>
        <Stack.Screen name="ContactsListScreen" component = {ContactsListScreen} />
        <Stack.Screen name="BrowsePlansScreen" component = {BrowsePlansScreen} />
        <Stack.Screen name="PaymentOptionsScreen" component = {PaymentOptionsScreen} />
        <Stack.Screen name='LoginScreen' component= {LoginScreen} />
        <Stack.Screen name = 'OTPLoginScreen' component = {OTPLoginScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="PayMoneyScreen" component={PayMoneyScreen} />
        <Stack.Screen name="PayMoneyPayment" component={PayMoneyPayment} />
        <Stack.Screen name="AddMoneyToWallet" component={AddMoneyToWallet} />
        <Stack.Screen name='PassbookList' component={PassbookList} />
        <Stack.Screen name='DataCardRecharge' component={DataCardRecharge} />
        <Stack.Screen name='BankTransfer' component={BankTransfer} />
        <Stack.Screen name='PayElectricityScreen' component={PayElectricityScreen} />
        <Stack.Screen name= "MakeUpScreen" component= {MakeUpScreen}/>
        <Stack.Screen name="SearchScreen" component= {SearchScreen}/>
        </Stack.Navigator>
    );
    }
    
    return (
        <Drawer.Navigator initialRouteName = "LoginScreen" 
                        //   drawerContent = {props => <DrawerContent {...props} username= "Sagar" />}
                          drawerContent = {props => <Custom_Drawer_Content {...props}/>}
                          screenOptions = {{headerShown: false, }} 
                          >
            <Drawer.Screen name="HomeStack" component={HomeStack} />
        </Drawer.Navigator>
    );
 
    

}



export default PostLoginStack