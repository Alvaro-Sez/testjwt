const bcrypt = require('bcrypt')

const password = 'mipassword'

async function print(){
const hasheado = await bcrypt.hash(password, 10)
const compared = await bcrypt.compare(password,hasheado)
  console.log(compared)
}


print()