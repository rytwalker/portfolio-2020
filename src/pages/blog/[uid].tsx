import Head from "next/head"
import { RichText } from "prismic-reactjs"
import { queryRepeatableDocuments } from "../../utils/queries"
import { Client } from "../../utils/prismic-configuration"

interface previewData {
  ref?: string | null
}

function BlogPost({ post }) {
  if (post && post.data) {
    // const hasSeoTitle = RichText.asText(post.data.seo_title).length !== 0
    const seoTitle = post.data.seo_title || "BLOG"
    const seoDescription = post.data.seo_description || "Default Description"
    const hasTitle = RichText.asText(post.data.title).length !== 0
    const title = hasTitle
      ? RichText.asText(post.data.title)
      : "Generic Blog Title Name"

    return (
      <>
        <Head>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
        </Head>
        <div>
          <h2>{title}</h2>
        </div>
      </>
    )
  }

  return null
}

export async function getStaticProps({
  params,
  preview = null,
  previewData: previewData = {}
}) {
  const { ref }: any = previewData
  const post = await Client().getByUID(
    "blog_post",
    params.uid,
    ref ? { ref } : null || {}
  )
  return {
    props: {
      preview,
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "blog_post"
  )
  return {
    paths: documents.map((doc) => `/blog/${doc.uid}`),
    fallback: true
  }
}

export default BlogPost
