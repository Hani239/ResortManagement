import Image from 'next/image'
import Nav from '@/component/Nav_Exp'
import Img from '@/Img/ImgC/1_1.png'
import Footer from '@/container/Footer'
import Banner from '@/container/Banner'
import Category from '@/component/Food_Category_slide'
import Menu_item from '@/component/Menu_item'
import Empty from '@/component/Wish_Empty'
import Special from '@/component/Wish_Empty'
export default function Home() {
  return (
    <main className=''>
      <div className="relative flex z-20">
        <Nav></Nav>
      </div>

     <Banner></Banner>

    <div>
        <Category></Category>
    </div>
    <div>
      {/* <Special /> */}
    </div>


      {/* <center>
        <div className="w-full md:w-3/4 lg:w-3/4 self-center justify-center h-auto  lg:mt-40">
          <h1 className='text-6xl font-playpen pb-10' >Order Food</h1>


          <div className=' w-full flex'>
            <div className='w-1/2 border-x'>


              <Menu_item text='10-pack Hair Elastics' src={Img} pricex={200} alt={''} bg={''} />
              <Menu_item text='10-pack Hair Elastics' src={Img} pricex={200} alt={''} bg={''} />
            </div>
            <div className='w-1/2'>
              <Menu_item text='10-pack Hair Elastics' src={Img} pricex={200} alt={''} bg={''} />
              <Menu_item text='10-pack Hair Elastics' src={Img} pricex={200} alt={''} bg={''} />
            </div>

          </div> 
        </div></center>*/}

      <div>
        <Footer />
      </div>

    </main>
  )
}