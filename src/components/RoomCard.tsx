import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import { Room } from '../stores/RoomsStore';

export type Speaker = {
  id: string;
  name: string;
  avatar?: string;
};

type Props = {
  room: Room;
  onPress?: () => void;
};

const AV = 44;
const AV_OVERLAP = 12;

export default function RoomCard({ room, onPress }: Props) {
  const leftAvatars = (room.visibleListenerAvatars ?? []).slice(0, 3);
  const rightSpeakers = room.speakers.slice(0, 2);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.topRow}>
        <Text style={styles.categoryText}>
          {(room.topic ?? '').toUpperCase()}{' '}
        </Text>
        <Feather name="more-horizontal" size={18} color="#333" />
      </View>

      <Text style={styles.title}>{room.title}</Text>

      <View style={styles.divider} />

      <View style={styles.bottomRow}>
        <View style={styles.left}>
          <View style={styles.avatarStack}>
            {leftAvatars.map((uri, i) => (
              <View
                key={i}
                style={[
                  styles.avatarRing,
                  {
                    left: i * (AV - AV_OVERLAP),
                    zIndex: leftAvatars.length - i,
                  },
                ]}
              >
                <Image
                  source={require('../assets/avatar.png')}
                  style={styles.avatar}
                />
              </View>
            ))}
          </View>

          <View style={styles.pillsRow}>
            <View style={styles.pill}>
              <Feather name="user" size={14} color="#111" />
              <Text style={styles.pillText}>{room.listeners}</Text>
            </View>

            <View style={styles.pill}>
              <Feather name="message-circle" size={14} color="#111" />
              <Text style={styles.pillText}>{room.comments ?? 0}</Text>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          {rightSpeakers.map(s => (
            <View key={s.id} style={styles.speakerRow}>
              <Text style={styles.speakerName}>{s.name}</Text>
              <Text style={styles.speechBubble}>💬</Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EAF6F8',
    borderRadius: 18,
    padding: 16,
    margin: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    color: '#9ea3a6',
    fontSize: 12,
    letterSpacing: 0.6,
  },
  emoji: {
    fontSize: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0b0b0b',
    marginTop: 6,
  },
  divider: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#cfe8ea',
    marginVertical: 10,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  left: {
    width: 140,
  },
  avatarStack: {
    height: AV,
    position: 'relative',
    marginBottom: 8,
  },
  avatarRing: {
    position: 'absolute',
    width: AV,
    height: AV,
    borderRadius: AV / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  avatar: {
    width: AV - 6,
    height: AV - 6,
    borderRadius: (AV - 6) / 2,
  },

  pillsRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  pillText: {
    marginLeft: 8,
    fontWeight: '700',
    color: '#111',
  },

  right: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  speakerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginRight: 8,
  },
  speechBubble: {
    fontSize: 14,
  },
});
