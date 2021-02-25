// 초기 내 코드 (절반정도 실패)
function solution(w, h) {
    const min = Math.min(w, h);
    const max = Math.max(w, h);
    const ratio = max / min;
  
    return w * h - Math.ceil(ratio) * min;
  }
  
  // 다른 사람의 코드 
  
  function solution(w, h) {
    const slope = h / w;
    let result = 0;
  
    for (let i = 1; i <= w; i++) {
      result += Math.ceil(slope * i);
    }
  
    return (h * w - result) * 2;
  }
  