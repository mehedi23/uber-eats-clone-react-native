import { View } from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import About from '../components/resturant/About';
import MenuItems from '../components/resturant/MenuItems';
import SubTotalModal from '../components/resturant/SubTotalModal';
import {useSelector} from 'react-redux'

export default function Resturant({route}) {
    const [modalVisible , setModalVisible] = React.useState(false);
    const {cart_data} = useSelector(state => state.cartSlice)

    const modalToggle = (e) => {
        setModalVisible(e);
    }

    return (
        <View style={{flex:1 , position:'relative'}}>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItems/>
            {
                cart_data.length > 0 &&
                <SubTotalModal modalVisible={modalVisible} modalToggle={modalToggle}/>
            }
        </View>
    )
};