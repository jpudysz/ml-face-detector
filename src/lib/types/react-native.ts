import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { Omit } from './common'

type OverridenImageStyle = Omit<ImageStyle, 'overflow'>

export type Styles = {
    [key: string]: TextStyle & OverridenImageStyle & ViewStyle
}
