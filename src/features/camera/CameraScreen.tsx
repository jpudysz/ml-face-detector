import React from 'react'
import { View, Text } from 'react-native'
import { Styles } from 'lib/types'

type CameraScreenProps = {}

export class CameraScreen extends React.Component<CameraScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    CameraScreen
                </Text>
            </View>
        )
    }
}

const styles: Styles = {
    container: {
        flex: 1
    }
}
