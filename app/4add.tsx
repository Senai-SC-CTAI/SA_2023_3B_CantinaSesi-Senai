import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      
      <Link style={styles.botao} href="/6itens">Adicionar Itens</Link>
      
      <Image  style={styles.botao2}source={require('../assets/footer.png')} />

      
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
    fontSize: 30,
    marginBottom: 30,
    backgroundColor: `#6ACAE8`,
    color: "black",
    width: 350,
    height: 60,
    textAlign:'center',
    borderRadius: 5,
    marginTop: 150, 
    fontFamily: 'timenewroman',
    borderWidth: 2,



    
  },
  botao2:{
    marginTop: 200,
  }

});