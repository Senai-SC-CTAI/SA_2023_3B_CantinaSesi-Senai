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
      <Image source={require('../assets/cardapio.png')} />
      <br />
      <br />
      <br />

      <Link href="/7sugestoes">sugestoes</Link>


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
    flex: 1,
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

});
