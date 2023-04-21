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