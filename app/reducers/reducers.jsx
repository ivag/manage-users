import { assign } from "lodash";
import {
    OPEN_EDIT_MODAL,
    CLOSE_EDIT_MODAL,
    OPEN_DELETE_MODAL,
    CLOSE_DELETE_MODAL,
    OPEN_INFO_MODAL,
    CLOSE_INFO_MODAL,
    DELETE_USER,
    CHANGE_ID,
    CHANGE_NAME,
    CHANGE_AGE
} from "../actions/actions.jsx";

const getInitialState = () => {
    return {
        users: [
            { id: "1", name: "User 1", age: "27" },
            { id: "2", name: "User 2", age: "30" },
            { id: "3", name: "User 3", age: "40" },
            { id: "4", name: "User 4", age: "42" },
            { id: "5", name: "User 5", age: "45" }
        ],
        editModalIsOpen: false,
        deleteModalIsOpen: false,
        infoModalIsOpen: false,
        currentItemId: "0"
    };
};

// get old state object and return new state with updated value
// THIS IS A PURE FUNCTION - NO STATE IS MUTATED, BUT A NEW COPY OF THE STATE IS RETURNED
const updateState = (stateObj, key, value) => {
    if (stateObj[key] === value) {
        return stateObj;
    } else {
        const newState = assign({}, stateObj);
        newState[key] = value;
        return newState;
    }
};

// redux reducer - receives old state and an action, and returns a new state
// THIS FUNCTION IS PURE: DOES NOT MUTATE GIVEN STATE
const reducer = (state, action) => {
    if (typeof state === "undefined") {
        return getInitialState();
    } else if (action.type === OPEN_EDIT_MODAL) {
        let newState = updateState(state, "editModalIsOpen", true);
        return updateState(newState, "currentItemId", action.id);
    } else if (action.type === CLOSE_EDIT_MODAL) {
        let newState = updateState(state, "editModalIsOpen", false);
        return updateState(newState, "currentItemId", "0");
    } else if (action.type === CLOSE_DELETE_MODAL) {
        let newState = updateState(state, "deleteModalIsOpen", false);
        return updateState(newState, "currentItemId", "0");
    } else if (action.type === OPEN_DELETE_MODAL) {
        let newState = updateState(state, "deleteModalIsOpen", true);
        return updateState(newState, "currentItemId", action.id);
    } else if (action.type === DELETE_USER) {
        let newState = updateState(state, "deleteModalIsOpen", false);
        return updateState(newState, "users", newState.users.filter(item => item.id !== action.id));
    } else if (action.type === OPEN_INFO_MODAL) {
        let newState = updateState(state, "infoModalIsOpen", true);
        return updateState(newState, "currentItemId", action.id);
    } else if (action.type === CLOSE_INFO_MODAL) {
        let newState = updateState(state, "infoModalIsOpen", false);
        return updateState(newState, "currentItemId", "0");
    } else if (action.type === CHANGE_NAME) {
        let users = state.users.map(u => {
            if (u.id === action.id) {
                u.name = action.value;
            }
            return u;
        });
        return updateState(state, "users", users);
    } else if (action.type === CHANGE_ID) {
        let users = state.users.map(u => {
            if (u.id === action.id) {
                u.id = action.value;
            }
            return u;
        });
        let newState = updateState(state, "users", users);
        return updateState(newState, "currentItemId", action.value);
    } else if (action.type === CHANGE_AGE) {
        let users = state.users.map(u => {
            if (u.id === action.id) {
                u.age = action.value;
            }
            return u;
        });
        return updateState(state, "users", users);
    }
    return state;
};

export { reducer };
