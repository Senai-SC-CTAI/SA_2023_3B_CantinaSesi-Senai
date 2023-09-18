import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const initialData = [
  { id: '1', name: 'Bolo de Chocolate', price: 'R$ 5.00' },
  { id: '2', name: 'Sanduíche de Frango', price: 'R$ 8.50' },
  { id: '3', name: 'Salada Caesar', price: 'R$ 7.00' },
  { id: '4', name: 'Suco de Laranja', price: 'R$ 3.50' },
  { id: '5', name: 'Café Expresso', price: 'R$ 2.00' },
  { id: '6', name: 'Pão de Queijo', price: 'R$ 1.50' },
  { id: '7', name: 'Hambúrguer', price: 'R$ 6.00' },
  { id: '8', name: 'Cachorro-Quente', price: 'R$ 4.50' },
  { id: '9', name: 'Torta de Maçã', price: 'R$ 5.50' },
  { id: '10', name: 'Refrigerante', price: 'R$ 2.50' },
];

const CantinaItem = ({ item, onDelete }) => (
  <View style={styles.cantinaItem}>
    <Text style={styles.itemName}>{item.name}</Text>
    <Text style={styles.itemPrice}>{item.price}</Text>
    <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Excluir</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const [data, setData] = useState(initialData);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const handleAddItem = () => {
    if (newItemName && newItemPrice) {
      const newItem = {
        id: (data.length + 1).toString(),
        name: newItemName,
        price: newItemPrice,
      };

      setData([...data, newItem]);
      setNewItemName('');
      setNewItemPrice('');
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedData = data.filter(item => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addForm}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Item"
          value={newItemName}
          onChangeText={setNewItemName}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={newItemPrice}
          onChangeText={setNewItemPrice}
        />
        <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Nome do Item</Text>
        <Text style={styles.headerText}>Preço</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CantinaItem item={item} onDelete={handleDeleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  addForm: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#333',
  },
  cantinaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemName: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#e74c3c',
    marginLeft: 12,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    margin: 10
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default App;