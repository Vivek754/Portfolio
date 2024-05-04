import React from "react";
import {
  FaSquareXTwitter,
  FaSquareSnapchat,
  FaSquareGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      {/* <main className=" flex z-0 ">
      <img src="./src/assets/svg/shape1.svg" alt="" className="w-64" />
        <img src="./src/assets/svg/shape2.svg" alt="" className="w-64" />
        <img src="./src/assets/svg/shape3.svg" alt="" className="w-64" />
        <img src="./src/assets/svg/shape4.svg" alt="" className="w-64" />
        <img src="./src/assets/svg/shape2.svg" alt="" className="w-64" />
      </main> */}
      <footer className="flex gap-10 bg-gray-100 px-10 py-5 z-10 shadow-inner dark:bg-[#1d1d1f] dark:text-[#f5f5f7]">
        <section className="basis-1/3">
          <p className="text-3xl text-center">
            <code>{"<Contact />"}</code>
          </p>
          <section className="mt-8 text-xl flex gap-3 flex-col">
            <code>
              <b>Email:</b> example@email.com
            </code>
            <code>
              <b>Phone:</b> +91-9876543210
            </code>
            <code>
              <b>Address:</b> Dhanauli, Jagner Road, Agra, Uttar Pradesh, India
              - 282001
            </code>
          </section>
        </section>
        <section className="basis-1/3">
          <p className="text-3xl text-center">
            <code>{"<Connect />"}</code>
          </p>
          <main className="flex justify-center">
            <section className="flex flex-col gap-2 mt-8 text-xl">
              <div className="grid  grid-cols-2 gap-5 cursor-pointer">
                <div className="flex items-center gap-5 cursor-pointer">
                  <FaSquareGithub className="text-[42px]" />
                  <code>GitHub</code>
                </div>
                <div className="flex items-center gap-5">
                  <img
                    src="./src/assets/social/insta2.png"
                    alt=""
                    className="w-10"
                  />
                  <code>Instagram</code>
                </div>
                <div className="flex items-center gap-5 cursor-pointer">
                  <FaSquareXTwitter className="text-[42px]" />
                  <code>Twitter</code>
                </div>
                <div className="flex items-center gap-5 cursor-pointer">
                  <FaSquareSnapchat className="text-[42px] text-yellow-400" />
                  <code>Snapchat</code>
                </div>
              </div>
            </section>
          </main>
        </section>

        <section className="basis-1/3">
          <p className="text-3xl text-center px-5">
            <code>{"<Newsletter />"}</code>
            <div className="flex flex-col gap-5 mt-8">
              <code>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="border-black border-3 text-[24px] px-5 w-full py-2 outline-none"
                />
              </code>
              <button className=" text-white bg-black px-5 py-2">
                <code>Subscribe</code>
              </button>
            </div>
          </p>
        </section>
      </footer>
    </>
  );
}
