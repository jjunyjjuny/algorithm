var lengthOfLongestSubstring = function (s) {
  let stack = [];
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!stack.includes(char)) {
      stack.push(char);
      if (stack.length > longest) {
        longest = stack.length;
      }
    } else {
      const index = stack.indexOf(char);
      stack = stack.slice(index + 1);
      stack.push(char);
      if (stack.length > longest) {
        longest = stack.length;
      }
    }
  }
  return longest;
};

lengthOfLongestSubstring("abcabcbb");
