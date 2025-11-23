import { create } from 'zustand';

export type Speaker = {
  id: string;
  name: string;
  avatar: string;
};

export type Room = {
  id: string;
  title: string;
  topic?: string;
  speakers: Speaker[];
  listeners: number;
  listenerIds?: string[];
  visibleListenerAvatars?: string[];
  comments: number;
  isLive?: boolean;
  createdAt?: string;
};

type RoomsState = {
  rooms: Room[];
  addRoom: (r: Room) => void;
  addListenerToRoom: (roomId: string, userId: string, avatar?: string) => void;
  removeListenerFromRoom: (roomId: string, userId: string) => void;
  setVisibleListenerAvatars: (roomId: string, avatars: string[]) => void;
  getRoomById: (id: string) => Room | undefined;
};

const demoAvatar = '../assets/avatar.png';

const initialRooms: Room[] = [
  {
    id: 'r1',
    title: 'Live Mastermind',
    topic: 'Business Entrepreneurship',
    speakers: [
      {
        id: 's1',
        name: 'Jon Daniels',
        avatar: '../assets/avatar.png',
      },
      {
        id: 's2',
        name: 'Della Guerrero',
        avatar: '../assets/avatar.png',
      },
    ],
    listeners: 61,
    listenerIds: ['u1', 'u2', 'u3', 'u4'],
    visibleListenerAvatars: [demoAvatar, demoAvatar, demoAvatar],
    comments: 53,
    isLive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'r2',
    title: 'Live Mastermind',
    topic: 'Business Entrepreneurship',
    speakers: [
      {
        id: 's1',
        name: 'Jon Daniels',
        avatar: '../assets/avatar.png',
      },
      {
        id: 's2',
        name: 'Della Guerrero',
        avatar: '../assets/avatar.png',
      },
    ],
    listeners: 61,
    listenerIds: ['u1', 'u2', 'u3', 'u4'],
    visibleListenerAvatars: [demoAvatar, demoAvatar, demoAvatar],
    comments: 53,
    isLive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'r3',
    title: 'Live Mastermind',
    topic: 'Business Entrepreneurship',
    speakers: [
      {
        id: 's1',
        name: 'Jon Daniels',
        avatar: '../assets/avatar.png',
      },
      {
        id: 's2',
        name: 'Della Guerrero',
        avatar: '../assets/avatar.png',
      },
    ],
    listeners: 61,
    listenerIds: ['u1', 'u2', 'u3', 'u4'],
    visibleListenerAvatars: [demoAvatar, demoAvatar, demoAvatar],
    comments: 53,
    isLive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'r4',
    title: 'Live Mastermind',
    topic: 'Business Entrepreneurship',
    speakers: [
      {
        id: 's1',
        name: 'Jon Daniels',
        avatar: '../assets/avatar.png',
      },
      {
        id: 's2',
        name: 'Della Guerrero',
        avatar: '../assets/avatar.png',
      },
    ],
    listeners: 61,
    listenerIds: ['u1', 'u2', 'u3', 'u4'],
    visibleListenerAvatars: [demoAvatar, demoAvatar, demoAvatar],
    comments: 53,
    isLive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'r5',
    title: 'Live Mastermind',
    topic: 'Business Entrepreneurship',
    speakers: [
      {
        id: 's1',
        name: 'Jon Daniels',
        avatar: '../assets/avatar.png',
      },
      {
        id: 's2',
        name: 'Della Guerrero',
        avatar: '../assets/avatar.png',
      },
    ],
    listeners: 61,
    listenerIds: ['u1', 'u2', 'u3', 'u4'],
    visibleListenerAvatars: [demoAvatar, demoAvatar, demoAvatar],
    comments: 53,
    isLive: true,
    createdAt: new Date().toISOString(),
  },
];

export const useRoomStore = create<RoomsState>()((set, get) => ({
  rooms: initialRooms,

  addRoom: r => set(s => ({ rooms: [r, ...s.rooms] })),
  addListenerToRoom: (roomId, userId, avatar) =>
    set(s => ({
      rooms: s.rooms.map(room => {
        if (room.id !== roomId) return room;

        const hasId = room.listenerIds?.includes(userId) ?? false;
        const newListenerIds = hasId
          ? room.listenerIds
          : [...(room.listenerIds ?? []), userId];
        const avatarToAdd = avatar ?? demoAvatar;
        const prevVis = room.visibleListenerAvatars ?? [];
        const newVis = prevVis.length < 3 ? [avatarToAdd, ...prevVis] : prevVis;

        return {
          ...room,
          listenerIds: newListenerIds,
          listeners: hasId ? room.listeners : room.listeners + 1,
          visibleListenerAvatars: newVis,
        };
      }),
    })),

  removeListenerFromRoom: (roomId, userId) =>
    set(s => ({
      rooms: s.rooms.map(room => {
        if (room.id !== roomId) return room;
        const had = room.listenerIds?.includes(userId) ?? false;
        const newIds = (room.listenerIds ?? []).filter(id => id !== userId);
        let newVis = room.visibleListenerAvatars ?? [];
        if (room.listeners - (had ? 1 : 0) < newVis.length) {
          newVis = newVis.slice(0, Math.max(0, room.listeners - (had ? 1 : 0)));
        }
        return {
          ...room,
          listenerIds: newIds,
          listeners: Math.max(0, room.listeners - (had ? 1 : 0)),
          visibleListenerAvatars: newVis,
        };
      }),
    })),

  setVisibleListenerAvatars: (roomId, avatars) =>
    set(s => ({
      rooms: s.rooms.map(r =>
        r.id === roomId
          ? { ...r, visibleListenerAvatars: avatars.slice(0, 3) }
          : r,
      ),
    })),

  getRoomById: id => get().rooms.find(r => r.id === id),
}));
