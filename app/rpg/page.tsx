export default function RpgPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section - RPG Style */}
        <div className="mb-16 border-l-4 border-[#66c0f4] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#66c0f4] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            RPG Masterpieces<span className="text-[#66c0f4]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Become the hero of your own epic story. Infinite choices, legendary
            journeys.
          </p>
        </div>

        {/* RPG Game Grid - 12 Games */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "1086940",
              name: "Baldur's Gate 3",
              rating: "10.0",
              price: "$59.99",
              type: "Classic RPG",
            },
            {
              id: "292030",
              name: "The Witcher 3",
              rating: "9.9",
              price: "$39.99",
              type: "Open World RPG",
            },
            {
              id: "1245620",
              name: "Elden Ring",
              rating: "10.0",
              price: "$69.99",
              type: "Action RPG",
            },
            {
              id: "1091500",
              name: "Cyberpunk 2077",
              rating: "9.8",
              price: "$59.99",
              type: "Sci-Fi RPG",
            },
            {
              id: "489830",
              name: "Skyrim",
              rating: "9.5",
              price: "$39.99",
              type: "Fantasy RPG",
            },
            {
              id: "374320",
              name: "Dark Souls III",
              rating: "9.6",
              price: "$59.99",
              type: "Hardcore RPG",
            },
            {
              id: "1151640",
              name: "Horizon ZD",
              rating: "9.4",
              price: "$49.99",
              type: "Action RPG",
            },
            {
              id: "980600",
              name: "Final Fantasy VII",
              rating: "9.5",
              price: "$69.99",
              type: "JRPG",
            },
            {
              id: "306130",
              name: "Dragon Age",
              rating: "9.1",
              price: "$39.99",
              type: "Story RPG",
            },
            {
              id: "1289310",
              name: "Hogwarts Legacy",
              rating: "9.5",
              price: "$59.99",
              type: "Fantasy RPG",
            },
            {
              id: "1145360",
              name: "Hades",
              rating: "9.8",
              price: "$24.99",
              type: "Roguelike RPG",
            },
            {
              id: "2358720",
              name: "Black Myth: Wukong",
              rating: "9.6",
              price: "$59.99",
              type: "Action RPG",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-[#66c0f4]/60 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              {/* Гүн хар Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>

              {/* Game Image - Steam Correct IDs */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[15%] group-hover:grayscale-0"
                style={{
                  backgroundImage: `url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg')`,
                }}
              ></div>

              {/* Top Info */}
              <div className="absolute top-7 left-7 right-7 flex justify-between z-20">
                <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full font-black italic text-[12px]">
                  <span className="text-[#66c0f4]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              {/* Bottom Title Info */}
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

              {/* Hover Overlay Glow */}
              <div className="absolute inset-0 bg-[#66c0f4]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Browse More RPGs
          </button>
        </div>
      </div>
    </div>
  );
}
