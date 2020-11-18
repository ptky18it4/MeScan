import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CategoryListItem from './components/CategoryListItem'
export default class App extends React.Component {
    render() {
         return (
           <View style={styles.container}>
             <CategoryListItem />
             <CategoryListItem />
             <CategoryListItem />
             <CategoryListItem />
           </View>
         );
    }
  
}

//style component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16
    }
});
