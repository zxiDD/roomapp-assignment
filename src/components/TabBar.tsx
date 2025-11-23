import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12) }]}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <Feather name="home" size={24} color="#1e462e" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <Feather name="circle" size={24} color="#111" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <Feather name="bell" size={24} color="#111" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.plusBtn} activeOpacity={0.7}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const BAR_HEIGHT = Platform.OS === 'ios' ? 100 : 95;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: BAR_HEIGHT,
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
  plusBtn: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#b7d2bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 28,
  },
});
