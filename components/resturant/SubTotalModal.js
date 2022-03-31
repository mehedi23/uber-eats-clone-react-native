import { View, Text, Modal, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'

export default function SubTotalModal({modalVisible, modalToggle}) {
    return (
        <>
            <View
                style={{
                    position:'absolute',
                    bottom:70,
                    zIndex:999,
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'center',
                    width:'100%'
                }}
                >
                <TouchableOpacity
                    activeOpacity={.8}
                    style={{
                        backgroundColor: '#000',
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignItems: 'center',
                        minWidth: '70%',
                        padding: 13,
                        borderRadius:30
                    }}
                    onPress={()=> modalToggle(true)}
                >
                    <Text 
                        style={{
                            color: 'white',
                            fontSize:20,
                            minWidth:'40%',
                            textAlign:'center'
                        }}
                    > View Cart</Text>
                    <Text 
                        style={{
                            color: 'white',
                            fontSize:18
                        }}
                    > 123 $</Text>
                </TouchableOpacity>
            </View>
            <RenderContent modalVisible={modalVisible} modalToggle={modalToggle}/>
        </>
    )
};


const RenderContent = ({modalVisible, modalToggle}) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
    >
        <View
            style={{
                flexDirection:'column-reverse',
                height: '100%',
                position:'relative'
            }}
        >
            <Pressable
                onPress={()=> modalToggle(false)}
                style={{
                    position:'absolute',
                    width:'100%',
                    height:'100%',
                    backgroundColor: '#0006',
                }}
            >
            </Pressable>
            <View
                style={{
                    backgroundColor: 'white',
                    padding: 16,
                    height: '65%',
                }}
            >  
                <ScrollView>
                    <Text 
                        style={{
                            textAlign:'center',
                            fontWeight: 'bold',
                            fontSize: 16
                        }}
                    >Beachside Bar</Text>

                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            borderBottomWidth: 1,
                            borderBottomColor: '#0008',
                            padding:13
                        }}
                    >
                        <Text style={{fontWeight:'700', fontSize:16}}> Any Name </Text>
                        <Text style={{fontWeight:'700', fontSize:16}}> 23 $ </Text>
                    </View>
                    


                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            paddingVertical:13
                        }}
                    >
                        <Text style={{fontWeight:'700', fontSize:16}}> Sub Total </Text>
                        <Text style={{fontWeight:'700', fontSize:16}}> 23 $ </Text>
                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'center'
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={{
                                    backgroundColor:'#000',
                                    color:'#fff',
                                    paddingHorizontal:50,
                                    paddingVertical:13,
                                    fontSize:18,
                                    borderRadius:30,
                                    marginTop:50
                                }}
                            >Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </View>
    </Modal>
);