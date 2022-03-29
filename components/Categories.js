import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'


const items = [
    {
        images: require('../assets/images/shopping-bag.png'),
        text: "Pick-up"
    },
    {
        images: require('../assets/images/soft-drink.png'),
        text: "Soft Drink"
    },
    {
        images: require('../assets/images/bread.png'),
        text: "Bakery Items"
    },
    {
        images: require('../assets/images/fast-food.png'),
        text: "Fast Foods"
    },
    {
        images: require('../assets/images/deals.png'),
        text: "Deals"
    },
    {
        images: require('../assets/images/coffee.png'),
        text: "Coffee & Tea"
    },
    {
        images: require('../assets/images/desserts.png'),
        text: "Desserts"
    }
]

export default function Categories() {
    return (
        <View
            style={{
                backgroundColor: "white",
                paddingVertical: 10,
                paddingLeft: 20,
                marginTop: 5
            }}
        >
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    items.map((item, index)=>(
                        <View
                            key={index}
                            style={{
                                alignItems: 'center',
                                marginRight: 30
                            }}
                        >
                            <Image 
                                source={item.images}
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'contain'
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 13,
                                    fontWeight: '700'
                                }}
                            >{item.text}</Text>
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    )
}