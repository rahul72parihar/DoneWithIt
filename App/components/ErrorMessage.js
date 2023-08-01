import React from 'react'
import AppText from './AppText/AppText'
import { StyleSheet } from 'react-native'
import colors from '../config/colors'

const ErrorMessage = ({children, visible}) => {
  return (
    visible && <AppText style={styles.error}>{children}</AppText>
  )
}

const styles = StyleSheet.create({
    error:{
        color: colors.danger
    }
})

export default ErrorMessage