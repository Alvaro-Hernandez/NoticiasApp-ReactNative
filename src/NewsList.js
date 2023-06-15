import React, {Component, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

const NewList = ({navegation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: 'cb9dedf4ef9344a58373f12d94aefd92',
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
};
