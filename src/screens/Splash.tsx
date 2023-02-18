/* eslint-disable react-hooks/exhaustive-deps */
import {Center} from 'native-base';
import React, {useEffect} from 'react';
import {Image, Dimensions} from 'react-native';
import useSWR from 'swr';
import {fetchPosts} from '../data/Post';
import {NavigationProp} from '@react-navigation/native';

interface SplashProps {
  navigation: NavigationProp<any, any>;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Splash: React.FC<SplashProps> = ({navigation}: SplashProps) => {
  const {isLoading} = useSWR('posts', fetchPosts);

  useEffect(() => {
    if (!isLoading) {
      navigation.navigate('Posts');
    }
  }, [isLoading]);

  return (
    <Center
      alignItems="center"
      justifyContent="center"
      style={{
        width: windowWidth,
        height: windowHeight * 0.8,
      }}>
      <Image
        source={require('../assets/splash.png')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 300,
          height: 300,
        }}
      />
    </Center>
  );
};
