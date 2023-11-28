import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  View,
  TextInput,
  Image,
} from 'react-native';
import {reasponsiveWidth, reasponsiveHeight, reasponsiveFont} from '@helper';
import {image} from '@assets';

export class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      cName: '',
      profile_image: '',
    };
  }

  renderChangeText = (key, text) => {
    console.log(text);

    switch (key) {
      case 'fName':
        this.setState({fName: text});
        break;
      case 'lName':
        this.setState({lName: text});
        break;
      case 'cName':
        this.setState({cName: text});
        break;
      default:
    }
  };

  _renderInput(key, placeholderName, name) {
    return (
      <TextInput
        style={{
          marginHorizontal: reasponsiveWidth(4),
          marginVertical: reasponsiveHeight(2),
          borderBottomWidth: 1,
          borderColor: 'grey',
        }}
        onChangeText={text => {
          this.renderChangeText(key, text);
        }}
        value={name}
        placeholder={placeholderName}
      />
    );
  }

  render() {
    return (
      <View>
        <Image
          source={image.profile}
          style={{
            width: reasponsiveWidth(15),
            height: reasponsiveWidth(15),
            marginHorizontal: reasponsiveWidth(4),
            marginVertical: reasponsiveHeight(2),
          }}
        />
        {this._renderInput('fName', 'FirstName', this.state.fName)}
        {this._renderInput('lName', 'LastName', this.state.lName)}
        {this._renderInput('cName', 'Company', this.state.cName)}
      </View>
    );
  }
}
