import React from 'react'
import { Text, TextInputProps } from 'react-native'
import { iOSColors, sanFranciscoWeights } from 'react-native-typography'
import { Styles } from 'lib/types'

type HeadingProps = TextInputProps

export const Heading: React.FunctionComponent<HeadingProps> = props => (
    <Text
        style={styles.heading}
        {...props}
    >
        {props.children}
    </Text>
)

const styles: Styles = {
    heading: {
        ...sanFranciscoWeights.bold,
        fontSize: 32,
        color: iOSColors.customGray,
        textShadowColor: iOSColors.black,
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 1
    }
}
