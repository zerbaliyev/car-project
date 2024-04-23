import Footer from "../modules/footer/Footer"
import Header from "../modules/header/Header"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
