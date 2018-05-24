const labels = require('../data/labels')
/**
 * Simple utility to avoid hardcoded strings in components.
 * Also, we can use this if translation service will be implemented.
 *
 * @param {string} key The translation key. See: lib/labels
 *
 * @return {string} translation The translated string or error message.
 *
 * @public
**/
module.exports = key => {
  return labels[key] ? labels[key] : labels.missingKey
}
