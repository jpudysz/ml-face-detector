import React from 'react'
import { Text, TextInputProps } from 'react-native'
import { iOSColors, sanFranciscoWeights } from 'react-native-typography'
import { Styles } from 'lib/types'

type ParagraphProps = TextInputProps

export const Paragraph: React.FunctionComponent<ParagraphProps> = props => (
    <Text
        style={styles.paragraph}
        {...props}
    >
        {props.children}
    </Text>
)

const styles: Styles = {
    paragraph: {
        ...sanFranciscoWeights.regular,
        fontSize: 16,
        color: iOSColors.lightGray,
        textShadowColor: iOSColors.black,
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 1
    }
}
