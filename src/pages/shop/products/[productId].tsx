import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
    const router = useRouter();
    const { productId } = router.query;

    console.log({ productId });

    return (
        <div>
            <Head>
                <title>Devmite | Product</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                {/* navigation */}
                <div className="font-light tracking-wide mb-14 mx-p-w dark:text-[#6A8D92] text-[#493548] text-[10px]">
                    <Link href="/">
                        <span className="cursor-pointer hover:underline">Home</span>
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/shop">
                        <span className="cursor-pointer hover:underline">Shop</span>
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-xs font-normal">product name</span>
                </div>

                {/* product */}
                <div className="flex gap-14">
                    {/* image */}
                    <div className="h-72 w-[400px] relative">
                        <Image
                            src="https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* details */}
                    <div className="flex flex-col flex-1 gap-3">
                        {/* model */}
                        <span className="text-[#4D4D4D] text-[10px] tracking-wide">
                            SKU 12314124124
                        </span>

                        {/* name */}
                        <span className="text-sm font-bold tracking-wide dark:text-[#6A8D92] text-[#493548]">
                            Premium Teeshirt Best High Quality
                        </span>

                        {/* price */}
                        <span className="text-lg font-semibold my-3 uppercase text-[#A1E887]">
                            $100
                        </span>

                        {/* details */}
                        <span className="text-[11px] tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis
                            tempora repellendus quas deleniti beatae consectetur similique! Culpa
                            esse asperiores cum quae a neque rem, fugiat aperiam saepe ullam
                            sapiente impedit veritatis voluptate porro error ex officia. Quia rerum
                            aspernatur sunt soluta quas atque harum aperiam non, magni recusandae
                            eligendi!
                        </span>

                        {/* add to cart */}
                        <div className="flex items-center justify-end gap-8">
                            <div className="flex items-center gap-10 px-3 border rounded-md h-9">
                                <button type="button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="9.5"
                                        height="2"
                                        viewBox="0 0 9.5 2"
                                    >
                                        <rect
                                            id="_-"
                                            data-name="-"
                                            width="9.5"
                                            height="2"
                                            fill="#d2d2d2"
                                        />
                                    </svg>
                                </button>

                                <span className="font-bold text-[#FF7020] text-[10px]">1</span>

                                <button type="button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="8.784"
                                        height="9.045"
                                        viewBox="0 0 8.784 9.045"
                                    >
                                        <path
                                            id="_"
                                            data-name="+"
                                            d="M3788.783,558.443v3.69h3.5v1.647h-3.5v3.708h-1.8V563.78H3783.5v-1.647h3.483v-3.69Z"
                                            transform="translate(-3783.5 -558.443)"
                                            fill="#d2d2d2"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* add to cart button */}
                            <button
                                type="button"
                                className="flex items-center justify-center w-32 font-bold text-[#FBFBFB] hover:text-[#6A8D92] duration-150 tracking-widest uppercase rounded-md cursor-pointer bg-[#493548] text-[10px] h-9"
                            >
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
