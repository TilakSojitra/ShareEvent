import { FaInfoCircle } from "react-icons/fa";

export default function InputWithInfo({
	id,
	label,
	value,
	onChange,
	placeholder,
	infoText,
}) {
	return (
		<div className="input-group">
			<label htmlFor={id}>
				{label}
				<span className="info-icon" title={infoText}>
					<FaInfoCircle />
				</span>
			</label>
			<input
				id={id}
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className="input-field"
			/>
		</div>
	);
}
