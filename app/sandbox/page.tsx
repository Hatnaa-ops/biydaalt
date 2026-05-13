import React from "react";

export default function SandboxPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#8b5cf6] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#8b5cf6] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Infinite Creator<span className="text-[#8b5cf6]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Хязгааргүй эрх чөлөө, бүтээлч сэтгэлгээ. Чиний төсөөлөл хаана хүрнэ,
            тоглоом тэнд эхэлнэ.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "4000",
              name: "Garry's Mod",
              rating: "9.8",
              price: "$9.99",
              type: "Физик симуляци, эрх чөлөө",
            },
            {
              id: "105600",
              name: "Terraria",
              rating: "9.9",
              price: "$9.99",
              type: "2D бүтээлч ертөнц",
            },
            {
              id: "255710",
              name: "Cities Skylines",
              rating: "9.6",
              price: "$29.99",
              type: "Мөрөөдлийн хотоо босгох",
            },
            {
              id: "387990",
              name: "Scrap Mechanic",
              rating: "9.2",
              price: "$19.99",
              type: "Инженерчлэл, бүтээл",
            },
            {
              id: "244850",
              name: "Space Engineers",
              rating: "9.4",
              price: "$19.99",
              type: "Сансрын хөлөг бүтээх",
            },
            {
              id: "220200",
              name: "Kerbal Space",
              rating: "9.7",
              price: "$39.99",
              type: "Пуужин зохион бүтээх",
            },
            {
              id: "252490",
              name: "Rust",
              rating: "9.3",
              price: "$39.99",
              type: "Зэрлэг ертөнцөд амьдрах",
            },
            {
              id: "281990",
              name: "Stellaris",
              rating: "9.4",
              price: "$39.99",
              type: "Галактикийн эзэнт гүрэн",
            },
            {
              id: "346110",
              name: "ARK: Evolved",
              rating: "9.0",
              price: "$14.99",
              type: "Үлэг гүрвэлтэй ертөнц",
            },
            {
              id: "219740",
              name: "Don't Starve",
              rating: "9.6",
              price: "$14.99",
              type: "Амьд үлдэх стратеги",
            },
            {
              id: "294100",
              name: "RimWorld",
              rating: "9.8",
              price: "$34.99",
              type: "Колони удирдах симуляци",
            },
            {
              id: "500",
              name: "Left 4 Dead",
              rating: "9.5",
              price: "$9.99",
              type: "Хамтын ажиллагаа, Sandbox",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-[#8b5cf6]/60 transition-all duration-500 cursor-pointer shadow-2xl"
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
                  <span className="text-[#8b5cf6]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-9 left-9 z-20">
                <h3 className="text-[30px] font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#8b5cf6] transition-colors duration-300">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-[2px] bg-[#8b5cf6]"></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Илүү олон Sandbox үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
