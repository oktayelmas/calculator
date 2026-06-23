// Define timezones with their IDs
const timezones = [
    { id: 'ny-time', tz: 'America/New_York' },
    { id: 'london-time', tz: 'Europe/London' },
    { id: 'paris-time', tz: 'Europe/Paris' },
    { id: 'dubai-time', tz: 'Asia/Dubai' },
    { id: 'tokyo-time', tz: 'Asia/Tokyo' },
    { id: 'sydney-time', tz: 'Australia/Sydney' },
    { id: 'la-time', tz: 'America/Los_Angeles' },
    { id: 'singapore-time', tz: 'Asia/Singapore' }
];

// Function to format time with leading zeros
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to get time in a specific timezone
function getTimeInTimezone(timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        return formatter.format(new Date());
    } catch (error) {
        console.error(`Error getting time for timezone ${timezone}:`, error);
        return '--:--:--';
    }
}

// Function to update all clocks
function updateClocks() {
    timezones.forEach(({ id, tz }) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getTimeInTimezone(tz);
        }
    });
}

// Update clocks immediately
updateClocks();

// Update clocks every 1000ms (1 second)
setInterval(updateClocks, 1000);

// Optional: Add smooth animation effect
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.clock-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
