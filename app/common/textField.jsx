import React from "react";

export class TextField extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value, this.props.name);
    }
    render() {
        return (
            <input
                type="text"
                value={this.props.value}
                defaultValue={this.props.defaultValue}
                name={this.props.name}
                className="text-field"
                style={this.props.style}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
            />
        );
    }
}

TextField.propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    className: React.PropTypes.string,
    style: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
};
