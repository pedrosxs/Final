import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onPress, onRemove }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{product.name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.removeButton}>Remover</Text>
      </TouchableOpacity>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#ffd700',
        margin: 5,
        height: 50,
        borderRadius: 10
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 16,
      },
      removeButton: {
        fontSize: 16,
        color: 'black',
      },
    });
    

export default ProductItem;
