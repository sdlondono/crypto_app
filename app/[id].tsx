import Colors from '@/constants/Colors';
import useCryptoDetail from '@/hooks/useCryptoDetails';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { formatPercent, formatPrice } from '../utils/format';

export default function CryptoDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data, loading } = useCryptoDetail(id);

  if (loading || !data) {
    return <ActivityIndicator style={{ marginTop: 40 }} size="large" />;
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{data.name} ({data.symbol})</Text>
        <Text style={styles.price}>{formatPrice(data.price_usd)}</Text>
        <Text style={[styles.percent, { color: parseFloat(data.percent_change_24h) >= 0 ? '#4CAF50' : '#F44336' }]}>
          {formatPercent(data.percent_change_24h)}
        </Text>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Market Cap</Text>
          <Text style={styles.value}>{formatPrice(data.market_cap_usd)}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Volume (24h)</Text>
          <Text style={styles.value}>{formatPrice(data.volume24)}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Rank</Text>
          <Text style={styles.value}>{data.rank}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 20,
    color: Colors.yellow,
    marginBottom: 8,
  },
  percent: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  detailBox: {
    marginBottom: 12,
  },
  label: {
    color: Colors.mutedText,
    fontSize: 14,
  },
  value: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
