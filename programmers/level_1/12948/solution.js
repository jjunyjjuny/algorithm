function solution(phone_number) {
  const pivot = phone_number.length - 4;
  return "*".repeat(pivot) + phone_number.slice(pivot);
}
