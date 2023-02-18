import React, {useEffect} from 'react';
import useSWR from 'swr';

import {Box, ScrollView, Text} from 'native-base';
import {fetchPosts, Post} from '../data/Post';
import {Card} from '../components/Card';
import {uniqueNamesGenerator, names} from 'unique-names-generator';
import {NavigationProp} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import {generateRandomAvatarURL} from '../utils/AvatarGenerator';

interface PostListProps {
  navigation: NavigationProp<any, any>;
}

interface PressHandlerProps {
  id: string;
  title: string;
  body: string;
  username: string;
}

export const PostsList: React.FC<PostListProps> = ({
  navigation,
}: PostListProps) => {
  const {data, error, isLoading} = useSWR('posts', fetchPosts);

  const newData = data?.map((post: Post) => {
    return {
      ...post,
      username: uniqueNamesGenerator({
        dictionaries: [names],
      }),
    };
  });

  useEffect(() => {
    const handleBackButton = () => true;
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  if (isLoading) {
    return (
      <Box>
        <Text>Loading...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Text>Failed to load posts!</Text>
      </Box>
    );
  }

  const pressHandler = ({id, title, body, username}: PressHandlerProps) => {
    navigation.navigate('Post Details', {
      id: id,
      title: title,
      body: body,
      username: username,
    });
  };

  return data ? (
    <ScrollView>
      {newData?.map(post => (
        <Card
          key={post.id}
          avatarUrl={generateRandomAvatarURL(post.id)}
          username={post.username}
          title={post.title}
          content={post.body}
          onPress={() =>
            pressHandler({
              id: post.id,
              title: post.title,
              body: post.body,
              username: post.username,
            })
          }
        />
      ))}
    </ScrollView>
  ) : (
    <Box>
      <Text>No Data!!</Text>
    </Box>
  );
};
