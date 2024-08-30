import { useReducer } from "react"

function reducer(state: {isShow: boolean}, action: {type: string}){
    if(action.type === "toggle"){
        return {
            isShow: !state.isShow
        }
    }
    throw Error("Invalid action")
}

const useModal = () => {
    const [state, dispatch] = useReducer(reducer, {isShow: false}) 
    const toggle = () => dispatch({ type: "toggle" });
    return {
        isShow: state.isShow,
        toggle
    }
}

export default useModal