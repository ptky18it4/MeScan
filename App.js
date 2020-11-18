import React from "react";
import { StyleSheet, Text,ScrollView, View } from "react-native";

import CategoryListItem from './components/CategoryListItem'
export default class App extends React.Component {
    render() {
         return (
           <View>
             <ScrollView style={styles.scrollView}>
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
               <CategoryListItem />
             </ScrollView>
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
    paddingRight: 16,
  },
  scrollView: {
    paddingRight: 16,
    paddingLeft: 16,
  },
});
