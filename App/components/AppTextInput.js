import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
const AppTextInput = ({icon,...otherProps}) => {
  const [text,setText] = useState('')
  return (
    <View style = {styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={25}/>}
        <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width:'100%',
        padding: 15,
        marginVertical: 10,
    },
    textInput: defaultStyles.text
})

export default AppTextInput