import { Text, View,StyleSheet, FlatList, ScrollView } from "react-native"
import { Title } from "../Components/Header"
import { SearchBar } from "../Components/Serachbar"
import { Category } from "../Components/Category"
import { MenuCard } from "../Components/MenuCard"



export const Home=()=>{
    const arr=[1,1,1,1,1,1,1,1,1,1]
    return (
        <View>
        <Title/>
        <SearchBar/>
        <Category/>

        <View
        
        >
        <Text
        style={Styles.recipe}
        >Recipe</Text>
        <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent:"space-between"}}
        data={arr}
        renderItem={({item,index})=>
        <MenuCard key={index}/>
        }
        />
        </View>
        
        </View>
        
        )
}

const Styles=StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:"bold"
    },
    recipe:{
        fontSize:23,
        fontWeight:"bold",
        marginTop:10
    }
})