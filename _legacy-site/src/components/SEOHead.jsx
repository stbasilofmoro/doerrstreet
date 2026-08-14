import { useEffect } from 'react'

const SITE = 'Doerr Street Rail Co'
const DOMAIN = 'https://doerrstreetrailco.com'
const OG_IMAGE = `${DOMAIN}/og-image.png`

function setMeta(attrName, attrValue, content) {
  const selector = `meta[${attrName}="${CSS.escape(attrValue)}"]`
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setSchema(data) {
  const id = 'ld-json-page'
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function SEOHead({ title, description, canonical, schema }) {
  const pageTitle = title
    ? `${title} | ${SITE}`
    : `${SITE} — FRA-Certified Rail Inspection & Maintenance`
  const pageUrl = canonical || `${DOMAIN}${window.location.pathname}`

  useEffect(() => {
    document.title = pageTitle

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:url', pageUrl)
    setMeta('property', 'og:image', OG_IMAGE)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:image', OG_IMAGE)
    setLink('canonical', pageUrl)

    if (schema) setSchema(schema)
  }, [pageTitle, description, pageUrl, schema])

  return null
}
