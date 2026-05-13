import React from "react";

export default function MobaPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#00d2ff] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#00d2ff] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Battle Arena<span className="text-[#00d2ff]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Багийн ажиллагаа, ур чадварын туйл. Эцсийн зорилго бол дайсны төв
            баазыг нураах.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "570",
              name: "Dota 2",
              rating: "9.9",
              price: "Free",
              type: "Домогт багийн тулаан",
            },
            {
              id: "2170320",
              name: "The Finals",
              rating: "9.2",
              price: "Free",
              type: "Стратегит буудагч",
            },
            {
              id: "1172470",
              name: "Apex Legends",
              rating: "9.4",
              price: "Free",
              type: "Баатруудын амьд үлдэх тэмцэл",
            },
            {
              id: "204300",
              name: "Awesomenauts",
              rating: "8.8",
              price: "Free",
              type: "2D MOBA тулаан",
            },
            {
              id: "1085660",
              name: "Destiny 2",
              rating: "9.1",
              price: "Free",
              type: "ММО, багийн ажиллагаа",
            },
            {
              id: "1559600",
              name: "Sea of Thieves",
              rating: "9.2",
              price: "$39.99",
              type: "Багийн адал явдал",
            },
            {
              id: "306130",
              name: "Dragon Age",
              rating: "9.0",
              price: "$39.99",
              type: "Тактик, стратеги",
            },
            {
              id: "252950",
              name: "Rocket League",
              rating: "9.6",
              price: "Free",
              type: "Машинтай багийн спорт",
            },
            {
              id: "359550",
              name: "Rainbow Six",
              rating: "9.3",
              price: "$19.99",
              type: "Тактикийн тусгай ажиллагаа",
            },
            {
              id: "230410",
              name: "Warframe",
              rating: "9.5",
              price: "Free",
              type: "Хурдтай хамтын ажиллагаа",
            },
            {
              id: "1325200",
              name: "Untamed",
              rating: "8.5",
              price: "Free",
              type: "Шинэ үеийн тулаан",
            },
            {
              id: "444090",
              name: "Paladins",
              rating: "8.9",
              price: "Free",
              type: "Баатруудын буудалцаан",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-[#00d2ff]/60 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                style={{
                  backgroundImage: `url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg')`,
                }}
              ></div>

              {/* Glass Info */}
              <div className="absolute top-7 left-7 right-7 flex justify-between z-20">
                <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full font-black italic text-[12px]">
                  <span className="text-[#00d2ff]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-9 left-9 z-20">
                <h3 className="text-[30px] font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#00d2ff] transition-colors duration-300">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-[2px] bg-[#00d2ff]"></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#00d2ff]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Илүү олон Arena тулаан үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
