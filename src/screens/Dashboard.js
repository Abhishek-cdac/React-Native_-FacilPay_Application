import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  ScrollView,
  Alert
} from 'react-native';


import Colors from '../constants/Colors';
import CustomStatusBar from '../components/CustomStatusBar';
import CustomImageButton from '../components/CustomImageButton';
import {
  Menu,
  Facil_HomeLogo,
  Search,
  Notification,
  Promo_Banner1,
  Promo_Banner2,
  
} from '../assets';
import WalletBaseView from '../components/WalletBaseView';
import CategoryRecharge from '../components/CategoryRecharge';
import Promotions from '../components/Promotions';
import { dummyArray } from '../data/HardCodedData';



const dataArr = [
  {
    id: '1',
    title: 'Pay Money',
    screenName: "PayMoneyScreen",
  },
  {
    id: '2',
    title: 'Add Money',
    screenName: "AddMoneyToWallet",
  },
  {
    id: '3',
    title: 'Bank Transfer',
    screenName: "BankTransfer",
  },
  {
    id: '4',
    title: 'Passbook',
    screenName: 'PassbookList',
  },
];

const rechargeCategory = [
    {
      id: '1',
      title: 'Mobile Recharge',
      screenName: "MobileRecharge",
    },
    {
      id: '2',
      title: 'DTH Recharge',
      screenName: "MobileRecharge",
    },
    {
      id: '3',
      title: 'Pay Water Bill',
      screenName: "PayElectricityScreen",
    },
    {
      id: '4',
      title: 'Pay Electricity Bill',
      screenName: "PayElectricityScreen",
    },
    {
        id: '5',
        title: 'Data Card Refill',
        screenName: "DataCardRecharge",
    },
    {
        id: '6',
        title: 'Book Make Up',
        screenName: 'MakeUpScreen'
    },
  ];

const Dashboard = ({ navigation }) => {

  const [isTapped, setIsTapped] = useState(false)

  const sideMenuInputHandler = () => {
    navigation.toggleDrawer();
  }

  const onItemClicked = (id) => {
    let message = rechargeCategory.filter((item) => item.id === id)
    console.log(message[0].title)
    if (message[0].title == 'DTH Recharge') {
      navigation.push(message[0].screenName, {
        screenName: 'DTH',
      })
    }else if(message[0].title == 'Data Card Refill'){
      navigation.push(message[0].screenName)
    }else if(message[0].title == 'Pay Water Bill'){
      navigation.push(message[0].screenName, {
        screenName: 'WaterBill',
      })
    }else if(message[0].title == 'Pay Electricity Bill'){
      navigation.push(message[0].screenName, {
        screenName: 'Electricity',
      })
    }else if(message[0].title == 'Book Make Up'){
      navigation.push(message[0].screenName)
    }else {
      navigation.push(message[0].screenName, {
        screenName: 'Mobile'
      });
    }
  }

  const walletContainerItemClicked = (Id) => {
    console.log(Id)
    let message = dataArr.filter((item) => item.id === Id)
    if (message[0].title == "Pay Money") {
      navigation.push(message[0].screenName,{
        screenName: "Pay Money"
      });
    }else {
      navigation.push(message[0].screenName);
    }
  }

  return (
      
     <View style = {styles.container}>
      
      <View style={styles.topBaseViewContainer}>
      {/* custom navigation bar */}
        <View style={styles.customHeaderContainer}>
          <View style={styles.headerSubView}>
            <CustomImageButton onPress = {sideMenuInputHandler} >
              <Image style={styles.menuStyle} source={Menu} />
            </CustomImageButton>

            <Image style={styles.facilPayLogoStyle} source={Facil_HomeLogo} />
          </View>

          {/* Search & Notification Button */}
          <View style={styles.headerSubView}>
            <CustomImageButton style={{marginRight: 10}}>
              <Image style={styles.menuStyle} source={Search} />
            </CustomImageButton>
            <CustomImageButton>
              <Image style={styles.menuStyle} source={Notification} />
            </CustomImageButton>
          </View>
        </View>            
      </View>

      <ScrollView style = {styles.scrollViewContainer} showsVerticalScrollIndicator = {false}>
       <View>
       <View style={styles.categoryStyle}>
          <FlatList
            numColumns = {3}
            showsVerticalScrollIndicator = {false}
            keyExtractor={item => item.id}
            data={rechargeCategory}
            renderItem={({item}) => (
                <CategoryRecharge title = {item.title} index = {item.id} onItemClicked = {onItemClicked}  />
            )}
          />
        </View>

        <Promotions style={styles.promotionalBaseView} data = {dummyArray}/>
        </View>
       </ScrollView>

      <View style={styles.tableContainer}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
            keyExtractor={item => item.id}
            data={dataArr}
            renderItem={({item}) => (
                <WalletBaseView title={item.title} itemId={item.id} onWalletItemClicked = {walletContainerItemClicked}/>
            )}
          />
        </View>   
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBaseViewContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.25,
    backgroundColor: Colors.primary,
  },
  scrollViewContainer: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 30,
  },

  customHeaderContainer: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  menuStyle: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
  },
  facilPayLogoStyle: {
    height: 45,
    width: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginLeft: 16,
    alignSelf: 'center',
  },
  headerSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableContainer: {
    height: 160,
    width: '93%',
    backgroundColor: 'white',
    marginTop: Dimensions.get('window').height * 0.25 - 90,
    alignSelf: 'center',
    position: 'absolute',

    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 3,
    borderRadius: 15,
  },
  categoryStyle: {
      height: Dimensions.get('window').height * 0.35,
      width: '90%',
      marginTop: Dimensions.get('window').height * 0.25 - 90,
      marginLeft: 16,
      marginRight: 16,
  },
  promotionalBaseView: {
    marginLeft: 16,
    marginRight: 16,
  }
});

export default Dashboard;



