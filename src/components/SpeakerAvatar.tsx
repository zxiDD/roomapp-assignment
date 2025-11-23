import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const { width } = Dimensions.get('window');
const SIDE_PADDING = 32;
const NUM_COLUMNS = 3;
const AVATAR_SIZE = Math.floor((width - SIDE_PADDING) / NUM_COLUMNS);

type SpeakerProps = {
  name: string;
};

export default function SpeakerAvatar({ name }: SpeakerProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarWrap}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.micBadge}>
          <Ionicons name="mic" size={20} color="#000" />
        </View>
      </View>

      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: AVATAR_SIZE,
    alignItems: 'center',
    marginBottom: 18,
  },
  avatarWrap: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: '#f2f2f2',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: AVATAR_SIZE - 6,
    height: AVATAR_SIZE - 6,
    borderRadius: (AVATAR_SIZE - 6) / 2,
  },
  micBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  name: {
    marginTop: 6,
    fontSize: 12,
    textAlign: 'center',
    width: AVATAR_SIZE + 8,
  },
});
