import { View, Text } from 'react-native'
import React from 'react';
import {Divider} from 'react-native-elements'
import About from '../components/resturant/About'
import MenuItems from '../components/resturant/MenuItems'

export default function Resturant({route}) {
    return (
        <View style={{flex:1}}>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItems/>
        </View>
    )
}