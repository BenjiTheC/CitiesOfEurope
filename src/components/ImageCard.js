import React, { PureComponent } from 'react';
import { View, Text, Image, Dimensions, Modal, StyleSheet } from 'react-native';
import { baseStyle } from './commons';
import heartSolid from '../assets/img/heartSolid';

const BY = 'By ';

export default class ImageCard extends PureComponent {
    get screenWidth() {
        return Dimensions.get('window').width;
    }

    get imgSize() {
        const imgWidth =
            this.screenWidth - (baseStyle.space.large + baseStyle.space.doubleExtraLarge) * 2;
        const { aspectRatio } = this.props.picture;
        return { width: imgWidth, height: imgWidth / aspectRatio };
    }

    renderLikes() {
        return (
            <View style={styles.likesContainer}>
                <Image source={{ uri: heartSolid }} style={styles.likesIcon} />
                <Text style={styles.likesText}>{this.props.picture.likes}</Text>
            </View>
        );
    }

    renderTextContent() {
        const tagsGroup = this.props.picture.tags.map((tag, index) => (
            <View style={styles.tagTextBox} key={index}>
                <Text style={styles.tagText}>{tag}</Text>
            </View>
        ));

        return (
            <View>
                <Text style={styles.imageAuthorText}>
                    <Text>{BY}</Text>
                    <Text style={{ fontFamily: baseStyle.fontFamily.black }}>
                        {this.props.picture.author}
                    </Text>
                </Text>
                <View style={styles.tagsGroup}>{tagsGroup}</View>
            </View>
        );
    }

    render() {
        const { url } = this.props.picture;
        return (
            <View style={styles.imageCardContainer}>
                <Image source={{ uri: url }} style={[styles.imageShape, this.imgSize]} />
                <View style={[styles.imageTextContainer, { width: this.imgSize.width }]}>
                    {this.renderLikes()}
                    {this.renderTextContent()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageCardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: baseStyle.space.small,
        padding: baseStyle.space.large,
        margin: baseStyle.space.doubleExtraLarge,
        backgroundColor: baseStyle.colors.white,
        shadowOffset: {
            width: baseStyle.space.mini,
            height: baseStyle.space.mini,
        },
        shadowOpacity: 0.3,
        shadowRadius: baseStyle.space.mini,
    },
    imageShape: {
        borderRadius: baseStyle.space.small,
    },
    imageTextContainer: {
        height: 100,
        padding: baseStyle.space.mini,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageAuthorText: {
        fontSize: baseStyle.fontSize.large,
        fontFamily: baseStyle.fontFamily.light,
    },
    tagsGroup: {
        marginTop: baseStyle.space.mini,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    tagTextBox: {
        marginLeft: baseStyle.space.mini,
        padding: baseStyle.space.mini,
        fontSize: baseStyle.fontSize.small,
        fontFamily: baseStyle.fontFamily.regular,
        borderRadius: baseStyle.space.mini,
        backgroundColor: baseStyle.colors.grey,
    },
    tagText: {
        color: baseStyle.colors.white,
    },
    likesContainer: {
        height: 100,
        padding: baseStyle.space.mini,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    likesIcon: {
        marginRight: baseStyle.space.small,
        width: 20,
        height: 20,
    },
    likesText: {
        fontSize: baseStyle.fontSize.large,
        fontFamily: baseStyle.fontFamily.black,
    },
});
