const app =  require("./server");
const dbCon = require ("./src/config/dbCon");
const port = process.env.PORT || 3000;

dbCon().then(
    res=> {
    app.listen(port,()=>{
    console.log(`Port is running on http://localhost:${port}`);
})    
}
)
module.exports = app;