import { IFindPropertyFilter } from "@/data/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";



interface IGlobalSlice {
  listingFilter: IFindPropertyFilter;
}

const initialState: IGlobalSlice = {
    listingFilter: {
        location: {
            name: '',
            lat: 0,
            lng: 0,
            km: 0
        },
        utility: {
            water: false,
            electricity: false,
            maintenance: false,
        }
    } 
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setListingFilter: (state, action: PayloadAction<any>) => {
      state.listingFilter = action.payload
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

export const { setListingFilter } = globalSlice.actions;
export default globalSlice.reducer;
