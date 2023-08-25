import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.logo}>
      <Image source={require('../assets/logo.png')} />
      <View style={styles.container}>
      <Text style={styles.titulo}>Cardapio</Text>
      <br />
      <br />
      <Image style={styles.img} source={require('../assets/carda.png')} />
      <br />
      <br />
      <br />
      <Link style={styles.link} href="/7sugestoes">Sugestões</Link>
      <Link style={styles.link} href="/3escolher">Voltar</Link>


      <StatusBar style="auto" />
      </View>

      <View style={styles.footer}>
      <Image source={require('../assets/footer.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo:{
    alignItems: 'center',
    backgroundColor:"white",
    

  },
footer:{
  alignItems: 'center',
  marginTop: 150,
},
link: {
  marginTop:10,
  marginBottom: 10,
  padding: 8,
  width:300,
  cursor: 'pointer',
  backgroundColor: '#70ccec',
  textDecorationLine: 'none',
  fontSize: 20,
  color: 'black',
  borderRadius: 6,
  borderWidth: 2,
  textAlign: 'center',
},
img:{
  marginLeft:400,
}

});
