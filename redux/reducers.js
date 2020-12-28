const initialState = {
    loading: true,
    error: '',
    posts: [],
    product:[],
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "SUCESS":
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }

            break;
        case "FAILURE":
            return {
                ...state,
                loading: false,
                posts: [],
                error: 'something is wrong'
            }
            break;
        case "ADDPRODUCT":
            return {
                ...state, 
                product: [...state.product,action.payload],
            }
            break;    
            case "RESET":
                    return {
                        ...state, 
                        product: [],
                    }
                    break;        

        default:
            return state;
    }
}
