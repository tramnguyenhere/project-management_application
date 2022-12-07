import { createSlice} from "@reduxjs/toolkit";
import projectData from '../../data';

const initialState = {
    data: projectData,
    selectedData: []
};

export const projectSlice = createSlice({
    name: 'projectlist',
    initialState,
    reducers: {
        setProjectlist: (state,action) => {
            state.data = action.payload
            
        },
        setSelectedList: (state, action) => { 
            state.selectedData=action.payload
        },
        changeStateSelectedList: (state, action ) => {
            const itemId = action.payload.id
            state.data.forEach((item) => { if(item.id === itemId) {item.state = action.payload.state};
            })
        }
    }
})

export const { setProjectlist,setSelectedList,changeStateSelectedList } = projectSlice.actions;
export default projectSlice.reducer