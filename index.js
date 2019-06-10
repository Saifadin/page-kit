'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./page-kit.cjs.production.js');
} else {
  module.exports = require('./page-kit.cjs.development.js');
}
