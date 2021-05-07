/*作用：创建action*/
import { INCREAMENT, DECREAMENT } from './constant'
// 当对象要作为返回值时，直接加()
export const createIncreamentAction = data => ({ type: INCREAMENT, data })
export const createDecreamentAction = data => ({ type: DECREAMENT, data })