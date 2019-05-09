import React from 'react'
import { TouchableOpacity, Image, ImageSourcePropType, ImageStyle } from 'react-native'
import { VoidFunction } from 'lib/types'

type IconProps = {
    source: ImageSourcePropType,
    onPress: VoidFunction,
    style?: ImageStyle
}

export const Icon: React.FunctionComponent<IconProps> = props => (
    <TouchableOpacity
        activeOpacity={.8}
        onPress={props.onPress}
    >
        <Image
            style={props.style}
            source={props.source}
        />
    </TouchableOpacity>
)

Icon.defaultProps = {
    style: {
        width: 24,
        height: 24
    }
}
