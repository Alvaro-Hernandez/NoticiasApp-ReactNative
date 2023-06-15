import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

const NewsList = ({navegation}) => {
  const [news, setNews] = useState([]);

  const {container, title, newsItem, newsTitle, newsDescription} = styles;
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          sources: 'techcrunch',
          apiKey: 'cb9dedf4ef9344a58373f12d94aefd92',
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={container}>
      <Text style={title}>Top headlines from TechCrunch right now</Text>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <TouchableOpacity
            style={newsItem}
            key={item.id}
            onPress={() => navegation.navigate('NewsDetail', {newsItem: item})}>
            <Text style={newsTitle}>{item.title}</Text>
            <Text style={newsDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id?.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#EDEDED',
  },
  newsItem: {
    backgroundColor: '#323232',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
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

export default NewsList;
