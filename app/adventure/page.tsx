export default function AdventurePage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section - Clean & Black */}
        <div className="mb-16 border-l-4 border-[#66c0f4] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#66c0f4] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Adventure Games<span className="text-[#66c0f4]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Нууцын тайлал, хязгааргүй ертөнц, мартагдашгүй түүхүүд
          </p>
        </div>

        {/* Adventure Game Grid - 12 Games with Pure Black Style */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "1151640",
              name: "Horizon Zero Dawn",
              rating: "9.5",
              price: "$49.99",
              type: "Open World",
            },
            {
              id: "1659420",
              name: "Uncharted: Legacy",
              rating: "9.7",
              price: "$49.99",
              type: "Action Adventure",
            },
            {
              id: "1196590",
              name: "RE Village",
              rating: "9.4",
              price: "$39.99",
              type: "Horror Adventure",
            },
            {
              id: "1332010",
              name: "Stray",
              rating: "9.7",
              price: "$29.99",
              type: "Indie Adventure",
            },
            {
              id: "1289310",
              name: "Hogwarts Legacy",
              rating: "9.5",
              price: "$59.99",
              type: "Fantasy",
            },
            {
              id: "2195250",
              name: "The Last of Us",
              rating: "9.8",
              price: "$69.99",
              type: "Story-Driven",
            },
            {
              id: "1018000",
              name: "Detroit: Become Human",
              rating: "9.6",
              price: "$39.99",
              type: "Cinematic",
            },
            {
              id: "1559600",
              name: "Sea of Thieves",
              rating: "9.2",
              price: "$39.99",
              type: "Pirate Adventure",
            },
            {
              id: "1259420",
              name: "Days Gone",
              rating: "9.1",
              price: "$44.99",
              type: "Survival",
            },
            {
              id: "1817190",
              name: "Spider-Man: Miles",
              rating: "9.5",
              price: "$49.99",
              type: "Hero Adventure",
            },
            {
              id: "2018700",
              name: "Dead Space",
              rating: "9.6",
              price: "$59.99",
              type: "Sci-Fi",
            },
            {
              id: "1551360",
              name: "Forza Horizon 5",
              rating: "9.8",
              price: "$59.99",
              type: "Driving Adventure",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-[#66c0f4]/60 transition-all duration-500 cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              {/* Гүн хар Overlay (Gradient-ийг илүү бараан болгов) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

              {/* Game Image - Steam-ийн албан ёсны зөв ID-нууд */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                style={{
                  backgroundImage: `url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/capsule_616x353.jpg')`,
                }}
              ></div>

              {/* Top Info - Glass Effect */}
              <div className="absolute top-7 left-7 right-7 flex justify-between z-20">
                <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full font-black italic text-[12px] text-white">
                  <span className="text-[#66c0f4]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px] shadow-lg">
                  {game.price}
                </div>
              </div>

              {/* Bottom Title Section */}
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

              {/* Hover үед өгөх зөөлөн цэнхэр гэрэл (Гэхдээ хар nềnээ хадгална) */}
              <div className="absolute inset-0 bg-[#66c0f4]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Discover More Adventure
          </button>
        </div>
      </div>
    </div>
  );
}
