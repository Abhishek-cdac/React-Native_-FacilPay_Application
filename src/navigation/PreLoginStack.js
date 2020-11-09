import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import OTPLoginScreen from '../screens/OTPLoginScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Dashboard from '../screens/Dashboard';
import MobileRecharge from '../screens/MobileRecharge';
import ContactsListScreen from '../screens/ContactsListScreen';
import BrowsePlansScreen from '../screens/BrowsePlansScreen';
import PaymentOptionsScreen from '../screens/PaymentOptionsScreen';
import PaymentSuccess from '../screens/PaymentSuceess';
import PayMoneyScreen from '../screens/PayMoneyScreen';
import Custom_Drawer_Content from '../components/Custom_Drawer_Content';


const PreLoginStack = () => {

    const Drawer = createDrawerNavigator();    
    const DrawerStack = () => {
        return (
            <Drawer.Navigator drawerContent = {props => <Custom_Drawer_Content />}>
        <Drawer.Screen name = 'Dashboard' component= {Dashboard} />
        <Drawer.Screen name="MobileRecharge" component = {MobileRecharge}/>
        <Drawer.Screen name="ContactsListScreen" component = {ContactsListScreen} />
        <Drawer.Screen name="BrowsePlansScreen" component = {BrowsePlansScreen} />
        <Drawer.Screen name="PaymentOptionsScreen" component = {PaymentOptionsScreen} />
        <Drawer.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Drawer.Screen name="PayMoneyScreen" component={PayMoneyScreen} />
        </Drawer.Navigator>
        );
    }

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName = 'SignUpScreen'
        screenOptions = {{
            headerShown: false,
        }} >
        <Stack.Screen name= "SignUpScreen" component = {SignUpScreen} />
        <Stack.Screen name= "LoginScreen" component = {LoginScreen} />
        <Stack.Screen name= "OTPLoginScreen" component = {OTPLoginScreen} />
        <Stack.Screen name= 'Dashboard' component = {DrawerStack}/>
        </Stack.Navigator>

    );
}

export default PreLoginStack;