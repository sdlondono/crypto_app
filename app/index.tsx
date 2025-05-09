import CryptoCard from '@/components/CryptoCard'
import Colors from '@/constants/Colors'
import useCryptos from '@/hooks/useCryptos'
import { ICrypto } from '@/models/Crypto'
import { useCallback, useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const { data, loading, error } = useCryptos();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(
    () =>
      data.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) as ICrypto[],
    [data, searchQuery]
  )

  const renderItem = useCallback<ListRenderItem<ICrypto>>(({ item }) => {
    return <CryptoCard
      id={item.id}
      name={item.name}
      symbol={item.symbol}
      priceUsd={item.price_usd}
      percentChange24h={item.percent_change_24h}
    />
  }, [])

  if (error) return <View><Text>Error loading cryptos</Text></View>;
  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;


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
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

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
})

export default HomeScreen