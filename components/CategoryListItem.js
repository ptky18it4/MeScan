import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import LogoImage from '../assets/images/logo.png';

export default function CategoryListItem (props)
{
  const { category } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        Alert.alert("Click!");
      }}
    >
      <View style={styles.container}>
        <Image style={styles.logoImage} source={LogoImage} />
        <Text style={styles.title}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 1,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
  logoImage: {
    width: 150,
    height: 40,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "700",
  },
});
