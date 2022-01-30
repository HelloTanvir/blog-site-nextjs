import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

interface Props {
    headerNavLinks: {
        href: string;
        title: string;
    }[];
}

const Nav = ({ headerNavLinks }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="hidden lg:flex gap-10 py-4 text-[.85rem] border-b">
                {headerNavLinks.map((link) => (
                    <Link key={link.title} href={link.href}>
                        <span className="uppercase cursor-pointer">{link.title}</span>
                    </Link>
                ))}
            </nav>

            <button
                type="button"
                className="cursor-pointer lg:hidden h-[30px] py-[30px]"
                onClick={() => setOpen(true)}
            >
                <HiOutlineMenu className="text-3xl duration-150 hover:text-gray-600" />
            </button>

            <div
                className={`flex flex-col gap-2 bg-white lg:hidden w-[300px] fixed right-0 top-0 bottom-0 z-50 shadow-2xl ${
                    open ? 'translate-x-0' : 'translate-x-[350px]'
                } duration-200 py-9`}
            >
                <button
                    type="button"
                    className={open ? 'cursor-pointer self-end px-5' : 'hidden'}
                    onClick={() => setOpen(false)}
                >
                    <MdOutlineClose className="text-3xl text-gray-600 duration-150 hover:text-black" />
                </button>

                <nav className="flex flex-col gap-[30px] pl-10 text-[.85rem] overflow-y-auto">
                    {headerNavLinks.map((link) => (
                        <Link key={link.title} href={link.href}>
                            <span className="text-xl capitalize cursor-pointer hover:text-[#8bc34a] duration-150">
                                {link.title}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* backdrop */}
            <div
                className="lg:hidden absolute h-screen left-0 right-[300px] bg-transparent cursor-default"
                onClick={() => setOpen(false)}
                role="button"
                tabIndex={0}
            />
        </>
    );
};

export default Nav;
