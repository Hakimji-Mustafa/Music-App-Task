import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useContextHook} from '../Providers/ContextProvider';

const Home = () => {
  const {songList, setSondList, title} = useContextHook();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  heading: {
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
    marginVertical: 20,
  },
});
