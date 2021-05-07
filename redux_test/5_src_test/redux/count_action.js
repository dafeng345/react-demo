import { INCREAMENT, DECREAMENT } from './constant'
export const increament = data => ({ data, type: INCREAMENT })
// export const increament = data => {
//     debugger
//     return { data, type: INCREAMENT }
// }
export const decreament = data => ({ data, type: DECREAMENT })
export const increamentAync = (data, time = 0) => {
    return (dispath) => {
        setTimeout(() => {
            dispath(increament(data))
        }, time)
    }
}