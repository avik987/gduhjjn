import * as types from "state/locations/types";
import { DEFAULT_LOCATION } from "constants/globals";

const initialState = {
    userIpAddress: '',
    position: DEFAULT_LOCATION,
    locationList: [],
    loader: false,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_IP_ADDRESS_SUCCESS:
            return {
                ...state,
                userIpAddress: action.ipAddress,
            }
        case types.SET_POSITION:
            return {
                ...state,
                position: action.position,
            }
        case types.FETCH_LOCATIONS_BY_USER_IP_REQUEST:
            return {
                ...state,
                loader: true,
            }
        case types.FETCH_LOCATIONS_BY_USER_IP_SUCCESS:
            return {
                ...state,
                locationList: action.locationList,
                loader: false,
            }
        case types.SET_LOCATIONS_REQUEST_LOADER:
            return {
                ...state,
                loader: action.value,
            }
        default:
            return state;
    }
};

export default locationReducer;