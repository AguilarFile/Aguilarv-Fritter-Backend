function createGroup(fields) {
    fetch(`/api/group/${fields.group}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
  
function deleteGroup(fields) {
    fetch(`/api/group/${fields.group}`, {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
  
function updateGroupName(fields) {
    fetch(`/api/group/${fields.group}/${fields.name}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}