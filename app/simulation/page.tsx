import React from "react";

export default function SimulationPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#66c0f4] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#66c0f4] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Virtual Reality<span className="text-[#66c0f4]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Бодит ертөнцийг дэлгэцэнд. Нислэг, бүтээн байгуулалт, шинэ амьдралын
            симуляциуд.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "1250410",
              name: "Flight Sim",
              rating: "9.8",
              price: "$59.99",
              type: "Дэлхийгээр аялах нислэг",
            },
            {
              id: "227300",
              name: "Euro Truck 2",
              rating: "9.7",
              price: "$19.99",
              type: "Европ дахь ачаа тээвэр",
            },
            {
              id: "413150",
              name: "Stardew Valley",
              rating: "9.9",
              price: "$14.99",
              type: "Фермийн тайван амьдрал",
            },
            {
              id: "1222670",
              name: "The Sims 4",
              rating: "9.1",
              price: "Free",
              type: "Виртуал амьдралын түүх",
            },
            {
              id: "703080",
              name: "Planet Zoo",
              rating: "9.4",
              price: "$44.99",
              type: "Амьтны хүрээлэн удирдах",
            },
            {
              id: "270880",
              name: "American Truck",
              rating: "9.6",
              price: "$19.99",
              type: "Америк замын аялал",
            },
            {
              id: "648800",
              name: "Raft",
              rating: "9.2",
              price: "$19.99",
              type: "Далайд амьд үлдэх",
            },
            {
              id: "440900",
              name: "Conan Exiles",
              rating: "8.9",
              price: "$39.99",
              type: "Зэрлэг ертөнцөд орших",
            },
            {
              id: "305620",
              name: "The Long Dark",
              rating: "9.3",
              price: "$19.99",
              type: "Цас мөсний симуляци",
            },
            {
              id: "244850",
              name: "Space Engineers",
              rating: "9.2",
              price: "$19.99",
              type: "Сансрын хөлөг бүтээх",
            },
            {
              id: "313120",
              name: "Stranded Deep",
              rating: "8.8",
              price: "$14.99",
              type: "Арал дээрх тэмцэл",
            },
            {
              id: "1358700",
              name: "Sun Haven",
              rating: "9.0",
              price: "$24.99",
              type: "Шидэт ертөнцийн ферм",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-[#66c0f4]/60 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>

              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[10%] group-hover:grayscale-0"
                style={{
                  backgroundImage: `url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg')`,
                }}
              ></div>

              {/* Glass Info */}
              <div className="absolute top-7 left-7 right-7 flex justify-between z-20">
                <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full font-black italic text-[12px]">
                  <span className="text-[#66c0f4]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-9 left-9 z-20">
                <h3 className="text-[30px] font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#66c0f4] transition-colors duration-300">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-[2px] bg-[#66c0f4]"></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#66c0f4]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Илүү олон Симуляци үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
