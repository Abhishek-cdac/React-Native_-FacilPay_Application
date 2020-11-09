import React, {useState,useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions, FlatList, } from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';

import Colors from '../constants/Colors';
import GlobalText from '../components/GlobalText';
import CustomSegmentControl from '../components/CustomSegmentControl';
import CustomNavigationBar from '../components/CustomNavigationBar';
import DummyData from '../data/DummyData';
import {PlansData} from '../data/DummyData';
import PlanList from '../components/PlanList';
import { AsyncStorageKeys } from '../constants/Utilities';
import CustomButton from '../components/CustomButton';

const {height, width} = Dimensions.get('window');

const popularPlans = PlansData.Popular;
const dataPlans = PlansData.Data;

const BrowsePlansScreen = props => {
  const [currentIndex, setSelectedIndex] = useState(0);
  const [isSegment1Selected, setSegment1Selected] = useState(true);
  const [isSegment2Selected, setSegment2Selected] = useState(false);
  const [isSegment3Selected, setSegment3Selected] = useState(false);
  const [isSegment4Selected, setSegment4Selected] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const {previousScreen} = props.route.params;

  useEffect(() => {
    setDataSource(popularPlans)
    setSegment1Selected(true)
    setSegment2Selected(false);
    setSegment3Selected(false);
    setSegment4Selected(false);
    
  }, [])

  const backBtnClicked = () => {
    props.navigation.goBack();
  };

  const segment1Handler = () => {
    setDataSource(popularPlans)
    setSegment1Selected(true);
    setSegment2Selected(false);
    setSegment3Selected(false);
    setSegment4Selected(false);
  };

  const segment2Handler = () => {
    setDataSource(dataPlans);
    setSegment1Selected(false);
    setSegment2Selected(true);
    setSegment3Selected(false);
    setSegment4Selected(false);
  };

  const segment3Handler = () => {
    setDataSource(popularPlans)
    setSegment1Selected(false);
    setSegment2Selected(false);
    setSegment3Selected(true);
    setSegment4Selected(false);
  };

  const segment4Handler = () => {
    setDataSource(popularPlans)
    setSegment1Selected(false);
    setSegment2Selected(false);
    setSegment3Selected(false);
    setSegment4Selected(true);
  };

  const itemPressed = cost => {

    (previousScreen == 'Mobile') ? props.navigation.navigate('MobileRecharge', {
      plan: cost
    }) : props.navigation.navigate('DataCardRecharge', {
      plan: cost
    })
    
    
  }
  
  return (
    <View styles={styles.container}>
    <View style = {{height: height}}>
      <CustomNavigationBar 
        style= {styles.customNavigationStyle}
        title="Browse Plans"
        backBtnClicked={backBtnClicked}
      />
      <CustomSegmentControl
        segment1Pressed={segment1Handler}
        segment2Pressed={segment2Handler}
        segment3Pressed={segment3Handler}
        segment4Pressed={segment4Handler}
        isSegment1Selected={isSegment1Selected}
        isSegment2Selected={isSegment2Selected}
        isSegment3Selected={isSegment3Selected}
        isSegment4Selected={isSegment4Selected}
      />
      <View style = {styles.flatListContainer}>
      <FlatList
            data={dataSource}
            keyExtractor={(item) => 'key' + item}
            renderItem={({item}) => (<PlanList name = {item.planName} info = {item.info} cost = {item.cost} id = {item.id} itemPressed = {itemPressed}/>)}
      />
      </View>
    </View>
    <CustomButton style = {styles.bottomButtonStyle} buttonTitle = 'PROCEED' activeOpacity = {0.7}></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  flatListContainer: {
    marginLeft: 0,
    marginRight: 0,
    bottom: 20,
    marginTop: 20,
  },
  customNavigationStyle: {
    marginTop: -20,

  },
  bottomButtonStyle: {
    width: width - 40,
    bottom: 0,
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
  }
});

export default BrowsePlansScreen;
