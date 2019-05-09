export type VoidFunction = () => void
export type Nullable<T> = T | null
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
