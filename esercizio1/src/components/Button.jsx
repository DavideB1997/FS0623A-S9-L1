const Button = (props) => {
	return (
		<button
			type='button'
			onClick={() => console.log(`Hai premuto il bottone da ${props.name}`)}
		>
			{props.label}
		</button>
	);
};

export default Button;
