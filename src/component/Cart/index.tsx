'use client';
import React, { FC, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import pic1 from '@/Img/images/Images/1.jpg'
import pic2 from '@/Img/images/Images/2.jpg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link'
import { useRouter } from 'next/navigation';


interface Product {
  _id: string;
  id: number;
  name: string;
  href: string;
  color: string;
  price: number;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}

const Cart: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [cartStorage, setCartStorage] = useState<Product[]>([]);
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [cartNumber, setCartNumber] = useState<number>(0);
  const [removeCartData, setRemoveCartData] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      setCartStorage(parsed);
      setCartIds(parsed.map((item: any) => item._id));
      setCartNumber(parsed.length);
    }
  }, []);

  // Recalculate total when cart changes
  useEffect(() => {
    const newTotal = cartStorage.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [cartStorage]);

  // Handle item removal
  useEffect(() => {
    if (removeCartData !== null) {
      const updated = cartStorage.filter(item => item._id !== removeCartData);
      setCartStorage(updated);
      setCartIds(updated.map(item => item._id));
      setCartNumber(updated.length);

      if (updated.length > 0) {
        localStorage.setItem('cart', JSON.stringify(updated));
      } else {
        localStorage.removeItem('cart');
        setOpen(false);
        window.location.reload();
      }

      setRemoveCartData(null);
    }
  }, [removeCartData]);

  const removeFromCart = (id: string) => {
    setRemoveCartData(id);
  };

  const close = () => {
    setOpen(false);
    window.location.reload();
  };

  const Checkout = () => {
    const user = localStorage.getItem('user');
    if (user && JSON.parse(user)) {
      router.push('/CheckOut');
    } else {
      router.push('/Profile?order=true');
    }
  };
  return (
    <div className="relative">
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black opacity-50"
          onClick={() => setOpen(false)}
          style={{ pointerEvents: 'auto' }}
        />
      )}
      <Transition.Root show={open} as={React.Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={setOpen}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={React.Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={close}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cartStorage.map((product:any) => (
                                <li key={product._id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      src={product.img_path}
                                      alt={product.roomname}
                                      width={96}
                                      height={96}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>{product.roomname}</a>
                                        </h3>
                                        <p className="ml-4">₹{product.price}</p>
                                      </div>
                                      {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      {/* <p className="text-gray-500">Qty {product.quantity}</p> */}
                                      <p className="text-gray-500" >Qty 1
                                        {/* <input
                                          type="number"
                                          value={product.quantity}
                                          onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                                          min="1"
                                          className="ml-2 border p-1 w-16"
                                        /> */}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-[#E46A4B] hover:text-[#ffa892]"
                                          onClick={() => removeFromCart(product._id)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>₹{total}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                          <div
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#E46A4B] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#bc5b43]"
                            onClick={Checkout}
                          >
                            Checkout
                          </div>
                          
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <Link href="/List" >
                              <button
                                type="button"
                                className="font-medium text-[#E46A4B] hover:text-[#ffa892]"
                                onClick={() => setOpen(false)}

                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button></Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Cart;