import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <main className="no-scrollbar w-screen">
      <section
        id="section"
        className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/54098c96146799.5ea7f6d5a9050.jpg"
            alt="Hero Background cover"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <button className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
              Explore
            </button>
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl leading-none font-bebas text-white">
                Furniture For Your Home
              </h2>
              <p className="text-white text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="flex xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
            <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
              <p className="uppercase text-xl">
                Watanabe Furniture for comfort living
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                eius repellat est enim consequatur.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-3/4">
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
                corrupti doloribus est reprehenderit veniam.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                recusandae incidunt consequuntur quis laboriosam, voluptatibus,
                temporibus maiores soluta repellendus cum non quasi voluptates
                autem nulla et provident vero tenetur omnis?
              </p>
              <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden h-fit relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="w-full h-fit">
            <h3 className="text-[100vh] leading-none font-bebas tracking-tighter">
              WATANABE
            </h3>
            <Image
              src="https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg"
              alt=""
              width={320}
              height={320}
              className="h-3/4 w-3/4 sm:w-fit sm:right-[25%] top-0 absolute object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="section"
        className=" h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="w-full relative mb-6 sm:mb-0">
            <button className="sm:absolute z-10 top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 font-bebas">
              See Our Works
            </button>
          </div>
          <div className="w-full h-full items-center justify-center">
            <Marquee className="w-full h-full">
              <Image
                src="https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg"
                alt=""
                width={320}
                height={320}
                className="h-3/4 w-full sm:w-1/4 sm:right-[33%] top-0 sm:absolute object-cover"
              />
              <Image
                src="https://i.pinimg.com/564x/67/ca/81/67ca81b8b8344d9479b2bf10639aaf35.jpg"
                alt=""
                width={320}
                height={320}
                className="h-3/4 w-full sm:w-1/4  sm:left-0 bottom-0 sm:absolute object-cover"
              />
              <Image
                src="https://i.pinimg.com/564x/c8/7e/91/c87e9121048980c179e8df6e15c1a705.jpg"
                alt=""
                width={320}
                height={320}
                className="h-2/4 w-full sm:w-1/4  sm:right-0 bottom-0 sm:absolute object-cover"
              />
            </Marquee>
          </div>
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden sm:h-screen sm:py-24 py-6 relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bebas">Our Expertise</h2>
          </div>
          <ul className="w-full h-full gap-6 flex flex-col sm:flex-row justify-between items-center">
            <li className=" w-full sm:w-1/2 flex justify-center relative items-center h-[330px] sm:h-full bg-black group duration-300 hover:border-4 hover:border-black hover:rounded-xl">
              <span className="text-2xl relative z-10 text-white font-bebas group-hover:opacity-0 opacity-100 duration-300">
                Design Interior
              </span>
              <Image
                src="https://i.pinimg.com/564x/48/6d/ea/486dea15b02c62b8e0d541c1a305c902.jpg"
                alt=""
                width={320}
                height={320}
                className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
              />
            </li>
            <li className=" w-full sm:w-1/2 flex justify-center relative items-center h-[330px] sm:h-full bg-black group duration-300 hover:border-4 hover:border-black hover:rounded-xl">
              <span className="text-2xl relative z-10 text-white font-bebas group-hover:opacity-0 opacity-100 duration-300">
                Design Architecture
              </span>
              <Image
                src="https://i.pinimg.com/564x/1a/81/fe/1a81fe40904fd6327df7f17911e0e4ad.jpg"
                alt=""
                width={320}
                height={320}
                className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

//  const [showMenu, setShowMenu] = useState(false);

//  const toggleMenu = () => {
//    console.log("click");
//    setShowMenu((prev) => !prev);
//  };
{
  /* <header className="flex justify-between items-center  px-6 absolute z-10 w-full ">
  <div className="flex justify-between w-full items-center py-3 border-b-2 border-white">
    <Link href="/" className="font-bebas text-white text-xl">
      Watanabe
    </Link>

    <ul
      className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${showMenu ? "top-0" : "-top-[100vh]"}`}
    >
      {data.header.map((item, index) => {
        return (
          <li key={index} className="text-white text-base uppercase">
            <Link href={item.href}>{item.label}</Link>
          </li>
        );
      })}
      c
    </ul>
    <div>
      <button
        className="text-white sm:hidden z-20 relative"
        onClick={() => toggleMenu()}
      >
        {showMenu ? "Close" : "Menu"}
      </button>
      <button className="sm:block font-bebas pt-1 hidden border-2 border-white rounded-full px-3 py-1 text-white hover:bg-white hover:text-black duration-300">
        Contact Us
      </button>
    </div>
  </div>
</header>; */
}
