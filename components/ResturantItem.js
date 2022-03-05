import { View, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import React from 'react';



const dummy = [
    {
        name : "Dolor sit amet",
        image_url : "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
        categorices: ["Cafe","Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.3
    },
    {
        name : "Consectetur adipiscing",
        image_url : "https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?k=20&m=1165399909&s=612x612&w=0&h=5g5C4BDoxaejlIr4r_8cV6jDYXzN8n1-JkIW3LgPUuA=",
        categorices: ["Cafe","Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.2
    },
    {
        name : "Ante eu elit efficitur",
        image_url : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
        categorices: ["Cafe","Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.7
    },
    {
        name : "Tempor purus",
        image_url : "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg",
        categorices: ["Cafe","Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5
    }
]


export default function ResturantItem({resturants}) {
    
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{
                marginBottom:30
            }}
        >
            {
                resturants.length > 0 ? resturants.map((item,index)=> (
                    <View 
                        key={index}
                        style={{
                            marginTop: 10,
                            padding: 15,
                            backgroundColor: 'white'
                        }}
                    >
                        <ResturantImage
                            img={item.image_url}
                        />
                        <ResturantInfo
                            name={item.name}
                            rating={item.rating}
                        />
                    </View>
                )) : <Text>Loading</Text>
            }
        </TouchableOpacity>
    )
};


const ResturantImage = ({img}) => (
    <>
        <Image 
            source={{
                uri : img
            }}
            style={{
                width: "100%",
                height: 180
            }}
        />
        <TouchableOpacity
            style={{
                position:'absolute',
                right:20,
                top:  20
            }}
        >
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="white"
            />
        </TouchableOpacity>
    </>
);


const ResturantInfo = ({name,rating}) => (
    <View
        style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop:10
        }}
    >
        <View>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: "bold"
                }}
            > {name} </Text>
            <Text
                style={{
                    fontSize:13,
                    color:"gray"
                }}
            > 30-45 min </Text>
        </View>

        <View
             style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: 'center',
                borderRadius: 15,
                justifyContent: 'center'
            }}
        >
            <Text > {rating} </Text>
        </View>
    </View>
)