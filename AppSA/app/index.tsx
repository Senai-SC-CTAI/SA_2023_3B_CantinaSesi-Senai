import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Image  } from 'react-native';


export default function App() {
  return (
   
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
   
 
      <Link style= {styles.botao} href="/3escolher">ENTRAR</Link>
      <StatusBar style="auto" />
      <Link style= {styles.botao2} href="/2login">caso você trabalhe na cantina, clique aqui para fazer seu login</Link>
     
     


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
    marginTop:100,
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


  input:
  {
    backgroundColor: "#6ACAE8",
    textAlign: "center",
    margin: 10,
    width: 200,
    height: 40,
    borderRadius: 10,
   
    fontFamily: "timenewroman"


  },
  img:
  {
marginTop: 50,
width: 400
  },
  botao2:
  {
    marginTop:100,
    marginBottom: 10,
    padding: 8,
    width:300,
    height: 50,
    cursor: 'pointer',
    backgroundColor: '#70ccec',
    textDecorationLine: 'none',
    fontSize: 13,
    color: 'black',
    borderRadius: 6,
    borderWidth: 2,
    textAlign: 'center',
    }
});
