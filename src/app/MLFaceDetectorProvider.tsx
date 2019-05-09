import React  from 'react'
import { SafeAreaView } from 'react-native'
import { iOSColors } from 'react-native-typography'
import { HomeScreen } from 'features/home'
import { Styles } from 'lib/types'

type MLFaceDetectorProviderProps = {}

export class MLFaceDetectorProvider extends React.Component<MLFaceDetectorProviderProps> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HomeScreen />
            </SafeAreaView>
        )
    }
}

const styles: Styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: iOSColors.white,
    }
}
