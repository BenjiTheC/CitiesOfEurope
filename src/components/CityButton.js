import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default class CityButton extends PureComponent {
    static propTypes = {
        cityName: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    get buttonDimension() {
        return Dimensions.get('window').width - 22 * 2;
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
        borderRadius: 8,
        padding: 6,
        margin: 22,
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    cityCardContainer: {
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityCardText: {
        fontSize: 20,
        fontFamily: 'Rubik-Light',
    },
});
