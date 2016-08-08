//return chars that occur before any '_'
export const sanitize = (string) => (
  string.replace(/_.*/, '')
);


export const sortArticle = (sorted, article, prop) => {
  //make shallow copy for immutability
  //TODO: waste of memory?
  sorted = Object.assign({}, sorted)


  sorted.hasOwnProperty(prop) ?
    sorted[prop].push(article) :
    sorted[prop] = [article];

  return sorted;
}