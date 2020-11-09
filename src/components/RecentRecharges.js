import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import GlobalText from './GlobalText';
import Colors from '../constants/Colors';
import { Movicel, Unitel, ZapTVIcon, DirectTVIcon, NextImage } from '../assets';
import {RecentRechargesData, RecentDTHRechargesData, ElectricityRecharges, WaterRecentsData,DataCardRecentsData } from '../data/DummyData';
import CustomImageButton from '../components/CustomImageButton';
import { getImage } from '../constants/Utilities';

const recentRechargesArray = RecentRechargesData;
const recentDTHRechargeArray = RecentDTHRechargesData;
const electricityRechargesArray = ElectricityRecharges;
const waterBillArray = WaterRecentsData;
const dataCardArray = DataCardRecentsData;
const screenWidth = Dimensions.get('screen').width * 0.2;

const RecentRecharges = (props) => {
    const [operatorType, setOperatorType] = useState('Mobile')
    const [recentsRechargesDataSource, setRecentsRechargesDataSource] = useState([])

    const RECENT_VIEW_STATES = {
        Mobile: <Recharges />,
        horizontalRecharges: <HorizontalRecharges />,
        DTH: <DTH />,
        waterBill: <WaterBill />,
        electricityBill: <ElectricityBill />,
        dataCard: <DataCard />
    }

    function Recharges() {
        return (
            <View >
            <FlatList
               bounces = {true}
               scrollEnabled
               data = {recentRechargesArray}
               keyExtractor = {(item, index) => 'item' + index}
               renderItem = {({item}) => renderMobileRecentRecharges(item)}/>
            </View>
        )
    }
    
    function HorizontalRecharges() {
        return(
            <View >
           <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
            keyExtractor={item => item.id}
            data={recentRechargesArray}
            renderItem={({item}) => (
                loadHorizontallist(item)
            )}
          />
        </View>
        );
    }

    function DTH() {
        return (
            <View >
        <FlatList
        bounces = {true}
        scrollEnabled
        data = {recentDTHRechargeArray}
        keyExtractor = {(item, index) => 'item' + index}
        renderItem = {({item}) => loadDTHList(item)}
        />
        </View>
        );
    }

    function WaterBill() {
        return (
            <View >
        <FlatList
        bounces = {true}
        scrollEnabled
        data = {waterBillArray}
        keyExtractor = {(item, index) => 'item' + index}
        renderItem = {({item}) => loadWaterBillRecents(item)}
        />
        </View>
        );
    }

    function ElectricityBill() {
        return (
        <View >
        <FlatList
        bounces = {true}
        scrollEnabled
        data = {electricityRechargesArray}
        keyExtractor = {(item, index) => 'item' + index}
        renderItem = {({item}) => loadElectricityRecents(item)}
        />
        </View>
        );
    }

    function DataCard() {
        return (
        <View >
        <FlatList
        bounces = {true}
        scrollEnabled
        data = {dataCardArray}
        keyExtractor = {(item, index) => 'item' + index}
        renderItem = {({item}) => loadDataCardRecents(item)}
        />
        </View>
        );
    }

    const loadDataCardRecents = (item) => {
        return (
            <View style = {styles.baseListViewStyleWithoutBottomBorder}>
                <Image style = {styles.imageStyle} source= {item.image}/>
                <View style = {styles.subBaseViewContainer}>
                <GlobalText style = {styles.mobileNumberStyle}>{item.name}</GlobalText>
                <GlobalText style = {styles.mobileNumberStyle} >{item.mobile}</GlobalText>
                <CustomImageButton 
                style= {styles.nextBtnStyle}
                onPress = {() => props.dataCardNextBtnHandler(item.id)}
                >
                    <Image style= {{height: 20, width: 20}} source={NextImage} />
                </CustomImageButton>
                </View>
            </View>
        );
    }

    const loadWaterBillRecents = (item) => {
        return (
            <View style = {styles.baseListViewStyleWithoutBottomBorder}>
                <Image style = {styles.waterImageStyle} source= {item.image}/>
                <View style = {styles.subBaseViewContainer}>
                <GlobalText style = {styles.mobileNumberStyle}>{item.customerId}</GlobalText>
                <GlobalText style = {styles.mobileNumberStyle} >{item.name}</GlobalText>
                <CustomImageButton 
                style= {styles.nextBtnStyle}
                onPress = {() => props.waterNextBtnHandler(item.id)}
                >
                    <Image style= {{height: 20, width: 20}} source={NextImage} />
                </CustomImageButton>
                </View>
            </View>
        );
    }

    const loadElectricityRecents = (item) => {
        return (
            <View style = {styles.baseListViewStyleWithoutBottomBorder}>
                <Image style = {styles.imageStyle} source= {item.image}/>
                <View style = {styles.subBaseViewContainer}>
                <GlobalText style = {styles.mobileNumberStyle}>{item.name}</GlobalText>
                <GlobalText style = {styles.mobileNumberStyle} >{item.board}</GlobalText>
                <CustomImageButton 
                style= {styles.nextBtnStyle}
                onPress = {() => props.nextBtnHandler(item.id)}
                >
                    <Image style= {{height: 20, width: 20}} source={NextImage} />
                </CustomImageButton>
                </View>
            </View>
        );
    }
    

    const renderMobileRecentRecharges = (item) => {
        return (
            <View style = {[
                styles.baseListViewStyleWithoutBottomBorder,
                (item.id % 2 != 0) ? styles.baseListViewStyleWithBottomBorder : styles.baseListViewStyleWithoutBottomBorder]}>
                <Image style = {styles.imageStyle} source= {getImage(item.imageName)}/>
                <View style = {styles.subBaseViewContainer}>
                <GlobalText style = {styles.mobileNumberStyle}>{item.name}</GlobalText>
                <GlobalText style = {styles.mobileNumberStyle} >{item.mobileNumber}</GlobalText>
                <CustomImageButton 
                style= {styles.nextBtnStyle}
                onPress = {() => props.mobileNextBtnHandler(item.id)}
                >
                    <Image style= {{height: 20, width: 20}} source={NextImage} />
                </CustomImageButton>
                </View>
            </View>
        );
    }

    const loadDTHList = (item) => {
        return (
            <View style = {[
                styles.baseListViewStyleWithoutBottomBorder,
                (item.id % 2 != 0) ? styles.baseListViewStyleWithBottomBorder : styles.baseListViewStyleWithoutBottomBorder]}>
                <Image style = {styles.imageStyle} source= {getImage(item.imageName)}/>
                <View style = {styles.subBaseViewContainer}>
                <GlobalText style = {styles.mobileNumberStyle}>{item.name}</GlobalText>
                <GlobalText style = {styles.mobileNumberStyle} >{item.operator}</GlobalText>
                <GlobalText style = {styles.mobileNumberStyle} >{item.details}</GlobalText>
                <CustomImageButton 
                style= {styles.nextBtnStyle}
                onPress = {() => props.dthNextBtnHandler(item.id)}
                >
                    <Image style= {{height: 20, width: 20}} source={NextImage} />
                </CustomImageButton>
                </View>
            </View>
        );
    }

    const loadHorizontallist = (item) => {
        return (
        <View style={styles.horizontalContainer}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <CustomImageButton style={styles.imageContainer} onPress= {() => props.onItemClicked(item)} >
            <GlobalText style= {{color: 'white'}}>S</GlobalText>
          </CustomImageButton>
          <GlobalText style={styles.titleStyle} numberOfLines={1} ellipsizeMode='tail'>{item.name}</GlobalText>
        </View>
      </View>
        );
    }

    return (
        <View style = {styles.container}>
         {RECENT_VIEW_STATES[props.status]}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    horizontalContainer: {
        height: screenWidth,
        width: screenWidth,
        margin: 6,
        alignSelf: 'center',
      },
      imageContainer: {
        height: 45,
        width: 45,
        borderRadius: 32.5,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      titleStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.placeholderColor,
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
    imageStyle: {
        height: 35,
        width: 35,
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    subBaseViewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-start',
        height: 60,
        marginTop: 5,
    },
    mobileNumberStyle:{
        fontSize: 14, 
        fontWeight: '400',
        marginBottom: 5,
        marginLeft: 10,
        textAlign: "left",
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
    waterImageStyle: {
        height: 60,
        width: 60, 
        borderRadius: 5,
        borderColor: Colors.placeholderColor,
        borderWidth: 1,
        borderRadius: 10,

    },
    nextBtnStyle: {right: 0, position: 'absolute', height: 30, width: 30},

});

export default RecentRecharges;