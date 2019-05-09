import React from 'react'
import { View, Image } from 'react-native'
import { iOSColors } from 'react-native-typography'
import { NavigationInjectedProps } from 'react-navigation'
import { Styles } from 'lib/types'
import { ScreenNames } from 'lib/common'
import { en_GB } from 'lib/locale'
import { Button, Heading, Paragraph } from 'components'
import { MeshList } from './components'

const faceMesh = require('lib/assets/images/face-mesh.jpg')

const T = en_GB.screens.homeScreen

type HomeScreenProps = NavigationInjectedProps

export class HomeScreen extends React.Component<HomeScreenProps> {
    renderHeader() {
        return (
            <View style={styles.header}>
                <Heading>
                    {T.heading}
                </Heading>
                <Paragraph>
                    {T.paragraph}
                </Paragraph>
            </View>
        )
    }

    renderFaceMeshBackground() {
        return (
            <View style={styles.faceMeshContainer}>
                <Image source={faceMesh}/>
            </View>
        )
    }

    renderCta() {
        return (
            <View style={styles.ctaButtonContainer}>
                <Button
                    text={T.cta}
                    bgColor={iOSColors.purple}
                    onPress={() => this.props.navigation.navigate(ScreenNames.Camera)}
                />
            </View>
        )
    }

    renderMeshList() {
        return (
            <View style={styles.meshListContainer}>
                <MeshList items={20}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderFaceMeshBackground()}
                {this.renderHeader()}
                {this.renderMeshList()}
                {this.renderCta()}
            </View>
        )
    }
}

const styles: Styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10,
        shadowColor: iOSColors.black,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.75,
        marginBottom: 10,
        alignItems: 'center'
    },
    faceMeshContainer: {
        position: 'absolute',
    },
    ctaButtonContainer: {
        paddingHorizontal: 20
    },
    meshListContainer: {
        maxHeight: 200,
        marginVertical: 25
    }
}
