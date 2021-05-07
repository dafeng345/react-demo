import {INCREAMENT,DECREAMENT} from './constant'
const initState=0
export default function(prevState=initState,action={}){
    const {type,data}=action;
    switch(type){
        case INCREAMENT:
            return prevState+data;
        case DECREAMENT:
            return prevState-data;
        default:
            return prevState;
    }
}