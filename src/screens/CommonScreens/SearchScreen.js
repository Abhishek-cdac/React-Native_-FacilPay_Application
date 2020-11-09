import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import CustomNavigationBar from '../../components/CustomNavigationBar';
import { makeArtist_List, ElectricityBoardList } from '../../data/DummyData';
import { FlatList } from 'react-native-gesture-handler';
import MakeUpArtists from '../../components/MakeUpArtists';
import Colors from '../../constants/Colors';

const makeUpArtistList = makeArtist_List;
const ElectricityBoardsArray = ElectricityBoardList;

const SearchScreen = props => {

    const {type} = props.route.params;
    const [objectTypes, setObjectTypes] = useState({type: '',list: []});

    React.useEffect(() => {

        console.log(type);
        if (type === 'Electricity') {
            setObjectTypes(
                {
                    type: 'Electricity',
                    list: ElectricityBoardsArray,
                    title: 'Select Electricity Board',
                }
            );

        }else if (type === 'MakeUp') {
            setObjectTypes(
                {
                    type: 'MakeUp',
                    list: makeUpArtistList,
                    title: 'Select Makeup Artist',
                }
            );
        }
    },[]);

    const backBtnHandler = () => {
        props.navigation.goBack();
    }


    const seperatorComponent = () => {
        return (
            <View style= {styles.seperator} />
        );
    }
    //Artist Selection Handler
    const artistSelection = name => {
        
            type == 'MakeUp' ? (
                props.navigation.navigate('MakeUpScreen', {
                post: name
            })
            ) : (
                props.navigation.navigate('PayElectricityScreen', {
                    post: name
                })
            )
    }

    return (
        <View style= {styles.container}>
        
        <CustomNavigationBar 
            style= {{marginTop: -20}}
            title= {objectTypes.title}
            backBtnClicked={backBtnHandler}
        />

        <View style= {{flex: 1}}>
        {
            (objectTypes.type == 'MakeUp') ? (
                <View>
                  <FlatList
                   data = {objectTypes.list}
                   keyExtractor=  {item => item.id}
                   ItemSeparatorComponent = {seperatorComponent}
                   renderItem = {({item}) => 
                <MakeUpArtists item = {item} artistSelected = {artistSelection} type= "MakeUp"/>
                 }
                /> 
            </View>
            ) : (
                <View>
                  <FlatList
                   data = {objectTypes.list}
                   keyExtractor=  {item => item.id}
                   ItemSeparatorComponent = {seperatorComponent}
                   renderItem = {({item}) => 
                <MakeUpArtists item = {item} artistSelected = {artistSelection} type= "Electricity"/>
                 }
                /> 
            </View>
            )
        }
        {/* <FlatList
            data = {makeUpArtistList}
            keyExtractor=  {item => item.id}
            ItemSeparatorComponent = {seperatorComponent}
            renderItem = {({item}) => 
            <MakeUpArtists item = {item} artistSelected = {artistSelection}/>
            }
        />  */}
        </View>
     

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperator: {
        marginHorizontal: 20, 
        height: 1, 
        backgroundColor: Colors.customTextBorder,
    }

});


export default SearchScreen
