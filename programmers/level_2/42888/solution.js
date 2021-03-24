function solution(record) {
  const users = {};
  const commands = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  const result = [];
  record.forEach((line) => {
    const [command, id, name] = line.split(" ");
    if (command !== "Leave") {
      users[id] = name;
    }
    if (command !== "Change") {
      result.push([id, command]);
    }
  });
  return result.map((el) => {
    const [id, command] = el;
    return `${users[id]}${commands[command]}`;
  });
}
