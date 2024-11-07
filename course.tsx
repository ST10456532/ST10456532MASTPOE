import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

type CourseDetailProps = {
  route: {
    params: {
      course: string;
      dishes: { name: string; description: string; price: number }[];
    };
  };
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
};

const CourseDetailPage: React.FC<CourseDetailProps> = ({ route, navigation }) => {
  const { course, dishes } = route.params;
  const [selectedDishes, setSelectedDishes] = useState<{ name: string; description: string; price: number }[]>([]);

  const handleDishSelect = (dish: { name: string; description: string; price: number }) => {
    setSelectedDishes((prev) => {
      // Check if the dish is already selected
      if (prev.some(selectedDish => selectedDish.name === dish.name)) {
        Alert.alert('Already Selected', `${dish.name} is already selected.`);
        return prev; // If already selected, do not add again
      }
      return [...prev, dish]; // Otherwise, add the new dish
    });
    Alert.alert('Dish Selected', `You selected ${dish.name}`);
  };

  const handleAddToMenu = () => {
    if (selectedDishes.length === 0) {
      Alert.alert('No Dishes Selected', 'Please select at least one dish.');
      return;
    }
    navigation.navigate('AddMenuPage', { selectedDishes });
  };

  // Calculate total price of selected dishes
  const totalPrice = selectedDishes.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course}</Text>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dishContainer} onPress={() => handleDishSelect(item)}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishDescription}>{item.description}</Text>
            <Text style={styles.dishPrice}>Price: R{item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addToMenuButton} onPress={handleAddToMenu}>
        <Text style={styles.addToMenuButtonText}>Add to Menu</Text>
      </TouchableOpacity>
      <Text style={styles.totalPrice}>Total Price: R{totalPrice.toFixed(2)}</Text>
      {dishes.length === 0 && <Text style={styles.noDishesText}>No dishes added yet.</Text>}
    </View>
  );
};

export default CourseDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Black background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Title color
  },
  dishContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#808080', // Gray border color
    borderRadius: 5,
    backgroundColor: '#1a1a1a', // Darker background for dishes
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Dish name color
  },
  dishDescription: {
    fontSize: 14,
    color: '#ccc', // Lighter gray for description
  },
  dishPrice: {
    fontSize: 16,
    color: '#808080', // Gray for price
  },
  addToMenuButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  addToMenuButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#fff', // Total price color
  },
  noDishesText: {
    color: '#fff', // Color for no dishes message
    textAlign: 'center',
    marginTop: 20,
  },
});

