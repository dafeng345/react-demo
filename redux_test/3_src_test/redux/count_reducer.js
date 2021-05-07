//reducer是纯函数
import { INCREAMENT, DECREAMENT } from './constant'
const initSate = 0
export default function (prevState = initSate, action = {}) {
    const { type, data } = action;
    switch (type) {
        case INCREAMENT:
            return prevState + data * 1
        case DECREAMENT:
            return prevState - data * 1
        default:
            return prevState
    }
}