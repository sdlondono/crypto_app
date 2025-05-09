import Colors from '@/constants/Colors';
import { formatPercent, formatPrice } from '@/utils/format';
import { router } from 'expo-router';
import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CryptoCardProps = {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  percentChange24h: string;
};

const CryptoCard: React.FC<CryptoCardProps> = ({ id, name, symbol, priceUsd, percentChange24h }) => {
  const isPositive = parseFloat(percentChange24h) >= 0;

  return (
    <Pressable onPress={() => router.push(`/${id}`)} style={styles.card}>
      <View>
        <Text style={styles.name}>{name} ({symbol})</Text>
        <Text style={styles.price}>{formatPrice(priceUsd)}</Text>
      </View>
      <Text style={[styles.change, { color: isPositive ? '#4CAF50' : '#F44336' }]}>
        {formatPercent(percentChange24h)} {isPositive ? '↑' : '↓'}
      </Text>
    </Pressable>
  );
};

export default memo(CryptoCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  name: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: Colors.yellow,
    fontSize: 14,
    marginTop: 4,
  },
  change: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
