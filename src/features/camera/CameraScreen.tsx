import React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { RNCamera } from 'react-native-camera'
import { Styles } from 'lib/types'
import { withCameraPermissions } from 'lib/hoc'

type CameraScreenProps = NavigationInjectedProps

export class CameraScreen extends React.Component<CameraScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                />
            </View>
        )
    }
}

export default withCameraPermissions(CameraScreen)

const styles: Styles = {
    container: {
        flex: 1,
    },
    preview: {
        flex: 1
    },
}
