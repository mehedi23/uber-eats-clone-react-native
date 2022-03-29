import React, {useEffect, useState} from 'react';
import { View, Text , ScrollView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ResturantItem from '../components/ResturantItem';
import BottomTabs from '../components/BottomTabs';

function Home({navigation}) {
  const [city, setCity] = useState('San diago');
  const [resturants , setResturants] = useState('')

  const yelp_api = 'khKMgxwhbZWFQkp4WYL2okt_YaVWa4ZhHVJNJGWFq5dXT_JKm-zh_8fVjexgNjrknB7hsK1ekHfUEfX2D4PblgE-C17jfeScDTWOE50JRskBgg8HwGkIlr6A2voiYnYx';

  const getRestaurantsFromYelp = (e) => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${e}`;
  
      const apiOptions = {
          headers: {
              Authorization: `Bearer ${yelp_api}`,
          },
      };
  
      fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setResturants(json.businesses)
        )
        .catch((err)=>{
            console.log(err)
      })
  };

  useEffect (()=>{
    getRestaurantsFromYelp(city)
  },[city])


  const searchCity = (e) => {
    setCity(e)
  };



  return (
    <View style={{
        paddingTop: 30,
        backgroundColor : '#eee',
        flex: 1
    }}>
      <View style={{
        backgroundColor: "white",
        padding: 15
      }}>
        <HeaderTabs/>
        <SearchBar searchCity={searchCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <ResturantItem resturants={resturants} navigation={navigation}/>
      </ScrollView>
      <BottomTabs/>
    </View>
  )
}

export default Home