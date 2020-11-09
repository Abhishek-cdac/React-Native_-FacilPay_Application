import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Image} from 'react-native';

import GlobalText from './GlobalText';
import Colors from '../constants/Colors';
import { PaymentOptionsData } from '../data/DummyData';
import CustomImageButton from './CustomImageButton';
import { CheckRadioImage, UncheckRadioImage } from '../assets';
import { TextInput } from 'react-native-gesture-handler';

const paymentOptionsArray = PaymentOptionsData;

const PaymentOptionsList = (props) => {

    const [selectedId, setSelectedId] = useState(1);

    const checkRadioClicked = Id => {
        
        if (Id === selectedId) {
            setSelectedId(null);
        }else {
            setSelectedId(Id);
        }
    }
    
    const renderPaymentOptionsView = (item) => {
        console.log(item)
        return (
            <View style = {styles.baseViewContainer} >
                <GlobalText style={styles.itemTitleStyle}> XXXX XXXX XXXX 4554</GlobalText>
                <View style= {{flexDirection: 'row', justifyContent: 'center',alignItems: 'center',right: 10, position: 'absolute'}}>
                    <GlobalText style = {{fontSize: 14, fontWeight: '300'}}>Enter CVV</GlobalText>
                    <TextInput style = {styles.cvvStyle} placeholder = '***' secureTextEntry={true}></TextInput>
                </View>
                
            </View>
        );
    }

    function renderSeparator() {
        return (
        <View style={styles.separator}/>
        );
    };

    return (
        <View style = {{...styles.container, ...props.style}}>{props.children}
        <FlatList
        bounces = {true}
        scrollEnabled
        extraData = {selectedId}
        data = {paymentOptionsArray}
        keyExtractor = {(item) => item.id}
        ItemSeparatorComponent = {renderSeparator}
        renderItem = {({item}) => renderPaymentOptionsView(item)}
        />
        </View>

    );
}

const styles = StyleSheet.create({
    baseViewContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        marginHorizontal: 20
    },
    separator: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginHorizontal: 20,
    },
    
    imageContainerStyle: {
        height: 30,
        width: 30,
        marginHorizontal: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemTitleStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.darkGray,
        alignSelf: 'center'

    },
    imageStyle: {
        height: 25,
        width: 25,
        resizeMode: 'cover',
    },
    cvvStyle: {
    width: 60,
    height: 30,
    borderColor: Colors.placeholderColor,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
    marginLeft: 10,
    }


});

export default PaymentOptionsList;