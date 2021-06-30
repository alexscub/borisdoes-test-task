function getFormatedDate(seconds) {
const ms= seconds*1000
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
return new Intl.DateTimeFormat('en-US', options).format(ms)
}
export default getFormatedDate;