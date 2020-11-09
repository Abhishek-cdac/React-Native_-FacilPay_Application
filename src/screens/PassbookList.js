import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Image, FlatList, Dimensions, Animated, CheckBox} from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import CustomImageButton from '../components/CustomImageButton';
import GlobalText from '../components/GlobalText';
import {FilterIcon, Add_Money, UncheckRadioImage, Close, CheckRadioImage} from '../assets';
import {newData} from '../data/DummyData';
import Colors from '../constants/Colors';

const {height, width} = Dimensions.get('window');

const filterOptionsArray = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Added',
    },
    {
        id: 3,
        name: 'Paid',
    },
    {
        id: 4,
        name: 'Received',
    },
    {
        id: 5,
        name: 'Failed',
    },
];

const passbookArray = newData;

const PassbookList = props => {
  const [passbookList, setPassbookData] = useState([]);
  const [isExpanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(1);

  const initialValue = useRef(new Animated.Value(0)).current;

  const toggleAnimations = () => {
    if (isExpanded == false) {
        Animated.timing(initialValue, {
          toValue: 300,
          timing: 2000,
          useNativeDriver: false
        }).start(() => {
          setExpanded(true);
        });
      }
  }

  const onFilterItemClicked= (Id) => {
    if (Id === selectedId) {
        setSelectedId(null);
    }else 
    {
        setSelectedId(Id);
    } 
    if (isExpanded) {
        Animated.timing(initialValue,{
            toValue: 0,
            timing: 2000,
            useNativeDriver: false
        }).start(() => {
            setExpanded(false)
        })
   }
  }

  const backBtnClicked = () => {
    props.navigation.goBack();
  };

  const renderSeperator = () => {
    return <View style={styles.seperator} />;
  };

  const filterCloseBtnHandler = () => {
      if (isExpanded) {
           Animated.timing(initialValue,{
               toValue: 0,
               timing: 2000,
               useNativeDriver: false
           }).start(() => {
               setExpanded(false)
           })
      }
  }

  const animatedStyle = {
    width: width - 20,
    height: initialValue,
  };

  const renderPassbookListing = item => {
    return (
      <View style={styles.cellItemContainer}>
        <View style={[styles.cellBaseView, 
           (item.id % 2 == 0) ? styles.nameInitialBGView : (  (item.txnDetails === 'wallet') ? (styles.imageBGView) :  (styles.cellBaseView))
        ]}> 
        {
            (item.txnDetails === 'wallet') ? (
                <Image style= {{height: 30, width: 30, resizeMode:'cover'}} source= {Add_Money}/>
            ) : (
                <GlobalText style= {{color: 'white'}}>{item.initial}</GlobalText>
            )
        }
        </View>
        <View style={{flex: 1, height: 80}}>
          <GlobalText style={styles.nameTextStyle}>{item.name}</GlobalText>
          <GlobalText style={styles.dateTextStyle}>{item.txnDate}</GlobalText>
        </View>
        <View style={{width: 100, height: '100%'}}>
        {
            (item.txnType === 'debit') ? (

                <GlobalText style={styles.amountStyle}> -{item.amount}</GlobalText>
            ) : (
                <GlobalText style={styles.creditAmountLableStyle}> +{item.amount}</GlobalText>
            )
        }
          <GlobalText style={styles.balanceTextStyle}>
            Balance : {item.balance}
          </GlobalText>
        </View>
      </View>
    );
  };

  const loadFilterOptions = item => {
      return (

        <View style= {{flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: 15}}>
              <CustomImageButton 
              style= {{height: 30, width: 30, alignItems: 'center', justifyContent: 'center'}}
              onPress= {() => onFilterItemClicked(item.id)}
              >
                  <Image style= {{height: 25, width: 25, resizeMode: 'cover'}} source = {(item.id === selectedId) ? CheckRadioImage : UncheckRadioImage}/>
              </CustomImageButton>
              <GlobalText style= {{alignItems: 'center',marginLeft: 10}}>{item.name}</GlobalText>
          </View>
      );
  }

  return (
    <View style={styles.container}>
      <CustomNavigationBar
        style={{marginTop: -20}}
        title="Passbook"
        backBtnClicked={backBtnClicked}
      />

      <CustomImageButton style={styles.filterContainerStyle} onPress= {toggleAnimations}>
        <GlobalText>Filter</GlobalText>
        <Image
          style={{height: 20, width: 20, resizeMode: 'cover'}}
          source={FilterIcon}
        />
      </CustomImageButton>

      <View style={{marginHorizontal: 20, marginTop: 40, flex: 1}}>
        <FlatList
          data={passbookArray}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeperator}
          renderItem={({item}) => renderPassbookListing(item)}
        />
      </View>
      <Animated.View style= {[styles.animatedBox, animatedStyle]}>
      <View>
         <View style= {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginHorizontal: 20, marginTop: 15}}>
         <GlobalText style= {{ }}>Filter Transactions</GlobalText>
          <CustomImageButton 
          style= {{height: 40, width: 40,alignItems: 'center', justifyContent:"center"}}
          onPress = {filterCloseBtnHandler}
          >
              <Image style= {{height: 30, width: 30, resizeMode: 'cover'}} source= {Close} />
          </CustomImageButton>
         </View>
          
          <FlatList
              data= {filterOptionsArray}
              keyExtractor= {(item) => item.id}
              extraData={selectedId}
              renderItem= {({item}) => loadFilterOptions(item)}
          />
      </View>
      </Animated.View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    marginHorizontal: 1,
    height: 1,
    backgroundColor: '#CED0CE',
  },
  filterContainerStyle: {
    right: 20,
    top: 60,
    height: 40,
    width: 65,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cellItemContainer: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cellBaseView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  nameInitialBGView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentColor,
  },
  imageBGView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGreen,
  },

  nameTextStyle: {
    marginTop: 15,
    marginLeft: 10,
    color: Colors.placeholderColor,
    fontSize: 16,
    fontWeight: '500',
  },
  dateTextStyle: {
    marginTop: 8,
    marginLeft: 10,
    color: Colors.placeholderColor,
    fontSize: 12,
    fontWeight: '300',
  },
  amountStyle: {
    marginTop: 15,
    marginLeft: 10,
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
  },
  creditAmountLableStyle: {
    marginTop: 15,
    marginLeft: 10,
    color: 'green',
    fontSize: 16,
    fontWeight: '500',
  },
  balanceTextStyle: {
    marginTop: 8,
    marginLeft: 10,
    color: Colors.cust,
    fontSize: 12,
    fontWeight: '300',
  },
  animatedBox: {
    // width: '85%',
    marginLeft: 10,
    marginRight: 10,
    height: 0,
    backgroundColor: 'white',
    borderRadius: 25,
  },
});

export default PassbookList;
