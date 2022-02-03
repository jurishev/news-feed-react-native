import { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Button } from 'react-native';
import NewsItem from './NewsItem';

export default function App() {

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
                placeholder='search keywords'
                onChangeText={val => setSearch(val)}
            />
            <Button title="get news" onPress={getNews} />
            <View style={styles.list}>
                <FlatList
                    data={articles}
                    renderItem={({ item }) => <NewsItem article={item} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 8,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 16,
    },
    list: {
        flex: 1,
        width: '100%',
        marginVertical: 16,
    }
});
