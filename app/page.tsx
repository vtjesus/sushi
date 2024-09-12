import MenuCard from "@/components/reusable/MenuCard";
import NavBar from "@/components/reusable/NavBar";


export default function Home() {
  return (
    <main className="flex h-screen  gap-4 sm:p-4 p-0 bg-primaryCol text-secondaryCol">
      <div className="flex-1 h-full relative ">
        <div className="w-full h-full p-4 pb-16 sm:pb-4 bg-landing-hero md:bg-left bg-center bg-cover sm:rounded-[20px] rounded-none flex flex-col justify-between gap-4 items-start ">
          <NavBar />
          <div className=" w-full h-[440px] flex md:hidden flex-col justify-between items-center gap-4">
            <MenuCard className="cursor-pointer w-full h-full  rounded-[12px] relative bg-landing-card-1 bg-black bg-left bg-no-repeat bg-cover text-base" buttonText="MENU" navigate="/menu" />
            <MenuCard className="cursor-pointer w-full h-full rounded-[12px] relative bg-landing-card-2 bg-black bg-top bg-no-repeat bg-cover  text-base" buttonText="RESERVATION" />
            <MenuCard className="cursor-pointer w-full h-full rounded-[12px] relative bg-landing-card-3 bg-black bg-center bg-no-repeat bg-cover  text-base" buttonText="OUR RESTAURANT" />
          </div>
          <div className="text-5xl md:text-7xl lg:text-9xl w-full h-auto animate-titleAnim">
            <div>SUSHI</div>
            <div>SENSTATION</div>
          </div>
        </div>
      </div>
      <div className="min-w-60 w-1/5 h-full md:flex hidden flex-col justify-between items-center gap-4">
        <MenuCard className="cursor-pointer w-full h-full  rounded-[20px] relative bg-landing-card-1 bg-left text-base" buttonText="MENU" navigate="/menu" />
        <MenuCard className="cursor-pointer w-full h-full rounded-[20px] relative bg-landing-card-2 bg-top text-base" buttonText="RESERVATION" />
        <MenuCard className="cursor-pointer w-full h-full rounded-[20px] relative bg-landing-card-3 bg-center text-base" buttonText="OUR RESTAURANT" />
      </div>
    </main>
  );
}
