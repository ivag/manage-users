import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Modal extends React.Component {
	render() {
		return (
			<div className="modal" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{this.props.title}</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClick}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						{this.props.children}
						<div className="modal-footer">{this.props.buttons && this.props.buttons.map(b => b)}</div>
					</div>
				</div>
			</div>
		);
	}
}

export { Modal };
