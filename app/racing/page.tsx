import React from "react";

export default function RacingPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#66c0f4] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#66c0f4] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Velocity Chase<span className="text-[#66c0f4]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Хязгааргүй хурд, хөдөлгүүрийн хүч, ялалтын төлөөх тэмцэл. Дэлхийн
            хамгийн шилдэг уралдааны замууд.
          </p>
        </div>

        {/* Game Grid - Шууд return дотор map хийв */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "1551360",
              name: "Forza Horizon 5",
              rating: "9.8",
              price: "$59.99",
              type: "Нээлттэй замын уралдаан",
            },
            {
              id: "1066780",
              name: "Monster Jam",
              rating: "8.7",
              price: "$39.99",
              type: "Аварга дугуйтны тулаан",
            },
            {
              id: "2252570",
              name: "F1 23",
              rating: "9.4",
              price: "$69.99",
              type: "Мэргэжлийн авто спорт",
            },
            {
              id: "1465360",
              name: "SnowRunner",
              rating: "9.2",
              price: "$29.99",
              type: "Бартаат замын тээвэр",
            },
            {
              id: "1107950",
              name: "Assetto Corsa",
              rating: "9.5",
              price: "$39.99",
              type: "Бодит жолоодлогын симуляци",
            },
            {
              id: "1255220",
              name: "GRID Legends",
              rating: "8.8",
              price: "$59.99",
              type: "Гудамжны галзуу уралдаан",
            },
            {
              id: "1368020",
              name: "Hot Wheels",
              rating: "9.1",
              price: "$49.99",
              type: "Тоглоомон машины уралдаан",
            },
            {
              id: "1856580",
              name: "Sonic Racing",
              rating: "8.5",
              price: "$39.99",
              type: "Хурдны мангасууд",
            },
            {
              id: "648100",
              name: "Rreckfest",
              rating: "9.3",
              price: "$29.99",
              type: "Машин мөргөлдөх тэмцээн",
            },
            {
              id: "2050650",
              name: "Need for Speed",
              rating: "8.9",
              price: "$69.99",
              type: "Цагдаагаас зугтах уралдаан",
            },
            {
              id: "33440",
              name: "Driver SF",
              rating: "9.6",
              price: "$19.99",
              type: "Хотын гудамж дахь хөөцөлдөөн",
            },
            {
              id: "227300",
              name: "Euro Truck 2",
              rating: "9.7",
              price: "$19.99",
              type: "Ая тухтай аялал",
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
            Илүү олон Уралдаан үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
