import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react';
import {Divider} from 'react-native-elements'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useSelector , useDispatch} from 'react-redux';
import {cart_action} from '../../store/foodItem';


export default function MenuItems() {

    const dispatch = useDispatch();
    const food_data = useSelector(state => state.foodItem.data);

    const add_to_cart = (e) => {
        dispatch(cart_action(e));
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                food_data.map( ( item, index ) => (
                    <View key={index}>
                        <Items 
                            id={item.id}
                            tittle={item.tittle}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                            checked={item.checked}
                            add_to_cart={add_to_cart}
                        />
                        <Divider width={.5} orientation='vertical' />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const Items = (props) => (
    <View
        style={{
            flexDirection: 'row',
            margin:20,
            justifyContent: 'space-between'
        }}
    >
        <BouncyCheckbox
            iconStyle={{ borderColor: "lightgray", borderRadius: 5 }}
            fillColor='green'
            isChecked={props.checked}
            onPress={()=>props.add_to_cart({
                checked : !props.checked,
                id : props.id
            })}
        />
        <View
            style={{
                width:'50%',
                justifyContent: 'space-evenly'
            }}
        >
            <Text style={{ fontSize: 19, fontWeight:'bold' }}>{props.tittle}</Text>
            <Text numberOfLines = { 2 } >{props.description}</Text>
            <Text>{props.price}</Text>
        </View>
        <Image 
            style={{
                width: 100,
                height: 100,
                borderRadius:8
            }}
            source={{uri: props.img }}
        />
    </View>
);