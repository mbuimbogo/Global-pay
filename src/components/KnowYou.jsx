import React from "react";
import image from "../assets/images/image.jpeg";

export default function KnowYou() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-center items-center mt-2 sm:justify-start">
        <img
          src={image}
          alt="image"
          width="220px"
          className="sm:w-[480px] object-cover"
        />
      </div>
      <div className="lg:ml-32 md:ml-5 ml-2 mt-7">
        <h1 className="font-bold text-3xl">Personal Information</h1>
        <p className="mt-1">Help us learn a bit more about you</p>
        <div className="">
          <form className="flex flex-col md:flex-row space-x-7 mt-12 ml-0">
            <div className="space-y-2 flex flex-col">
              <input
                className="h-10 border-b"
                type="text"
                placeholder="First Name"
                id="name"
                value={name}
              />
              <input
                className="h-10 border-b"
                type="text"
                placeholder="Country"
                id="name"
                value={name}
              />
              <input
                className="h-10 border-b"
                type="text"
                placeholder="Birthday"
                id="name"
                value={name}
              />
              <input
                className="h-10 border-b"
                type="text"
                placeholder="National ID"
                id="name"
                value={name}
              />
            </div>
            <div className="space-y-2 flex flex-col mt-2 ">
              <input
                className="h-10 border-b"
                type="text"
                placeholder="Last Name"
                id="name"
                value={name}
              />
              <input
                className="h-10 border-b"
                type="text"
                placeholder="Nationality"
                id="name"
                value={name}
              />
              {/* <select  name="country" id="country">
                <optgroup label="Country">
                  <option value="Kenya">Kenya</option>
                  <option value="Tz">Tanzania</option>
                </optgroup>

              </select> */}
              <input
                className="h-10 border-b"
                type="text"
                placeholder="Gender"
                id="name"
                value={name}
              />
            </div>
          </form>
        </div>
        <div className="flex justify-start mt-[20%]">
        <div className="flex-1">
            <button className="bg-white border-2 p-2 text-sm text-bold">SKIP FOR NOW</button>
          </div>
          <div className="">
            <button className="bg-gray-600 text-white pt-1 pb-1 pl-5 pr-5 border-2 text-sm text-bold">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
