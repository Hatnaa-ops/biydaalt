import React from "react";

export default function FightingPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-32">
      <div className="w-[1300px] mx-auto px-5 pt-20">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#ff4e00] pl-10">
          <h1 className="text-[14px] font-black uppercase tracking-[0.6em] text-[#ff4e00] mb-2">
            Discovery Mode / Genre
          </h1>
          <h2 className="text-[64px] font-black italic uppercase tracking-tighter leading-none text-white">
            Warriors Arena<span className="text-[#ff4e00]">.</span>
          </h2>
          <p className="text-white/40 text-[13px] font-bold uppercase tracking-widest mt-4 max-w-[500px]">
            Ур чадвар, хурд, цуврал цохилтууд. Дэлхийн хамгийн шилдэг тулаанчдын
            талбар.
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              id: "1364780",
              name: "Street Fighter 6",
              rating: "9.7",
              price: "$59.99",
              type: "Домогт тулаан",
            },
            {
              id: "1778820",
              name: "Tekken 8",
              rating: "9.8",
              price: "$69.99",
              type: "Төмөр нударганы тэмцээн",
            },
            {
              id: "1971870",
              name: "Mortal Kombat 1",
              rating: "9.5",
              price: "$69.99",
              type: "Цуст тулаан",
            },
            {
              id: "1373410",
              name: "Guilty Gear -Strive-",
              rating: "9.4",
              price: "$39.99",
              type: "Аниме загварын тулаан",
            },
            {
              id: "310950",
              name: "Street Fighter V",
              rating: "8.9",
              price: "$19.99",
              type: "Сонгодог өрсөлдөөн",
            },
            {
              id: "389730",
              name: "Tekken 7",
              rating: "9.3",
              price: "$39.99",
              type: "Гэр бүлийн өшөө авалт",
            },
            {
              id: "678950",
              name: "DBZ: Kakarot",
              rating: "9.1",
              price: "$59.99",
              type: "Сайян нарын тулаан",
            },
            {
              id: "976310",
              name: "Mortal Kombat 11",
              rating: "9.6",
              price: "$49.99",
              type: "Цаг хугацааны тулаан",
            },
            {
              id: "245090",
              name: "Injustice 2",
              rating: "9.2",
              price: "$49.99",
              type: "Супер баатруудын дайн",
            },
            {
              id: "586140",
              name: "BlazBlue",
              rating: "9.0",
              price: "$39.99",
              type: "Хурдтай аниме тулаан",
            },
            {
              id: "459330",
              name: "Jump Force",
              rating: "8.5",
              price: "$59.99",
              type: "Аниме баатруудын нэгдэл",
            },
            {
              id: "1241340",
              name: "Sifu",
              rating: "9.5",
              price: "$39.99",
              type: "Кун-фу тулааны урлаг",
            },
          ].map((game) => (
            <div
              key={game.id}
              className="group relative h-[460px] rounded-[32px] bg-black overflow-hidden border border-white/10 hover:border-[#ff4e00]/60 transition-all duration-500 cursor-pointer shadow-2xl"
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
                  <span className="text-[#ff4e00]">★</span> {game.rating}
                </div>
                <div className="px-5 py-1.5 bg-white text-black font-black italic rounded-full text-[13px]">
                  {game.price}
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-9 left-9 z-20">
                <h3 className="text-[30px] font-black italic uppercase tracking-tighter leading-tight group-hover:text-[#ff4e00] transition-colors duration-300">
                  {game.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-[2px] bg-[#ff4e00]"></div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    {game.type}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#ff4e00]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-24 text-center">
          <button className="px-14 py-5 bg-transparent border border-white/10 rounded-full font-black italic uppercase tracking-widest text-[13px] hover:bg-white hover:text-black transition-all">
            Илүү олон Тулаан үзэх
          </button>
        </div>
      </div>
    </div>
  );
}
