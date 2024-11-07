import { FacebookShareButton, TwitterShareButton } from "react-share";
import { SHARE_BUTTON_TYPES } from "../constants/share-event.constants";
const { FACEBOOK, TWITTER } = SHARE_BUTTON_TYPES;

export const getButtonComponent = (buttonType = FACEBOOK) => {
	switch (buttonType) {
		case FACEBOOK:
			return FacebookShareButton;
		case TWITTER:
			return TwitterShareButton;
		default:
			return FacebookShareButton;
	}
};
