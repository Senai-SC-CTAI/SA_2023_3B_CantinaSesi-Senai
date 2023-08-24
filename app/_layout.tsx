//import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "Home",
          title: "Bem-vindo",
        }}
      />
      <Drawer.Screen
        name="2login" 
        options={{
          drawerLabel: "Login",
          title: "Login",
        }}
      />
      <Drawer.Screen
        name="3escolher" 
        options={{
          drawerLabel: "Escolher cardapio",
          title: "Cardapios",
    
        }}
      />
      
      <Drawer.Screen
        name="5cardapio" 
        options={{
          drawerLabel: "Cardapio do dia",
          title: "Cardapio do dia",
    
        }}
      
      />
      <Drawer.Screen
        name="7sugestoes" 
        options={{
          drawerLabel: "Sugestões",
          title: "Sugestões",
    
        }}
      />
      <Drawer.Screen
        name="4add" 
        options={{
          drawerLabel: "",
          title: "Adicionar",
    
        }}
      />
      <Drawer.Screen
        name="6itens" 
        options={{
          drawerLabel: "",
          title: "Adicionar",
    
        }}
      />
      <Drawer.Screen
        name="8dia" 
        options={{
          drawerLabel: "",
          title: "Adicionar",
    
        }}
      />

    </Drawer>

  );
}