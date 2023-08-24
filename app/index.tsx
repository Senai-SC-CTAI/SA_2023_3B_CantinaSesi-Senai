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
    fontSize: 30,
    backgroundColor: "#6ACAE8",
    margin: 5,
    width: 300,
    height: 60,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 100,
    fontFamily: "timenewroman",
    borderWidth: 1




   


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
    fontSize: 20,
    backgroundColor: "#6ACAE8",
    margin: 5,
    width: 400,
    height: 50,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 100,
    fontFamily: "timenewroman",
   borderWidth: 1
    }
});