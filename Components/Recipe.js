import { FlatList, StyleSheet, Text, View } from "react-native";
import { MenuCard } from "./MenuCard";

export const Recipe = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <View style={Styles.container}>
    
      <View style={Styles.flatListContainer}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={arr}
          renderItem={({ item,index }) => <MenuCard key={index} />}
        />
      </View>
    </View>
  );

};

const Styles = StyleSheet.create({
  container: {
   borderColor:"green",
   borderWidth:0,
   flex:1
    
   
  },
  recipe: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 10,
  },
  flatListContainer: {
    marginTop: 10,

  },
});

export default Recipe;
