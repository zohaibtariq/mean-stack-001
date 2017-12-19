/**
 * Created by zohaib on 12/4/2017.
 */

const User = require('../models/user');

module.exports = (router) => {
    router.post('/register', (req, res) => {
        if(!req.body.email){
            res.json({success:false, message: 'You must provide an e-mail'});
        }else{
            if(!req.body.username){
                res.json({success:false, message: 'You must provide an username'});
            }else{
                if(!req.body.password){
                    res.json({success:false, message: 'You must provide an password'});
                }else{
                    //console.log(req.body);
                    //res.json({success:true, message: 'Data is valid!'});
                    let user = new User({
                        email:      req.body.email.toLowerCase(),
                        username:   req.body.username.toLowerCase(),
                        password:   req.body.password,
                    });
                    //console.log(user);
                    user.save((err) => {
                        if(err){
                            res.json({success: false, message: 'could not save user. Error ', err});
                        }else{
                            res.json({success: true, message: 'User saved!'});
                        }
                    });
                }
            }
        }
    });
    return router;
};