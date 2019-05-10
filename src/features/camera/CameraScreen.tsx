import React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { iOSColors } from 'react-native-typography'
import { RNCamera } from 'react-native-camera'
import { Bounds, CameraTypes, DetectedFace, Nullable, Styles } from 'lib/types'
import { withCameraPermissions } from 'lib/hoc'
import { Icon } from 'components'

const backIcon = require('lib/assets/icons/back.png')
const switchCamera = require('lib/assets/icons/camera.png')

type CameraScreenProps = NavigationInjectedProps
type CameraScreenState = {
    cameraType: CameraTypes,
    detectedFacePosition: Nullable<Bounds>
}

export class CameraScreen extends React.Component<CameraScreenProps, CameraScreenState> {
    state: CameraScreenState = {
        cameraType: CameraTypes.Front,
        detectedFacePosition: null
    }

    constructor(props: CameraScreenProps) {
        super(props)

        this.handleDetectedFaces = this.handleDetectedFaces.bind(this)
    }

    handleDetectedFaces(response) {
        const [ face ] = response.faces as Array<DetectedFace>

        if (face) {
            this.setState({
                detectedFacePosition: face.bounds
            })
        }
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
        const { detectedFacePosition } = this.state

        return detectedFacePosition ? (
            <View
                style={{
                    ...styles.detectedFace,
                    top: detectedFacePosition.origin.y,
                    left: detectedFacePosition.origin.x,
                    right: detectedFacePosition.origin.x + detectedFacePosition.size.width,
                    bottom: detectedFacePosition.origin.y + detectedFacePosition.size.height
                }}
            />
        ) : null
    }

    render() {
        return (
            <RNCamera
                captureAudio={false}
                style={styles.preview}
                type={this.state.cameraType}
                onFacesDetected={this.handleDetectedFaces}
                faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate}
                faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
                faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
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
    },
    detectedFace: {
        position: 'absolute',
        borderColor: iOSColors.green,
        borderWidth: 1,
        backgroundColor: 'transparent'
    }
}
