import { StyleSheet, Text, View } from 'react-native';

export default function NewsItem({ article }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{article.title}</Text>
            <Text>{article.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
    },
});
