import Head from "next/head"
import { RichText } from "prismic-reactjs"
import { queryRepeatableDocuments, queryByUID } from "../../utils/queries"
import { linkResolver, PrismicLink } from "../../utils/prismicHelpers"
import PageLayout from "../../components/Layout/PageLayout"
import Carousel from "../../components/Carousel/Carousel"

interface previewData {
  ref?: string | null
}

const SliceZone = ({ sliceZone }) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "image_carousel":
        return <Carousel slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })

function Project({ post }) {
  if (post && post.data) {
    console.log(post.data)
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
        <PageLayout>
          <h2>{title}</h2>
          <SliceZone sliceZone={post.data.body} />
          <RichText
            render={post.data.description}
            linkResolver={linkResolver}
            serializeHyperlink={PrismicLink}
          />
        </PageLayout>
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
  const post = await queryByUID("project", params.uid, ref)
  return {
    props: {
      preview,
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "project"
  )
  return {
    paths: documents.map((doc) => `/projects/${doc.uid}`),
    fallback: true
  }
}

export default Project
