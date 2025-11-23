import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from '@react-native-vector-icons/feather';
import { useUserStore } from '../stores/UserStore';

type Props = {
  scrollY: Animated.Value;
};

const Header = ({ scrollY }: Props) => {
  const user = useUserStore(s => s.user);

  const nameOpacity = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const roomsOpacity = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const roomsTranslateY = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [6, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Feather name="user" size={24} />
      </View>
      <Animated.View style={[styles.nameContainer, { opacity: nameOpacity }]}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>
      </Animated.View>

      <Animated.View
        style={[
          styles.roomsContainer,
          {
            opacity: roomsOpacity,
            transform: [{ translateY: roomsTranslateY }],
          },
        ]}
      >
        <Text style={styles.name}>Rooms</Text>
      </Animated.View>
      <Pressable style={styles.search}>
        <Feather name="search" size={24} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    gap: 15,
    alignItems: 'center',
  },
  greeting: {
    color: '#8e8e94',
    fontSize: 14,
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  roomsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    alignSelf: 'flex-end',
    backgroundColor: '#f4f4f4',
    padding: 7,
    borderRadius: 15,
  },
  avatar: {
    alignSelf: 'flex-start',
    backgroundColor: '#f09980',
    padding: 7,
    borderRadius: 17,
  },
});
