const bcrypt = require('bcrypt');

async function verifyPassword(){
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$VVZMewzDTAAsunpDhF7jG.b3GV5y9UNdPF3uO.mA5JZAxY0D7ZkDC'
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch)
}

verifyPassword();
