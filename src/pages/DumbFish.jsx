import React from 'react';

function DumbFish() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen relative overflow-hidden bg-[#6d60d4]/[0.69]">
      <div className="flex flex-col justify-between items-center w-full h-full  relative px-24 py-6  bg-danger">
        <img
          src="./assets/dumbfish/headline.png"
          className={'lg:w-[720px] lg:mr-20'}
        />
        <div className="flex justify-between items-center w-full max-w-6xl  relative">
          <p className=" text-xl text-left text-white">#WEARESTUPIDFISH</p>
          <div className="flex justify-center items-center  relative overflow-hidden px-6 py-1.5 rounded-[30px] bg-[#e81b1b] border-t-0 border-r-4 border-b-8 border-l-0 border-black">
            <p className=" text-2xl text-left text-white">Mint Stupid Fish</p>
          </div>
        </div>
      </div>
      <img
        src="./assets/dumbfish/play.png"
        className="absolute right-12 top-12 w-[90px] h-[90px] object-cover"
      />

      <div className="lg:bg-danger flex justify-center absolute bottom-0">
        <img src="./assets/dumbfish/fish.png" className={'w-[625px]'} />

        <img
          src="./assets/dumbfish/click-here.png"
          className=" w-[353.5px] h-[353.5px] object-cover  absolute -left-72 top-24  right-auto bottom-0"
        />
      </div>
    </div>
  );
}

export default DumbFish;
