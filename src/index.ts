let file = 'myfile.js'


import(/* webpackIgnore: true */ './'+file)
.then(m=>console.log(m.default))
.catch(err=>console.error(err))