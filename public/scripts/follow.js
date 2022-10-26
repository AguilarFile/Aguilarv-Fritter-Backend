function followUser(fields) {
    fetch(`/api/follow/${fields.author}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
  
function unfollowUser(fields) {
    fetch(`/api/follow/${fields.author}`, {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
  
function viewAllFollowing(fields) {
    fetch('/api/follow')
        .then(showResponse)
        .catch(showResponse);
}