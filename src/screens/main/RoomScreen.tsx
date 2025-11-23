import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import SpeakerAvatar from '../../components/SpeakerAvatar';
import Feather from '@react-native-vector-icons/feather';
import RoomHeader from '../../components/RoomHeader';
import RoomControlBar from '../../components/RoomControlBar';

type Props = NativeStackScreenProps<RootStackParamList, 'RoomScreen'>;

export const demoSpeakers = [
  {
    id: 's1',
    name: 'Patrícia Ribeiro',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's2',
    name: 'Farhad Tarokh',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's3',
    name: 'Xing Zheng',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's4',
    name: 'Asharaful',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's5',
    name: 'Jacqueline',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's6',
    name: 'Fátima',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's7',
    name: 'Roman Kutepov',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's8',
    name: 'Niek Bove',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's9',
    name: 'Sofia Manzano',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's10',
    name: 'Daniel Harper',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's11',
    name: 'Lena Marsh',
    avatar: '../assets/avatar.png',
  },
  {
    id: 's12',
    name: 'Kelly Watson',
    avatar: '../assets/avatar.png',
  },
];

const ListHeader = () => {
  return (
    <View style={styles.ListHeaderStyle}>
      <View>
        <Text style={styles.headerTopic}>Be a boss</Text>
        <Text style={styles.headerTitle}>Minute News</Text>
      </View>
      <Feather name="more-horizontal" size={16} />
    </View>
  );
};

const RoomScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <RoomHeader />
      <FlatList
        data={demoSpeakers}
        renderItem={({ item }) => <SpeakerAvatar name={item.name} />}
        numColumns={3}
        keyExtractor={i => i.id}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
      />
      <RoomControlBar onLeave={() => navigation.goBack()} />
    </View>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff2f8',
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
    paddingBottom: Platform.OS === 'ios' ? 100 : 95,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  columnWrapperStyle: {
    gap: 5,
  },
  ListHeaderStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTopic: {
    fontSize: 14,
    color: '#8e8e94',
  },
  headerTitle: {
    fontSize: 20,
    color: '#000',
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
    justifyContent: 'center',
  },
  search: {
    alignSelf: 'flex-end',
    backgroundColor: '#f4f4f4',
    padding: 7,
    borderRadius: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    alignSelf: 'flex-start',
    backgroundColor: '#f09980',
    padding: 7,
    borderRadius: 17,
  },
});
