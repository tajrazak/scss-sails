/**
* ProjectfilesController
*
* @description :: Server-side logic for managing projectfiles
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/
var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

module.exports = {
  saveCode : function(req,res){
    Projectfiles.findOne({
      project_id:1
    },function(err,finded){
      if(finded)
      {
        console.log(finded)
        finded.code = req.body['code'];
        finded.save(function(err,success){
        if(!err)
        {
          res.send({success:true,updated:true})
        }
        })
      }else{
        Projectfiles.create({project_id:1,filename:'demo',code:req.body['code']}).exec(function createCB(err, created){
          if(err){
            console.log(err)
            res.send({success:false});
          }
          else
          {
            res.send({success:true});
          }
        });
      }
    })


  }
};
