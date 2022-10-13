import { createSlice } from "@reduxjs/toolkit";

export const webConfigSlice = createSlice({
    name: "webConfig",
    initialState:{
        screenWidth: window.innerWidth,
        desktopWidth: 1024,
    },
    reducers:{
        updateScreenWidth: (state, action) => {
            state.screenWidth = action.payload
        },
        updateModalSoins: (state, action) => {
            state.modalSoins = action.payload
        }
    },
})

export const {updateScreenWidth} = webConfigSlice.actions

export default webConfigSlice.reducer