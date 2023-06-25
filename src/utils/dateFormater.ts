export const formatDate = (date: any) => {
    const tempDate = date.split('.').reverse().join('/');
    
    return new Date(tempDate);
};

export const getDate = (date: any) => {
    return formatDate(date).getDate();
}

export const getDay = (date: any) => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[formatDate(date).getDay()];
}

export const getMonth = (date: any) => {
    const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthShortNames[formatDate(date).getDay()];
}

export const getTime = (date: any) => {
    const hours = formatDate(date).getHours();
    const minutes = formatDate(date).getMinutes();
    
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}`;
}