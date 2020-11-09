import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import GlobalText from './GlobalText';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window')

const PlanList = ({name, info, cost, id, itemPressed}) => {
    return (
        <TouchableOpacity onPress= {() => itemPressed(cost)} >
        <View style = {styles.baseViewStyles}> 
        <View style = {styles.container}>
        <View style = {styles.textContainer}>
        <GlobalText style = {styles.titleStyle}>{name}</GlobalText>
        <GlobalText style = {styles.infoTitleStyle}>{info}</GlobalText>
        </View>
        <TouchableOpacity style = {styles.customButtonContainer}>
            <GlobalText style={styles.costTitleStyle}>{cost}</GlobalText>
        </TouchableOpacity>
        </View>
        <View style={styles.bottomBarStyle} />
        </View>
     </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    baseViewStyles: {
        flex: 1,
    },
    container: {
        flex: 1,
        height: 130,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textContainer: {
        width: width - 150,
        height: 100,
        marginTop: 20
    },
    customButtonContainer: {
        marginTop: 25,
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
    titleStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    infoTitleStyle: {
        marginTop: 5,
        fontSize: 13,
        fontWeight: '300',
        color: Colors.placeholderColor,
    },
    bottomBarStyle: {
        width: width- 40,
        height: 1,
        backgroundColor: Colors.customTextBorder,
        bottom: 0,
        position: 'absolute',
        marginLeft: 20,
        marginRight: 20,
    }
});

export default PlanList;