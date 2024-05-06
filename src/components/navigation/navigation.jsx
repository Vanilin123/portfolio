'use client'
import Link from "next/link";
import {useState} from "react";
import {motion} from "framer-motion"

const links = [
    {url:'/',title:'Dev'},
    {url:'/about',title:'Обо мне'},
    {url:'/portfolio',title:'Портфолио'},
    {url:'/contacts',title:'Контакты'},
]

const Navigation = () => {
    const [open, setOpen] = useState(false);

    const top = {
        clozed:{
            rotate:0,
        },
        opened:{
            rotate: 45,
            backgroundColor: "rgb(225,225,225)",
        }
    }

    const center = {
        clozed:{
            opacity:1,
        },
        opened:{
          opacity: 0,
        }
    }

    const bottom = {
        clozed:{
            rotate:0,
        },
        opened:{
            rotate: -45,
            backgroundColor: "rgb(225,225,225)",
        }
    }


    const list = {
        clozed:{
            x:"100vw",
        },
        opened:{
            x:"0",
            transition:{
                staggerChildren:0.5
            }
        }
    }
    const listItems = {
        clozed:{
            x:-10,
            opacity:0
        },
        opened:{
            x:0,
            opacity:1
        }
    }

    const listSochial = {
        clozed:{
            x:-10,
            opacity:0
        },
        opened:{
            x:0,
            opacity:1
        }
    }

    return (
        <div className="flex h-full items-center flex-row justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="flex gap-8 items-center flex-row justify-between">
                <Link href="/" className="text-sm bg-black hover:bg-gray-700 rounded-md p-2 font-semibold flex items-center justify-center text-white transition-all duration-700 rounded-md">
                    <span className="text-white mr-1">My</span>
                    <span className="w-12 h8 rounded bg-white text-black p-1.5">.dev</span>
                </Link>
                <div className="hidden md:flex gap-8 items-center flex-row justify-between">
                    <Link href="/portfolio" className="h-1/4 flex items-center justify-center p-1 bg-white hover:bg-black text-black hover:text-white transition-all duration-700 rounded-md">
                        Портфолио
                    </Link>
                    <Link href="/about" className=" h-1/4 flex items-center justify-center p-1 bg-white hover:bg-black text-black hover:text-white transition-all duration-700 rounded-md">
                        Обо мне
                    </Link>
                    <Link href="/contacts" className="h-1/4 flex items-center justify-center  p-1 bg-white hover:bg-black text-black hover:text-white transition-all duration-700 rounded-md">
                        Контакты
                    </Link>
                </div>
            </div>
            <div className='hidden md:flex gap-4 items-center flex-row justify-between'>
                <Link href="https://vk.com/1vanilin">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="28px" height="28px"
                         viewBox="0 0 32 32" version="1.1">
                        <title>vk</title>
                        <path
                            d="M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z"/>
                    </svg>
                </Link>
                <Link href="https://t.me/IvanSiganov">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 32 32"
                         fill="none">
                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"/>
                        <path
                            d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                            fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#37BBFE"/>
                                <stop offset="1" stop-color="#007DBB"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
                <Link href="https://github.com/Vanilin123">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px"
                         height="28px" viewBox="0 0 20 20" version="1.1">

                        <title>github [#142]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>

                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                               fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path
                                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                        id="github-[#142]">

                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
                <Link href="https://hh.ru/resume/00b7304cff0d26d0690039ed1f436e546c3161">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 48 48" version="1.1">
                        <path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24"
                              fill="#D6001C"/>
                        <path
                            d="M13.65 13.169v8.164c1.243-1.482 2.733-2.228 4.461-2.228.89 0 1.687.17 2.402.507.717.335 1.253.765 1.615 1.287.364.527.61 1.104.743 1.74.132.633.198 1.618.198 2.954v8.729h-3.862V26.46c0-1.56-.07-2.548-.217-2.968a1.917 1.917 0 0 0-.775-1c-.372-.251-.835-.375-1.394-.375-.64 0-1.214.16-1.713.478-.51.32-.876.798-1.108 1.437-.236.64-.354 1.585-.35 2.836l-.004 7.454H9.789V13.169h3.862m15.206 0v8.164c1.244-1.482 2.733-2.228 4.46-2.228.887 0 1.69.17 2.406.507.714.335 1.25.765 1.61 1.287a4.69 4.69 0 0 1 .743 1.74c.133.633.199 1.618.199 2.954v8.729h-3.858V26.46c0-1.56-.073-2.548-.22-2.968a1.91 1.91 0 0 0-.777-1c-.368-.251-.835-.375-1.394-.375-.639 0-1.213.16-1.713.478-.503.32-.871.798-1.106 1.437-.232.64-.35 1.585-.35 2.836v7.454H25V13.169h3.857"
                            fill="#FEFEFE"/>
                    </svg>
                </Link>
            </div>
            <div className=" md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
                    <motion.div variants={top} animate={open ? "opened" : "clozed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div variants={center} animate={open ? "opened" : "clozed"} className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div variants={bottom} animate={open ? "opened" : "clozed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>
            </div>
            {open && (
                <motion.div variants={list}
                            initial={"clozed"}
                            animate={"opened"}
                    className="absolute top-0 left-0 flex justify-center flex-col gap-4 text-2xl items-center w-screen h-screen bg-black text-white z-40">
                    {links.map((link) => (
                        <motion.div variants={listItems} key={link.title}>
                            <Link href={link.url} >{link.title}</Link>
                        </motion.div>))}
                    <motion.div variants={listSochial} className='flex gap-2 items-center flex-row justify-between'>
                        <Link href="https://vk.com/1vanilin">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="28px" height="28px"
                                 viewBox="0 0 32 32" version="1.1">
                                <title>vk</title>
                                <path
                                    d="M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z"/>
                            </svg>
                        </Link>
                        <Link href="https://t.me/IvanSiganov">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 32 32"
                                 fill="none">
                                <circle cx="16" cy="16" r="14" fill="#fff"/>
                                <path
                                    d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                                    fill="#000000"/>
                                <defs>
                                    <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#37BBFE"/>
                                        <stop offset="1" stop-color="#007DBB"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                        <Link href="https://github.com/Vanilin123">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28px"
                                 height="28px" viewBox="0 0 20 20" version="1.1">

                                <title>github [#142]</title>
                                <desc>Created with Sketch.</desc>
                                <defs>

                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="#ffffff">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                                       fill="#ffffff">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path
                                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                id="github-[#142]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                        <Link href="https://hh.ru/resume/00b7304cff0d26d0690039ed1f436e546c3161">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 48 48"
                                 version="1.1">
                                <path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24"
                                      fill="#FFFFFF"/>
                                <path
                                    d="M13.65 13.169v8.164c1.243-1.482 2.733-2.228 4.461-2.228.89 0 1.687.17 2.402.507.717.335 1.253.765 1.615 1.287.364.527.61 1.104.743 1.74.132.633.198 1.618.198 2.954v8.729h-3.862V26.46c0-1.56-.07-2.548-.217-2.968a1.917 1.917 0 0 0-.775-1c-.372-.251-.835-.375-1.394-.375-.64 0-1.214.16-1.713.478-.51.32-.876.798-1.108 1.437-.236.64-.354 1.585-.35 2.836l-.004 7.454H9.789V13.169h3.862m15.206 0v8.164c1.244-1.482 2.733-2.228 4.46-2.228.887 0 1.69.17 2.406.507.714.335 1.25.765 1.61 1.287a4.69 4.69 0 0 1 .743 1.74c.133.633.199 1.618.199 2.954v8.729h-3.858V26.46c0-1.56-.073-2.548-.22-2.968a1.91 1.91 0 0 0-.777-1c-.368-.251-.835-.375-1.394-.375-.639 0-1.213.16-1.713.478-.503.32-.871.798-1.106 1.437-.232.64-.35 1.585-.35 2.836v7.454H25V13.169h3.857"
                                    fill=""/>
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            )}

        </div>
    );
};

export default Navigation;