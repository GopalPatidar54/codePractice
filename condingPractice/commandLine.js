const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, (name,age) => {
    console.log(`Hi ${name}!`)
    readline.close()
  })
