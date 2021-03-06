function solution(skill, skill_trees) {
  const _skill = skill.split("");
  const _skill_trees = skill_trees.map((el) => {
    return el.split("").filter((el) => _skill.includes(el));
  });

  const result = _skill_trees.map((tree) => {
    return tree.reduce((acc, curr, index) => {
      return acc && curr === _skill[index];
    }, true);
  });
  return result.filter((el) => el).length;
}
