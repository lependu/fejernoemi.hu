module.exports = [
  {
    as: '/',
    label: 'brand',
    navigation: ['brand', 'desktop'],
    weight: 1
  },
  {
    as: '/munka-palyatanacsadas',
    label: 'carrier',
    navigation: ['desktop', 'mobile-carrier'],
    weight: 2
  },
  {
    as: '/munka-palyatanacsadas/palyaorientacio',
    label: 'carrierChild',
    navigation: ['carrier'],
    weight: 11
  },
  {
    as: '/munka-palyatanacsadas/palyakorrekcio',
    label: 'carrierAdult',
    navigation: ['carrier'],
    weight: 12
  },
  {
    as: '/munka-palyatanacsadas/iskolai-rendezvenyek',
    label: 'school',
    navigation: ['carrier'],
    weight: 13
  },
  {
    as: '/munka-palyatanacsadas/palyavalasztasi-klub',
    label: 'club',
    navigation: ['carrier'],
    weight: 14
  },
  {
    as: '/pszichologus/felnotteknek',
    label: 'psychologist',
    navigation: ['desktop'],
    weight: 3
  },
  {
    as: '/pszichologus/felnotteknek',
    label: 'adult',
    navigation: ['psychologist'],
    weight: 21
  },
  {
    as: '/pszichologus/varazsjatek',
    label: 'magic',
    navigation: ['psychologist'],
    weight: 22
  },
  {
    as: '/pszichologus/gyermek-pszichodrama',
    label: 'drama',
    navigation: ['psychologist'],
    weight: 23
  },
  {
    as: '/galeria/palyaorientacio',
    label: 'gallery',
    navigation: ['desktop'],
    weight: 4
  },
  {
    as: '/galeria/palyaorientacio',
    label: 'carrierChild',
    navigation: ['gallery'],
    weight: 31
  },
  {
    as: '/galeria/varazsjatek',
    label: 'magic',
    navigation: ['gallery'],
    weight: 32
  },
  {
    as: '/kapcsolat',
    label: 'contact',
    navigation: ['desktop', 'mobile-contact'],
    weight: 99
  }
]
