import {DESELECT_PLACE, SELECT_PLACE, DELETE_PLACE, ADD_PLACE} from '../actions/actionTypes'

const initialState = {
    placeName: '',
    placeList: [],
    selectedPlace: '',
};

const reducers = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PLACE:
            return {
                ...state,
                placeList: state.placeList.concat({
                    key: Math.random().toString(),
                    name: action.placeName,
                    image: "https://public-media.si-cdn.com/filer/45/3b/453b8165-0d4e-4372-a55a-46d4b9cfdfe1/taj_mahal.jpg"
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                placeList: state.placeList.filter(item => item.key !== state.selectedPlace.key),
                selectedPlace: ''
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.placeList.find(item => item.key === action.key)
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: ''
            };

        default:
            break;

    }
    return state;

    // must return the complete state object always so that our state will become always predictable

};

export default reducers
