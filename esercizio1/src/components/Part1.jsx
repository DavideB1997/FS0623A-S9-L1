import img from "../assets/imgs/Front.png";
import Button from "./Button";

const Part1 = (props) => {
	return (
		<div>
			<Button
				label={props.label}
				name={props.name}
			/>
			<img
				src={img}
				alt=''
				width={300}
				style={{ display: "block" }}
			/>
		</div>
	);
};

export default Part1;
