import React from 'react'
import { Text, StyleSheet } from 'react-native'

const AppText = ({children, color="black"}) => {
  return (
    <Text style={[styles.text, {color: color}]}>{children}</Text>
  )
}
const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        fontWeight: 600,
    }
})
export default AppText