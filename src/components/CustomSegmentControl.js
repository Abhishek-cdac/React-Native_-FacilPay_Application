import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import GlobalText from '../components/GlobalText';

const {height, width} = Dimensions.get('window');




const CustomSegmentControl = props => {

    return (
        <View style = {styles.segmentContainerStyle}>
        <TouchableOpacity style={styles.tabStyle1} onPress = {() => props.segment1Pressed()}>
          <GlobalText style={[
            styles.segmentTitleStyle,
            props.isSegment1Selected ? styles.onSelectionSegmentTitleStyle : styles.segmentTitleStyle
            ]} >Popular</GlobalText>
          <View style={[
            styles.bottomBarView2,
            props.isSegment1Selected ? styles.bottomBarView1 : styles.bottomBarView2
            ]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabStyle2} onPress = {() => props.segment2Pressed()}>
          <GlobalText style={[
            styles.segmentTitleStyle,
            props.isSegment2Selected ? styles.onSelectionSegmentTitleStyle : styles.segmentTitleStyle
            ]} >Data</GlobalText>
          <View style={[
            styles.bottomBarView2,
            props.isSegment2Selected ? styles.bottomBarView1 : styles.bottomBarView2
            ]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabStyle3} onPress = {() => props.segment3Pressed()}>
          <GlobalText style={[
            styles.segmentTitleStyle,
            props.isSegment3Selected ? styles.onSelectionSegmentTitleStyle : styles.segmentTitleStyle
            ]}
             >Talktime</GlobalText>
          <View style={[
            styles.bottomBarView2,
            props.isSegment3Selected ? styles.bottomBarView1 : styles.bottomBarView2
            ]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabStyle4} onPress = {() => props.segment4Pressed()}>
          <GlobalText style={[
            styles.segmentTitleStyle,
            props.isSegment4Selected ? styles.onSelectionSegmentTitleStyle : styles.segmentTitleStyle
            ]}
          >Roaming</GlobalText>
          <View style={[
            styles.bottomBarView2,
            props.isSegment4Selected ? styles.bottomBarView1 : styles.bottomBarView2
            ]} />
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    segmentContainerStyle: {
        height: 55,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.customTextBorder
      },
    
      tabStyle1: {
        //custom styles
        width: width / 4,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabStyle2: {
        //custom styles
        width: width / 4,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabStyle3: {
        //custom styles
        width: width / 4,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabStyle4: {
        //custom styles
        width: width / 4,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
      },
      segmentTitleStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.placeholderColor,
      },
      onSelectionSegmentTitleStyle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
      },
      bottomBarView1: {
        height: 3,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.primary,
      },
      bottomBarView2: {
        height: 3,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
      },
      
});

export default CustomSegmentControl;