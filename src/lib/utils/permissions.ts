import Permissions from 'react-native-permissions'
import { PermissionStatus } from '../types'

export const getPermissionStatus = async (permission: string) => {
    const status = await Permissions.check(permission)

    return status === PermissionStatus.DENIED
        ? PermissionStatus.UNDETERMINED
        : status
}

export const requestPermission = async (permission: string) => {
    const status = await Permissions.request(permission)

    return status
}
