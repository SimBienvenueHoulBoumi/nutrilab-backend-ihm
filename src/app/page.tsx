'use client';

import React from "react";
import MyGlobalFooter from "@/components/myGlobalFooter.components";
import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-[#9bee75] to-[#DFAF2C]">
        <div className="w-full px-4 py-8 md:px-6 lg:px-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-400">
                Recipe of the day
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Together we can
              </h1>
              <p className="text-white">
                Cooking brings people together and brings many benefits to our body. By cooking together,
                we strengthen our social bonds and create precious memories while taking care of our health.
                So, let&apos;s all share our food together and make each meal a moment of conviviality and shared happiness.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/marketplace">
                <div className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  See all recipes
                </div>
              </Link>
              <Link href="/login">
                <div className="inline-flex h-10 items-center justify-center rounded-md border border-green-400 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Login or join us now
                </div>
              </Link>
            </div>
          </div>
          <Image
            src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
            alt="Dish"
            width="500"
            height="500"
            className="mx-auto rounded-xl object-cover aspect-[7/5] block"
          />
        </div>

        <div className="w-full px-4">
          <section className="text-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-white">Kickstart your marketing</h2>
                <p className="mt-4 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                  nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {['Digital campaigns', 'SEO optimization', 'Social media'].map((title, index) => (
                  <div key={index}
                    className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/10 bg-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 className="mt-4 text-xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-1 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                      distinctio alias voluptatum blanditiis laudantium.
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/register">
                  <div className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400">
                    Get Started Today
                  </div>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'Product 1', description: 'Description of product 1', price: '$10', image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
                  { name: 'Product 2', description: 'Description of product 2', price: '$20', image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
                  { name: 'Product 3', description: 'Description of product 3', price: '$30', image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
                  { name: 'Product 4', description: 'Description of product 4', price: '$40', image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
                  { name: 'Product 5', description: 'Description of product 5', price: '$50', image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
                  { name: 'Product 6', description: 'Description of product 6', price: '$60', image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
                ].map((product, index) => (
                  <div key={index} className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-green-500 hover:shadow-green-500/10 bg-white flex items-center space-x-4">
                    <Image
                      width="100"
                      height="100"
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <p className="text-lg font-bold text-gray-900">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </div>

        <footer className="w-full text-center pt-4">
          <MyGlobalFooter />
        </footer>
      </section>
    </>
  );
}
