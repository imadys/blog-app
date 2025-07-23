import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { usePost } from '@/hooks/usePosts';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Button } from 'react-native';

export default function BlogPost() {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();
    const { data, loading, error } = usePost(id as string);

    // Set header title dynamically
    useEffect(() => {
        if (data?.title) {
            navigation.setOptions({ title: data.title });
        }
    }, [data, navigation]);

    if (loading) {
        return <ThemedText>Loading...</ThemedText>;
    }

    if (error) {
        return <ThemedText>Error: {error}</ThemedText>;
    }

    return (

        <ThemedView style={{ flex: 1, padding: 20 }}>
            <ThemedText type="title">{data.title}</ThemedText>
            <ThemedText style={{ marginBottom: 24 }}>{data.body}</ThemedText>
            <Button title="Go back" onPress={() => router.push("/blog")} />
        </ThemedView>
    );
}
