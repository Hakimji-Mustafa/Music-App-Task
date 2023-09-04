import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const SongDetails = () => {
  const route = useRoute();
  const {artist, colName, country, track, price, image} = route?.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.text}>Artist: {artist}</Text>
      <Text style={styles.text}>Country: {country}</Text>
      <Text style={styles.text}>Track: {track}</Text>
      <Text style={styles.text}>Price: {price}$</Text>
    </View>
  );
};

export default SongDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5FBFF',
  },
  heading: {color: 'black', fontWeight: '900', fontSize: 22},
  image: {height: 100, width: 100, borderRadius: 50},
  text: {
    fontWeight: '700',
    fontSize: 17,
    color: 'black',
    marginVertical: 10,
    textAlign: 'left',
  },
});
