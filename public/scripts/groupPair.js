function addUserToGroup(fields) {
    fetch(`/api/groupPair/${fields.group}/${fields.author}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
  
function removeUserFromGroup(fields) {
    fetch(`/api/groupPair/${fields.group}/${fields.author}`, {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
  
function getUsersFromGroup(fields) {
    fetch(`/api/groupPair/${fields.group}`)
        .then(showResponse)
        .catch(showResponse);
}