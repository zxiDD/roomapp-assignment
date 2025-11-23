import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from '@react-native-vector-icons/feather';
import { useUserStore } from '../stores/UserStore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

const RoomHeader = () => {
  const user = useUserStore(s => s.user);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.avatar}>
        <Feather name="user" size={24} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>
      </View>
      <Pressable style={styles.search}>
        <Ionicons name="bookmark-outline" size={24} />
      </Pressable>
    </View>
  );
};

export default RoomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 15,
    gap: 15,
    alignItems: 'center',
    backgroundColor: '#eff2f8',
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
