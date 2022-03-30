import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react';
import {Divider} from 'react-native-elements'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const food = [
    {
        tittle: 'Lasagna',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: '$ 13.50',
        img: 'https://cdn.pixabay.com/photo/2018/03/21/06/54/food-3245765_960_720.jpg'
    },
    {
        tittle: 'Lasagna',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: '$ 13.50',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg'
    },
    {
        tittle: 'Lasagna',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: '$ 13.50',
        img: 'https://static.toiimg.com/photo/54327253.cms'
    },
    {
        tittle: 'Lasagna G',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: '$ 13.50',
        img: 'https://assets.architecturaldigest.in/photos/60084f361b516d492c3ab3ec/16:9/w_2560%2Cc_limit/Mumbai-restaurant-COVID-19-1366x768.jpg'
    },
    {
        tittle: 'Lasagna F',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: '$ 13.50',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg'
    },
    {
        tittle: 'Lasagna E',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: '$ 13.50',
        img: 'https://cdn.pixabay.com/photo/2018/03/21/06/54/food-3245765_960_720.jpg'
    },
    {
        tittle: 'Lasagna d',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: '$ 13.50',
        img: 'https://assets.architecturaldigest.in/photos/60084f361b516d492c3ab3ec/16:9/w_2560%2Cc_limit/Mumbai-restaurant-COVID-19-1366x768.jpg'
    }
]

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                food.map( ( item, index ) => (
                    <View key={index}>
                        <Items 
                            tittle={item.tittle}
                            description={item.description}
                            price={item.price}
                            img={item.img}
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