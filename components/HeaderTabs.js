import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



function HeaderTabs() {
    const [activteTab, setActiveTab] = useState("Delivery")

    return (
        <View
            style={{
                flexDirection: "row",
                alignSelf: "center"
            }}
        >
            <HederButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activteTab={activteTab}
                setActiveTab ={setActiveTab}
            />
            <HederButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activteTab={activteTab}
                setActiveTab ={setActiveTab}
            />
        </View>
    )
};

export default HeaderTabs;




const HederButton = ({text, btnColor, textColor, activteTab, setActiveTab}) => (
    <TouchableOpacity
        style={{
            backgroundColor: activteTab === text ? "black":"white",
            borderRadius: 50,
            paddingHorizontal: 16,
            paddingVertical: 6
        }}

        onPress={()=>setActiveTab(text)}
    >
        <Text
            style={{
                color: activteTab !== text ? "black":"white",
                fontSize: 15
            }}
        > {text} </Text>
    </TouchableOpacity>
)