import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import GlobalText from './GlobalText';
import CustomImageButton from '../components/CustomImageButton';
import { BackBtnImage } from '../assets';
import Colors from '../constants/Colors';


const CustomNavigationBar = (props) => {
    return (
        <View style = {{...styles.container, ...props.style}}>
            <CustomImageButton style = {styles.backBtnStyle} onPress = {() => props.backBtnClicked()}>
                <Image style = {styles.imageStyle} source = {BackBtnImage}/>
            </CustomImageButton>
            <GlobalText style = {styles.titleStyle}>{props.title}</GlobalText>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 85,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backBtnStyle: {
        alignSelf: 'center',
        marginLeft: 16,
        marginTop: 20,
    },
    imageStyle: {
        height: 30,
        width: 30,
        resizeMode: 'cover',
    },
    titleStyle: {
        alignSelf: 'center',
        marginLeft: 20,
        fontSize: 21,
        fontWeight: '700',
        color: Colors.primary,
        marginTop: 5,
        marginTop: 20,

    }
});

export default CustomNavigationBar;