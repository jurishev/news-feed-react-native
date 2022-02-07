import { StyleSheet, View, Text, Image } from 'react-native';

export default function ArticleScreen({ route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.title}</Text>
            <Image style={styles.image} source={{ uri: route.params.image }} resizeMode='cover' />
            <Text style={styles.content}>{route.params.content}</Text>
            <Text style={styles.source}>{route.params.url}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        marginTop: 8,
        borderRadius: 8,
        height: 200,
    },
    content: {
        marginTop: 8,
    },
    source: {
        marginTop: 8,
        fontSize: 10,
        fontStyle: 'italic',
    }
});
