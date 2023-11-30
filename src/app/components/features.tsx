import {Tooltip} from "@nextui-org/react";

export default function Example() {
  return (
    <>
      <div className= "bg-bgDark h-screen w-auto">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="bg-light relative isolate overflow-hidde shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="bg-light mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left ">
              <p className="text-xl font-bold tracking-tight text-white sm:text-4xl uppercase">
                Desenvolvedor de software | Front-End
              </p>         
              <div className="pt-5 flex -space-x5 overflow-hidden">
                <img
                  className="h-10 w-10 rounded-full ring-white"
                  src="/image/html.png"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full ring-white"
                  src="/image/css.png"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full ring-white"
                  src="/image/javascript.png"
                  alt=""                
                  />
                <img
                  className="h-10 w-10 rounded-full ring-white"
                  src="/image/reactjs.png"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full ring-white"
                  src="/image/typescript.png"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full ring-white"
                  src="/image/tailwindcss.png"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full ring-white"
                  src="/image/nextjs.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}