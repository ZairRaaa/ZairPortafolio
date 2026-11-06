const indexTopics = {
  9: 'Backend con PHP y JSP',
  10: 'Python y API de inventario',
};

export const weeks = Array.from({ length: 15 }, (_, index) => {
  const number = index + 1;
  const code = String(number).padStart(2, '0');
  return {
    number,
    code,
    label: 'Semana ' + code,
    path: 'semana-' + code + '/index.html',
    topic: indexTopics[number],
  };
});
