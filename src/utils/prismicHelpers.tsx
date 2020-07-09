import Link from "next/link"

/*
  Link Resolver
    This maps each prismic document to the correct site url
*/
export const linkResolver = (doc) => {
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`
  }
  if (doc.type === "project") {
    return `/projects/${doc.uid}`
  }

  return "/"
}

/*
  Link Resolver
    Additional helper function for Next/Link components
*/
export const hrefResolver = (doc) => {
  if (doc.type === "blog_post") {
    return "/blog/[uid]"
  }

  if (doc.type === "project") {
    return "/projects/[uid]"
  }
  return "/"
}

export const PrismicLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)
