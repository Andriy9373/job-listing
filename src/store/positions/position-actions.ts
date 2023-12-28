export const SET_POSITIONS = 'SET_POSITIONS';

export interface AddPosition {
    type: string,
    positions: any[]
}

export const addPositions = (positions: any[]) => ({
    type: SET_POSITIONS,
    positions,
});