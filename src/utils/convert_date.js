export default function formatTimeAgo(dbDate) {
  // Convert the database date string to a Date object
  const dateObject = new Date(dbDate);

  // Calculate the time difference in milliseconds
  // **Fix:** Use Date.now() instead of the current time
  const timeDifference = Date.now() - dateObject.getTime();

  // If the date is more than 30 days ago, return a message
  if (timeDifference > 2592000000) {
    // 30 days in milliseconds
    return "More than 30 days ago";
  }

  // Define thresholds for different time intervals
  const thresholds = [
    [1000, "just now"],
    [60000, "1 minute ago"],
    [3600000, "{} minutes ago"],
    [86400000, "{} hours ago"],
    [2592000000, "{} days ago"],
  ];

  // Find the appropriate threshold
  for (const [threshold, formatStr] of thresholds) {
    if (timeDifference < threshold) {
      if (threshold < 60000) {
        // If the threshold is less than a minute, show seconds
        return formatStr.replace("{}", Math.floor(timeDifference / 1000));
      } else if (threshold < 3600000) {
        // If the threshold is less than an hour, show minutes
        return formatStr.replace("{}", Math.floor(timeDifference / 60000));
      } else if (threshold < 86400000) {
        // If the threshold is less than a day, show hours
        return formatStr.replace("{}", Math.floor(timeDifference / 3600000));
      } else {
        // Otherwise, show days
        return formatStr.replace("{}", Math.floor(timeDifference / 86400000));
      }
    }
  }
}
