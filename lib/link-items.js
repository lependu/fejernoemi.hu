const links = require('../data/links')
const t = require('./translate')

const getLinks = nav => {
  let items = []
  links.map(item => {
    if (item.navigation.indexOf(nav) > -1) {
      items.push({
        as: item.as,
        label: t(item.label),
        key: `${nav}-${item.weight}`
      })
    }
  })
  return items.sort((a, b) => a.weight - b.weight)
}

module.exports = {
  brand: getLinks('brand')[0],
  carrier: getLinks('carrier'),
  desktop: getLinks('desktop'),
  psychologist: getLinks('psychologist'),
  gallery: getLinks('gallery'),
  mobileCarrier: getLinks('mobile-carrier')[0],
  mobileContact: getLinks('mobile-contact')[0]
}
