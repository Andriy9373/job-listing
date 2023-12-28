import { SET_POSITIONS, AddPosition } from "./position-actions"

export const positionReducer = (state = [], action: AddPosition) => {
    switch(action.type) {
        case SET_POSITIONS: {
            return action.positions;
        }
        default: {
            return state;
        }
    }
}