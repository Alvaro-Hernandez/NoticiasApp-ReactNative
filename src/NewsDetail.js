import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const NewsDetail = ({navigation}) => {
  const route = useRoute();
  const newsItem = route.params?.newsItem;
  const {container, newsTitle, newsDescription} = styles;
  return (
    <View style={container}>
      <Text style={newsTitle}>{newsItem.title}</Text>
      <Text style={newsDescription}>{newsItem.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#F4F4F4',
  },
  newsDescription: {
    fontSize: 14,
    color: '#CCCCCC',
  },
});
export default NewsDetail;
