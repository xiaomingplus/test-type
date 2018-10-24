import { MyType } from '../common'
declare module 'testModule' {
    export function someMethod (param:MyType):any;
}
