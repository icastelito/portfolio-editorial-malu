export function getAmazonImage(shopLink) {
	const match = shopLink.match(/\/dp\/([A-Z0-9]+)/i);
	if (!match) return null;
	return `https://images-na.ssl-images-amazon.com/images/P/${match[1]}.jpg`;
}
