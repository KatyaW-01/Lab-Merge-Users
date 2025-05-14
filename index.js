function combineUsers(...usernames) {
  let nestedArray = usernames
  const combinedObject = {users: []}

  for(i = 0; i < nestedArray.length; i ++){
    combinedObject.users.push(...nestedArray[i])
  }
  
  console.log(combinedObject)
}

combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"])

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};