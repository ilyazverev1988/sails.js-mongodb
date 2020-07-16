module.exports = {


  friendlyName: 'Allcars',


  description: 'Allcars something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    var allCars = await Car.find({});
    return allCars;
  }


};
