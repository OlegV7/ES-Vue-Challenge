const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const createDate = date => {
    const newDate = new Date(date),
          month   = months[newDate.getMonth()],
          day     = newDate.getDate(),
          year    = newDate.getFullYear();

    return {
        month,
        day,
        year
    };
};

export default createDate;