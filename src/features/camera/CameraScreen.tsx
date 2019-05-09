import React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { iOSColors } from 'react-native-typography'
import { RNCamera } from 'react-native-camera'
import { CameraTypes, Styles } from 'lib/types'
import { withCameraPermissions } from 'lib/hoc'
import { Icon } from 'components'

const backIcon = require('lib/assets/icons/back.png')
const switchCamera = require('lib/assets/icons/camera.png')

type CameraScreenProps = NavigationInjectedProps
type CameraScreenState = {
    cameraType: CameraTypes
}

export class CameraScreen extends React.Component<CameraScreenProps, CameraScreenState> {
    state: CameraScreenState = {
        cameraType: CameraTypes.Front
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Icon
                    onPress={() => this.props.navigation.goBack()}
                    source={backIcon}
                />
                <Icon
                    onPress={() => this.setState({
                        cameraType: this.state.cameraType === CameraTypes.Front
                            ? CameraTypes.Back
                            : CameraTypes.Front
                    })}
                    source={switchCamera}
                />
            </View>
        )
    }

    renderFaceMesh() {
        return null
    }

    render() {
        return (
            <RNCamera
                style={styles.preview}
                captureAudio={false}
                type={this.state.cameraType}
                faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
                faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
            >
                {this.renderHeader()}
                {this.renderFaceMesh()}
            </RNCamera>
        )
    }
}

export default withCameraPermissions(CameraScreen)

const styles: Styles = {
    preview: {
        flex: 1
    },
    header: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 24,
        justifyContent: 'space-between',
        backgroundColor: iOSColors.white
    }
}
