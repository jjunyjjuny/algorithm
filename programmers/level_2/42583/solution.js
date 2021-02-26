function solution(bridge_length, weight, truck_weights) {
  const len = truck_weights.length;
  const passed = [];
  const bridge = Array(bridge_length).fill(0);
  let total_weight = 0;
  let time = 0;
  while (passed.length !== len) {
    time++;
    const popEl = bridge.pop();
    if (popEl !== 0) {
      passed.push(popEl);
      total_weight -= popEl;
    }
    if (total_weight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      bridge.unshift(truck);
      total_weight += truck;
    } else {
      bridge.unshift(0);
    }
  }
  return time;
}
