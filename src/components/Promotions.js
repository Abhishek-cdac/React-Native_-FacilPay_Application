import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Dimensions, Text, Animated, FlatList} from 'react-native';
import { Promo_Banner1 } from '../assets';
import PromotionItem  from '../components/PromotionItem';
 
const {width, height} = Dimensions.get('window')

let flatList
function  infiniteScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function(){
        
        if (this.flatList != null) {
            scrolled ++
        if(scrolled < numberOfData){
            scrollValue = scrollValue + width
        }else {
            scrollValue = 0
            scrolled = 0
        }
            this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        }

    }, 3000)
    
}

const Promotions = ({data}) => {

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width);
    const [dataList, setDatalist] = useState(data)

    useEffect(() => {
        setDatalist(data)
        infiniteScroll(dataList)
    })

    if (data && data.length) {
        return (
            <View style = {styles.container}>
                <FlatList 
                ref = {(flatList) => {this.flatList = flatList}}
                    pagingEnabled = {true}
                    directionalLockEnabled = {true}
                    horizontal = {true}
                    scrollEnabled
                    snapToAlignment = 'center'
                    scrollEventThrottle = {16}
                    decelerationRate = {'fast'}
                    showsHorizontalScrollIndicator = {false}
                    data = {data}
                    keyExtractor = {(item, index) => 'key' + index}
                    renderItem = {({item}) => 
                         <PromotionItem item = {item} />
                    }
                    onScroll = {Animated.event(
                        [{nativeEvent: {contentOffset: { x: scrollX }}}]
                    )}
                />
                <View style = {styles.dotView}>
                    {
                        data.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            })
                            return (
                            <Animated.View
                            key = {i}
                            useNativeDriver = {true}
                            style = {{opacity, height: 10, width: 10, backgroundColor:'#595959',margin: 8, borderRadius: 5}}
                            
                            />
                        );
                        })
                        
                    }
                </View>
            </View>
        );
    }

    console.log('Please provide data')
    return null;

    
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,

    },
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    }

});

export default Promotions;