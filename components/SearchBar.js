import React, {useState} from 'react';
import {View, Text , TextInput , TouchableOpacity} from 'react-native';
import {Ionicons, AntDesign} from 'react-native-vector-icons'
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function SearchBar({searchCity}) {
    const [searchBox, setSearchBox] = useState('');


    const search_now = () => {
        searchCity(searchBox)
    }


    return (
        <>

            <View
                style={{
                    marginTop:15,
                    flexDirection:'row',
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    paddingVertical: 7,
                    alignItems: 'center'
                }}
            >
                <View style={{
                    marginLeft: 10
                }}>
                    <Ionicons 
                        name='location-sharp'
                        size={24}
                    />
                </View>
                <TextInput
                    placeholder='Search'
                    style={{
                        fontWeight: "700",
                        marginTop: 7,
                        width: "60%",
                        marginHorizontal:10
                    }}
                    onChangeText={(e)=>setSearchBox(e)}
                />
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginRight: 8,
                        backgroundColor: 'white',
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center"
                    }}

                    onPress={()=>search_now()}
                >
                    <AntDesign 
                        name='clockcircle'
                        size={11}
                        style={{
                            marginRight: 5
                        }}
                    />
                    <Text> Search </Text>
                </TouchableOpacity>
            </View>

        {/* 
            <View style={{
                marginTop:15,
                flexDirection:'row'
            }}>
                
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    styles={{
                        textInput: {
                            backgroundColor: "#eee",
                            borderRadius: 20,
                            fontWeight: "700",
                            marginTop: 7
                        },
                        textInputContainer: {
                            backgroundColor: "#eee",
                            borderRadius: 50,
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 10
                        }
                    }}
                    renderLeftButton={()=>
                        <View style={{
                            marginLeft: 10
                        }}>
                            <Ionicons 
                                name='location-sharp'
                                size={24}
                            />
                        </View>
                    }
                    renderRightButton={()=> (
                        <View
                            style={{
                                flexDirection: 'row',
                                marginRight: 8,
                                backgroundColor: 'white',
                                padding: 9,
                                borderRadius: 30,
                                alignItems: "center"
                            }}
                        >
                            <AntDesign 
                                name='clockcircle'
                                size={11}
                                style={{
                                    marginRight: 5
                                }}
                            />
                            <Text> Search </Text>
                        </View>
                    )}
                />
            </View> */}
        </>
    )
}

export default SearchBar