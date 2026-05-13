export default function ActionPage() {
  return (
    <div className="bg-[#0b0e11] min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5">
        <div className="pt-20 mb-12 border-l-4 border-[#66c0f4] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#66c0f4] mb-2">
            Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none">
            Action Games<span className="text-[#66c0f4]">.</span>
          </h2>
          <p className="text-white/30 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Хамгийн ширүүн тулааны дурсамжууд болон домогт аялал нүүдлийн
            түүхүүд.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "1091500",
              name: "Cyberpunk 2077",
              rating: "9.8",
              price: "$59.99",
              type: "Open World RPG",
            },
            {
              id: "1245620",
              name: "Elden Ring",
              rating: "10.0",
              price: "$69.99",
              type: "Souls-like Action",
            },
            {
              id: "2322010",
              name: "God of War",
              rating: "9.7",
              price: "$49.99",
              type: "Action Adventure",
            }, // Зөв ID: 2322010
            {
              id: "2358720",
              name: "Wukong",
              rating: "9.6",
              price: "$59.99",
              type: "Souls-like",
            },
            {
              id: "1174180",
              name: "Red Dead 2",
              rating: "10.0",
              price: "$59.99",
              type: "Open World Action",
            }, // Зөв ID: 1174180
            {
              id: "2215430",
              name: "Tsushima",
              rating: "9.8",
              price: "$59.99",
              type: "Samurai Action",
            },
            {
              id: "1817070",
              name: "Spider-Man",
              rating: "9.5",
              price: "$69.99",
              type: "Super-Hero Action",
            },
            {
              id: "814380",
              name: "Sekiro",
              rating: "9.9",
              price: "$59.99",
              type: "Tactical Action",
            },
            {
              id: "2420110",
              name: "Horizon FW",
              rating: "9.4",
              price: "$59.99",
              type: "Sci-Fi Action",
            },
            {
              id: "782330",
              name: "Doom Eternal",
              rating: "9.8",
              price: "$39.99",
              type: "Fast-paced FPS",
            },
            {
              id: "2050650",
              name: "Resident Evil 4",
              rating: "9.7",
              price: "$59.99",
              type: "Survival Action",
            },
            {
              id: "1446780",
              name: "Monster Hunter",
              rating: "9.3",
              price: "$39.99",
              type: "Action RPG",
            },
          ].map((game, index) => (
            <div
              key={index}
              className="group relative h-[460px] rounded-[32px] bg-[#16191d] overflow-hidden border border-white/5 hover:border-[#66c0f4]/50 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10"></div>

              {/* Image with Correct ID Mapping */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                style={{
                  backgroundImage: `url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg')`,
                }}
              ></div>

              {/* Top Glass Info */}
              <div className="absolute top-7 left-7 right-7 flex justify-between z-20 text-[12px]">
                <div className="px-4 py-1.5 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full font-black italic">
                  <span className="text-[#66c0f4]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full shadow-lg">
                  {game.price}
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-9 left-9 z-20">
                <h3 className="text-[30px] font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#66c0f4] transition-colors">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="w-6 h-[2px] bg-[#66c0f4]"></span>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>

              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-[#66c0f4]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-[#16191d] border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Browse More Action
          </button>
        </div>
      </div>
    </div>
  );
}
