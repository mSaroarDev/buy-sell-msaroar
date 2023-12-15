export default function formatTimeAgo(dbDate) {
  const currentDate = new Date();
  const inputDate = new Date(dbDate);

  const seconds = Math.floor((currentDate - inputDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return seconds + " seconds ago";
  } else if (minutes === 1) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  } else if (hours === 1) {
    return "1 hour ago";
  } else if (hours < 24) {
    return hours + " hours ago";
  } else if (days === 1) {
    return "1 day ago";
  } else {
    return days + " days ago";
  }
}
