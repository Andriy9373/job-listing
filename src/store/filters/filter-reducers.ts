import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER, FilterModel } from "./filter-actions";


export const filterReducer = (state = [], action: FilterModel) => {
    switch(action.type) {
        case ADD_FILTER: {
            return state.find(item => item === action.filter) ? state : [...state, action.filter];
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== action.filter);
        }
        case CLEAR_FILTER: {
            return [];
        }
        default: {
            return state;
        }
    }
}