import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import {StackNavigation} from '@navigator';

class App extends React.Component {
  render() {
    return <StackNavigation />;
  }
}

export default App;
