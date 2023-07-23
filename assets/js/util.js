const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const toMinAndSec = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = formatTime(duration - minutes * 60);

    return `${minutes}:${seconds}`;
};