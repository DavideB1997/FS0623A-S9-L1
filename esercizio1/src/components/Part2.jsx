import { Component } from "react";
import img from "../assets/imgs/tyler durden.jpg";
import Button from "./Button";

class Part2 extends Component {
	render() {
		return (
			<div>
				<img
					src={img}
					alt=''
					width={300}
					style={{ display: "block" }}
				/>
				<Button
					label={this.props.label}
					name={this.props.name}
				/>
			</div>
		);
	}
}

export default Part2;
