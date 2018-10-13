export function increment() {
    return {
        type:'INCREMENT',
    }
}
export function decrement() {
    return {
        type:'DECREMENT',
        
    }
}
export function incrementAsync() {
    return function (dispatch, getState) {
        setTimeout(function () {
            dispatch(increment());
        }, 3000)
    }
}
// ifOdd的+1操作
export function incrementIfOdd() {
    return function (dispatch, getState) {
        const { counter } = getState();
        if (counter % 2) {
            dispatch(increment())
        }
    }
}

