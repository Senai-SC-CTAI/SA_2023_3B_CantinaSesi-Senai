import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Image, LogBox } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
       <Image  style={styles.imagem} source={require('../assets/logo.png')}   />
       <br />
       <br />
       <br />
       <br />
      <Text style={styles.titulo}>Comidas</Text>
      
      <StatusBar style="auto" />
      <br />
      <View style={styles.fotos}>
      <Link style={styles.voltar} href="/8dia">Mix de salgados</Link>
      <Link style={styles.voltar} href="/8dia">Dogão</Link>
      <Link style={styles.voltar} href="/8dia">Salada de Frutas</Link>
      <Link style={styles.voltar} href="/8dia">Pão Francês com queijo</Link>
      <Link style={styles.voltar} href="/8dia">Sanduíche Ciabatta de Peito de Peru</Link>
      <Link style={styles.voltar} href="/8dia">Bolo de Pote</Link>
      <Link style={styles.voltar} href="/8dia">Creme de batata com calabressa</Link>
      <Link style={styles.voltar} href="/8dia">Sanduíche Baguete de Salame</Link>
      

      </View>
<br />
<br />
<br />
      <Text style={styles.titulo}>Bebidas</Text>
      
      <StatusBar style="auto" />
      <br />
      <View style={styles.fotos}>
      <Link style={styles.voltar} href="/8dia">Leite</Link>
      <Link style={styles.voltar} href="/8dia">Café Preto</Link>
      <Link style={styles.voltar} href="/8dia">Capuccino</Link>
      <Link style={styles.voltar} href="/8dia">Suco Prats - sabores diversos</Link>
      <Link style={styles.voltar} href="/8dia">Chá - sabores diversos</Link>
      <Link style={styles.voltar} href="/8dia">Água</Link>
      <Link style={styles.voltar} href="/8dia">Nescau</Link>
      <Link style={styles.voltar} href="/8dia">Iorgute</Link>
    
     

      </View>
      
      
<br />

    
    <br />
    <br />
    <br />
    <Image  style={styles.footer} source={require('../assets/footer.png')}   />
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
 
  imagem:{
    width: 200,
    height: 200,
    marginTop: -200,

  },
  voltar:{
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
    flexDirection: 'row',
    margin: 10,
  width: 150,
   textAlign: 'center',
    height: 45,
    padding: 30    
    

  },
  texto:{
    fontSize: 15,
    width: 350,
 
  },
  footer:{
    
  },
  fotos:{
    flexDirection:'row',
    flexWrap:"wrap"
  }

});