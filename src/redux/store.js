import {configureStore} from "@reduxjs/toolkit";

import goodSliceReducer from "./reducers/goodsSlice";
import cashSliceReducer from "./reducers/cashSlice";

export const store = configureStore({
    reducer: {
        goods: goodSliceReducer,
        cash: cashSliceReducer,
    },
})