export interface DefaultRootState { }

export type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;
export type RootStateOrAny = AnyIfEmpty<DefaultRootState>;
export type Selector = (state: DefaultRootState) => unknown

export interface IAction {
    type: string
    payload?: any
}

export type Reducer = (state: object, action: IAction) => object

export type ProviderProps = {
    store: IStore
    children: React.ReactNode
}

export interface IStore {
    getState(): any
    dispatch(action: IAction): void
    subscribe(fn: any): void
}

export type Sub = () => void