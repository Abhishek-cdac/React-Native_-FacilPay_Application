import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {walletOptions} from '../data/DummyData';
import GlobalText from './GlobalText';
import {Add_Money, Pay_Money, BankTransfer, Passbook} from '../assets';
import Colors from '../constants/Colors';
import CustomImageButton from './CustomImageButton';

const screenWidth = Dimensions.get('screen').width * 0.2;

const WalletBaseView = props => {
  const getLocalImage = image => {
    switch (image) {
      case 'Pay Money':
        return Pay_Money;
      case 'Add Money':
        return Add_Money;
      case 'Bank Transfer':
        return BankTransfer;
      case 'Passbook':
        return Passbook;
    }
  };

  return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <CustomImageButton style={styles.imageContainer} onPress = {() => props.onWalletItemClicked(props.itemId)}>
            <Image
              style={styles.imageStyle}
              source={getLocalImage(props.title)}
            />
          </CustomImageButton>
          <GlobalText style={styles.titleStyle}>{props.title}</GlobalText>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenWidth,
    width: screenWidth,
    margin: 6,
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 13,
    fontWeight: '300',
    color: Colors.primary,
  },
  imageContainer: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: 'rgba(230,246,245,1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageStyle: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});

export default WalletBaseView;
