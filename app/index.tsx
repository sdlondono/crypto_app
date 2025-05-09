import CryptoCard from '@/components/CryptoCard';
import Colors from '@/constants/Colors';
import useCryptos from '@/hooks/useCryptos';
import useDebounce from '@/hooks/useDebounce';
import { ICrypto } from '@/models/Crypto';
import { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { data, loading, error, fetchMore, hasMore } = useCryptos();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 400);

  const filteredData = useMemo(
    () =>
      data.filter((crypto) =>
        crypto.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      ) as ICrypto[],
    [data, debouncedQuery]
  );
  const renderItem = useCallback<ListRenderItem<ICrypto>>(({ item }) => {
    return (
      <CryptoCard
        id={item.id}
        name={item.name}
        symbol={item.symbol}
        priceUsd={item.price_usd}
        percentChange24h={item.percent_change_24h}
      />
    );
  }, []);

  const handleLoadMore = () => {
    if (hasMore) fetchMore();
  };

  if (error)
    return (
      <View>
        <Text>Error loading cryptos</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search crypto..."
        placeholderTextColor="#888"
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        onEndReached={debouncedQuery ? undefined : handleLoadMore}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          !debouncedQuery && loading && hasMore ? (
            <ActivityIndicator size="small" style={{ margin: 16 }} />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  searchInput: {
    backgroundColor: Colors.card,
    color: Colors.text,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});

export default HomeScreen;
