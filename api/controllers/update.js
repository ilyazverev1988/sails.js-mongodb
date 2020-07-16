module.exports = {


  friendlyName: 'Update',


  description: 'Update something.',


  inputs: {
    brand: {
      type: 'string',
    },

    price: {
      type: 'string',
    },
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    let carObject = {
      price: inputs.price
    };


    let updatedCar = await Car.update({
      brand: inputs.brand
    }).set(carObject).fetch();

    if (updatedCar.length===0) {
      return exits.success(
        'no brend for update'
      );
    }

    exits.success('Brend '+inputs.brand+' has been updated successfully.');

  }
};
