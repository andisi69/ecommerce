import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLetter from '../components/NewsLetter'
import Carousel from '../components/Carousel'

const Home = () => {

  const images = [
    { src: 'https://iqq6kf0xmf.gjirafa.net/images/a5de1eb2-0713-4292-8f69-816b4406b4da/a5de1eb2-0713-4292-8f69-816b4406b4da.jpeg', alt: 'Image 1' },
    { src: 'https://iqq6kf0xmf.gjirafa.net/images/1709a09a-a94c-4082-9381-a38ad595c5d4/1709a09a-a94c-4082-9381-a38ad595c5d4.jpeg', alt: 'Image 2' },
    { src: 'https://iqq6kf0xmf.gjirafa.net/images/e4dca241-25fe-4777-9c20-6e61c947e185/e4dca241-25fe-4777-9c20-6e61c947e185.jpeg', alt: 'Image 3' },
    { src: 'https://iqq6kf0xmf.gjirafa.net/images/83ed0cee-6efb-42cc-9496-3abd37c09928/83ed0cee-6efb-42cc-9496-3abd37c09928.jpeg', alt: 'Image 4' },
    { src: 'https://iqq6kf0xmf.gjirafa.net/images/1709a09a-a94c-4082-9381-a38ad595c5d4/1709a09a-a94c-4082-9381-a38ad595c5d4.jpeg', alt: 'Image 5' },

];

  return (
    <div>
      <Carousel images={images} interval={5000} />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewsLetter />
    </div>
  )
}

export default Home