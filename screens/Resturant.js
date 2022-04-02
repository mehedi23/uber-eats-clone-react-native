import { View } from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import About from '../components/resturant/About';
import MenuItems from '../components/resturant/MenuItems';
import SubTotalModal from '../components/resturant/SubTotalModal';
import {useSelector} from 'react-redux'

export default function Resturant({route, navigation}) {
    const [modalVisible , setModalVisible] = React.useState(false);
    const {price, cart} = useSelector(state => state.foodItem)

    const modalToggle = (e) => {
        setModalVisible(e);
    };

    return (
        <View style={{flex:1 , position:'relative'}}>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItems/>

            {
                price > 0 &&
                <SubTotalModal price={price} cart={cart} modalVisible={modalVisible} modalToggle={modalToggle} navigation={navigation}/>
            }
        </View>
    )
};