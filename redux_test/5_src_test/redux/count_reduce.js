import { INCREAMENT, DECREAMENT } from './constant'
const initCount = 0;
export default function (prevState = initCount, action = {}) {
    const { type, data } = action;
    console.log(action);
    switch (type) {
        case INCREAMENT:
            return prevState + data;
        case DECREAMENT:
            return prevState - data;
        default:
            return prevState;
    }
}