import React from 'react';
import { Text,StyleSheet } from 'react-native';

const GlobalText = (props) => {
    return (
        <Text {...props} style = {{...styles.titleStyle, ...props.style}}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default GlobalText;