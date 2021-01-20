// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
// 모의고사
function solution(answers) {
  var answer = [];
  const man_1 = [1, 2, 3, 4, 5];
  const man_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const answer_man = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === man_1[i % 5]) {
      answer_man[0]++;
    }
    if (answers[i] === man_2[i % 8]) {
      answer_man[1]++;
    }
    if (answers[i] === man_3[i % 10]) {
      answer_man[2]++;
    }
  }
  let top_score = Math.max(...answer_man);

  for (let i = 0; i < answer_man.length; i++) {
    if (top_score === answer_man[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

function solution(answers) {
  const answer = [];
  const submits = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scoring = submits.map((submit) => {
    return answers.reduce((acc, curr, index) => {
      if (curr === submit[index % submit.length]) {
        acc++;
      }
      return acc;
    }, 0);
  });
  scoring.map((el, index) => {
    const topScore = Math.max(...scoring);
    if (topScore === el) {
      answer.push(index + 1);
    }
  });

  return answer;
}
