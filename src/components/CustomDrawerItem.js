import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

const CustomDrawerItem = props => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image source= {props.sourceImage}
                style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={() => props.menuClicked(props.status)} > {props.title} </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    sideMenuIcon:
    {
      resizeMode: 'center',
      width: 28, 
      height: 28, 
      marginRight: 10,
      marginLeft: 20
      
    },
})

export default CustomDrawerItem
