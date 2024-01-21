import { Text, View,StyleSheet, FlatList, ScrollView, SafeAreaView } from "react-native"
import { Title } from "../Components/Header"
import { SearchBar } from "../Components/Serachbar"
import { Category } from "../Components/Category"
import { MenuCard } from "../Components/MenuCard"
import { Recipe } from "../Components/Recipe"



export const Home=()=>{
    return (
        <SafeAreaView
        style={Styles.container}
        >
        <Title/>
        <SearchBar/>
        <Category/>
        <Text style={Styles.recipe}>Recipe</Text>
       <Recipe/>
        </SafeAreaView>
        
        )
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1faee',
        paddingHorizontal:18
    },
    recipe:{
        fontSize:23,
        fontWeight:"bold",
        marginTop:10
    },
    title:{
        fontSize:30,
        fontWeight:"bold"
    },
   
})