import React from "react";

const Block6 = () => {
  return (
    <div className="w-[85%] mx-auto my-20">
      {/*---------------------
        ---------- ------------*/}
      <div className="flex flex-col gap-4 my-4">
        <p className="text-5xl font-bold text-black text-center">
          Join a global movement.
        </p>
        <p className="text-5xl font-bold text-black text-center">
          {" "}
          Unleash your creativity.
        </p>
        <p className="text-gray-700 font-semibold text-center">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </p>
        <p className="text-blue-700 text-lg font-semibold text-center cursor-pointer hover:text-blue-900 hover:underline">
          Learn More.
        </p>
      </div>

      {/*---------------------
        ---------- ------------*/}
      <img
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/avatars.png"
        alt="IMG"
      />

      {/*---------------------
        ---------- ------------*/}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
        <div className="w-[100%] sm:w-[30%] bg-[#F6F5F4] border-2 border-gray-100 p-6 rounded-lg">
          <p className="text-5xl text-blue-500 font-bold">1M+</p>
          <p className="text-gray-800 font-semibold">community members</p>
        </div>
        <div className="w-[100%] sm:w-[30%] bg-[#F6F5F4] border-2 border-gray-100 p-6 rounded-lg">
          <p className="text-5xl text-blue-500 font-bold">150+</p>
          <p className="text-gray-800 font-semibold">community groups</p>
        </div>
        <div className="w-[100%] sm:w-[30%] bg-[#F6F5F4] border-2 border-gray-100 p-6 rounded-lg">
          <p className="text-5xl text-blue-500 font-bold">50+</p>
          <p className="text-gray-800 font-semibold">countries represented</p>
        </div>
      </div>

      {/*---------------------
        ---------- ------------*/}
      <div className="flex flex-col sm:flex-row items-center justify-around gap-4 my-8">
        <div className="w-[100%] sm:w-[45%] bg-[#F6F5F4] rounded-lg min-w-[545px] min-h-[300px]">
          <div className="flex flex-col items-start p-8">
            <p className="text-xl text-black font-bold">
              An always-on support network
            </p>
            <p className="text-lg text-gray-700">
              Swap setups and share tips in over 149 online .
            </p>
            <p className="text-lg text-gray-700">communities</p>
          </div>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/community-icons-V2.png"
            alt=""
            className="w-[60%] h-67"
          />
        </div>
        <div className="w-[100%] sm:w-[45%] flex flex-col justify-between relative text-left bg-[#F6F5F4] rounded-lg min-h-[460px]">
          <div className="flex flex-col items-start p-8">
            <p className="text-xl text-black font-bold">Choose your language</p>
            <p className="text-lg text-gray-700">
              Notion currently supports English, Korean, Japanese, French,
              German, Spanish, and Portuguese. With more to come!
            </p>
          </div>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp/front-static/pages/home/welcome-to-notion.png"
            alt=""
            className="w-[70%] h-64"
          />
        </div>
      </div>

      {/*---------------------
        ---------- ------------*/}

      <div className="flex sm:flex-row flex-col gap-8">
        <div className="bg-[#F6F5F4] w-[65%] ">
          <img className="w-[90%] h-[80%] mt-8 mx-auto" src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-01.png"></img>
          <p className="text-gray-800 mt-8 font-semibold text-lg">Community meet-up in Tokyo</p>
        </div>
        <div className="flex flex-col gap-4 sm:w-[35%] w-[100%]">
          <div className="p-4 bg-[#F6F5F4] rounded-lg text-left">
            <div className="flex items-start">
              <img
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
                alt=""
              />
              <div className="w-[100%]">
                <p className="font-bold text-black">Deborah Mecca</p>
                <p className="font-medium text-gray-500">@DebMecca</p>
              </div>
            </div>
            <div className="p-2">
              <p className="font-semibold">
                I used to HATE documenting things. And then I started using{" "}
                <span className="text-blue-500 font-semibold">@NotionHQ</span>{" "}
                and I document a lot. A LOT A LOT. Now I just realize that it
                wasn't that I hated documenting, I just hated Google Docs.
              </p>
            </div>
          </div>
          <div className="p-4 bg-[#F6F5F4] text-left rounded-lg">
            <div className="flex items-start gap-2">
              <img
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png"
                alt=""
              />
              <div className="w-[100%]">
                <p className="font-bold text-black">André Blackman</p>
                <p className="font-medium text-gray-500">@mindofandre</p>
              </div>
            </div>
            <div className="p-2">
              <p className="font-semibold">
                One of the most incredible things about{" "}
                <span className="text-blue-500 font-semibold">@NotionHQ</span>{" "}
                is the dynamic community being built - creating and sharing at
                its best.
              </p>
            </div>
          </div>
          <div className="p-4 bg-[#F6F5F4] text-left rounded-md">
            <div className="flex items-start gap-2">
              <img
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png"
                alt=""
              />
              <div className="w-[100%]">
                <p className="font-bold text-black">Oliver Peyre</p>
                <p className="font-medium text-gray-500">@opeyre</p>
              </div>
            </div>
            <div className="p-2">
              <p className="font-semibold">
                <span className="text-blue-500 font-semibold">@NotionHQ</span>{" "}
                Truly impressed by the velocity and quality of your work. Making
                using Notion even more fun week after week!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------
        ---------- ------------*/}

      {/* <div className="grid grid-cols-2 gap-4 my-8">
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 bg-gray-200 w-[100%] p-4 rounded-md cursor-pointer">
                <img src='https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/586/aiga_departingflights_inv-1024.png' alt="ll" className="w-8"/>
                <p className="text-xl font-bold text-black">Vacation Planner</p>
                <p className="text-lg text-blue-500 font-semibold hover:text-blue-800 hover:underline cursor-pointer">Get template </p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 bg-gray-200 w-[100%] p-4 rounded-md cursor-pointer">
                <img src='https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/586/aiga_departingflights_inv-1024.png' alt="ll" className="w-8"/>
                <p className="text-xl font-bold text-black">Vacation Planner</p>
                <p className="text-lg text-blue-500 font-semibold hover:text-blue-800 hover:underline cursor-pointer">Get template </p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 bg-gray-200 w-[100%] p-4 rounded-md cursor-pointer">
                <img src='https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/586/aiga_departingflights_inv-1024.png' alt="ll" className="w-8"/>
                <p className="text-xl font-bold text-black">Vacation Planner</p>
                <p className="text-lg text-blue-500 font-semibold hover:text-blue-800 hover:underline cursor-pointer">Get template </p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 bg-gray-200 w-[100%] p-4 rounded-md cursor-pointer">
                <img src='https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/586/aiga_departingflights_inv-1024.png' alt="ll" className="w-8"/>
                <p className="text-xl font-bold text-black">Vacation Planner</p>
                <p className="text-lg text-blue-500 font-semibold hover:text-blue-800 hover:underline cursor-pointer">Get template </p>
            </div>
        </div> */}
    </div>
  );
};

export default Block6;
