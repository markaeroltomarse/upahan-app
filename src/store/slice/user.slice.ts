import { IFacilitateForRent } from "@/data/mocks/facilitate";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface IUserSliceState {
  isLoggedIn: boolean;
  user: any;
  properties: IFacilitateForRent[];
}

const initialState: IUserSliceState = {
  isLoggedIn: false,
  user: null,
  properties: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = undefined;
      state.isLoggedIn = false;
    },
    setProperties: (state, action: PayloadAction<IFacilitateForRent[]>) => {
      state.properties = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.user,
      };
    });
  },
});

export const { setUserData, logout, setProperties } = userSlice.actions;
export default userSlice.reducer;
