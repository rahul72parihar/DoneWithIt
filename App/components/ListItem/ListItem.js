import { StyleSheet, View, Image, Text } from 'react-native'
const ListItem = ({image, title, subtitle}) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View>
            <Text style= {styles.title}>{title}</Text>
            <Text style= {styles.subtitle}>{subtitle}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: 'row',
        padding: 20,
        gap: 10,
    },
    image:{
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    title:{
        fontSize: 17,
        fontWeight: 600,
    },
    subtitle:{
        color: "grey",
    },
})

export default ListItem