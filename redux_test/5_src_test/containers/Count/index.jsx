import { connect } from "react-redux";
// UI组件
import CountUI from '../../components/Count'
import { increament, decreament, increamentAync } from '../../redux/count_action'

// 状态/操作状态的方法通过容器组件 传给 UI组件
const mapStateToProps = (state) => ({ count: state }) //函数返回的对象是传给UI组件的props
// 非简写形式
const mapDispatchToProps = (dispatch) => {
    return {
        increament: (count) => dispatch(increament(count))
        , decreament: (count) => dispatch(decreament(count))
        , increamentAsync: (count,time) => dispatch(increamentAync(count,time))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)