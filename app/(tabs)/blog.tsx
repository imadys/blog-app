import { StyleSheet, Text, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { usePosts } from '@/hooks/usePosts';
import { router } from 'expo-router';
export default function TabThreeScreen() {
    const { data: posts, loading, error } = usePosts();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#82181a', dark: '#82181a' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#e7000b"
          name="newspaper.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Blog</ThemedText>
      </ThemedView>
      <ThemedText>Latest blogs</ThemedText>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        posts.map((item) => (
          <Item key={item.id} title={item.title} id={item.id} />
        ))
      )}

    </ParallaxScrollView>
  );
}

type ItemProps = {title: string, id: string};

const Item = ({title, id}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title} onPress={() => router.push(`/blog/${id}`)}>{title}</Text>

      <Text style={{
        marginTop:16,
        color:"#fff",
        fontSize:16,
        textDecorationLine:"underline"
      }} onPress={() => router.push(`/blog/${id}`)}>Read more</Text>
  </View>
);


const styles = StyleSheet.create({
  headerImage: {
    color: '#e7000b',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  item: {
    backgroundColor: '#000',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color:"#fff",
    fontSize: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
