import { RootState } from "..";

export const selectAllPositions = (state: RootState) => state.positions;

export const selectVisiblePositions = (state: RootState, filters: (string | undefined)[] = []) => {
    if (!filters.length) {
        return state.positions;
    }
    return state.positions.filter(pos => {
        let posFilters: (string | undefined)[] = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        return filters.every(filter => posFilters.includes(filter));
    })
}