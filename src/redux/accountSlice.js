import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = {
   general: {
      name: "",
      email: "",
      adrs: "",
      tel: ""
   },
   advanced: {
      password:""
   },
   login: {
      hasLogin: true,
   }
};

const accountSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      setGeneralAccountInfo: (state, action) => {
         state.general = action.payload;
      },
      setAdvancedAccountInfo: (state, action) => {
         state.advanced = action.payload;
      },
      login: (state) => {
         state.login.hasLogin = true;
      },
      logout: (state) => {
         state.login.hasLogin = false;
      }
   },
});

// export state to global
export const selectGeneral = (state) => state.account.general;
export const selectAdvanced = (state) => state.account.advanced;
export const selectHasLogin = (state) => state.account.login.hasLogin;

// export actions to global
export const { setGeneralAccountInfo,setAdvancedAccountInfo, login, logout } = accountSlice.actions;

// export reducer to global
export default accountSlice.reducer;