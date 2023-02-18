import React from 'react';
import {Avatar, Box, HStack, VStack, Text, Pressable} from 'native-base';

interface CardProps {
  avatarUrl: string;
  username: string;
  title?: string;
  content: string;
  onPress?: () => void;
  onHomeScreen?: boolean;
  isComment?: boolean;
}

export const Card: React.FC<CardProps> = ({
  avatarUrl,
  username,
  title,
  content,
  onPress,
  onHomeScreen = true,
  isComment = false,
}) => {
  return (
    <Pressable
      onPress={onHomeScreen && onPress && !isComment ? onPress : undefined}>
      <Box
        borderRadius="md"
        borderWidth={1}
        borderColor="grey.50"
        backgroundColor={!isComment ? 'secondary.100' : 'primary.400'}
        margin={2}>
        <VStack alignItems="stretch" padding="2">
          <HStack space={5} alignItems="center">
            <Avatar
              source={{
                uri: avatarUrl,
              }}
            />
            <Text fontWeight="bold" fontSize="lg">
              {username}
            </Text>
          </HStack>
          <VStack alignItems="stretch" padding="2">
            {isComment ? (
              <></>
            ) : (
              <Text fontWeight="semibold" fontSize="md" marginBottom="2">
                {title}
              </Text>
            )}

            <Text>{content}</Text>
          </VStack>
        </VStack>
      </Box>
    </Pressable>
  );
};
