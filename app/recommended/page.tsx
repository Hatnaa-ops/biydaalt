import React from "react";

export default function RecommendedPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header */}
        <div className="mb-16 border-l-4 border-[#fcd34d] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#fcd34d] mb-2">
            Discovery / Best of All
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Top 30 Picks<span className="text-[#fcd34d]">.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            // 1. ЧИНИЙ КАРТ - Public доторх зургаа энд холбов
            {
              id: "custom",
              name: "tenuun",
              rating: "10.0",
              price: "Free",
              type: "Boring",
              img: "/tenuun.png", //
              isCustom: true,
            },

            // Үлдсэн 29 "Best" тоглоомууд
            {
              id: "1086940",
              name: "Baldur's Gate 3",
              rating: "10.0",
              price: "$59.99",
              type: "RPG / GOTY",
            },
            {
              id: "1245620",
              name: "Elden Ring",
              rating: "9.9",
              price: "$69.99",
              type: "Action RPG",
            },
            {
              id: "1174180",
              name: "Red Dead 2",
              rating: "10.0",
              price: "$59.99",
              type: "TPS / Adventure",
            },
            {
              id: "271590",
              name: "GTA V",
              rating: "9.7",
              price: "$29.99",
              type: "Open World",
            },
            {
              id: "730",
              name: "CS2",
              rating: "9.8",
              price: "Free",
              type: "FPS / Tactical",
            },
            {
              id: "570",
              name: "Dota 2",
              rating: "9.9",
              price: "Free",
              type: "MOBA / Strategy",
            },
            {
              id: "620",
              name: "Portal 2",
              rating: "10.0",
              price: "$9.99",
              type: "Puzzle / Story",
            },
            {
              id: "1551360",
              name: "Forza Horizon 5",
              rating: "9.8",
              price: "$59.99",
              type: "Racing",
            },
            {
              id: "2050650",
              name: "Resident Evil 4",
              rating: "9.7",
              price: "$59.99",
              type: "Horror / Action",
            },
            {
              id: "1172470",
              name: "Apex Legends",
              rating: "9.4",
              price: "Free",
              type: "FPS / Battle Royale",
            },
            {
              id: "289070",
              name: "Civ VI",
              rating: "9.5",
              price: "$59.99",
              type: "Strategy",
            },
            {
              id: "4000",
              name: "Garry's Mod",
              rating: "9.8",
              price: "$9.99",
              type: "Sandbox",
            },
            {
              id: "252490",
              name: "Rust",
              rating: "9.3",
              price: "$39.99",
              type: "Survival",
            },
            {
              id: "2358720",
              name: "Black Myth: Wukong",
              rating: "9.6",
              price: "$59.99",
              type: "Action",
            },
            {
              id: "1091500",
              name: "Cyberpunk 2077",
              rating: "9.8",
              price: "$59.99",
              type: "Sci-Fi RPG",
            },
            {
              id: "1778820",
              name: "Tekken 8",
              rating: "9.8",
              price: "$69.99",
              type: "Fighting",
            },
            {
              id: "1364780",
              name: "Street Fighter 6",
              rating: "9.7",
              price: "$59.99",
              type: "Fighting",
            },
            {
              id: "1250410",
              name: "Flight Simulator",
              rating: "9.8",
              price: "$59.99",
              type: "Simulation",
            },
            {
              id: "227300",
              name: "Euro Truck 2",
              rating: "9.7",
              price: "$19.99",
              type: "Simulation",
            },
            {
              id: "1904540",
              name: "Football Manager",
              rating: "9.8",
              price: "$59.99",
              type: "Sport",
            },
            {
              id: "2325290",
              name: "FC 24",
              rating: "8.5",
              price: "$69.99",
              type: "Sport",
            },
            {
              id: "782330",
              name: "Doom Eternal",
              rating: "9.8",
              price: "$39.99",
              type: "FPS",
            },
            {
              id: "210970",
              name: "The Witness",
              rating: "9.5",
              price: "$39.99",
              type: "Puzzle",
            },
            {
              id: "105600",
              name: "Terraria",
              rating: "9.9",
              price: "$9.99",
              type: "Sandbox / Survival",
            },
            {
              id: "1326470",
              name: "Sons of Forest",
              rating: "9.4",
              price: "$29.99",
              type: "Survival / Horror",
            },
            {
              id: "238320",
              name: "Outlast",
              rating: "9.7",
              price: "$19.99",
              type: "Horror",
            },
            {
              id: "2215430",
              name: "Ghost of Tsushima",
              rating: "9.9",
              price: "$59.99",
              type: "TPS / Action",
            },
            {
              id: "252950",
              name: "Rocket League",
              rating: "9.6",
              price: "Free",
              type: "Sport / Action",
            },
            {
              id: "1158310",
              name: "Crusader Kings III",
              rating: "9.8",
              price: "$49.99",
              type: "Strategy / RPG",
            },
          ].map((game) => (
            <div
              key={game.id}
              className={`group relative h-[460px] rounded-[32px] bg-black overflow-hidden border transition-all duration-500 cursor-pointer shadow-2xl ${game.isCustom ? "border-[#fcd34d] ring-2 ring-[#fcd34d]/20" : "border-white/10 hover:border-[#fcd34d]/60"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>

              {/* background Image ашиглаж зургийг нь оруулж байна */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                style={{
                  backgroundImage: game.isCustom
                    ? `url('${game.img}')`
                    : `url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg')`,
                }}
              ></div>

              <div className="absolute top-7 left-7 right-7 flex justify-between z-20">
                <div
                  className={`px-4 py-1.5 backdrop-blur-md border rounded-full font-black italic text-[12px] ${game.isCustom ? "bg-[#fcd34d] text-black border-[#fcd34d]" : "bg-black/60 text-white border-white/10"}`}
                >
                  ★ {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              <div className="absolute bottom-9 left-9 z-20">
                <h3
                  className={`text-[30px] font-black italic uppercase tracking-tighter leading-tight transition-colors duration-300 ${game.isCustom ? "text-[#fcd34d]" : "group-hover:text-[#fcd34d]"}`}
                >
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className={`w-6 h-[2px] ${game.isCustom ? "bg-white" : "bg-[#fcd34d]"}`}
                  ></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
