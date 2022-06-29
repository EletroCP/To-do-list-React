const idGenerator = () => {
  const characters = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789';
  let token = '';
  for (let index = 0; index < 6; index +=1) {
    token += characters.at(parseInt(Math.random() * 62, 10));
  }

  return token;
}

export default idGenerator;