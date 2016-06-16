/**
* UserController
*
* @description :: Server-side logic for managing users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/
var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

module.exports = {
  create:function(req,res){
    User.create({firstname:req.body['first_name'],lastname:req.body['last_name'],email:req.body['email'],password:req.body['password'],confirmpassword:req.body['password']}).exec(function createCB(err, created){
      if(err){
        console.log(err)
        res.send({success:false});
      }
      else
      {
        req.session.id = created.id;
        console.log(req.session.id)
        res.send({success:true});
      }
    });
  },
  signin:function(req,res){
    User.findOne({
      email:req.body['email'],
      password:req.body['password']
    }).exec(function (err, data){
      if (err) {
        return res.negotiate(err);
      }

      if (!data) {
        return res.notFound('Could not find Finn, sorry.');
      }else{
        client.set('user_id', data.id);
        return res.json({success:true});
      }

    });
  }
};
