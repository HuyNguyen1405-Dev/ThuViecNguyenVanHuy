import { createSlice } from "@reduxjs/toolkit";

export const dataCommonSlice = createSlice({
    name: 'dataCommon',
    initialState: {
        data: {},
    },
    reducers: {
        setData: (state, action) => {
            const { key, value } = action.payload;
            state.data = {
                ...state.data,
                [key]: value,
            };
        },
        removeData: (state, action) => {
            const { key } = action.payload;
            const { [key]: deletedKey, ...rest } = state.data;
            state.data = rest;
        },
    },
});

export const { setData, removeData } = dataCommonSlice.actions;
export const selectData = (state) => {
    const dataKeys = Object.keys(state.dataCommon.data);
    return dataKeys.reduce((result, key) => {
        result[key] = state.dataCommon.data[key];
        return result;
    }, {});
};

export default dataCommonSlice.reducer;

