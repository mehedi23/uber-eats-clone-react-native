import { View, Text, TouchableOpacity, Modal,Pressable } from 'react-native'
import React from 'react';
import {Divider} from 'react-native-elements'
import About from '../components/resturant/About'
import MenuItems from '../components/resturant/MenuItems'
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
import SubTotalModal from '../components/resturant/SubTotalModal'


export default function Resturant({route}) {
    const [modalVisible , setModalVisible] = React.useState(false);

    const modalToggle = (e) => {
        setModalVisible(e);
    }

    return (
        <View style={{flex:1 , position:'relative'}}>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItems/>
            <SubTotalModal modalVisible={modalVisible} modalToggle={modalToggle}/>
        </View>
    )
};