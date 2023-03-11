import Image from "next/image";

function Cards() {
  return (
    <div className="mx-auto mb-10 py-4 px-4 md:px-0 my-6 flex flex-col md:flex-row justify-between gap-8"
     style={{width : "80%"}}>
      <Image
        src="/card1.png"
        className="w-full md:w-[48%]"
        width={1000}
        height={1000}
        alt="slider"
      />

      <Image
        src="/card2.png"
        className="w-full md:w-[48%]"
        width={1000}
        height={1000}
        alt="slider"
      />
    </div>
  );
}


export default  Cards
