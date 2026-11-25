import { Outlet, Route, Routes } from 'react-router'
import { Footer, Header, ScrollToTop } from './components'
import Activiteiten from './pages/Activiteiten'
import Contact from './pages/Contact'
import Galerij from './pages/Galerij'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import OverOns from './pages/OverOns'
import Praesidium from './pages/Praesidium'

function Layout() {
  return (
    <>
      <a className="skip" href="#main">
        Ga naar de inhoud
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="over-ons" element={<OverOns />} />
        <Route path="praesidium" element={<Praesidium />} />
        <Route path="praesidium/:jaar" element={<Praesidium />} />
        <Route path="activiteiten" element={<Activiteiten />} />
        <Route path="galerij" element={<Galerij />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
