export const FilterFrom = () => (list, items, prop) => {
  return list && [...list].filter(item => {
    return [...items].indexOf(prop ? item[prop] : item) !== -1;
  });
}