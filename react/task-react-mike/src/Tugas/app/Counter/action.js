import {INC, DEC} from './constant';

export const increment = (value) => {
    return{
    type: INC,
    value: value
    }
}

export const dicrement = (value) => {
    return{
    type: DEC,
    value: value
    }
}