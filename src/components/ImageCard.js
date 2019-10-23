import React, { PureComponent } from 'react';
import { View, Text, Image, Dimensions, Modal, StyleSheet } from 'react-native';

export default class ImageCard extends PureComponent {
    get imgSize() {
        const imgWidth = Dimensions.get('window').width - (16 + 22) * 2;
        const { aspectRatio } = this.props.picture;
        return { width: imgWidth, height: imgWidth / aspectRatio };
    }

    render() {
        const { url, author } = this.props.picture;
        return (
            <View style={styles.imageCardContainer}>
                <Image source={{ uri: url }} style={this.imgSize} />
                <View style={{ height: 50 }}>
                    <Text>{`By ${author}`}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageCardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 16,
        margin: 22,
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});
