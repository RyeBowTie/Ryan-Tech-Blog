module.exports = {
    format_date: (date) => { 
      return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${
        new Date(date).getFullYear()}`
    },
};