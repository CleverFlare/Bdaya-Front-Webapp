function formatNum(str: string) {
  const numberRegex = /\d/gi;

  if (numberRegex.test(str)) return parseInt(str);
  else return "";
}

export default formatNum;
