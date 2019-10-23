import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Image, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { CityButton, PictureScroller } from './';
import baseStyle from './commons/base';
import { fetchPicturesOfAllCities, setCurrentCity } from '../redux/actions';

const APP_NAME = 'Cities Of Europe';
const BANNER_BACKGROUND_URI = 'bannerBackground.jpg';

class LandingPage extends Component {
    state = {
        shouldRenderPictureList: false,
    };

    get screenWidth() {
        return Dimensions.get('window').width;
    }

    onCityButtonPress = cityName => {
        this.props.setCurrentCity(cityName);
        this.setState({ shouldRenderPictureList: !this.state.shouldRenderPictureList });
    };

    componentDidMount() {
        this.props.fetchPicturesOfAllCities();
    }

    renderBackgroundImage() {
        const imgSize = {
            width: this.screenWidth,
            height: this.screenWidth / 1.5,
        };

        return (
            <Image resizeMode={'cover'} style={imgSize} source={{ uri: BANNER_BACKGROUND_URI }} />
        );
    }

    renderLandingPage() {
        return (
            <View>
                <View
                    style={[
                        styles.header,
                        { width: this.screenWidth, height: this.screenWidth / 2.5 },
                    ]}>
                    <Text style={styles.headerText}>{APP_NAME}</Text>
                </View>
                <View>
                    <CityButton
                        cityName={'Barcelona'}
                        onPress={() => this.onCityButtonPress('barcelona')}
                    />

                    <CityButton
                        cityName={'Florence'}
                        onPress={() => this.onCityButtonPress('florence')}
                    />

                    <CityButton
                        cityName={'Prague'}
                        onPress={() => this.onCityButtonPress('prague')}
                    />

                    <CityButton
                        cityName={'Paris'}
                        onPress={() => this.onCityButtonPress('paris')}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <>
                {!this.state.shouldRenderPictureList && this.renderBackgroundImage()}
                <StatusBar barStyle={'light-content'} />
                <SafeAreaView style={styles.body}>
                    {this.state.shouldRenderPictureList ? (
                        <PictureScroller
                            onBackButtonPress={cityName => this.onCityButtonPress(cityName)}
                        />
                    ) : (
                        this.renderLandingPage()
                    )}
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: baseStyle.fontSize.doubleExtraLarge,
        color: baseStyle.colors.white,
        fontFamily: baseStyle.fontFamily.black,
    },
});

const mapStateToProps = state => {
    return {
        currentCity: state.currentCity,
    };
};

const mapDispatchToProps = {
    fetchPicturesOfAllCities,
    setCurrentCity,
};

export default connect(
    null,
    mapDispatchToProps,
)(LandingPage);
