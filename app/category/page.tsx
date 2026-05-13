import Link from "next/link";

export default function CategoryPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div
        className="grid grid-cols-3 grid-rows-5 gap-4 p-5 bg-black"
        style={{ width: "1300px", height: "800px" }}
      >
        {/* 1. Action */}
        <Link
          href="/action"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Action
            </span>
          </div>
        </Link>

        {/* 2. Adventure */}
        <Link
          href="/adventure"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Adventure
            </span>
          </div>
        </Link>

        {/* 3. RPG */}
        <Link
          href="/rpg"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800')",
            }}
          >
            <span className="drop-shadow-2xl">RPG</span>
          </div>
        </Link>

        {/* 4. FPS */}
        <Link
          href="/fps"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/7862491/pexels-photo-7862491.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">FPS</span>
          </div>
        </Link>

        {/* 5. TPS */}
        <Link
          href="/tps"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">TPS</span>
          </div>
        </Link>

        <Link
          href="/strategy"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Strategy
            </span>
          </div>
        </Link>

        {/* 7. Simulation - БАТАЛГААТАЙ ШИНЭ ЗУРАГ */}
        <Link
          href="/simulation"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800')",
            }}
          >
            <span className="drop-shadow-2xl">Simulation</span>
          </div>
        </Link>

        {/* 8. Sports */}
        <Link
          href="/sports"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Sports
            </span>
          </div>
        </Link>

        {/* 9. Racing */}
        <Link
          href="/racing"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Racing
            </span>
          </div>
        </Link>

        {/* 10. Puzzle */}
        <Link
          href="/puzzle"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Puzzle
            </span>
          </div>
        </Link>

        {/* 11. Horror */}
        <Link
          href="/horror"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/4054178/pexels-photo-4054178.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Horror
            </span>
          </div>
        </Link>

        {/* 12. Fighting */}
        <Link
          href="/fighting"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Fighting
            </span>
          </div>
        </Link>

        {/* 13. Survival */}
        <Link
          href="/survival"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Survival
            </span>
          </div>
        </Link>

        {/* 14. Sandbox */}
        <Link
          href="/sandbox"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500 text-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6152264/pexels-photo-6152264.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
              Sandbox
            </span>
          </div>
        </Link>

        {/* 15. MOBA */}
        <Link
          href="/moba"
          className="relative p-[3px] bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden group"
        >
          <div
            className="flex items-center justify-center w-full h-full bg-cover bg-center rounded-[13px] text-white text-2xl font-black uppercase shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] group-hover:shadow-none transition-all duration-500"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/7862656/pexels-photo-7862656.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <span className="drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">MOBA</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
