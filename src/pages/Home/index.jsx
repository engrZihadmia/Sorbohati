import Navbar from '../../ui/navbar/navbar.jsx';
import HeroBanner from './banner.jsx'
import FeatureStrips from './supportsection.jsx'
import Reviews from './review.jsx'
import AboutSection from './Aboutsectin.jsx'
import Categorysection from './categorysection.jsx'
import TopSellingProducts from './topProducts.jsx'
import ProductSections from './honeySection.jsx'

const Home=()=>{

    return(
        <>
        <HeroBanner/>
        <FeatureStrips/>
        <Categorysection/>
        <TopSellingProducts/>
        <AboutSection/>
        <ProductSections/>
        <Reviews/>

        </>
    )

}


export default Home;