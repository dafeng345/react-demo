import { INCREAMENT, DECREAMENT } from './constant'
// import { } from './count'
export const createIncreamentAction = data => ({ type: INCREAMENT, data })
export const createDecreamentAction = data => ({ type: DECREAMENT, data })
// 异步action，即action的返回值是一个函数
export const createIncreamentAsync = data => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncreamentAction(data))
        })
    }
}