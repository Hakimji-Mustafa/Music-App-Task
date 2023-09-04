import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {
  item: any;
  index: number;
};

const DisplaySongs = ({item, index}: Props) => {
  const navigation = useNavigation();
  const showDetails = (song: any) => {
    navigation?.navigate('Details', {
      artist: song?.artistName,
      colName: song?.collectionName,
      country: song?.country,
      track: song?.trackNumber,
      price: song?.trackPrice,
      image: song?.artworkUrl100,
    });
  };
  return (
    <View key={index} style={styles.container}>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => showDetails(item)}>
        <Image source={{uri: item?.artworkUrl100}} style={styles.image} />

        {item?.collectionCensoredName ? (
          <Text style={styles.text}>
            {item?.collectionCensoredName?.length > 37
              ? item?.collectionCensoredName?.substring(0, 37) + '...'
              : item?.collectionCensoredName}
          </Text>
        ) : (
          <Text style={styles.text}>{item?.artistName}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DisplaySongs;

const styles = StyleSheet.create({
  container: {flex: 1},
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DEF3FF',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {fontWeight: '700', color: 'black', fontSize: 17},
});
