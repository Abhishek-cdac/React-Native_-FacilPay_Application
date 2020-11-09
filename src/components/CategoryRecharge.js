import React from 'react';
import {StyleSheet,Text, View,Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { Pay_Electricity_Bill,
    Pay_Water_Bill,
    DTH_Recharge,
    Mobile_Recharge,
    Make_Up,
    Data_Card_Refill, 
    
  } from '../assets';
import Colors from '../constants/Colors';
import GlobalText from '../components/GlobalText';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('screen').width / 3;


const CategoryRecharge = ({title, index, onItemClicked}) => {

    const getRechargeCategoryLocalImage = image => {
        switch (image) {
          case 'Mobile Recharge':
            return Mobile_Recharge;
          case 'DTH Recharge':
            return DTH_Recharge;
          case 'Pay Water Bill':
            return Pay_Water_Bill;
          case 'Pay Electricity Bill':
            return Pay_Electricity_Bill;
          case 'Data Card Refill':
            return Data_Card_Refill;
          case 'Book Make Up':
            return Make_Up;
        }
      };

    return(
        <TouchableOpacity onPress = {() => onItemClicked(index)}>
        <View style = {styles.container}>
          <View style = {{ alignItems: 'center', justifyContent:'center'}}>
          <Image style = {styles.imageStyle} source = {getRechargeCategoryLocalImage(title)} />
          <GlobalText style = {styles.titleStyle}>{title}</GlobalText>
          </View>
          </View>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        height: screenWidth - 13, 
        width: screenWidth - 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.customTextBorder,
        borderRightWidth: 0.5,
        borderRightColor: Colors.customTextBorder
    },
    titleStyle: {
        fontSize: 13,
        fontWeight: '300',
        color: Colors.primary,
    },
    imageStyle: {
        height: screenWidth - 70,
        width: screenWidth - 70,
        alignSelf: 'center',        
        resizeMode: 'contain',
        marginBottom: 10,
    }

});

export default CategoryRecharge;