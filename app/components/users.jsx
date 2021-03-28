import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    showEditModal,
    showDeleteModal,
    hideDeleteModal,
    hideEditModal,
    deleteUser,
    hideInfoModal,
    showInfoModal,
    changeName,
    changeId,
    changeAge
} from "../actions/actions.jsx";
import { Modal } from "../common/modal.jsx";
import { TextField } from "../common/textField.jsx";
import { Select } from "../common/select.jsx";
import { range } from "lodash";

import "bootstrap/dist/css/bootstrap.min.css";

//////////////////////////////////////////////////////////////////////////
// Presentational 'dumb' component
//////////////////////////////////////////////////////////////////////////
class UserPresentation extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>
                    <button type="button" className="btn btn-link" onClick={this.props.showInfoModal}>
                        {this.props.name}
                    </button>
                    {this.props.id === this.props.currentItemId && this.props.infoModalIsOpen ? (
                        <Modal title="Info" onClick={this.props.hideInfoModal}>
                            <div className="modal-body">
                                <p>User ID - {this.props.id}</p>
                                <p>User Name - {this.props.name}</p>
                                <p>User Age - {this.props.age}</p>
                            </div>
                        </Modal>
                    ) : null}
                </td>
                <td>{this.props.age}</td>
                <td>
                    <button type="button" className="btn btn-link" onClick={this.props.showEditModal}>
                        Edit
                    </button>
                    <span />
                    <button type="button" className="btn btn-link" onClick={this.props.showDeleteModal}>
                        Delete
                    </button>
                    {this.props.id === this.props.currentItemId && this.props.editModalIsOpen ? (
                        <Modal title="Edit User" onClick={this.props.hideEditModal}>
                            <div className="modal-body">
                                <div>
                                    <label style={{ width: "100px" }}>User ID -</label>
                                    <TextField name="id" value={this.props.id} onChange={this.props.changeId} />
                                </div>
                                <div>
                                    <label style={{ width: "100px" }}>User name - </label>
                                    <TextField name="name" value={this.props.name} onChange={this.props.changeName} />
                                </div>
                                <div>
                                    <label style={{ width: "100px" }}>User age - </label>
                                    <Select options={this.props.options} value={this.props.age} onChange={this.props.changeAge} />
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                    {this.props.id === this.props.currentItemId && this.props.deleteModalIsOpen ? (
                        <Modal
                            title="Delete User"
                            onClick={this.props.hideDeleteModal}
                            buttons={[
                                <button
                                    key="yes"
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={this.props.hideDeleteModal}
                                >
                                    No
                                </button>,
                                <button key="no" type="button" className="btn btn-primary" onClick={this.props.deleteUser}>
                                    Yes
                                </button>
                            ]}
                        >
                            <div className="modal-body">
                                <p>Are you sure you want to delete the user?</p>
                            </div>
                        </Modal>
                    ) : null}
                </td>
            </tr>
        );
    }
}

UserPresentation.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    showEditModal: PropTypes.func,
    hideEditModal: PropTypes.func,
    changeAge: PropTypes.func,
    changeId: PropTypes.func,
    changeName: PropTypes.func,
    showDeleteModal: PropTypes.func,
    hideDeleteModal: PropTypes.func,
    showInfoModal: PropTypes.func,
    hideInfoModal: PropTypes.func,
    deleteUser: PropTypes.func,
    currentItemId: PropTypes.string.isRequired
};

const mapUserDispatchToProps = (dispatch, props) => {
    return {
        showEditModal: function(value) {
            dispatch(showEditModal(props.id));
        },
        hideEditModal: function(value) {
            dispatch(hideEditModal(props.id));
        },
        showDeleteModal: function(value) {
            dispatch(showDeleteModal(props.id));
        },
        hideDeleteModal: function(value) {
            dispatch(hideDeleteModal(props.id));
        },
        deleteUser: function(value) {
            dispatch(deleteUser(props.id));
        },
        showInfoModal: function(value) {
            dispatch(showInfoModal(props.id));
        },
        hideInfoModal: function(value) {
            dispatch(hideInfoModal(props.id));
        },
        changeName: function(value) {
            dispatch(changeName(props.id, value));
        },
        changeId: function(value) {
            dispatch(changeId(props.id, value));
        },
        changeAge: function(e) {
            dispatch(changeAge(props.id, e.target.value));
        }
    };
};

const mapUserStateToProps = state => ({
    currentItemId: state.currentItemId,
    editModalIsOpen: state.editModalIsOpen,
    deleteModalIsOpen: state.deleteModalIsOpen,
    infoModalIsOpen: state.infoModalIsOpen,
    options: range(18, 101, 1)
});

// `Smart` component
const UserContainer = connect(mapUserStateToProps, mapUserDispatchToProps)(UserPresentation);

//////////////////////////////////////////////////////////////////////////////
// MAIN PARENT PRESENTATION CONTAINER
//////////////////////////////////////////////////////////////////////////////
const UserListPresentation = ({ users }) => (
    <div className="container">
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((i, index) => {
                    return <UserContainer key={index} id={i.id} name={i.name} age={i.age} />;
                })}
            </tbody>
        </table>
    </div>
);

UserListPresentation.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

const mapUsersStateToProps = state => ({
    users: state.users
});

export default connect(mapUsersStateToProps)(UserListPresentation);
