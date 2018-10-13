
export default function menuText(state = "首页", action) {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return action.text
            // {
                // ...state,
                // menuText: action.text,
            // }
        default:
            return state;
    }
}