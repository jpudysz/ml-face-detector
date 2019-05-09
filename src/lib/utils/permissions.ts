import * as RNPermissions from 'react-native-permissions'
import { PermissionStatus } from '../types'

export const getPermissionStatus = async (permission: string) => {
    const status = await RNPermissions.check(permission)

    return status === PermissionStatus.DENIED
        ? PermissionStatus.UNDETERMINED
        : status
}

export const requestPermission = async (permission: string) => {
    const status = await RNPermissions.request(permission)

    return status
}
