import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getSongsList} from '../Utils/Api';
import {useContextHook} from '../Providers/ContextProvider';
import {SONGS_API_URL} from '../Utils/Contants';
import DisplaySongs from './DisplaySongs';

const SongList = () => {
  const {songList, setSongList, isRefreshing, setIsRefreshing} =
    useContextHook();

  useEffect(() => {
    getSongsList(SONGS_API_URL, setSongList);
  }, []);

  const handleRefresh = () => {
    getSongsList(SONGS_API_URL, setSongList, setIsRefreshing);
  };

  if (songList.length === 0) {
    console.log('If Condition Visited');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator animating={true} size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={songList}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        renderItem={({item, index}) => (
          <DisplaySongs item={item} index={index} />
        )}
      />
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({});
