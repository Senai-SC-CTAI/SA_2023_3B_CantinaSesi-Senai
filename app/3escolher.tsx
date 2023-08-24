import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('../assets/logo.png')}
      style={{ width: 300, height: 300, marginTop:-50}}
    />
      <View style={styles.botaoPrincipal}><Link href="/5cardapio">Cardápio do dia</Link></View>
      <View style={styles.botao}><Link href="/5cardapio">Cardápio de segunda</Link></View>
      <View style={styles.botao}><Link href="/5cardapio">Cardápio de terça</Link></View>
      <View style={styles.botao}><Link href="/5cardapio">Cardápio de quarta</Link></View>
      <View style={styles.botao}><Link href="/5cardapio">Cardápio de quinta</Link></View>
      <View style={styles.botao}><Link href="/5cardapio">Cardápio de sexta</Link></View>
      <StatusBar style="auto" />
      <Image
      source={require('../assets/footer.png')}
      style={{marginTop:100}}
    />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:0,
  },
  botao:{
    marginTop:10,
    marginBottom: 10,
    padding: 8,
    width:300,
    cursor: 'pointer',
    backgroundColor: '#70ccec',
    textDecorationLine: 'none',
    fontSize: 20,
    color: '#fff',
    borderRadius: 6,
    borderWidth: 2,
    textAlign: 'center',
  },
  botaoPrincipal:{
    marginTop:10,
    marginBottom: 20,
    padding: 8,
    width:200,
    height:60,
    cursor: 'pointer',
    backgroundColor: '#70ccec',
    textDecorationLine: 'none',
    fontSize: 40,
    color: '#fff',
    borderRadius: 6,
    borderWidth: 2,
    textAlign: 'center',
  }
});

