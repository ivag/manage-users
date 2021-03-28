///////////////////////////////////////////////////////////
// REDUX ACTIONS
///////////////////////////////////////////////////////////

export const DELETED = "DELETED";
export const EDITED = "EDITED";
export const OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL";
export const CLOSE_EDIT_MODAL = "CLOSE_EDIT_MODAL";
export const OPEN_DELETE_MODAL = "OPEN_DELETE_MODAL";
export const CLOSE_DELETE_MODAL = "CLOSE_DELETE_MODAL";
export const OPEN_INFO_MODAL = "OPEN_INFO_MODAL";
export const CLOSE_INFO_MODAL = "CLOSE_INFO_MODAL";
export const DELETE_USER = "DELETE_USER";
export const CHANGE_ID = "CHANGE_ID";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_AGE = "CHANGE_AGE";

export function edit(id) {
	return {
		type: EDITED,
		id: id
	};
}

export function remove(id) {
	return {
		type: DELETED,
		id: id
	};
}

export function showEditModal(id) {
	return {
		type: OPEN_EDIT_MODAL,
		id: id
	};
}

export function hideEditModal(id) {
	return {
		type: CLOSE_EDIT_MODAL,
		id: id
	};
}

export function showDeleteModal(id) {
	return {
		type: OPEN_DELETE_MODAL,
		id: id
	};
}

export function hideDeleteModal(id) {
	return {
		type: CLOSE_DELETE_MODAL,
		id: id
	};
}

export function showInfoModal(id) {
	return {
		type: OPEN_INFO_MODAL,
		id: id
	};
}

export function hideInfoModal(id) {
	return {
		type: CLOSE_INFO_MODAL,
		id: id
	};
}

export function deleteUser(id) {
	return {
		type: DELETE_USER,
		id: id
	};
}

export function changeId(id, value) {
	return {
		type: CHANGE_ID,
		id: id,
		value: value
	};
}

export function changeName(id, name) {
	return {
		type: CHANGE_NAME,
		id: id,
		value: name
	};
}

export function changeAge(id, age) {
	return {
		type: CHANGE_AGE,
		id: id,
		value: age
	};
}
