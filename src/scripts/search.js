let search_timeout;

const Search = (query) => {
  clearTimeout(search_timeout);
  if(query.length < 1) return;
  return `Searcging for ${query}`;
}

export {Search};