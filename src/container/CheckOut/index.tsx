'use client'
import React, { useEffect, useState } from 'react'
import Button from '../../component/Button'
import Link from 'next/link'
import TextDown from '@/component/TextDropdown'
import Credit from '@/component/CreditDropDown'
import CDropdown from '../../component/CouponDropdown'
import { useRouter } from 'next/navigation'
import Footer from '../Footer'
import Nav from '@/component/Nav_Exp'

const CheckOut = () => {
  const [userStorage, setUserStorage] = useState(null);
  const [cartStorage, setCartStorage] = useState(null);
  const [cartItem, setCartItem] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const router = useRouter();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [num_adult, setNum_Adult] = useState('');
  const [num_child, setNum_Child] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [order_note, setOrder_Note] = useState('');

  const [error, setError] = useState(false);
  const [valid, setValid] = useState<string | null>(null);

  const [total, setTotal] = useState(0);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendMail = async () => {

    let productList = cartItem.map((product) => {
      return `<ul>${product.roomname} × 1 - ₹${product.price}</ul>`;
    }).join('');

    const response = await fetch('http://localhost:3000/api/mail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject: 'Order Confirmation',
        to: email,
        message: `
        <h3>Hi ${fname},</h3>
        <p>Your order details are as follows:</p>
        <ul>
          ${productList}
        </ul>
        <h4>Total Amount: ₹${totalAmt.toFixed(2)}</h4>
        <p>Your order has been confirmed.</p>
        <p>Thank you for your booking!</p>
        <p>Best regards,<br />Paradise Pulse</p>
        `,
        to: email, // Send email to the user
      })
    })
    console.log(await response.json())
  }

  let TAX = 12;
  if (total > 7500) {
    TAX = 18;
  }

  const totalAmt = total + (total * TAX / 100)



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (user && cart) {
      setUserStorage(user);
      setCartStorage(cart);

      // Calculate total
      const totalAmount = cart.length === 1
        ? cart[0].price
        : cart.reduce((acc, item) => acc + item.price, 0);
      setTotal(totalAmount);
    } else {
      router.push('/');
    }
  }, []);

  const [removeCartData, setRemoveCartData] = useState(false);


  const orderNow = async () => {
    let user_id = userStorage._id;
    let room_id = cartStorage.map((item) => item._id).toString();

    let collection = {
      user_id,
      room_id,
      amount: totalAmt,
      status: "pending",
      fname,
      lname,
      num_adult,
      num_child,
      country,
      address,
      city,
      postcode,
      phone,
      email,
      order_note,
    };

    if (!fname || !lname || !num_adult || !num_child || !country || !address || !city || !postcode || !phone || !email) {
      setError(true)
      return false
    }
    else {
      setError(false)
    }

    if (validateEmail(email)) {
      setError(true)
    } else {
      setError(false)
    }

    const isValidEmail = validateEmail(email);

    let response = await fetch('http://localhost:3000/api/order', {
      method: 'POST',
      body: JSON.stringify(collection),
    });

    response = await response.json();
    if (response.success) {
      alert("Order Confirmed");
      setRemoveCartData(true)
      router.push('/Profile');
    } else {
      alert("Order Failed");
    }
    await sendMail();
  };
  return (
    <main className=''>
      <div className="relative flex z-10">
        <Nav removeCartData={removeCartData} />
      </div>
      <div>
        <div className='flex h-auto w-full flex-wrap mt-16 md:mt-16 lg:mt-32 mb-96 md:px-20'>
          <div className=' flex-1 w-3/5 py-6 mx-3 bg-grey-100 flex-wrap '>
            <div className='font-light text-xs'>Returning customer? <Link href="/Profile" className="text-red-500 hover:underline">Click here to login</Link></div>
            <p className='font-semibold text-xl pb-4' >Billing Details</p>
            <form action="#">
              <div className='flex flex-wrap'>
                <div className='font-semibold text-xs w-1/2'> <label htmlFor='First Name*' >First Name *</label>
                  <input type='text' placeholder='First Name' value={fname} onChange={(event) => setFname(event.target.value)} className='border border-gray-400 w-full py-2 px-4 rounded-md' />
                  {
                    error && !fname && <span className='text-red-500 '>Please enter first name</span>
                  }
                </div>
                <div className='font-semibold text-xs w-1/2 pl-3' > <label htmlFor='Last name*' >Last Name *</label>
                  <input type='text' placeholder='Last Name' value={lname} onChange={(event) => setLname(event.target.value)} className='border border-gray-400 w-full py-2 px-4 rounded-md' />
                  {
                    error && !lname && <span className='text-red-500 '>Please enter last name</span>
                  }
                  </div>
              </div><br />
              <div>
                {/* <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'> <label htmlFor='Company Name (optional)' >Company Name (optional) </label><br />
              <input type='text' placeholder='Company Name' className='border border-gray-400 py-2 px-4 p-4 rounded-md' />
            </div> */}
                <div className='flex flex-wrap'>
                  <div className='font-semibold text-xs w-1/2'> <label htmlFor='No. of Adults*' >No. of Adults</label>
                    <input type='number' min={0} placeholder='No. of Adults' value={num_adult} onChange={(event) => setNum_Adult(event.target.value)} className='border border-gray-400 w-full py-2 px-4 rounded-md' />
                    {
                    error && !num_adult && <span className='text-red-500 '>Please select the appropriate number</span>
                  }
                  </div>
                  <div className='font-semibold text-xs w-1/2 pl-3' > <label htmlFor='No. of Children*' >No. of Children &#40; &#706;12 y.o.&#41;</label>
                    <input type='number' min={0} placeholder='No. of Children' value={num_child} onChange={(event) => setNum_Child(event.target.value)} className='border border-gray-400 w-full py-2 px-4 rounded-md' />
                    {
                    error && !num_child && <span className='text-red-500 '>Please select the appropriate number</span>
                  }
                  </div>
                </div><br />
                <div></div>
                <br />
                <div className='flex flex-col font-semibold text-xs h-auto flex-wrap '><label htmlFor='Country/region*'>Country / Region *</label><br />
                  <select className='border-gray-400 border h-10 w-full ps-6 rounded-md' value={country} onChange={(event) => setCountry(event.target.value)}>
                    <option value="" disabled selected>Select your country</option>
                    <option value="India">India</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Shrilanka">Shrilanka</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                  </select>
                  {
                    error && !country && <span className='text-red-500 '>Please select the appropriate option</span>
                  }
                </div><br />
                <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'> <label htmlFor='Street address *' >Street Address *</label><br />
                  <input type='text' placeholder='House Number and Street Name' value={address} onChange={(event) => setAddress(event.target.value)} className='border border-gray-400 py-2 px-4 p-4 rounded-md' />
                  {
                    error && !address && <span className='text-red-500 '>Please enter address</span>
                  }
                   </div><br />
                {/* <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'>
              <input type='text' placeholder='Apartment,Suit,Unit,Etc.(optional)' value={city} onChange={(event) => setUsername(event.target.value)} className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> <br />
            </div><br /> */}
                <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'><label htmlFor='Town / City *'>Town / City *</label><br />
                  <select className='border-gray-400 border h-10 w-full ps-6 rounded-md' value={city} onChange={(event) => setCity(event.target.value)}>
                    <option value="" disabled selected>Select your city</option>
                    <option >Mumbai</option>
                    <option>Ahmedabad</option>
                    <option>Gandhinagar</option>
                    <option>Surat</option>
                  </select>
                  {
                    error && !city && <span className='text-red-500 '>Please select the appropriate option</span>
                  }
                </div><br />
                <div className='flex flex-col font-semibold text-xs h-auto  flex-wrap'> <label htmlFor='Postcode *' >Postcode *</label><br />
                  <input type='text' placeholder='Postcode' value={postcode} onChange={(event) => setPostcode(event.target.value)} className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> 
                  {
                    error && !postcode && <span className='text-red-500 '>Please enter Postcode</span>
                  }
                  </div><br />
                <div className='flex flex-col  font-semibold text-xs h-auto'> <label htmlFor='Phone *' >Phone *</label><br />
                  <input type='text' placeholder='Phone' value={phone} onChange={(event) => setPhone(event.target.value)} className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> 
                  {
                    error && !phone && <span className='text-red-500 '>Please enter Phone number </span>
                  }
                  </div><br />
                <div className='flex flex-col font-semibold text-xs h-auto '> <label htmlFor='Email Address *' >Email Address *</label><br />
                  <input type='text' placeholder='Your Email Address' value={email} onChange={(event) => setEmail(event.target.value)} className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> 
                  {
                    error && !email  && <span className='text-red-500 '>Please enter valid email</span>
                  }
                  
                  </div><br />
                {/* <div className='inline-flex justify-center items-center text-xs font-semibold pb-4'>
              <div className='flex pr-1'>
                <input type="checkbox" className='accent-rgb(6 182 212)' />
              </div>
              <div className='flex'>
                Ship to a different address?
              </div>
            </div> */}
                <br />
                <div className='flex flex-col font-semibold text-xs h-auto'> <label htmlFor=' Order Notes (optional)' >Order Notes (optional) </label><br />
                  <input type='text' placeholder='Notes about your order,e.g. special notes for delivery' value={order_note} onChange={(event) => setOrder_Note(event.target.value)} className='border border-gray-400 py-2 px-4 p-4 rounded-md' /></div><br />
              </div>
            </form>
          </div>
          <div className='flex w-full lg:w-2/5 justiy-end flex-wrap mx-3'>
            <div className=' flex-1 w-1 mt-20 mb-20 min-h-screen flex-wrap'>
              <div className=' flex-auto border-2 border-grey h-auto w-full divide-y divide-gray-400 flex-wrap '>
                <div className='font-bold text-xl mx-4 md:py-6 '>Your Order<br /><h6 className='font-bold text-xs mt-3'>product</h6></div>
                {cartItem.map((product) => (
                  <ul key={product._id}>
                    <div className='font-semibold text-xs mx-4 py-6'>{product.roomname}  × 1
                      <div className='font-semibold text-xs float-right'>₹{product.price}</div>
                    </div>
                  </ul>
                ))}
                <div className='font-bold text-xs mx-4 py-6 '>Subtotal<h6 className='font-semibold text-xs float-right me-2'>₹{total}</h6></div>
                {/* <div className='font-bold text-xs mx-4 py-6'>Shipping Charge<div className='font-semibold text-xs float-right'>₹40.00<h6 className='font-light text-xs/5'> (ex. VAT)</h6> </div><br />
                  <div className="flex items-center flex-wrap">
                    <input type="radio" id="option1" name="options" className="form-radio text-blue-500" />
                    <label htmlFor="option1" className="ml-2 text-gray-700">Flate Rate:</label>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <input type="radio" id="option2" name="options" className="form-radio text-blue-500" />
                    <label htmlFor="option2" className="ml-2 text-gray-700">Free Shipping:</label>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <input type="radio" id="option3" name="options" className="form-radio text-blue-500" />
                    <label htmlFor="option3" className="ml-2 text-gray-700">Local Pickup</label>
                  </div>
                </div> */}
                <div className='font-bold text-xs mx-4 py-6'>TAX &#40;{TAX}%&#41; <h6 className='font-semibold text-xs/5  float-right me-2'>₹{(total * TAX / 100).toFixed(2)}</h6>
                </div>
                <div className='font-bold text-xs mx-4 py-6'>Total<h6 className='font-semibold text-xs/5  float-right me-2'>₹{totalAmt.toFixed(2)}</h6>
                </div>
              </div>
              <br />
              <div className='inline-flex border-2 border-grey h-auto w-full flex-wrap gap-4'>
                <div className='flex text-xs my-6'>
                  <CDropdown text={['Click here to enter your coupon code']} />
                </div>
              </div><br />
              <div className='flex-auto border-2 border-grey h-auto w-full flex-wrap gap-4' >
                <br />
                <div className='justify-start text-xs font-semibold flex-wrap'>
                  <TextDown />
                  {/* <Credit /> */}
                </div>
                <div className='justify-start p-4 text-xs font-light flex-wrap'>
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described
                  in our <a href="#" className="text-red-500 hover:underline">Privacy Policy</a><br /><br />
                  <div className='inline-flex items-center text-xs'>
                    <div className='flex pr-1'>
                      <input type="checkbox" className='accent-rgb(6 182 212)' />
                    </div>
                    <div className='flex'>
                      <div className='inline-block text-xs'>
                        I have read and agree to the website <a href="#" className="text-red-500 hover:underline">terms and conditions *</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center pb-4'>
                  <Button text={'Place Order'} onClick={orderNow} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </main>
  )
}

export default CheckOut
