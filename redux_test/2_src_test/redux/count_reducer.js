// reducer是一个纯函数
import {INCREAMENT,DECREAMENT} from './constant'
const initState = 0
export default function (prevState = initState, action = {}) {
    const { type, data } = action
    switch (type) {
        case INCREAMENT:
            return prevState + data;
        case DECREAMENT:
            return prevState - data;
        // 在初始化的时候，action={type:@@REDUX/INIT...} 执行default
        default:
            return prevState
    }
}