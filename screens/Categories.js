import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CategoryListItem from '../components/CategoryListItem'
export default class Categories extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "facebook" },
        { id: 2, name: "youtube" },
        { id: 3, name: "zalo" },
        { id: 4, name: "instagram" },
        { id: 5, name: "telegram" },
        { id: 6, name: "pinterest" },
        { id: 7, name: "gmail" },
        { id: 8, name: "coding" },
        { id: 9, name: "travel" },
      ],
    };
  }
    render ()
    {
      const { categories } = this.state;
      return (
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={(item) => "${item.id}"}
          contentContainerStyle={styles.scrollView}
        />
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
  }
});
