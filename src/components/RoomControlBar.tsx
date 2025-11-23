import React from 'react';
import { View, StyleSheet, Text, Platform, Pressable } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

type Props = {
  onLeave: () => void;
};

export default function RoomControlBar({ onLeave }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12) }]}
    >
      <Pressable style={styles.leaveBtn} onPress={onLeave}>
        <Text style={styles.leaveTxt}>😅 Leave Room</Text>
      </Pressable>
      <Pressable style={styles.shareBtn}>
        <Feather name="send" size={20} />
      </Pressable>
      <Pressable style={styles.handBtn}>
        <Ionicons name="hand-right-outline" size={20} />
      </Pressable>
      <Pressable style={styles.moreBtn}>
        <Feather name="more-vertical" size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
    elevation: 6,
  },
  leaveBtn: {
    padding: 15,
    backgroundColor: '#fae4ef',
    borderRadius: 20,
  },
  leaveTxt: {
    fontSize: 16,
    color: '#ea336e',
  },
  shareBtn: {
    padding: 15,
    backgroundColor: '#fae4ef',
    borderRadius: 25,
  },
  handBtn: {
    padding: 15,
    backgroundColor: '#fae4ef',
    borderRadius: 25,
  },
  moreBtn: {
    padding: 15,
    backgroundColor: '#fae4ef',
    borderRadius: 25,
  },
});
