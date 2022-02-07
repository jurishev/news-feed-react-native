import { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import NewsItem from './NewsItem';

export default function HomeScreen() {

    const [search, setSearch] = useState('');
    const [articles, setArticles] = useState([]);

    const getNews = () => {
        if (search.length > 0) {
            fetch(`https://gnews.io/api/v4/search?q=${search}&token=365265b4b6ff1ecd7de290d95607875c`)
                .then(result => result.json())
                .then(json => setArticles(() => json.articles.map(a => {
                    a.key = Math.random().toString();
                    return a;
                })))
                .catch(() => console.error("failed to fetch news"))
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Search for news'
                onChangeText={val => setSearch(val)}
                onSubmitEditing={getNews}
            />
            <View style={styles.list}>
                <FlatList
                    data={articles}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <NewsItem article={item} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: '100%',
        backgroundColor: '#ccc',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    list: {
        flex: 1,
        width: '100%',
    }
});
