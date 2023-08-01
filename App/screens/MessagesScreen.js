import React, {useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from '../components/ListItem/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {id:1, title:'T1',description:'D1', image:require('../assets/user-avatar.png')},
    {id:2, title:'T2',description:'D2', image:require('../assets/user-avatar.png')},
]

const MessagesScreen = () => {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = (message) =>{
        setMessages(messages.filter(m=>m.id!==message.id))
    }
  return (
    <Screen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item})=> 
                <ListItem
                title = {item.title}
                subtitle={item.description}
                image={item.image}
                onPress={()=>console.log("Message Recieved")}
                renderRightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)}></ListItemDeleteAction>}
                />}
            ItemSeparatorComponent= {ListItemSeparator}
            refreshing={refreshing}
            onRefresh={()=>{setMessages(initialMessages)}}
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen