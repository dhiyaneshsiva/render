const app = require('express')()


app.get('/', (res, req) => {
    res.setEncoding("Hello All")
})

app.listen(3100, () => {
    console.log("Port Running Sucessfully");
})