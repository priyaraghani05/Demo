import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';

import {image} from '@assets';
import {reasponsiveWidth, reasponsiveHeight, reasponsiveFont} from '@helper';

export class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  renderEmptyView = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Details')}>
        <Text>add</Text>
        <Image
          source={image.add}
          style={{width: reasponsiveWidth(8), height: reasponsiveWidth(8)}}
        />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>UserScreen</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.id}</Text>}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => this.renderEmptyView()}
          contentContainerStyle={{flex: 1}}
        />
      </View>
    );
  }
}
