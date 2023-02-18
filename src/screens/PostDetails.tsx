import React from 'react';
import useSWR from 'swr';

import {RouteProp} from '@react-navigation/native';
import {Card} from '../components/Card';
import {fetchComments} from '../data/Comment';
import {Box, ScrollView, Text} from 'native-base';
import {generateRandomAvatarURL} from '../utils/AvatarGenerator';

interface PostDetailsProps {
  route: RouteProp<any, any>;
}

export const PostDetails: React.FC<PostDetailsProps> = ({route}) => {
  const {params} = route;
  const {data, isLoading, error} = useSWR(['comments', params?.id], () =>
    fetchComments(params?.id),
  );

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
        <Text>Failed to load comments!</Text>
      </Box>
    );
  }

  return (
    <>
      <Card
        avatarUrl={generateRandomAvatarURL(params?.id)}
        title={params?.title}
        content={params?.body}
        onHomeScreen={false}
        username={params?.username}
        key={params?.id}
      />
      <ScrollView>
        {data ? (
          data?.length > 0 ? (
            data?.map(comment => (
              <Card
                avatarUrl={generateRandomAvatarURL(comment.id)}
                content={comment.body}
                onHomeScreen={false}
                isComment={true}
                username={comment.name}
                key={comment.id}
              />
            ))
          ) : (
            <Box>
              <Text marginLeft="2">No comments for this post!</Text>
            </Box>
          )
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
};
