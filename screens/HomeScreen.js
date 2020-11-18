import React from 'react';
import { Button, Text, View, StyleSheet, ScrollView, FlatList  } from 'react-native';
import CategoryListItem from '../components/CategoryListItem'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen.</Text>

        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Details')
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;