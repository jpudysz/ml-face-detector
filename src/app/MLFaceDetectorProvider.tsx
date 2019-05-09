import React  from 'react'
import { View, Text } from 'react-native'

type MLFaceDetectorProviderProps = {}

export class MLFaceDetectorProvider extends React.Component<MLFaceDetectorProviderProps> {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>
                    Hello world from ML Face Detector
                </Text>
            </View>
        )
    }
}
