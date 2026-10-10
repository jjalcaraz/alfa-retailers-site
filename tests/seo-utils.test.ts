import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getAbsoluteUrl, getCanonicalUrl } from '../src/lib/seo-utils.ts'

const WWW = 'https://www.alfaretailers.com'

test('defaults to the www host when NEXT_PUBLIC_SITE_URL is unset', () => {
  delete process.env.NEXT_PUBLIC_SITE_URL
  assert.equal(getCanonicalUrl(), `${WWW}/`)
  assert.equal(getCanonicalUrl('/terms'), `${WWW}/terms`)
})

test('apex NEXT_PUBLIC_SITE_URL still yields www URLs', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://alfaretailers.com'
  assert.equal(getCanonicalUrl('/privacy-policy'), `${WWW}/privacy-policy`)
  assert.equal(getCanonicalUrl(), `${WWW}/`)
  assert.equal(getAbsoluteUrl('/sms-terms'), `${WWW}/sms-terms`)
})

test('www NEXT_PUBLIC_SITE_URL is honored', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://www.alfaretailers.com'
  assert.equal(getCanonicalUrl('/terms'), `${WWW}/terms`)
})

test('unrelated NEXT_PUBLIC_SITE_URL is ignored', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://jjalcaraz-alfaretailers.vercel.app'
  assert.equal(getCanonicalUrl('/'), `${WWW}/`)
})
