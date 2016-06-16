/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstname:{
      type:'string',
      required:true
    },
    lastname:{
      type:'string'
    },
    email:{
      type:'string',
      required:true,
      unique:true
    },
    password:{
      type:'string',
      required:true
    },
    confirmpassword:{
      type:'string'
    },
    project_ower:{
      collection:'project',
      via:'user_id'
    }
  }
};
