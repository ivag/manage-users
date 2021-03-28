import React from "react";

export class Select extends React.Component {
    constructor() {
        super();
    }

    render() {
        let optionItems = this.props.options.map(o => (
            <option key={o} value={o}>
                {o}
            </option>
        ));

        return (
            <select className="select" onChange={this.props.onChange}>
                {optionItems}
            </select>
        );
    }
}
