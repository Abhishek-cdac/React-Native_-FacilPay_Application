import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import GlobalText from './GlobalText';
import Colors from '../constants/Colors';
import { Movicel, Unitel } from '../assets';
import CustomImageButton from './CustomImageButton';
import { PromoCodesData} from '../data/DummyData';

const promoCodesDataArray = PromoCodesData;

const PromoCodesList = (props) => {

    const loadPromoList = (item) => {
        console.log(item)
        return (
            <View style = {[
                styles.basePromoContainerStyle,
                (item.id % 2 != 0) ? styles.basePromoContainerWithBorderStyle : styles.basePromoContainerStyle]}>
                <View style = {styles.subBaseViewContainer}>
                <GlobalText style = {styles.promoTitleStyleStyle}>{item.name}</GlobalText>
                <GlobalText style = {styles.subTitleStyle}>{item.info}</GlobalText>
                <GlobalText style = {styles.subTitleStyle}>{item.tnc}</GlobalText>
                </View>
                <TouchableOpacity style = {styles.customButtonContainer}>
                <GlobalText style={styles.costTitleStyle}>COPY</GlobalText>
                </TouchableOpacity>
                </View>
        );
    }

    return (
        <View style = {styles.container}>
        <FlatList
        bounces = {true}
        scrollEnabled
        data = {promoCodesDataArray}
        keyExtractor = {(item, index) => 'item' + index}
        renderItem = {({item}) => loadPromoList(item)}
        />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    baseListViewStyleWithoutBottomBorder: {
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 70,

    },
    baseListViewStyleWithBottomBorder: {
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 70,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,

    }, 
    basePromoContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginTop: 20,
        height: 100,
    },
    basePromoContainerWithBorderStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginTop: 20,
        height: 100,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    
    subBaseViewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-start',
        height: 60,
        marginTop: 5,
        marginRight: 15,
    },
    promoTitleStyleStyle:{
        marginTop: 10,
        fontSize: 16, 
        fontWeight: '600',
        marginBottom: 5,
        marginLeft: 10,
        textAlign: "left",
        color: Colors.primary,
    },
    subTitleStyle: {
        fontSize: 14, 
        fontWeight: '400',
        marginBottom: 5,
        marginLeft: 10,
        textAlign: "left",
        color: Colors.placeholderColor,

    },
    customButtonContainer: {
        marginTop: 0,
        width: 100,
        height: 30,
        borderColor: Colors.accentColor,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    costTitleStyle: {
        fontSize: 14,
        fontWeight: '400',
        
    },

});

export default PromoCodesList;