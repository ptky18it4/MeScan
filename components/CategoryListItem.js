import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import LogoImage from '../assets/images/logo.png';

export default function CategoryListItem(props) {
  return (
    <View>
      <Image style={styles.logoImage} source={LogoImage}/>
      <Text style={styles.title}>®Alright by Trung Ky</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
  logoImage: {
    width: 128,
    height: 40,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "700",
  }
});
