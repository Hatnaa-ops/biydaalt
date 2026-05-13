import React from "react";

export default function HorrorPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-red-600 pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-red-600 mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Nightmare Realm<span className="text-red-600">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Айдас хүйдэс, харанхуй ертөнц, амьд үлдэх тэмцэл. Сэтгэл зүйн болон
            цуст аймшгийн шилдгүүд.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "418370",
              name: "Resident Evil 7",
              rating: "9.6",
              price: "$19.99",
              type: "Сэтгэл зүйн аймшиг",
            },
            {
              id: "1196590",
              name: "RE Village",
              rating: "9.5",
              price: "$39.99",
              type: "Амьд үлдэх тэмцэл",
            },
            {
              id: "2050650",
              name: "RE 4 Remake",
              rating: "9.8",
              price: "$59.99",
              type: "Аймшигт тулаан",
            },
            {
              id: "238320",
              name: "Outlast",
              rating: "9.7",
              price: "$19.99",
              type: "Зүрх зогсоом айдас",
            },
            {
              id: "324470",
              name: "Amnesia",
              rating: "9.4",
              price: "$19.99",
              type: "Харанхуй дахь нууц",
            },
            {
              id: "214490",
              name: "Dead Space",
              rating: "9.6",
              price: "$59.99",
              type: "Сансрын аймшиг",
            },
            {
              id: "50300",
              name: "Spec Ops",
              rating: "9.0",
              price: "$29.99",
              type: "Сэтгэл зүйн дарамт",
            },
            {
              id: "739630",
              name: "Phasmophobia",
              rating: "9.7",
              price: "$13.99",
              type: "Сүнсний ангууч",
            },
            {
              id: "381210",
              name: "Dead by Daylight",
              rating: "9.2",
              price: "$19.99",
              type: "Олон тоглогчийн аймшиг",
            },
            {
              id: "22330",
              name: "F.E.A.R.",
              rating: "9.3",
              price: "$54.99",
              type: "Цэргийн тактик, аймшиг",
            },
            {
              id: "242760",
              name: "The Forest",
              rating: "9.5",
              price: "$19.99",
              type: "Ойд амьд үлдэх",
            },
            {
              id: "250600",
              name: "The Evil Within",
              rating: "9.1",
              price: "$19.99",
              type: "Хар дарсан зүүд",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-red-600/60 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                style={{
                  backgroundImage: `url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg')`,
                }}
              ></div>

              <div className="absolute top-7 left-7 right-7 flex justify-between z-20">
                <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full font-black italic text-[12px]">
                  <span className="text-red-600">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              <div className="absolute bottom-9 left-9 z-20">
                <h3 className="text-[30px] font-black italic uppercase tracking-tighter leading-tight group-hover:text-red-600 transition-colors duration-300">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-[2px] bg-red-600"></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Илүү олон Аймшиг үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
