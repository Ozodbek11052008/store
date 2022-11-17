const User = require("../Models/User")
const bcrypt = require("bcrypt")
module.exports =  userController = {
    signInPage : async (req, res) => {
         res.render('client/sign-in', {
            layout : './layouts/client_layout.ejs',          
         })
    },
    signUpPage : async (req, res) => {
        res.render('client/sign-up', {
           layout : './layouts/client_layout.ejs',          
        })
   },
   createUser: async (req, res) => {
    console.log(req.body);
    const hashpassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
          name: req.body.name,
          email: req.body.email,
          isAdmin: req.body.isAdmin,
          password: hashpassword
      })
      
      await user.save()
          .then(data => res.redirect("/sign-in"))
          .catch(err => {
              res.send(err)
          })
  },
  login : async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user){
        res.send("Dunyo Sening Tog'angmas ukam san kira olmisan")
    }else{
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match){
            res.send("parol xato")
        }else{
            res.redirect('/')
        }
    }
  }
}