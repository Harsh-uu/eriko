
import Image from "next/image";
import {
  IoSearchOutline,
  IoCartOutline,
  IoPersonAddOutline,
} from "react-icons/io5";
import { FaSlack, FaPaypal } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { BsArrowUpRight } from "react-icons/bs";
import { LiaGripLinesSolid } from "react-icons/lia";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const HeroSection = () => {
  return (
    <div className="relative bg-[#f8f9fd]">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:relative h-screen max-h-[1080px] lg:w-[64rem]  xl:w-[79rem] mx-auto">
        <Image
          width={461}
          height={701}
          priority
          src="/assets/cheerful-young-man-dressed-shirt-wearing-hat-transformed.png"
          className="absolute lg:h-[94%] md:h-[74%] sm:h-[74%] xl:h-full lg:bottom-0 md:bottom-10 md:right-[12rem] object-cover lg:right-1/2 xl:translate-x-[46%] lg:translate-x-[40%] sm:translate-x-[40%] -scale-x-100 z-20 hidden lg:block md:border-2 border-black lg:border-none rounded-3xl"
          alt=""
        />
        <div className="flex  justify-between  mt-6 absolute top-0 w-full left-0 bg-transparent z-40">
          <nav className="sm:flex lg:gap-6 md:gap-4 sm:gap-3 xl:ml-10 lg:ml-10 md:ml-14 sm:ml-10 sm:text-sm md:text-base lg:text-lg xl:text-lg hidden ">
            <li className="list-none hover:text-teal-500 hover:scale-110 cursor-pointer">
              Shop
            </li>
            <li className="list-none">▪️</li>
            <li className="list-none hover:text-teal-500 hover:scale-110 cursor-pointer">
              Category
            </li>
            <li className="list-none">▪️</li>
            <li className="hover:text-teal-500 list-none hover:scale-110 cursor-pointer">
              Contact
            </li>
          </nav>
          <div className="sm:hidden ml-5 text-lg ">
            <button>
              <LiaGripLinesSolid className="hover:text-teal-500 hover:scale-110" />
            </button>
          </div>
          <h1 className="font-medium absolute left-1/2 translate-x-1/2 sm:text-sm md:text-base lg:text-lg xl:text-lg">
            🖤ERIKO
          </h1>
          <nav className="flex gap-x-6 items-center list-none xl:mr-10 lg:mr-10 md:mr-14 sm:mr-10 mr-5 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
            <li>
              <IoSearchOutline className="hover:text-teal-500 hover:scale-110 cursor-pointer" />
            </li>
            <li>
              <IoCartOutline className="  hover:text-teal-500 hover:scale-110 cursor-pointer" />
            </li>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-6 h-6 ",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  className="hover:bg-teal-500 font-medium text-xs bg-black text-white px-3 py-1 rounded-md"
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

          </nav>
        </div>
        <div className=" my-auto md:col-span-1 lg:col-span-1">
          <h1 className=" xl:text-[3.82rem] mb-7 text-center sm:text-justify leading-none pt-24 sm:pt-1 md:pt-2 lg:pt-24 xl:pt-32 lg:text-[3.25rem] md:text-[3.8rem] w-[900px]:text-2rem sm:text-[2.06rem] xl:ml-[1rem] lg:ml-[1rem] md:ml-[3rem] sm:ml-[1rem] text-5xl bg-[#f8f9fd] sm:bg-transparent font-abril">
            Discover <br className="hidden lg:block" /> your{" "}
            <br className="lg:hidden" /> favorite{" "}
            <br className="hidden lg:block" /> brand
          </h1>
          <div className="max-w-fit min-w-fit mx-auto sm:min-w-[80%] overflow-y-scroll list_container max-h-28 xl:ml-[1rem] lg:ml-[1rem] md:ml-[3rem] sm:ml-[1rem] ">
            <p className="text-[#979EA9] item_direction xl:text-[1.12rem] lg:text-[0.9rem] md:text-[1.2rem] md:ml-[1.1rem]  lg:ml-[1.5rem] sm:ml-[0.8rem] sm:text-[0.7rem] sm:mr-[1rem] md:mr-0 lg:mr-0 text-left sm:text-left ml-4">
              Amazing Shopping play an important role{" "}
              <br className="sm:hidden md:block" /> in making the Sale shop a
              brand <br />
            </p>
            <div className=" text-xl mt-8 item_direction text-[#979EA9] md:ml-[1.25rem] lg:ml-[1.5rem] sm:ml-[0.8rem] text-center sm:text-left">
              <button>
                <FaSlack className="" />
              </button>
              <button>
                <RiNetflixFill className="ml-10" />
              </button>
              <button>
                <FaPaypal className="ml-10" />
              </button>
            </div>
            <div className=" text-xl mt-8 item_direction text-[#979EA9] md:ml-[1.25rem] lg:ml-[1.5rem] sm:ml-[0.8rem] text-center sm:text-left">
              <button>
                <FaSlack className="" />
              </button>
              <button>
                <RiNetflixFill className="ml-10" />
              </button>
              <button>
                <FaPaypal className="ml-10" />
              </button>
            </div>
            <div className=" text-xl mt-8 item_direction text-[#979EA9] md:ml-[1.25rem] lg:ml-[1.5rem] sm:ml-[0.8rem] text-center sm:text-left">
              <button>
                <FaSlack className="" />
              </button>
              <button>
                <RiNetflixFill className="ml-10" />
              </button>
              <button>
                <FaPaypal className="ml-10" />
              </button>
            </div>
          </div>

          <Image
            width={312}
            height={208}
            priority
            src="https://cdn.vox-cdn.com/thumbor/jFhIJ7yPAtDIW8Qp2cJS3JaJcl8=/0x0:3144x3144/1200x800/filters:focal(1321x1321:1823x1823)/cdn.vox-cdn.com/uploads/chorus_image/image/50217517/AM1_20Ultra_20Flyknit_207.0.png"
            className=" xl:max-w-[90%] mt-5 sm:mt-1 xl:h-52 lg:max-w-[80%] lg:h-44 md:max-w-[90%] md:h-36 sm:max-w-[90%] sm:h-28 xl:ml-[1rem] lg:ml-[1rem] md:ml-[3rem] h-40 mx-auto sm:mx-0 hidden lg:block"
            alt="Nike air"
          />
          <h1 className="font-abril mt-4  xl:text-[1.7rem] lg:text-[1.5rem] md:text-[1.2rem] xl:ml-[6rem] lg:ml-[3.8rem] md:ml-[5rem] sm:ml-[1.5rem] text-center sm:text-left text-xl sm:text-[1rem] mb-14 hidden lg:block">
            Nike Air shoes
          </h1>
        </div>
        <div className="bg-gradient-to-t from-[#e0e0e4] to-[#f6f6fa]  -skew-x-6 relative hidden lg:block h-screen max-h-[1080px]"></div>
        <div className="lg:my-auto lg:mx-auto xl:ml-28 xl:max-w-[80%] lg:ml-16 md:ml-8 sm:pt-32 md:pt-0 md:my-auto xl:pt-0">
          <div className="bg-[#e81c35] rounded-full w-[20rem] lg:hidden h-80 mx-auto grid mr-[2rem] border-black relative">
            <Image
              width={194}
              height={96}
              priority
              src="https://cdn.vox-cdn.com/thumbor/jFhIJ7yPAtDIW8Qp2cJS3JaJcl8=/0x0:3144x3144/1200x800/filters:focal(1321x1321:1823x1823)/cdn.vox-cdn.com/uploads/chorus_image/image/50217517/AM1_20Ultra_20Flyknit_207.0.png"
              className=" lg:hidden my-auto mx-auto h-72 pb-20"
              alt="Nike air"
            />
            <div className="absolute border-4 border-[#363535] rounded-xl black-white w-40 h-20 grid place-items-center bg-[#979EA9] text-2xl font-bold bottom-0">
              <h1>Nike Air</h1>
            </div>
            <div className="absolute border-4 border-[#363535] rounded-xl black-white w-40 h-20 grid place-items-center bg-[#979EA9] text-2xl font-bold right-0">
              <h1>80% Off!</h1>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              width={243.24}
              height={112}
              priority
              src="https://www.freepnglogos.com/uploads/sunglasses-png/sunglasses-png-ray-ban-transparent-aviator-louisiana-bucket-brigade-2.png"
              className=" object-cover xl:max-w-[90%] xl:h-28 xl:mx-auto xl:mr-44 xl:ml-4 lg:max-w-[70%] lg:h-24 lg:ml-10 md:max-w-[65%] md:h-16 md:ml-10 sm:max-w-[55%] sm:h-12 sm:ml-10 mt-10 h-24 mx-auto rounded-lg pb-2 sm:pb-0 "
              alt="Sunglasses"
            />
            <h1 className="font-abril mt-4 xl:text-[1.7rem] mb-6 ml-3 lg:text-[1.5rem] md:text-[1.2rem] sm:text-[1rem] text-center sm:text-left text-xl">
              Best sunglasses for men
            </h1>
            <nav className="max-w-fit mx-auto sm:mx-0 pb-5 sm:pb-0">
              <li className="text-[#979EA9] list-outside xl:text-[1.12rem] xl:leading-7 lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.7rem]">
                White Frame Sunglasses
              </li>
              <li className="text-[#979EA9] list-outside xl:text-[1.12rem] xl:leading-7 lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.7rem]">
                100% accurate Original sunglasses
              </li>
              <li className="text-[#979EA9] xl:text-[1.12rem] xl:leading-7 lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.7rem]">
                Most Trendy Sunglasses
              </li>

              <div className="flex border-b-2 border-[#e45731] mt-8 w-fit ml-5 gap-2 hover:scale-110 cursor-pointer group">
                <p className="text-[#e45731] xl:text-[1.12rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.7rem]">
                  Show all men collection{" "}
                </p>
                <BsArrowUpRight className="text-[#e45731] group-hover:animate-bounce" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
