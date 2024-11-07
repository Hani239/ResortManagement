import App from '@/component/Dropdown'
import Product from '@/component/Menu_item'
import Nav from '@/component/Nav_Exp'
import Image from 'next/image'
import React from 'react'
import Img1 from '@/Img/Food_items/Gujarati_fix.jpeg'

type Props = {}

const Food_list = (props: Props) => {
    return (
        <div>
            {/* <Nav/> */}
            <div className='flex flex-col md:flex-row'>
                <div className='flex '>
                    <App />
                </div>
                <div className='flex flex-1 flex-col md:px-20'>
                    <div>
                        <div className='flex text-2xl font-bold'>Fixed meal</div>
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} /> 
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} /> 
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} /> 
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} /> 
                    </div>.
                
                    <div>
                        <div className='flex text-2xl font-bold'>Soup</div>
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                    </div>
                    <div>
                        <div className='flex text-2xl font-bold'>Grill & Starters</div>
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                    </div>
                    <div>
                        <div className='flex text-2xl font-bold'>Dessert</div>
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                    </div>
                    <div>
                        <div className='flex text-2xl font-bold'>Bread</div>
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                    </div>
                    <div>
                        <div className='flex text-2xl font-bold'>Pulao & Biryani</div>
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                    </div>
                    <div>
                        <div className='flex text-2xl font-bold'>Drinks (Beverages)</div>
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                        <Product src={Img1} alt={''} text={''} bg={''} pricex={0} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Food_list