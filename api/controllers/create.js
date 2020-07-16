module.exports = {


  friendlyName: 'Create',


  description: 'Create car',


  inputs: {
    brand : {
      type : 'string',
    },

    price : {
      type : 'string',
    },
  },


  exits: {

  },


  fn: async function (inputs,exits) {

    var carRecord = await Car.create({
      brand: inputs.brand,
      price:inputs.price,
    });

    return exits.success('Car has been created successfully.');
  }
};
