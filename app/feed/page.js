import HorizontalCard from "@/components/horizontalCard";
import Image from "next/image";
import Link from "next/link";
import custom from "@/public/hz.jpg";
function Topic({ topic }) {
  return (
    <Link
      href={"/"}
      className="rounded-full text-xs xl:text-sm p-2 mr-2 mb-2 bg-stone-100"
    >
      {topic}
    </Link>
  );
}
function Users() {
  return (
    <div className="flex flex-row justify-between py-1 ">
      <div className=" mr-1 w-8 h-8 relative rounded-full overflow-hidden ">
        <Image src={custom} fill alt="thumbnail" />
      </div>
      <div>
        <h1 className="font-semibold ">Minko Gechev</h1>
        <div className="text-neutral-700 leading-4 font-normal text-xs lg:text-sm w-full line-clamp-2 ">
          lorem idsaf jdisl fjdsklfjias kdjslfk isdj alfsdkfis a
        </div>
      </div>
      <div>
        <button className="bg-black px-2 py-1 text-xs rounded-full text-white">
          Follow
        </button>
      </div>
    </div>
  );
}
function Feed() {
  return (
    <main>
      <div className=" w-full  mt-20  container    mx-auto">
        <div className="h-dvh grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
        {/* <div className=" max-h-dvh border-l-2 border-l-neutral-200  p-3 hidden xl:block col-span-2">
          <div>
            <h1 className="text-lg leading-10">Followed Topics</h1>
            <div className="flex flex-row items-start justify-start flex-wrap">
              <Topic topic={"Data Science"} />
              <Topic topic={"Data df f sSience"} />
              <Topic topic={"Data cedf sd"} />
              <Topic topic={"Data  asd Sci"} />
              <Topic topic={"Data  fsScienc"} />
              <Topic topic={"Data fsdScience"} />
              <Topic topic={"Data nd sdce"} />
              <Topic topic={"Data Sdsfsfsace"} />
              <Topic topic={"Datancsdfe"} />
              <Topic topic={"Dataf s Science"} />
            </div>
          </div>
          <div>
            <h1 className="text-lg leading-10">Followed Users</h1>
            <div className="">
              <Users />
              <Users />
              <Users />
              <Users />
              <Users />
              <Users />
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default Feed;
