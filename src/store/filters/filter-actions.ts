export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export interface FilterModel {
    type: string,
    filter?: string
};

export const addFilter = (filter: string) => ({
    type: ADD_FILTER,
    filter
});

export const removeFilter = (filter: string) => ({
    type: REMOVE_FILTER,
    filter
});

export const clearFilter = {
    type: CLEAR_FILTER,
};