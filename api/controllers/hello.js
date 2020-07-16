/**
 * Module dependencies
 */

// ...


/**
 * hello.js
 *
 * Hello something.
 */
module.exports = async function hello(req, res) {
  console.log(req.query);
  return res.send('good');

};

