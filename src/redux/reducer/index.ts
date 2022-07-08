import { combineReducers } from "redux";
import getRedeemPointsReducer from './Redeem/RedeemPoints';

export default combineReducers({
    redeemPoint:getRedeemPointsReducer
});