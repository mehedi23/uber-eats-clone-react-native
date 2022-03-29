import { View, Text, Image } from 'react-native'
import React from 'react';



const yelpResturantInfo = {
    name : 'Special 🔥🔥 BBQ Chiken Wings Hot 🥵🥵',
    img : 'https://img.freepik.com/free-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg',
    price : '$$',
    reviews : 1500,
    rating : 4.5,
    categories : [
        {tittle : 'Thia'},
        {tittle : 'Comfort food'},
        {tittle : 'Ice Cream'},
        {tittle : 'Snacks'}
    ]
};

const { name, img, price, rating, categories, reviews } = yelpResturantInfo;
const formate_category = categories.map((cat) => cat.tittle).join('▪️');


export default function About() {
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
