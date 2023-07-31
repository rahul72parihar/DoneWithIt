import React from 'react'
import {View, StyleSheet, Text } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';

const AccountList = ({color, iconName, heading}) => {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor:color,...styles.iconView}}>
            <MaterialCommunityIcons name={iconName} size={30} color='white'/>
        </View>
        <View style={styles.heading}>
            <Text style={styles.headingText}>
                {heading}
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
    },
    iconView:{
        borderRadius: '50%',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading:{
        flex: 1,
        justifyContent: 'center',
    },
    headingText:{
        fontSize: 18,
        paddingHorizontal: 10,
    }
})

export default AccountList