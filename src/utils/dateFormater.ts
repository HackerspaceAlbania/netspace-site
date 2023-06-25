export const getDate = (date: any) => {
    const newDate = new Date(date);
    return newDate.getDate();
}

export const getDay = (date: any) => {
    const newDate = new Date(date);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[newDate.getDay()];
}

export const getMonth = (date: any) => {
    const newDate = new Date(date);
    const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthShortNames[newDate.getMonth()];
}

export const getTime = (date: any) => {
    const newDate = new Date(date);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}`;
}