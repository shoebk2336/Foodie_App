import { faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, Text, View } from "react-native"

export const Title=()=>{
    return(
        <View
        style={Styles.container}
        >
        <Text
        style={Styles.title}
        >Hi,Shoeb</Text>
        <Text>
        <FontAwesomeIcon icon={faBell}
        size={24}
        color="red"
        />
        </Text>

          </View>
        
    )
}

const Styles=StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:"bold",
        
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:40,
        justifyContent:"space-between"
    }
})