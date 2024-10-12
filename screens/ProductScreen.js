import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProductScreen({ navigation }) {
  const productName = "Điện Thoại Vsmart Joy 3 - Hàng chính hãng";
  const price = "1.790.000 đ";
  const oldPrice = "1.790.000 đ";
  const rating = 5;

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/fae2/fb74/dfc5e3d8ad7457739c07b2ee59e42744?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RM3jP~HMbNDnPgcYYYRVSvBk5n1q0LCdAWMBfPkXiMa2xGqo9Rti11LKdsOPV5EUdJ5501UZSQqoeLvJyY3suDxqBWSLVcKbbW9nRegLKN-vRak5o7tuPdGJgGkp-PEa6GMxRDF6giQ2fEeagIhnD3kj9QRXohfY9cX5BNdX~Y-ylN6T4lCuTa5Xy0WfPxEUl3PG--HF6LRldb7WFWEkH8FIvu4H02G4sldR~xyYxlpNQMoskoVFondz5-dql69SysI8eLDS1p8tVLnnBdit8QwiAJE-ureQeZp-oTYtDH79MbPv9f~sgqLzIz80GPLuxhveOtN~2XEYls7yKT~7BQ__' }} 
        style={styles.productImage} 
        resizeMode="contain" // Hoặc "cover"
      />
      
      <Text style={styles.productName}>{productName}</Text>
      
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesome 
            key={index} 
            name={index < rating ? 'star' : 'star-o'} 
            size={24} 
            color={index < rating ? 'gold' : 'gray'} 
          />
        ))}
      </View>

      <Text style={styles.price}>{price}</Text>
      <Text style={styles.oldPrice}>{oldPrice}</Text>

      <TouchableOpacity 
        style={styles.selectColorButton} 
        onPress={() => navigation.navigate('ColorSelection')}
      >
        <Text style={styles.selectColorText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
  },
  productImage: {
    width: '100%', // Chiều rộng 100% để hình ảnh lấp đầy container
    height: 250,   // Điều chỉnh chiều cao nếu cần
    resizeMode: 'contain', // Hoặc 'cover'
    marginBottom: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginBottom: 16,
  },
  selectColorButton: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
  },
  selectColorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
