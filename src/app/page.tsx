import Image from 'next/image'
import Nav from '@/component/Nav_Exp'
import Banner from '@/container/Banner'
import Blog from '@/container/Blog'
import Footer from '@/container/Footer'
import Cards_R from '@/component/Cards_R'
import Cards_R2 from '@/component/Card2_R'
import Play from '@/container/play/play'
import Blog_V from '@/container/Blog_V'
import New_Born_Set from '@/component/New_Born_Set'
import Insta_Grid from '@/container/Insta_Grid'
import Heading from '@/component/Heading'
import New_Summer from '@/component/New_Summer'
import Logic_Lords from '@/component/Logic_Lords'
import Carousel from '@/component/Carousel'
import RangeSlider from '@/component/Multi-Slider/App/Apps'
// import AdminLogin from '@/component/AdminLogin'

export default function Home() {
  return (
    <main className=''>
      <div className="relative flex z-10">
        <Nav></Nav>
      </div>
      <br />

      <div className="flex -z-10">
        <Banner />
      </div>
      <br />

      <div className=''>
        <Heading textHead={'LIVING PLEASURE'} textSubHead={'Accomodation'}></Heading>
        <New_Summer className='' />
      </div>

      <div>
        <Blog />
      </div>
      <div className='bg-gradient-to-t from-white to-[#f7f7f7]'>
        {/* <div className=''>
          <Heading textHead={'TRENDY NOW'} textSubHead={'Shop our favorites'}></Heading>
          <New_Summer className='' />
        </div> */}
        {/* <Carousel/> */}

        {/* <div className='mt-20 '>
          <Cards_R />
        </div> */}

        <div>
          <Play />
        </div>

        {/* <div>
        <Blog_V/>
        </div> */}

        <div>
          {/* <New_Born_Set/> */}
        </div>
        <br />

        <div className='mt-10 mb-20'>
          <Cards_R2 />
        </div>

        <div>
          <div className='flex justify-center'>
            <p className='flex font-playpen text-2xl font-semibold pb-5'>Gallery</p>
          </div>
          <Insta_Grid />
        </div>
        {/* <Example/> */}
      </div>
      
      {/* <div>
        <RangeSlider/>
      </div> */}
      {/* <AdminLogin/> */}

      <div>
        <Footer />
      </div>

    </main>
  )
}
