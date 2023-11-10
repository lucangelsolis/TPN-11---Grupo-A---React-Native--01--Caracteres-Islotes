import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [contador, setContador] = useState(0);

  function contarIslotes() {
    let contador = 0;
    for (let i = 1; i<texto.length; i++) {
      if (texto[i - 1] === texto[i + 1]) {
        contador++;
      }
    }
    setContador(contador);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Cantidad de Islotes"
        onPress={contarIslotes}
        style={styles.button}  
      />
        <TextInput
        onChangeText={setTexto}
        value={texto}
        placeholder="Ingresar tu cadena"
        style={styles.input}
      />
      <Text style={styles.result}>Cantidad de los islotes: {contador}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,
    margin: 15,
    width: '85%',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  result: {
    margin: 10,
  },
});