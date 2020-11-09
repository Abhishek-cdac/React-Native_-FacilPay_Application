import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import GlobalText from './GlobalText'
import Colors from '../constants/Colors'
import CustomImageButton from './CustomImageButton'
import { UserIcon } from '../assets';

const MakeUpArtists = (props) => {
    return (      
        <TouchableOpacity onPress= {() => props.artistSelected(props.item.name)}>
        <View style= {styles.artistListContianer}>  
        <Image style= {styles.imageStyle} source = { props.type == 'Electricity' ? props.item.image : UserIcon}/>  
        <GlobalText style= {styles.titleStyle}>{props.item.name}</GlobalText>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    artistListContianer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
        marginHorizontal: 20,
    },
    imageStyle: {
        height: 30, 
        width: 30,
    }, 
    titleStyle: {
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 20,
        color: Colors.placeholderColor,
    }
    
})

export default MakeUpArtists
