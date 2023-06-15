import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const NewsDetail = ({navigation}) => {
  const route = useRoute();
  const newsItem = route.params?.newsItem;

  return (
    <View>
      <Text>{newsItem.title}</Text>
      <Text>{newsItem.description}</Text>
    </View>
  );
};

export default NewsDetail;
