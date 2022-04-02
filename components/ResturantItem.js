import { View, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import React from 'react';

const loader = require('../assets/icons/loader.gif')


export default function ResturantItem({resturants, navigation}) {
    return (
        <>
            {
                resturants.length > 0 ? resturants.map((item,index)=> (
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{
                            marginBottom:30
                        }}
                        onPress={() => navigation.navigate('Resturant', {
                            name : item.name,
                            img : item.image_url,
                            price : item.price,
                            rating : item.rating,
                            reviews : item.review_count,
                            categories : item.categories
                        })}
                        key={index}
                    >
                        <View 
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
                    </TouchableOpacity>
                )) :
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 100
                    }}
                >
                    <Image 
                        source={loader}
                        style={{
                            width: 60,
                            height: 60,
        
                        }}
                    />
                </View>
            }
        </>
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