/* eslint-env jest */
import {
  brand,
  carrier,
  desktop,
  gallery,
  psychologist,
  mobileCarrier,
  mobileContact
} from 'lib/link-items'

describe('lib | link-items', () => {
  test('brand', () => {
    let expected = { 'as': '/', 'key': 'brand-1', 'label': 'FEJÉR NOÉMI' }
    expect(brand).toEqual(expected)
  })

  test('carrier', () => {
    const expected = [
      {
        as: '/munka-palyatanacsadas/palyaorientacio',
        key: 'carrier-11',
        label: 'PÁLYAORIENTÁCIÓ'
      },
      {
        as: '/munka-palyatanacsadas/palyakorrekcio',
        key: 'carrier-12',
        label: 'PALYAKORREKCIÓ'
      },
      {
        as: '/munka-palyatanacsadas/iskolai-rendezvenyek',
        key: 'carrier-13',
        label: 'ISKOLAI RENDEZVÉNYEK'
      },
      {
        as: '/munka-palyatanacsadas/palyavalasztasi-klub',
        key: 'carrier-14',
        label: 'KLUB'
      }

    ]
    expect(carrier).toEqual(expected)
  })

  test('desktop', () => {
    const expected = [
      { 'as': '/', 'key': 'desktop-1', 'label': 'FEJÉR NOÉMI' },
      {
        'as': '/munka-palyatanacsadas',
        'key': 'desktop-2',
        'label': 'MUNKA-PÁLYATANÁCSADÁS'
      },
      {
        'as': '/pszichologus/felnotteknek',
        'key': 'desktop-3',
        'label': 'PSZICHOLÓGUS'
      },
      {
        'as': '/galeria/palyaorientacio',
        'key': 'desktop-4',
        'label': 'GALÉRIA'
      },
      { 'as': '/kapcsolat', 'key': 'desktop-99', 'label': 'KAPCSOLAT' }
    ]
    expect(desktop).toEqual(expected)
  })

  test('gallery', () => {
    const expected = [
      {
        'as': '/galeria/palyaorientacio',
        'key': 'gallery-31',
        'label': 'PÁLYAORIENTÁCIÓ'
      },
      {
        'as': '/galeria/varazsjatek',
        'key': 'gallery-32',
        'label': 'VARÁZSJÁTÉK'
      }
    ]
    expect(gallery).toEqual(expected)
  })

  test('psychologist', () => {
    const expected = [
      {
        'as': '/pszichologus/felnotteknek',
        'key': 'psychologist-21',
        'label': 'FELNŐTTEKNEK'
      },
      {
        'as': '/pszichologus/varazsjatek',
        'key': 'psychologist-22',
        'label': 'VARÁZSJÁTÉK'
      },
      {
        'as': '/pszichologus/gyermek-pszichodrama',
        'key': 'psychologist-23',
        'label': 'GYERMEK PSZICHODRÁMA'
      }
    ]

    expect(psychologist).toEqual(expected)
  })

  test('mobile-carrier', () => {
    let expected = {
      'as': '/munka-palyatanacsadas',
      'key': 'mobile-carrier-2',
      'label': 'MUNKA-PÁLYATANÁCSADÁS'
    }
    expect(mobileCarrier).toEqual(expected)
  })

  test('mobile-contact', () => {
    let expected = {
      'as': '/kapcsolat',
      'key': 'mobile-contact-99',
      'label': 'KAPCSOLAT'
    }
    expect(mobileContact).toEqual(expected)
  })
})
