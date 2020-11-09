import React from 'react';
import {StyleSheet, View} from 'react-native';


const HorizontalBar = (props) => {
    return (
        <View style = {{...styles.container, ...props.style}}>
        {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'rgba(220,220,220,1.0)',
        justifyContent: 'center',
        marginTop: 30
    },
    
});

export default HorizontalBar;