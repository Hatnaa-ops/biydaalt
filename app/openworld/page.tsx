export default function OpenworldPage() {
  return (
    <div className="bg-[#0b0e11] min-h-screen text-white font-sans selection:bg-[#fcd34d] selection:text-black">
      <div className="relative w-full h-[800px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/library_hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15) blur(30px)",
            transform: "scale(1.1)",
          }}
        />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-10 flex items-center justify-between gap-20">
          {/* ЗҮҮН ТАЛ: Текст мэдээлэл */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-[#fcd34d] text-black px-3 py-1 font-black text-[12px] rounded uppercase shadow-[0_0_20px_rgba(252,211,77,0.3)]">
                  Best Rated 10.0
                </span>
                <p className="text-white/40 text-[12px] font-bold uppercase tracking-[0.3em]">
                  Open World • Survival • Sci-Fi
                </p>
              </div>

              <h1 className="text-[100px] font-black italic tracking-tighter leading-[0.9] uppercase text-white drop-shadow-2xl">
                Void Walker<span className="text-[#fcd34d]">.</span>
              </h1>
            </div>

            <div className="border-l-4 border-[#fcd34d] pl-8 py-2">
              <p className="text-[20px] text-white/70 leading-relaxed italic max-w-[600px]">
                "Орчлон ертөнцийн мөхөж буй одод дунд өөрийн замаа гарга. Орон
                зайг захирч, хязгааргүй гаригуудаар аялан, мөхлийн ирмэг дээрх
                хүн төрөлхтний сүүлчийн итгэл найдвар бол."
              </p>
            </div>

            <div className="flex items-center gap-12 pt-4">
              <div>
                <p className="text-white/30 text-[12px] font-black uppercase tracking-widest mb-1">
                  Current Price
                </p>
                <p className="text-[45px] font-black text-[#fcd34d] italic leading-none">
                  $59.99
                </p>
              </div>

              <button className="px-16 py-6 bg-white text-black font-black italic uppercase tracking-[0.2em] rounded-full hover:bg-[#fcd34d] transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                Pre-Order Now
              </button>
            </div>
          </div>
          <div className="relative w-[420px] h-[600px] shrink-0 group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#fcd34d] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity rounded-full" />

            <div className="relative w-full h-full rounded-[35px] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/library_600x900_2x.jpg"
                alt="Void Walker Poster"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* ДООД ТАЛ: Discovery (Open World шилдэгүүд) */}
      <div className="max-w-[1350px] mx-auto px-10 py-24">
        <div className="flex items-center justify-between mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] font-black italic uppercase tracking-tighter leading-none text-[#fcd34d]">
              Explore Worlds
            </h2>
            <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-[12px]">
              Hand-picked open world games
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 mx-20" />
          <div className="text-right">
            <span className="text-[30px] font-black italic">2026</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-8 gap-y-16">
          {[
            {
              id: "1091500",
              name: "Cyberpunk 2077",
              price: "$59.99",
              tag: "Future",
            },
            {
              id: "1151640",
              name: "Horizon Zero Dawn",
              price: "$49.99",
              tag: "Nature",
            },
            { id: "1716740", name: "Starfield", price: "$69.99", tag: "Space" },
            { id: "1174180", name: "Red Dead 2", price: "$59.99", tag: "West" },
            {
              id: "1245620",
              name: "Elden Ring",
              price: "$69.99",
              tag: "Fantasy",
            },
            { id: "264710", name: "Subnautica", price: "$29.99", tag: "Ocean" },
            {
              id: "2358720",
              name: "Black Myth: Wukong",
              price: "$59.99",
              tag: "Myth",
            },
            { id: "252490", name: "Rust", price: "$39.99", tag: "Survival" },
          ].map((game) => (
            <div key={game.id} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden mb-6 border border-white/5 group-hover:border-[#fcd34d]/50 transition-all duration-500 shadow-xl bg-zinc-900">
                <img
                  src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/header.jpg`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                  alt={game.name}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-[#fcd34d] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#fcd34d]/20">
                    {game.tag}
                  </span>
                </div>
              </div>
              <h4 className="text-[18px] font-black uppercase italic tracking-tight group-hover:text-[#fcd34d] transition-colors duration-300">
                {game.name}
              </h4>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-[2px] w-4 bg-[#fcd34d]" />
                <p className="text-white/40 text-[13px] font-bold uppercase tracking-tighter">
                  {game.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
