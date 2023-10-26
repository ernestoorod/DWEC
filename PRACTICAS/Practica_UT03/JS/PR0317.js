function generateUsername(arr) {
    arr.forEach(user => {
      const randomDigits = String(Math.floor(Math.random() * 100));
      user.nickname = (user.name.charAt(0) + user.surname).toLowerCase() + randomDigits;
    });
  }
  

  let arr = [
    { name: 'Victor', surname: 'González' },
    { name: 'Pepe', surname: 'Pérez' }
  ];
  
  generateUsername(arr);
  
  console.log(arr);
  