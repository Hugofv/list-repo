/* eslint-disable import/no-anonymous-default-export */
const checkNumberSmallerThan10 = (value: number) => {
  if (value < 10) {
    return '0' + value;
  }

  return value;
};
export default (dateString: string) => {
  const date = new Date(dateString);

  return `${checkNumberSmallerThan10(date.getDay())}/${checkNumberSmallerThan10(
    date.getMonth() + 1
  )}/${date.getFullYear()} ${checkNumberSmallerThan10(
    date.getHours()
  )}:${checkNumberSmallerThan10(date.getMinutes())}`;
};
