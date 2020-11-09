import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import PostLoginStack from './PostLoginStack';
import PreLoginStack from './PreLoginStack';
import SplashScreen from '../screens/SplashScreen';

const AppNavigator = ({ status }) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let timeout = setTimeout(() =>  setLoading(false), 1000
        )
        return () => {
            clearTimeout(timeout)
        }
    }, [])

     if (isLoading) {
        return <SplashScreen />
    }
    

    return (
        <NavigationContainer>
            {
                status !== '' ? <PostLoginStack /> : <PreLoginStack />
            }
        </NavigationContainer>
    );
}

const mapStateToProps = state => {
    return {
        status: state.status
    }
}

export default connect(mapStateToProps)(AppNavigator)