import React from 'react';
import { View , Text} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories'

function Home() {
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
        <SearchBar/>
      </View>
      <Categories/>
    </View>
  )
}

export default Home