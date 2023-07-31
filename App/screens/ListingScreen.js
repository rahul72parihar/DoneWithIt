import React from 'react'
import Screen from '../components/Screen'
import CardComponent from '../components/CardComponent/CardComponent'
import { FlatList } from 'react-native-gesture-handler';
import colors from '../config/colors';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      subTitle: '10$',
      image: require('../assets/chair.jpg')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      subTitle: '10$',
      image: require('../assets/chair.jpg')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      subTitle: '10$',
      image: require('../assets/chair.jpg')
    },
  ];
const ListingScreen = () => {
    const renderItem = ({item})=>{
        return <CardComponent
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
        />
    }
  return (
    <Screen color={colors.backgroundGrey}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </Screen>
  )
}

export default ListingScreen