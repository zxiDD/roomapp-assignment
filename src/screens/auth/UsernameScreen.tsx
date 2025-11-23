import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useUserStore } from '../../stores/UserStore';

type Props = NativeStackScreenProps<RootStackParamList, 'UsernameScreen'>;

const UsernameScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const setUser = useUserStore(s => s.setUser);

  const goToHome = () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Please enter your username');
    } else {
      setUser({ username });
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.kav}
      keyboardVerticalOffset={0}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Pick a username</Text>
        <Text style={styles.subTitle}>Choose a distinct username</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.prefix}>@</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Superboy"
            placeholderTextColor={'#8e8e94'}
          />
        </View>
        <Pressable style={styles.button} onPress={goToHome}>
          <Text style={styles.buttonText}>Let's Go</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default UsernameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  kav: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#8e8e95',
    marginBottom: 50,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 60,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  prefix: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8e8e94',
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: '#9fbea2',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
