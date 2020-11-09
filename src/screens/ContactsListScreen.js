import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  Platform,
  TextInput,

} from 'react-native';

import GlobalText from '../components/GlobalText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import CustomImageButton from '../components/CustomImageButton';
import {BackBtnImage, Close, Search, Close_White} from '../assets';
import {isNumeric} from '../constants/Utilities';
import { contactList, dthOperators } from '../data/DummyData';
import CustomNavigationBar from '../components/CustomNavigationBar';
import {getImage} from '../constants/Utilities';

const {height, width} = Dimensions.get('window');

const contacts = contactList;
const dthList = dthOperators;

const ContactsListScreen = props => {
  const [searchedText, setSearchedText] = useState('');
  const [emptyFilteredData, setEmptyFilteredData] = useState(true);
  const [dataSource, setDataSource] = useState(contacts);
  const [filteredData, setFilteredData] = useState([]);

  const {operator} = props.route.params;

  useEffect(() => {
    if (operator == 'Mobile' || operator == 'PayMoney' || operator == 'DataCard'){
      setDataSource(contacts)
    }else if (operator == 'DTH')  {
      setDataSource(dthList)
    }
  })

  const cancelBtnPressed = () => {
    setSearchedText('')
    setEmptyFilteredData(true)
    setDataSource(contactList);
  };

  const handleContactNo = mobile => {
    if (operator == 'Mobile') {
      props.navigation.navigate('MobileRecharge', {
        contact: mobile
      });
    }else if (operator == 'PayMoney'){
      console.log('navigation ')
      props.navigation.navigate('PayMoneyScreen', {
        contact: mobile
      });
    }else if (operator == 'DataCard') {
      console.log('navigation ')
      props.navigation.navigate('DataCardRecharge', {
        post: mobile
      });
    }
  };

  const handleDthItemClicked = operatorName => {
    props.navigation.navigate('MobileRecharge', {
      dth: operatorName
    });
  }

  const backBtnClicked = () => {
    props.navigation.goBack();
  };

  const searchInputHandler = inputText => {
    if (inputText && !isNumeric(inputText)) {
      let data = dataSource;
      const re = RegExp(`.*${inputText.toLowerCase().split('').join('.*')}.*`)
      const filteredData = data.filter(v => v.name.toLowerCase().match(re))

      if (filteredData.length > 0) {
        setSearchedText(inputText)
        setEmptyFilteredData(false);
        setFilteredData(filteredData);
      } else {
        setSearchedText(inputText)
        setEmptyFilteredData(true);
        setDataSource(dataSource);
      }
    }else {
      setSearchedText(inputText)
      setEmptyFilteredData(true);
      setDataSource(dataSource);
    }
  }

  const loadDthList = item => {
    return (
      <TouchableOpacity onPress= {() => handleDthItemClicked(item.name)}>
        <View
          style={styles.dthbaseContainer}>
          <CustomImageButton
            style={styles.dthIconContainer}>
            <Image style= {{height: 40, width: 40, resizeMode: 'center', backgroundColor: 'purple'}} source= {getImage(item.imageName)}/>
          </CustomImageButton>
            <GlobalText style={styles.nameStyle}>{item.name}</GlobalText>
        </View>
      </TouchableOpacity>
    );
  };

  const loadContactList = (item) => {
    return (

      <TouchableOpacity onPress={() => handleContactNo(item.mobile)}>
        <View
          style={[
            styles.baseListViewStyleWithoutBottomBorder,
            item.id != 9
              ? styles.baseListViewStyleWithBottomBorder
              : styles.baseListViewStyleWithoutBottomBorder,
          ]}>
          <View
            style={
              ([styles.imageStyle],
              item.id % 2 == 0 ? styles.alternateImageStyle : styles.imageStyle)
            }>
            <GlobalText style={styles.initialCharStyle}>
              {item.name.charAt(0)}
            </GlobalText>
          </View>
          <View style={styles.subBaseViewContainer}>
            <GlobalText style={styles.nameStyle} >{item.name}</GlobalText>
            <GlobalText style={styles.mobileNumberStyle}>
              {item.mobile}
            </GlobalText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>

    {
      (operator == 'Mobile' || operator == 'PayMoney' || operator == 'DataCard') ? (
        <View style={styles.searchBarHeaderContainer}>
        <CustomImageButton
          style={styles.backButtonStyle}
          onPress={backBtnClicked}>
          <Image style={{height: 30, width: 30}} source={BackBtnImage} />
        </CustomImageButton>
        <View style={styles.searchBarStyle}>
          <CustomImageButton style={styles.closeBtnStyle}>
            <Image style={{height: 30, width: 30}} source={Search} />
          </CustomImageButton>
          <TextInput
            style={styles.searchInputStyle}
            selectionColor={Colors.primary}
            onChangeText= {searchInputHandler}
            value= {searchedText}
          />
          <CustomImageButton style={styles.closeBtnStyle} onPress= {cancelBtnPressed}>
            <Image style={{height: 30, width: 30}} source={Close_White} />
          </CustomImageButton>
        </View>
      </View>
      ) : (
        <CustomNavigationBar
        style = {{marginTop: -20}}
        title="Select DTH Operator"
        backBtnClicked={backBtnClicked} 
      />
      )
    }
      
      {
        (operator == 'Mobile' || operator == 'PayMoney' || operator == 'DataCard') ? (<View style={styles.listBaseView}>
        <FlatList
          data={emptyFilteredData ? dataSource : filteredData}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => loadContactList(item)}
        />
      </View>) : 

      (
        <View style={styles.listBaseView}>
        <FlatList
          data={dataSource}
          keyExtractor={item => 'key' + item}
          renderItem={({item}) => loadDthList(item)}
        />
      </View>
      )
      }
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarHeaderContainer: {
    marginHorizontal: 10,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dthbaseContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  dthIconContainer:{
    marginLeft: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialCharStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  closeBtnStyle: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  backButtonStyle: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  searchBarStyle: {
    height: 40,
    flex: 1,
    marginRight: 10,
    backgroundColor: Colors.customTextBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  searchInputStyle: {
    left: 40,
    right: 10,
    height: 40,
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    padding: 10,
    backgroundColor: Colors.customTextBorder,
    color: Colors.primary,
  },
  listBaseView: {
    flex: 1,
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
    height: 36,
    width: 36,
    borderRadius: 18,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alternateImageStyle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: Colors.accentColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subBaseViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60,
    marginTop: 5,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'left',
  },
  mobileNumberStyle: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'left',
    color: Colors.placeholderColor,
  },
});

export default ContactsListScreen;
