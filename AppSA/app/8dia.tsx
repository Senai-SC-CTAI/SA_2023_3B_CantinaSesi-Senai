import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Link style={styles.botao} href="5cardapio">Cardápio de Segunda</Link>
      <Link style={styles.botao} href="5cardapio">Cardápio de Terça </Link>
      <Link style={styles.botao} href="5cardapio">Cardápio de Quarta</Link>
      <Link style={styles.botao} href="5cardapio">Cardápio de Quinta</Link>
      <Link style={styles.botao} href="5cardapio">Cardápio de Sexta</Link>
      <Image source={require('../assets/footer.png')} />

      
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  botao:{
    fontSize: 20,
    marginBottom: 40,
    backgroundColor: `#6ACAE8`,
    color: "black",
    width: 350,
    height: 50,
    textAlign:'center',
    borderRadius: 5,
    fontFamily: 'timenewroman',
    borderWidth: 2,


    
  }
  
});