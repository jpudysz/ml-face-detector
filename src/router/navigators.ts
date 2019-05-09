import { createStackNavigator } from 'react-navigation'
import { ScreenNames } from 'lib/common'
import { HomeScreen } from 'features/home'
import { CameraScreen } from 'features/camera'

export const AppNavigator = createStackNavigator({
    [ScreenNames.Home]: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: null,
        })
    },
    [ScreenNames.Camera]: {
        screen: CameraScreen,
        navigationOptions: () => ({
            header: null,
        })
    }
})
