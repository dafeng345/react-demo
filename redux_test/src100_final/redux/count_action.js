import { INCREAMENT, DECREAMENT } from './constant'
export const increament = (data) => ({ data, type: INCREAMENT });
export const decreament = (data) => ({ data, type: DECREAMENT });
export const increamentAync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            // 异步action中调用同步action
            dispatch(increament(data))
        }, time)
    }
}