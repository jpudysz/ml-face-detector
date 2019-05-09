import React from 'react'
import { InteractionManager, Text, TouchableOpacity, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import Permissions from 'react-native-permissions'
import { iOSColors, sanFranciscoWeights } from 'react-native-typography'
import { Nullable, PERMISSION, PermissionStatus, Styles } from 'lib/types'
import { en_GB } from 'lib/locale'
import { getPermissionStatus, requestPermission } from '../utils'

const T = {
    ...en_GB.screens.cameraScreen,
    labels: en_GB.common.labels
}

type InjectedProps = NavigationInjectedProps

type PermissionsHocProps = NavigationInjectedProps

type PermissionsHocState = {
    cameraPermissionStatus: Nullable<PermissionStatus>
}

export const withCameraPermissions = <BaseProps extends InjectedProps>(
    BaseComponent: React.ComponentType<InjectedProps>
) => class PermissionsHoc extends React.Component<PermissionsHocProps, PermissionsHocState> {
    state: PermissionsHocState = {
        cameraPermissionStatus: null,
    }

    constructor(props: PermissionsHocProps) {
        super(props)

        this.askForCameraPermission = this.askForCameraPermission.bind(this)
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(async () => {
            const status = await getPermissionStatus(PERMISSION.CAMERA)

            this.setState({
                cameraPermissionStatus: status
            })
        })
    }

    async askForCameraPermission() {
        const status = await requestPermission(PERMISSION.CAMERA)

        this.setState({
            cameraPermissionStatus: status
        })
    }

    renderLoader() {
        return (
            <View style={styles.loaderContainer} />
        )
    }

    renderGivePermissionIncentive() {
        return (
            <View style={styles.container}>
                <Text style={styles.permissionText}>
                    {T.incentive}
                </Text>
                <View style={styles.permissionButtons}>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{
                            ...styles.cancelButton,
                            ...styles.button
                        }}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.ctaButtonText}>
                            {T.labels.reject}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{
                            ...styles.ctaButton,
                            ...styles.button
                        }}
                        onPress={this.askForCameraPermission}
                    >
                        <Text style={styles.ctaButtonText}>
                            {T.labels.accept}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderNavigateToSettingsIncentive() {
        return (
            <View style={styles.container}>
                <Text style={styles.permissionText}>
                    {T.permissions.goToSettings}
                </Text>
                <View style={styles.permissionButtons}>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{
                            ...styles.cancelButton,
                            ...styles.button
                        }}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.ctaButtonText}>
                            {T.labels.cancel}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{
                            ...styles.ctaButton,
                            ...styles.button
                        }}
                        onPress={() => Permissions.openSettings()}
                    >
                        <Text style={styles.ctaButtonText}>
                            {T.labels.goToSettings}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderCamera() {
        return (
            <BaseComponent
                {...this.props}
                navigation={this.props.navigation}
            />
        )
    }

    render() {
        switch (this.state.cameraPermissionStatus) {
            case PermissionStatus.GRANTED:
                return this.renderCamera()
            case PermissionStatus.UNDETERMINED:
                return this.renderGivePermissionIncentive()
            case PermissionStatus.NEVER_ASK_AGAIN:
            case PermissionStatus.DENIED:
            case PermissionStatus.UNAVAILABLE:
                return this.renderNavigateToSettingsIncentive()
            default:
                return this.renderLoader()
        }
    }
}

const styles: Styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    permissionText: {
        ...sanFranciscoWeights.semibold
    },
    permissionButtons: {
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 20,
    },
    loaderContainer: {
        flex: 1,
        backgroundColor: iOSColors.black
    },
    button: {
        padding: 10,
        borderRadius: 10,
        width: 150,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    ctaButton: {
        backgroundColor: iOSColors.green,
    },
    cancelButton: {
        backgroundColor: iOSColors.gray,
    },
    ctaButtonText: {
        color: iOSColors.white,
        textAlign: 'center'
    }
}
