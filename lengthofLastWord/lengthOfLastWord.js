const lengthOfLastWord = (str)=>{
  const strArr = str.split(' ');
  console.log(strArr);
  const noEmpty = strArr.filter(word => word !== '');
  const length = noEmpty[noEmpty.length - 1].length;
  return length;
};


console.log(lengthOfLastWord("   fly me   to   the moon  "));
