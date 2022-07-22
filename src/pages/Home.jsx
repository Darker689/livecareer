import React from 'react'
// Components
import Hero from '../components/hero/Hero'
import Product from '../components/product/Product'
import Rek from '../components/rek/Rek'
import Text from '../components/text/Text'
import Free from '../components/free/Free'
import Product1 from '../components/product1/Product1'
import Product2 from '../components/product2/Product2'
import ProductText from '../components/producttext/ProductText'
import FooterTopCarusel from '../components/footer_top_carusel/FooterTopCarusel'
import Rek1 from '../components/rek1/Rek1'
import Text1 from '../components/text1/Text1'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Rek/>
      <Text/>
      <Product/>
      <Free/>
      <Product1/>
      <Product2/>
      <ProductText/>
      <Product2/>
      <FooterTopCarusel/>
      <Rek1/>
      <Text1/>
    </div>
  )
}

export default Home