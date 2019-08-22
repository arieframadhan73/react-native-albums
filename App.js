/**
 * @git ('https://github.com/arieframadhan73/');
 */

import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Album from './src/components/Album';
const App = () => {
  return (
    <View style={styles.appFlex}>
      <Header textHeaders={'Album'} />
      <Album />
    </View>
  );
};
const styles = {
  appFlex: {
    flex: 1,
  },
};

export default App;
