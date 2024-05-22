// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import Axios from 'axios';
// import apiConfig from '../config/api';

// export const verSalas = createAsyncThunk('user/signUp', async ({credentials})=>{
//     // realizar operacion asincrona
    
//     let response = await Axios.post(`${apiConfig.domain}/users`, {
//         user: credentials //paarametros
//     })   
//     console.log(response);
//     return response.data.user;

// });



// let salasSlice = createSlice({
//     name: 'salas',
//     initialState: {
//         user: null,
//         status: ''
//     },
//     extraReducers:{
//         // estado pendiente 
//         [verSalas.pending]: (state, action) => {
//             state.status = 'loading';
//         },
//         // estado finalizado
//         [verSalas.fulfilled]: (state, action) => {
//             state.user = action.payload;
//         },
//         //estado fallido
//         [verSalas.rejected]: (state, action) => {
//             state.status = 'failed';
//         },
        
//     }
// });

// export default salasSlice.reducer;