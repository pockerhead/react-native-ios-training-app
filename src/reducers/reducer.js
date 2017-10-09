const initialState={
    text:''
}
    export default function TEXT(state=initialState, action) {
        switch (action.type) {
            case 'TEXT':
                return{
                    ...state,
                    text:action.payload
                }
                break;
        
            default:
            return state
                break;
        }
    }