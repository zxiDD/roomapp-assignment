import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useUserStore } from '../../stores/UserStore';

type Props = NativeStackScreenProps<RootStackParamList, 'NameScreen'>;

const NameScreen = ({ navigation }: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const setUser = useUserStore(s => s.setUser);

  const goToName = () => {
    if (!firstName.trim()) {
      Alert.alert('Error', 'Please enter your first name');
    } else {
      setUser({ firstName });
      setUser({ lastName });
      navigation.navigate('UsernameScreen');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.kav}
      keyboardVerticalOffset={0}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>What's your full name?</Text>
        <Text style={styles.subTitle}>People use real names on Club</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
          placeholder="First"
          placeholderTextColor={'#8e8e94'}
        />
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
          placeholder="Last"
          placeholderTextColor={'#8e8e94'}
        />
        <Pressable style={styles.button} onPress={goToName}>
          <Text style={styles.buttonText}>Let's Go</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NameScreen;

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
  input: {
    height: 60,
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    borderRadius: 25,
    marginBottom: 5,
    paddingHorizontal: 15,
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
