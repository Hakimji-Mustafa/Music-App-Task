import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  item: any;
  index: number;
};
const SongList = ({item, index}: Props) => {
  return (
    <View>
      <Text>SongList</Text>
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({});
