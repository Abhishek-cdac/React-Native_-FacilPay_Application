import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  FlatList,
} from 'react-native';
import {PaymentOptionsData} from '../data/DummyData';
import {ScrollView} from 'react-native-gesture-handler';
import GlobalText from './GlobalText';
import Colors from '../constants/Colors';
import {CheckRadioImage, UncheckRadioImage} from '../assets';
import CustomImageButton from './CustomImageButton';
import DebitCardsView from './DebitCardsView';

const {height, width} = Dimensions.get('window');

const paymentOptionsArray = PaymentOptionsData;

function ExpandableView(props) {
  const springValue = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [isExpanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    toggleAnimation(1)
  }, [])

  const toggleAnimation = Id => {
    if (Id === selectedId) {
      setSelectedId(null);
      if (isExpanded == true)
        Animated.timing(springValue, {
          toValue: 0,
          timing: 2000,
          useNativeDriver: false
        }).start(setExpanded(false));
    } else {
      setSelectedId(Id);
      if (Id === 2) {
          setExpanded(false)
      } else {
        if (isExpanded == false) {
            Animated.timing(springValue, {
              toValue: 200,
              timing: 2000,
              useNativeDriver: false
            }).start(() => {
              setExpanded(true);
            });
          }
      }
      
    }
  };

  function renderSeparator() {
    return <View style={styles.separator} />;
  }

  const renderPaymentOptionsView = item => {
    const animatedStyle = {
      width: width,
      height: springValue,
    };

    return (
      <View style= {styles.containre}>
        <View style={styles.baseViewContainer}>
          <CustomImageButton
            style={styles.imageContainerStyle}
            onPress={() => toggleAnimation(item.id)}>
            <Image
              style={styles.imageStyle}
              source={
                item.id === selectedId ? CheckRadioImage : UncheckRadioImage
              }
            />
          </CustomImageButton>
          <GlobalText style={styles.itemTitleStyle}>{item.name}</GlobalText>
        </View>
        {item.id === selectedId && item.id !== 2  ? (
             <Animated.View style={[styles.animatedBox, animatedStyle]}>
              <DebitCardsView />
          </Animated.View>  ) : null}
      </View>
    );
  };

  return (
    <View style={styles.containre}>
      <FlatList
        bounces={true}
        scrollEnabled
        extraData={selectedId}
        data={paymentOptionsArray}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({item}) => renderPaymentOptionsView(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containre: {
    flex: 1,
  },
  baseViewContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 55,
  },
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },

  imageContainerStyle: {
    height: 30,
    width: 30,
    marginHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitleStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.placeholderColor,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
  },
  animatedBox: {
    width: width,
    height: 0,
  },
});

export default ExpandableView;
