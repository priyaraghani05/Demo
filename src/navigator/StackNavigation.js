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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as screen from '@screens';
const Stack = createStackNavigator();

export class StackNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UserScreen" component={screen.UserScreen} />
          <Stack.Screen name="Details" component={screen.Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
