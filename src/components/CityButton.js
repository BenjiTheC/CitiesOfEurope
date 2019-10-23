import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { baseStyle } from './commons';

export default class CityButton extends PureComponent {
    static propTypes = {
        cityName: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    get buttonDimension() {
        return Dimensions.get('window').width - baseStyle.space.doubleExtraLarge * 2;
    }

    render() {
        return (
            <TouchableOpacity style={styles.cityCardButton} onPress={() => this.props.onPress()}>
                <View style={styles.cityCardContainer}>
                    <Text style={styles.cityCardText}>{this.props.cityName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cityCardButton: {
        height: 100,
        borderRadius: baseStyle.space.small,
        padding: baseStyle.space.small,
        margin: baseStyle.space.doubleExtraLarge,
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: baseStyle.space.mini,
            height: baseStyle.space.mini,
        },
        shadowOpacity: 0.3,
        shadowRadius: baseStyle.space.mini,
    },
    cityCardContainer: {
        borderRadius: baseStyle.space.small,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityCardText: {
        fontSize: baseStyle.fontSize.middle,
        fontFamily: baseStyle.fontFamily.light,
    },
});
