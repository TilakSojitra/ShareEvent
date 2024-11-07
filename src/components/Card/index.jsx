export default function Card({ title, children, borderColor }) {
	return (
		<div className={`share-card ${borderColor}`}>
			<h2 className="card-title">{title}</h2>
			{children}
		</div>
	);
}
