import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Title } from "./Header"



export const Category=()=>{
    const arr=[1,1,1,1,1]
    return(
        <View>
            <View>
                <Text
                style={Styles.title}
                >
                Categories
                </Text>
            </View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={Styles.cardcontainer}
            >
                {arr.map((title,index)=>
                    
                <View
                key={index}
                style={Styles.card}
                >
                <Text
                style={Styles.menuText}
                >Cusine</Text>
                </View>
                    )}
            </ScrollView>
        </View>
    )
} 

const Styles=StyleSheet.create({
    title:{
        
        fontSize:23,
        fontWeight:"bold",
        marginTop:10
    },
    card:{
        borderColor:"red",
        borderWidth:0,
        backgroundColor:"white",
        paddingHorizontal:18,
        paddingVertical:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:16,
        shadowColor:'#000',
        shadowOffset:0.1,
        shadowRadius:7,
        marginHorizontal:10,
        marginTop:10
    },
    menuText:{
        fontSize:18,
        fontWeight:'500'
    },
    cardcontainer:{
        flexDirection:"row",
        
    }

})