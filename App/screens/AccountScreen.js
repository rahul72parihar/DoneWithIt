import React from 'react'
import Screen from '../components/Screen'
import { Image, View, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'
import AccountList from '../components/accountList'

const AccountScreen = () => {
  return (
    <Screen color={colors.backgroundGrey} >
        <View style = {styles.accountContainer}>
            <Image source={require("../assets/user-avatar.png")} style={styles.userAvatar}/>
            <View style= {styles.accountDetail}>
                <Text style = {styles.bigText}>Rahul Parihar</Text>
                <Text style = {styles.smallText}>rahul72parihar@gmail.com</Text>
            </View>
        </View>
        <View style={styles.accountSection}>
            <AccountList color={colors.primary} iconName="format-list-bulleted" heading="My Listing"/>
            <AccountList color={colors.secondary}  iconName="email" heading="My Messages"/>
        </View>
        <View style={styles.accountSection}>
            <AccountList color="#ffe66d" iconName="logout" heading="Log Out"/>
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    accountContainer:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 20,
        gap: 20,
    },
    accountDetail:{
        flex: 1,
        justifyContent: 'center',
        gap: 5,
    },
    userAvatar:{
        width: 70, 
        height: 70,
        borderRadius: '50%'
    },
    bigText:{
        fontSize: 18,
        fontWeight: 600,
    },
    smallText:{
        fontSize: 16,
        color: colors.light,
    },
    accountSection:{
        marginTop: 20,
        display: "flex",
        gap: 3
    }
})

export default AccountScreen