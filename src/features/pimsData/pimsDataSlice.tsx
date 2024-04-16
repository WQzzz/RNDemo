import { createSlice} from "@reduxjs/toolkit";

const pimsDataSlice=createSlice({
    name:"pimsData",
    initialState:'',
    reducers:{
        initial:(state,action)=>{
            return action.payload
        }
    }
})

export const {initial} = pimsDataSlice.actions
export default pimsDataSlice.reducer
