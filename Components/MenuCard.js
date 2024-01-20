import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Image, StyleSheet, Text, View } from "react-native"




export const MenuCard=()=>{

    return(
        <View
        style={Styles.container}
        >
        <Image source={{uri:"https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"}}
        style={{width:150,height:150}}
        />
        <View
        style={Styles.menudetailcontainer}
        >
            <Text
            style={Styles.menutitle}
            >Chicken Manchau</Text>

            <View
            style={{
                flexDirection:"row",
                justifyContent:'space-between'
            }}
            >
            <Text style={Styles.menutitle}>40 mins</Text>
            <Text>|</Text>
            <Text style={{...Styles.menutitle}} >4.6
            <FontAwesomeIcon icon={faStar}  color="red" />
            </Text>
            </View>
        </View>
        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        borderColor:"red",
        backgroundColor:"white",
        borderWidth:0,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"#000",
        borderRadius:16,
        padding:12
        


    },
    menudetailcontainer:{
        marginTop:10,
    },
    menutitle:{
        fontSize:15,
        fontWeight:'500',
        alignItems:"center",
            }
})