// IMPORT
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "react-router";
// import store from "./store/store.jsx";
import { createStore } from "redux";
import UsersContainer from "./components/users.jsx";
import { reducer } from "./reducers/reducers.jsx";

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<UsersContainer />
	</Provider>,
	document.getElementById("container")
);
