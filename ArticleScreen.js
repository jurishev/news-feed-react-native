import { StyleSheet, View, Text, Image, Linking, TouchableOpacity } from 'react-native';

export default function ArticleScreen({ route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.title}</Text>
            <Image style={styles.image} source={{ uri: route.params.image }} resizeMode='cover' />
            <Text style={styles.content}>{route.params.content}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(route.params.url)}>
                <Text style={styles.source}>{route.params.url}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontFamily: 'Oswald_400Regular',
        fontSize: 24,
        lineHeight: 32,
    },
    image: {
        marginTop: 12,
        borderRadius: 8,
        height: 200,
    },
    content: {
        marginTop: 12,
    },
    source: {
        marginTop: 12,
        fontSize: 10,
        color: 'dodgerblue',
    }
});
