function getWholesomeFreets(fields) {
    fetch('/api/wholesomeTag')
      .then(showResponse)
      .catch(showResponse);
}