import Hero from "../components/Hero/Hero"
import CTASection from "../components/CTASection/CTASection"
import HomePageProjects from "../components/Projects/HomePageProjects"
import HomePageBlog from "../components/Blog/HomePageBlog"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <CTASection />
      <HomePageProjects />
      <HomePageBlog />
      <Footer />
    </main>
  )
}

export default Index
