const fetchData = (url: string, setState: any) => {
  fetch(url)
    .then(res => res.json())
    .then(data => setState(data));
};

export {fetchData};
