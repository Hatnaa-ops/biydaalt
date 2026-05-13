export default function FpsPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#66c0f4] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#66c0f4] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            FPS Warriors<span className="text-[#66c0f4]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Хурд хүч, оновчтой тусгал, багийн ажиллагаа. Буудлагын төрлийн
            хамгийн шилдгүүд.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "730",
              name: "CS2",
              rating: "9.8",
              price: "Free",
              type: "Тактик, өрсөлдөөн",
            },
            {
              id: "1938090",
              name: "Call of Duty",
              rating: "9.2",
              price: "$69.99",
              type: "Орчин үеийн дайн",
            },
            {
              id: "782330",
              name: "Doom Eternal",
              rating: "9.8",
              price: "$39.99",
              type: "Там руу хийх дайралт",
            },
            {
              id: "1172470",
              name: "Apex Legends",
              rating: "9.4",
              price: "Free",
              type: "Баатруудын тулаан",
            },
            {
              id: "1240440",
              name: "Halo Infinite",
              rating: "9.0",
              price: "Free",
              type: "Сансрын тулаан",
            },
            {
              id: "2670630",
              name: "Bodycam",
              rating: "9.0",
              price: "$34.99",
              type: "Хэт бодит дүрслэл",
            },
            {
              id: "359550",
              name: "Rainbow Six",
              rating: "9.3",
              price: "$19.99",
              type: "Тусгай ажиллагаа",
            },
            {
              id: "1085660",
              name: "Destiny 2",
              rating: "9.1",
              price: "Free",
              type: "ММО буудагч",
            },
            {
              id: "2170320",
              name: "The Finals",
              rating: "9.2",
              price: "Free",
              type: "Галзуу хурдтай шоу",
            },
            {
              id: "550",
              name: "Left 4 Dead 2",
              rating: "9.9",
              price: "$9.99",
              type: "Зомбитой тулалдаан",
            },
            {
              id: "232090",
              name: "Killing Floor 2",
              rating: "9.0",
              price: "$29.99",
              type: "Амьд үлдэх тэмцэл",
            },
            {
              id: "242760",
              name: "The Forest",
              rating: "9.5",
              price: "$19.99",
              type: "Амьд үлдэх, аймшиг",
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

              <div className="absolute top-7 left-7 right-7 flex justify-between z-20">
                <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full font-black italic text-[12px]">
                  <span className="text-[#66c0f4]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

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
            Илүү олон FPS үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
