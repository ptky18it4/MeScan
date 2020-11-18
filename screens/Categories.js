import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CategoryListItem from '../components/CategoryListItem'
export default class Categories extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            categories: [
                { id: 1, name: 'facebook', url: 'https://fb.com/kynotalkallaction' },
                { id: 2, name: 'instagram', url: 'https://www.instagram.com/kynotalkallaction/' },
                { id: 3, name: 'pinterest', url: 'https://www.pinterest.ca/phamtrungky19032000/_created/'},
                { id: 3, name: 'zalo', url: '#' },
                { id: 3, name: 'telegram', url: '#'}
            ]
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
