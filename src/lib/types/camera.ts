export enum CameraTypes {
    Front = 'front',
    Back = 'back'
}

export type Point = {
    x: number,
    y: number
}

export type Size = {
    width: number,
    height: number
}

export type Bounds = {
    size: Size
    origin: Point
}

export type DetectedFace = {
    faceID?: number
    bounds: Bounds,
    smilingProbability?: number
    leftEarPosition?: Point
    rightEarPosition?: Point
    leftEyePosition?: Point
    leftEyeOpenProbability?: number
    rightEyePosition?: Point
    rightEyeOpenProbability?: number
    leftCheekPosition?: Point
    rightCheekPosition?: Point
    leftMouthPosition?: Point
    mouthPosition?: Point
    rightMouthPosition?: Point
    bottomMouthPosition?: Point
    noseBasePosition?: Point
    yawAngle?: number
    rollAngle?: number
}
