import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, Text, TextInput, View } from "react-native"


export const SearchBar=()=>{

    return(
        <View
        style={Styles.container}
        >
        <Text
        style={{marginHorizontal:10}}
        >
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20}  />        
        </Text>
        <TextInput
        placeholder="Search your Nosh Menu"
        />
        
        </View>)
}

const Styles=StyleSheet.create({
    container:{
        borderBlockColor:'red',
        borderWidth:0,
        backgroundColor:'beige',
        padding:10,
        flexDirection:'row',
        alignItems:"center",
        
        borderRadius:20,
        marginTop:20

    },
    
})