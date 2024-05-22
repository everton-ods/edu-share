import { useState } from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  async function createUser(){
    await createUserWithEmailAndPassword(auth, email, password).then(value => {
      console.log('cadastrado' + value.user.uid);
      navigation.navigate('Home1')
    })
    .catch(error => console.log(error));
  };
  
 

  return(
    <View style={StyleSheet.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.massage}>Bem-vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput 
            placeholder="Digite um email..."
            style={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput 
            placeholder="Sua senha"
            style={styles.input}
            value={password}
            onChangeText={value => setPassword(value)}
          />

          <TouchableOpacity style={styles.button} onPress={() => createUser()}>
          
            <Text style={styles.buttonText}>Cadastrar</Text>
            
          </TouchableOpacity>


      </Animatable.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{

  }
})


