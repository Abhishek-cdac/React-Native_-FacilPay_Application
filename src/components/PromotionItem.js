import React from 'react';
import {View, StyleSheet, Image, Dimensions,} from 'react-native';
import { Promo_Banner1 } from '../assets';

const {width, height} = Dimensions.get('window');

const PromotionItem = ({item}) => {
    return (
        <View style={styles.container}>
          
          <Image style = {styles.image} source = {{uri: item.Poster}} resizeMode = 'cover'/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        margin: 10,

        shadowColor: 'black',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.26,
        shadowRadius: 3,
        elevation: 5,
        
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10,
        position: 'absolute'
    }
    

});

export default PromotionItem;