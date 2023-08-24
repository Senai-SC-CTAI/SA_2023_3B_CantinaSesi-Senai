import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Image} from 'react-native';








export default function App() {
  return (
    <View style={styles.container}>
       <Image style={styles.imagem} source={require('../assets/logo.png')} />
       <br />
       <br />
       <br />
       <br />
      <Text style={styles.titulo}>SUGESTÕES</Text>
     <br />
     <br />
   
      <TextInput style={styles.input} placeholder='Insira seu E-mail da instituição'></TextInput>
      <br />
      <TextInput style={styles.input} placeholder='Insira sua sugestão'></TextInput>
      <StatusBar style="auto" />
      <br />


     
      <Text style={styles.enviar} > ENVIAR </Text>


      <br />
      <Link style={styles.voltar} href="/5cardapio">Voltar</Link>
<br />


    <text style={styles.texto}>Ajude a melhorar o nosso atendimento e os produtos que podemos fornecer, lembre-se que a escola tem suas normas e leis do que pode ou não ser vendido em escola. </text>
    <br />
    <br />
    <br />
    <footer><Image source={require('../assets/footer.png')} /></footer>
       
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
    fontFamily: 'timenewroman'
  },
  input:{
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    color: '#333',
    width: 300,
   
   
  },
  imagem:{
    width: 300,
    height: 300,
    marginTop: -90,




  },
  voltar:{
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    color: '#333',
    bordercolor: '#000',




  },
  texto:{
    fontSize: 15,
    width: 350,
    fontFamily: 'timenewroman'
 
  },
  footer:{


  },
  enviar:
  {
    backgroundColor: "#6ACAE8"
  }
});






