import React from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { iOSColors, sanFranciscoWeights } from 'react-native-typography'
import { Styles, VoidFunction } from 'lib/types'

type ButtonProps = {
    text: string,
    bgColor: string,
    onPress: VoidFunction,
    style?: ViewStyle,
    textStyle?: TextStyle
}

export const Button: React.FunctionComponent<ButtonProps> = props => (
    <View
        style={{
            ...styles.buttonContainer,
            borderColor: props.bgColor
        }}
    >
        <TouchableOpacity
            style={{
                ...styles.buttonStyle,
                ...props.style,
                backgroundColor: props.bgColor
            }}
            activeOpacity={.9}
            onPress={props.onPress}
        >
            <Text
                style={{
                    ...styles.textStyle,
                    ...props.textStyle
                }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    </View>
)

Button.defaultProps = {
    style: {},
    textStyle: {}
}

const styles: Styles = {
    buttonStyle: {
        padding: 10,
        borderWidth: 2,
        borderColor: iOSColors.white,
        borderRadius: 10
    },
    textStyle: {
        color: iOSColors.white,
        textAlign: 'center',
        fontSize: 16,
        ...sanFranciscoWeights.semibold
    },
    buttonContainer: {
        borderWidth: 2,
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 5
    }
}
