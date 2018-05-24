/* eslint-env jest */
import subject from 'lib/translate'
import labels from 'data/labels'

describe('lib | translate', () => {
  test('returns translation', () => {
    expect(subject('brand')).toBe(labels['brand'])
  })

  test('missing translation', () => {
    expect(subject('notExists')).toBe(labels['missingKey'])
  })
})
