import { getButtonComponent } from "../../utils/share-event.util";

export default function ShareButton({
	url,
	children,
	className,
	additionalProps,
	shareButtonType,
}) {
	const ButtonComponent = getButtonComponent(shareButtonType)

	return (
		<div className="share-button-wrapper">
			<ButtonComponent
				url={url}
				className={`share-button ${className}`}
				{...additionalProps}
			>
				{children}
			</ButtonComponent>
		</div>
	);
}
