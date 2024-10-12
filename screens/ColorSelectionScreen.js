import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorSelectionScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ['#A7EFFF', '#FF0000', '#000000', '#0054FF'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.colorBox, { backgroundColor: color }]}
          onPress={() => setSelectedColor(color)}
        />
      ))}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  colorBox: {
    width: 100,
    height: 50,
    marginVertical: 8,
    borderRadius: 5,
  },
  doneButton: {
    marginTop: 16,
    backgroundColor: '#0054FF',
    padding: 10,
    borderRadius: 5,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
