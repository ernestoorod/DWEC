function cloneObject(obj) {
  let accessUser = { ...obj };
  return accessUser;
}

let user = {
  nombre: 'Ernesto'
};

let clonedUser = cloneObject(user); 

console.log(clonedUser); 

