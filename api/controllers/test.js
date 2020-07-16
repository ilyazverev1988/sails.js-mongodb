module.exports = {


  friendlyName: 'Test',


  description: 'Test something.',


  inputs: {
    word:{
      description: 'test',
      type: 'string',
      required: true
    }
  },

  /*exits: {
    invalid: {
      statusCode: 409,
      description: 'firstname, lastname, email and password is required.'
    }
  },*/

  fn: async function ({word},exits) {
    console.log(word);

    if (word === 'test666') {
      return exits.success('very-very bad');
    } else {
      return exits.success('very good ' + word);
    }
  }
};
