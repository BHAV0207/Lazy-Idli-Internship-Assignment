import BookingSection from "./components/BookingSection"
import Cards from "./components/Cards"
import Carousal from "./components/Carousal"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import NewsLetterSection from "./components/NewsLetterSection"
import PlayItCool from "./components/PlayItCool"
import PlayYourWay from "./components/PlayYourWay"


function App() {


  return (
    <div className="min-h-screen bg-white">
      <Header></Header>
      <Hero></Hero>
      <Cards></Cards>
      <PlayYourWay></PlayYourWay>
      <Carousal></Carousal>
      <BookingSection></BookingSection>
      <PlayItCool></PlayItCool>
      <NewsLetterSection></NewsLetterSection>
      <Footer></Footer>
    </div>
  )
}

export default App
