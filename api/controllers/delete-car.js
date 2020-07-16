module.exports = {


  friendlyName: 'Delete car',


  description: '',


  inputs: {
    brand: {
      type: 'string',
    },
  },

  exits: {
    invalid: {
      statusCode: 409,
      description: 'Invalid requiest'
    },
  },


  fn: async function (inputs, exits) {

    var carRecord = await Car.destroy({
      brand: inputs.brand,
    }).fetch();

    if (carRecord.length===0) {
      return exits.success(
          'no brend'
      );
    }

    exits.success('Brend '+inputs.brand+' has been deleted successfully.');
  }
};
