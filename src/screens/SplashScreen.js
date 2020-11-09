import React, {useState,useEffect} from 'react'
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import { SplashLogo } from '../assets';

const {height, width} = Dimensions.get('window')

const SplashScreen = ({navigation}) =>  {

    const [isLoading, setLoading] = useState(false);

    // useEffect(
    //     () => {
    //       let timer1 = setTimeout(() => handleTimeout(), 1000)

    //       // this will clear Timeout when component unmount like in willComponentUnmount
    //       return () => {
    //         clearTimeout(timer1)
    //       }
    //     },
    //     [] //useEffect will run only one time
    //        //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
    //   )

    // const handleTimeout = () => {
    //     setLoading(true);
    //     navigation.navigate('SignUpScreen')
    // }

    return (
        <View style= {styles.container}>
        <Image style={styles.centeredImageStyle} source= {SplashLogo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    centeredImageStyle: {
        height: width / 2,
        width: width / 2,
        resizeMode: 'cover',
    }
});

export default SplashScreen
