import React from "react";

export default function SurvivalPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#10b981] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#10b981] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Last Survivor<span className="text-[#10b981]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Зэрлэг байгаль, хомсдол, аюул занал. Юу ч үгүйгээс бүхнийг босгож,
            амьд үлдэхийн төлөөх тэмцэл.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "252490",
              name: "Rust",
              rating: "9.3",
              price: "$39.99",
              type: "Хатуу ширүүн амьдрал",
            },
            {
              id: "244850",
              name: "Space Engineers",
              rating: "9.1",
              price: "$19.99",
              type: "Сансар дахь бүтээн байгуулалт",
            },
            {
              id: "305620",
              name: "The Long Dark",
              rating: "9.5",
              price: "$19.99",
              type: "Цас мөсний симуляци",
            },
            {
              id: "242760",
              name: "The Forest",
              rating: "9.6",
              price: "$19.99",
              type: "Ойд амьд үлдэх",
            },
            {
              id: "264710",
              name: "Subnautica",
              rating: "9.8",
              price: "$29.99",
              type: "Далайн гүн дэх эрэл",
            },
            {
              id: "381210",
              name: "Dead by Daylight",
              rating: "9.0",
              price: "$19.99",
              type: "Алуурчнаас зугтах",
            },
            {
              id: "251570",
              name: "7 Days to Die",
              rating: "8.9",
              price: "$24.99",
              type: "Зомбигийн дайралт",
            },
            {
              id: "322330",
              name: "Don't Starve",
              rating: "9.7",
              price: "$14.99",
              type: "Өлсөж үхэж болохгүй",
            },
            {
              id: "105600",
              name: "Terraria",
              rating: "9.9",
              price: "$9.99",
              type: "2D ертөнцөд орших",
            },
            {
              id: "346110",
              name: "ARK: Survival",
              rating: "9.2",
              price: "$14.99",
              type: "Үлэг гүрвэлийн эрин",
            },
            {
              id: "1326470",
              name: "Sons of Forest",
              rating: "9.4",
              price: "$29.99",
              type: "Нууцлаг арал дээрх тэмцэл",
            },
            {
              id: "1158310",
              name: "Project Zomboid",
              rating: "9.7",
              price: "$19.99",
              type: "Бодит зомби симуляци",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-[#10b981]/60 transition-all duration-500 cursor-pointer shadow-2xl"
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
                  <span className="text-[#10b981]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-9 left-9 z-20">
                <h3 className="text-[30px] font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#10b981] transition-colors duration-300">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-[2px] bg-[#10b981]"></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Илүү олон Амьд үлдэх тоглоом үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
