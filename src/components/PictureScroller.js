import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ImageCard, CityButton } from './';
import pictureSeperator from '../assets/img/pictureSeparator';
import { setCurrentCity } from '../redux/actions';
import { baseStyle } from './commons';

const BANNER_BACKGROUND_BY_CITY = {
    barcelona: 'barcelonaBackgroundPic.jpg',
    florence: 'florenceBackgroundPic.jpg',
    prague: 'pragueBackgroundPic.jpg',
};

class PictureScroller extends Component {
    static propTypes = {
        onBackButtonPress: PropTypes.func.isRequired,
    };

    get screenWidth() {
        return Dimensions.get('window').width;
    }

    renderCityHeader() {
        const cityName = this.props.cityName.charAt(0).toUpperCase() + this.props.cityName.slice(1);
        return (
            <CityButton cityName={cityName} onPress={() => this.props.onBackButtonPress(null)} />
        );
    }

    renderListSeperator() {
        return (
            <Image
                source={{ uri: pictureSeperator }}
                style={[
                    styles.listSeperator,
                    { width: this.screenWidth - baseStyle.space.small * 2 },
                ]}
            />
        );
    }

    render() {
        return (
            <>
                <StatusBar barStyle={'dark-content'} />
                {this.renderCityHeader()}
                <FlatList
                    data={this.props.arrayOfPictures}
                    renderItem={({ item }) => <ImageCard picture={item} />}
                    ListHeaderComponent={() => this.renderListSeperator()}
                    ItemSeparatorComponent={() => this.renderListSeperator()}
                    stickyHeaderIndices={[0]}
                />
            </>
        );
    }
}

const styles = StyleSheet.create({
    listSeperator: {
        height: 45,
        marginHorizontal: baseStyle.space.small,
        backgroundColor: baseStyle.colors.white,
    },
});

const mapStateToProps = state => {
    const { currentCity, cityPictures } = state;
    return {
        cityName: currentCity,
        arrayOfPictures: cityPictures[currentCity],
    };
};

const mapDispatchToProps = {
    setCurrentCity,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PictureScroller);
