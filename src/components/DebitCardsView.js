import React,{useState} from 'react';
import {View, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import GlobalText from './GlobalText';

const {height, width} = Dimensions.get('window');

const DebitCardsView = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer1}>
        <TextInput
          style={styles.placeholder}
          maxLength={4}
          selectionColor={Colors.placeholderColor}
        />
        <TextInput style={styles.placeholder} maxLength={4} selectionColor={Colors.placeholderColor}/>
        <TextInput style={styles.placeholder} maxLength={4} selectionColor={Colors.placeholderColor}/>
        <TextInput style={styles.placeholder} maxLength={4} selectionColor={Colors.placeholderColor}/>
      </View>
      <View style={styles.textContainer2}>
        <View style={styles.cardHolderNameContainerStyle}>
          <GlobalText
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: Colors.placeholderColor,
              textAlign: 'left',
            }}>
            Card Holder Name
          </GlobalText>
          <TextInput
            style={styles.cardHolderNameStyle}
            placeholder="Enter name"
            selectionColor={Colors.placeholderColor}
          />
        </View>
        <View style={styles.cvvContainerStyle}>
          <GlobalText
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: Colors.placeholderColor,
            }}>
            Card Expiry
          </GlobalText>
          <TextInput
            style={styles.cardHolderNameStyle}
            placeholder="mm/yy"
            maxLength={5}
            selectionColor={Colors.placeholderColor}
          />
        </View>
        <View style={styles.cvvContainerStyle}>
          <GlobalText
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: Colors.placeholderColor,
            }}>
            Enter CVV
          </GlobalText>
          <TextInput
            style={styles.cardHolderNameStyle}
            placeholder="3 digit no."
            maxLength={3}
            secureTextEntry={true}
            selectionColor={Colors.placeholderColor}
          />
        </View>
      </View>
      <View style={styles.bottomSwitchContainer}>
        <Switch
          style={styles.bottomSwitchStyle}
          trackColor={{false:Colors.darkGray , true: Colors.primary}}
          thumbColor="#f4f3f4"
          ios_backgroundColor= {Colors.darkGray}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <GlobalText
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: Colors.placeholderColor,
            textAlign: 'left',
          }}>
          {' '}
          Saved card for future transactions
        </GlobalText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer1: {
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textContainer2: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardHolderNameContainerStyle: {
    width: width / 2 - 35,
    height: 45,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cvvContainerStyle: {
    width: width / 4 - 35,
    height: 45,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardHolderNameStyle: {
    borderColor: Colors.placeholderColor,
    borderWidth: 1,
    borderRadius: 4,
    height: 30,
    marginTop: 10,
    width: '100%',
    padding: 5,
  },

  placeholder: {
    width: width / 4 - 35,
    height: 30,
    borderColor: Colors.placeholderColor,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
  },
  bottomSwitchContainer: {
    marginHorizontal: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
  },
  bottomSwitchStyle: {
    marginRight: 5,
    marginLeft: 10,
  },
});

export default DebitCardsView;
