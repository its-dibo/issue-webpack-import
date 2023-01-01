let file = 'myfile.js'


import('./'+file)
.then(()=>console.log('ok'))
.catch(err=>console.error(err))