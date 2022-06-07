const user = require("../models/user")

const getUser = function(req, res){
console.log(req.body)
   const {email, password} = req.body;
   let search = user.find((u) => u.email === email)
   if(search.password === password){
       return res.status(200).json({
           result: search,
       })
   } else{
       return res.status(400).json({
           message: "Algo salió mal"
       })
   }
}

module.exports = {
    getUser: getUser
}