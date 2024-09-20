export default function timeAgo(unixTime) {
	const now = Math.floor(Date.now() / 1000); // Current time in Unix format
	const difference = now - unixTime;

	if (difference < 60) {
		return `${difference} seconds ago`;
	} else if (difference < 3600) {
		// Less than an hour
		const minutes = Math.floor(difference / 60);
		return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
	} else if (difference < 86400) {
		// Less than a day
		const hours = Math.floor(difference / 3600);
		return hours === 1 ? "an hour ago" : `${hours} hours ago`;
	} else if (difference < 604800) {
		// Less than a week
		const days = Math.floor(difference / 86400);
		return days === 1 ? "a day ago" : `${days} days ago`;
	} else if (difference < 2592000) {
		// Less than a month (30 days)
		const weeks = Math.floor(difference / 604800);
		return weeks === 1 ? "a week ago" : `${weeks} weeks ago`;
	} else {
		const months = Math.floor(difference / 2592000);
		return months === 1 ? "a month ago" : `${months} months ago`;
	}
}

// Example Usage
console.log(typeof timeAgo(1694544000)); // "a week ago"
console.log(typeof timeAgo(1692451200)); // "a month ago"
