import React, { useState } from "react";
import {
	FacebookIcon,
	XIcon,
} from "react-share";
import { shareOnMobile } from "react-mobile-share";
import InputWithInfo from "../InputWithInfo";
import Card from "../Card";
import ShareButton from "../ShareButton";
import { SHARE_BUTTON_TYPES } from "../../constants/share-event.constants";

export default function ReactShare() {
	const [shareUrl, setShareUrl] = useState(
		"https://shareevent-02qr.onrender.com/"
	);
	const [fbHashtag, setFbHashtag] = useState("");
	const [twitterHashtags, setTwitterHashtags] = useState("");
	const [twitterContent, setTwitterContent] = useState(
		"Check out this amazing event!"
	);

	const handleUrlChange = (event) => {
		setShareUrl(event.target.value);
	};

	const handleFbHashtagChange = (event) => {
		setFbHashtag(event.target.value);
	};

	const handleTwitterHashtagsChange = (event) => {
		setTwitterHashtags(event.target.value);
	};

	const handleTwitterContentChange = (event) => {
		setTwitterContent(event.target.value);
	};

	return (
		<div className="share-container">
			<Card title="Share on Facebook" borderColor="facebook-card">
				<InputWithInfo
					id="fb-url"
					label="URL to Share:"
					value={shareUrl}
					onChange={handleUrlChange}
					placeholder="Enter URL to share"
					infoText="The URL of the page you want to share on Facebook"
				/>
				<InputWithInfo
					id="fb-hashtag"
					label="Hashtag:"
					value={fbHashtag}
					onChange={handleFbHashtagChange}
					placeholder="Enter hashtag"
					infoText="A single hashtag to include with your Facebook share"
				/>
				<ShareButton
					url={shareUrl}
					className="facebook"
					shareButtonType={SHARE_BUTTON_TYPES.FACEBOOK}
					additionalProps={{ hashtag: fbHashtag }}
				>
					<FacebookIcon size={48} round />
					<span>Share on Facebook</span>
				</ShareButton>
			</Card>

			<Card title="Share on Twitter" borderColor="twitter-card">
				<InputWithInfo
					id="twitter-url"
					label="URL to Share:"
					value={shareUrl}
					onChange={handleUrlChange}
					placeholder="Enter URL to share"
					infoText="The URL of the page you want to share on Twitter"
				/>
				<InputWithInfo
					id="twitter-hashtags"
					label="Hashtags:"
					value={twitterHashtags}
					onChange={handleTwitterHashtagsChange}
					placeholder="Enter hashtags (comma-separated)"
					infoText="Comma-separated hashtags to include with your tweet"
				/>
				<InputWithInfo
					id="twitter-content"
					label="Content:"
					value={twitterContent}
					onChange={handleTwitterContentChange}
					placeholder="Enter tweet content"
					infoText="The main text content of your tweet"
				/>
				<ShareButton
					url={shareUrl}
					className="twitter"
					shareButtonType={SHARE_BUTTON_TYPES.TWITTER}
					additionalProps={{
						imgBase64: imgBase64,
						title: twitterContent,
						hashtags: twitterHashtags.split(","),
					}}
				>
					<XIcon size={48} round />
					<span>Share on Twitter</span>
				</ShareButton>
			</Card>
			<div>
				<button
					onClick={() =>
						shareOnMobile({
							text: "Hey checkout our package react-mobile-share",
							url: "https://www.npmjs.com/package/react-mobile-share",
							title: "React-Mobile-Share",
							// images: ["https://dummyimage.com/qvga"]
							// images: [imgBase64],
						})
					}
				>
					Share
				</button>
			</div>
		</div>
	);
}
