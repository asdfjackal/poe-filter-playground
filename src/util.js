function minify(input){
  const re = /^(.*?)\s*#.*$/;

  const inputLines = input.split('\n');
  const strippedInput = inputLines.filter((line) => {
    return !(line.startsWith('#'));
  }).filter((line) => {
    return line;
  }).map((line) => {
    let match = line.match(re);
    if(match === null){
      return line;
    }else{
      return match[1];
    }
  });

  return strippedInput.join('\n');
}

export {
  minify
};
