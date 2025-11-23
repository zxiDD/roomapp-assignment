import { Animated, FlatList, Platform, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import RoomCard from '../../components/RoomCard';
import { Room, useRoomStore } from '../../stores/RoomsStore';
import TabBar from '../../components/TabBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<Room>);
  const rooms = useRoomStore(s => s.rooms);

  const renderItem = ({ item }: { item: Room }) => (
    <RoomCard room={item} onPress={() => navigation.navigate('RoomScreen')} />
  );

  const FADE_DISTANCE = 80;
  const headingOpacity = scrollY.interpolate({
    inputRange: [0, FADE_DISTANCE * 0.6, FADE_DISTANCE],
    outputRange: [1, 0.4, 0],
    extrapolate: 'clamp',
  });

  const headingTranslateY = scrollY.interpolate({
    inputRange: [0, FADE_DISTANCE],
    outputRange: [0, -8],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header scrollY={scrollY} />
      <Animated.Text
        style={[
          styles.heading,
          {
            opacity: headingOpacity,
            transform: [{ translateY: headingTranslateY }],
          },
        ]}
      >
        🏡 Room
      </Animated.Text>
      <AnimatedFlatList
        data={rooms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        showsVerticalScrollIndicator={false}
      />
      <TabBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    position: 'relative',
    marginTop: 16,
    marginBottom: 8,
    fontSize: 28,
    fontWeight: '800',
    color: '#111',
    alignSelf: 'center',
  },
  contentContainerStyle: {
    paddingRight: 25,
    paddingBottom: Platform.OS === 'ios' ? 100 : 95,
  },
});
