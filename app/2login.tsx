import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Image  } from 'react-native';


export default function App() {
  return (
   
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <TextInput
        placeholder="Insira seu usuario"
        style={styles.input}
      />
       <TextInput
        placeholder="Insira sua senha"
        style={styles.input}
      />
   
     
      <Link style= {styles.botao} href="/4add">ENTRAR</Link>
      <StatusBar style="auto" />
      <Link href="/">Voltar</Link>
      <Text style={styles.titulo}>apenas pessoas com o dominio SesiSenai terão acesso</Text>


      <Image  style={styles.img} source={require("../assets/footer.png")} />
     
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
    fontSize: 18,
    fontFamily: "timenewroman",
    marginTop: 100


  },
  botao:{
    fontSize: 30,
    backgroundColor: "#6ACAE8",
    margin: 5,
    width: 300,
    height: 60,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 100,
    fontFamily: "timenewroman",
    borderWidth: 1,
  },


  input:
  {
    backgroundColor: "#6ACAE8",
    textAlign: "center",
    margin: 10,
    width: 200,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
   
    fontFamily: "timenewroman"


  },
  img:
  {
marginTop: 50,
width: 400
  }
});
