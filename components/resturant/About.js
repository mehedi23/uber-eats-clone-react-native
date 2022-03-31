import { View, Text, Image } from 'react-native'
import React from 'react';


export default function About(props) {
    const { name, img, price, rating, categories, reviews } = props.route.params;
    const formate_category = categories.map((cat) => cat.title).join('▪️');
    
    return (
        <View>
            <Image source={{uri:img}} style={{width:'100%', height:180}}/>
            <Text
                style={{
                    fontSize: 25,
                    fontWeight:'600',
                    marginTop: 10,
                    marginHorizontal: 15
                }}
            >{name}</Text>
            <Text
                style={{
                    fontSize:15,
                    marginTop: 10,
                    marginHorizontal: 15
                }}
            >
                {formate_category} ▪️ 💵 {price} ▪️ {rating}⭐ ▪️ ({reviews}+)
            </Text>
        </View>
    )
}
