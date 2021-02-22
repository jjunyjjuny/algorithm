function solution(N, stages) {
    const state = stages.reduce((acc, curr) => {
      acc[curr - 1]++;
      return acc;
    }, Array(N + 1).fill(0));
    const failureRate = state.map((el, index) => {
      return getFailureRate(el, index, state);
    });
    const stageArray = Array.from({ length: N }, (_, i) => i + 1);
    return stageArray.sort((a, b) => {
      if (failureRate[a - 1] > failureRate[b - 1]) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  
  function getFailureRate(current, index, state) {
    const all = state.slice(index).reduce((acc, curr) => acc + curr);
    return all ? (!current ? 0 : current) / all : 0;
  }
  
  //////////////////////// 런타임 에러 잔뜩났던 초기 코드.
  
  function solution(N, stages) {
  const gameState = {};
  for (let i = 1; i <= N + 1; i++) {
    gameState[i] = {
      current: 0,
      all: 0,
    };
  }
  for (let stage of stages) {
    gameState[stage].current++;
    for (let i = 1; i <= stage; i++) {
      gameState[i].all++;
    }
  }
  return Object.keys(gameState)
    .map((el) => +el)
    .filter((el) => {
      return Math.max(...stages) >= el && N + 1 !== el;
    })
    .sort((a, b) => {
      if (getFailureRate(a, gameState) > getFailureRate(b, gameState)) {
        return -1;
      } else {
        return +1;
      }
    });
}

function getFailureRate(stage, gameState) {
  return gameState[stage].all === 0
    ? 0
    : gameState[stage].current / gameState[stage].all;
}

