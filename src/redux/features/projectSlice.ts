import { createSlice} from "@reduxjs/toolkit";
import projectData from '../../data';
import { initialStateType } from "../../types/type";

const initialState:initialStateType = {
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
           state.selectedData.push(action.payload)
        },
        removeSelectedItem: (state, action) => {
            const itemId = action.payload.id
            state.selectedData=state.selectedData.filter(i => i.id !== itemId)
        },
        changeStateSelectedList: (state, action ) => {
            const itemId = action.payload.id
            state.data.forEach((item) => { if(item.id === itemId) {item.state = action.payload.state};
            })
            state.selectedData=[]
        }
    }
})

export const { setProjectlist,setSelectedList, removeSelectedItem,changeStateSelectedList } = projectSlice.actions;
export default projectSlice.reducer