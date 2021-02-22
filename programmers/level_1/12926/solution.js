function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
    } else {
      const code = s.charCodeAt(i);
      code >= 97
        ? (result += String.fromCharCode(((code + n - 97) % 26) + 97))
        : (result += String.fromCharCode(((code + n - 65) % 26) + 65));
    }
  }
  return result;
}
