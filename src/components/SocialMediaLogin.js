import React from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';
import GlobalText from './GlobalText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FBIcon, GoogleIcon } from '../assets';
import CustomImageButton from '../components/CustomImageButton';

const SocialMediaLogin = (props) => {
    return (
        <View style = {{...styles.container, ...props.style}}>
        <GlobalText style = {styles.titleStyle}>{props.title}</GlobalText>
        <View style = {styles.imageContainer}>
           <CustomImageButton style= {{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}} onPress = {() => props.fbBtnHandler()}>
           <Image style = {styles.imageStyle} source = { FBIcon }/>
           </CustomImageButton>
           <CustomImageButton style= {{height: 40, width: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 10}} onPress= {() => props.googleBtnHandler()}>
            <Image style = {styles.imageStyle} source = {GoogleIcon}/>
            </CustomImageButton>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: Dimensions.get('window').width * 0.5,
    },
    titleStyle: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600',
        color: 'rgba(149,149,149,1.0)',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    imageStyle: {
        height: 35,
        width: 35,
        resizeMode: 'cover'
    }
});

export default SocialMediaLogin;