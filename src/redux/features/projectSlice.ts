import { createSlice} from "@reduxjs/toolkit";
import projectData from '../../data';

const initialState = {
    data: projectData
};

export const projectSlice = createSlice({
    name: 'projectlist',
    initialState,
    reducers: {
        setProjectlist: (state,action) => {
            state.data=action.payload
        },
        setProjectState: (state, action) => {
            
        }
    }
})

export const { setProjectlist } = projectSlice.actions;
export default projectSlice.reducer