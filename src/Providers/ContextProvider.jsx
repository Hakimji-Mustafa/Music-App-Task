import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useContext, useState} from 'react';

const Provider = createContext();

const ContextProvider = ({children}) => {
  const [songList, setSongList] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const contextValue = {
    title: 'Music App',
    setSongList,
    songList,
    isRefreshing,
    setIsRefreshing,
  };

  return <Provider.Provider value={contextValue}>{children}</Provider.Provider>;
};

export const useContextHook = () => useContext(Provider);
export default ContextProvider;

const styles = StyleSheet.create({});
