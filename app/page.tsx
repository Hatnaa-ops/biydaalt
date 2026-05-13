import Link from "next/link";
export default function Header() {
  return (
    <div className="gg">
      <header className="bg-[#0b0e11] w-full">
        <div className="w-[1300px] mx-auto h-[80px] flex items-center justify-between px-[20px]">
          <div className="flex items-center gap-[80px]">
            <a href="/" className="group relative">
              <h1 className="text-white text-[28px] font-black tracking-[-0.06em] uppercase italic">
                Shikyo<span className="text-[#66c0f4] not-italic">.</span>
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#66c0f4] group-hover:w-full transition-all duration-500"></div>
            </a>

            <nav className="flex gap-[45px]">
              <Link
                href="/category"
                className="text-[#555] text-[12px] font-bold uppercase tracking-[0.2em] hover:text-white transition-all duration-300 relative group"
              >
                Category
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[4px] bg-[#66c0f4] rounded-full group-hover:w-[4px] transition-all"></span>
              </Link>
              <Link
                href="/recommended"
                className="text-[#555] text-[12px] font-bold uppercase tracking-[0.2em] hover:text-white transition-all duration-300 relative group"
              >
                Санал болгох
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[4px] bg-[#66c0f4] rounded-full group-hover:w-[4px] transition-all"></span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-[40px]">
            <div className="flex items-center gap-[15px] cursor-pointer group">
              <span className="text-[#555] text-[11px] font-bold uppercase tracking-widest group-hover:text-[#66c0f4] transition-colors">
                Search
              </span>
              <div className="w-[40px] h-[1px] bg-[#333] group-hover:w-[60px] group-hover:bg-[#66c0f4] transition-all duration-500"></div>

              {/* хайлтын хэсэг */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="2"
                className="group-hover:stroke-white transition-colors"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <button className="relative overflow-hidden bg-white text-black px-[35px] py-[15px] text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#66c0f4] hover:text-white transition-all duration-[0.4s] shadow-xl">
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </header>
      <div>
        <div className="bg-[#0b0e11] text-white min-h-screen font-sans overflow-hidden">
          <div className="w-[1300px] mx-auto px-[20px] pt-[150px] pb-[100px] flex flex-col items-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#66c0f4] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-[10px] border border-[#1f2226] px-[14px] py-[5px] rounded-full bg-[#16191d] mb-[40px] hover:border-[#333] cursor-pointer transition-all">
              <span className="bg-[#66c0f4] text-[10px] font-black px-[7px] py-[2px] rounded-full text-black uppercase">
                News
              </span>
              <p className="text-[12px] text-[#8a8d90] font-medium tracking-wide">
                Introducing Shikyo WEB Gaming — Play anywhere
              </p>
              <span className="text-[#4a4d52] text-[14px]">→</span>
            </div>
            <h1 className="text-[100px] font-bold tracking-[-0.05em] leading-[0.9] text-center max-w-[1100px] bg-gradient-to-b from-white via-white to-[#4a4d52] bg-clip-text text-transparent mb-[40px]">
              СОНИРХСОН ТОГЛООМОО <br /> ТУРШААД ҮЗ.
            </h1>
            <p className="text-[#8a8d90] text-[22px] text-center max-w-[700px] leading-relaxed mb-[60px] font-light">
              ТАНЫ ИТГЭЛИЙГ АЛДАХГҮЙ <br />
              ГЭДЭГТ БИ ИТГЭЛТЭЙ БАЙНА
            </p>
            <div className="flex gap-[20px]">
              <button className="bg-white text-black px-[40px] py-[16px] rounded-[10px] font-bold text-[16px] hover:bg-[#66c0f4] hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Get Started
              </button>
            </div>

            <div className="mt-[120px] w-full h-[600px] bg-gradient-to-b from-[#16191d] to-[#0b0e11] border border-[#1f2226] rounded-[24px] shadow-2xl relative overflow-hidden p-[2px]">
              <img
                src="/hmmm.png"
                alt="image"
                className="w-full h-full object-cover rounded-[22px]"
              />
            </div>
          </div>

          <div className="w-[1300px] mx-auto px-[20px] pb-[150px]">
            <div className="grid grid-cols-2 gap-[30px]">
              {/* Card 1 */}
              <div className="w-[1300px] mx-auto px-[20px] pb-[150px]">
                <div className="grid grid-cols-2 gap-[30px]">
                  {/* VOID WALKER CARD */}
                  <Link href="/openworld" className="group block">
                    {" "}
                    {/* <-- Бүх картыг Link-ээр ороосон */}
                    <div className="w-full h-[500px] bg-[#16191d] border border-[#1f2226] rounded-[20px] p-[40px] flex flex-col justify-end transition-all duration-500 hover:border-[#333] relative overflow-hidden">
                      {/* Glow */}
                      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#66c0f4] opacity-0 group-hover:opacity-[0.08] blur-[100px] transition-all duration-500 z-[1] pointer-events-none" />

                      {/* Image */}
                      <img
                        src="/openworld.png"
                        alt="Open World"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.35] group-hover:scale-[1.05] transition-all duration-700 z-[0] pointer-events-none"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e11] via-[#0b0e11]/40 to-transparent z-[2] pointer-events-none" />

                      {/* Content */}
                      <div className="relative z-[3]">
                        <p className="text-[#66c0f4] font-bold text-[12px] uppercase tracking-[3px] mb-[15px]">
                          Open World
                        </p>
                        <h3 className="text-[40px] font-bold mb-[20px] text-white">
                          Void Walker
                        </h3>
                        <p className="text-[#8a8d90] text-[16px] max-w-[400px]">
                          Survival on the edge of a collapsing star system.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/survival" className="group block">
                    <div className="w-full h-[500px] bg-[#16191d] border border-[#1f2226] rounded-[20px] p-[40px] flex flex-col justify-end transition-all duration-500 hover:border-[#333] relative overflow-hidden text-white/20 uppercase font-black tracking-widest italic items-center justify-center">
                      Coming Soon
                    </div>
                  </Link>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="w-full h-[500px] bg-[#16191d] border border-[#1f2226] rounded-[20px] p-[40px] flex flex-col justify-end transition-all duration-500 hover:border-[#333] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ff2d55] opacity-0 group-hover:opacity-[0.08] blur-[100px] transition-all duration-500 z-[1]" />
                  <img
                    src="/Cyberpunk.png"
                    alt="Cyberpunk"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.35] group-hover:scale-[1.05] transition-all duration-700 z-[0]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e11] via-[#0b0e11]/40 to-transparent z-[2]" />
                  <div className="relative z-[3]">
                    <p className="text-[#ff2d55] font-bold text-[12px] uppercase tracking-[3px] mb-[15px]">
                      Cyberpunk
                    </p>
                    <h3 className="text-[40px] font-bold mb-[20px]">
                      Neon Drift
                    </h3>{" "}
                    <p className="text-[#8a8d90] text-[16px] max-w-[400px]">
                      The definitive high-speed experience in Neo-Tokyo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0b0e11] text-white py-10 font-sans">
          <div className="w-[1300px] mx-auto px-5">
            <div className="flex justify-center items-end mb-6 border-b-2 border-[#66c0f4] pb-2">
              <h2 className="text-[14px] font-black uppercase tracking-[0.5em] text-[#66c0f4]">
                TOP GAMES ACCORDED BY GEMINI
              </h2>
            </div>
            <div className="grid grid-cols-12 py-2 px-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#222] border-b border-[#1f2226]">
              <div className="col-span-1">Rank</div>
              <div className="col-span-8">Official Title</div>
              <div className="col-span-3 text-right">Active Players</div>
            </div>

            <div className="flex flex-col">
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  01
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Counter-Strike 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  1,420,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  02
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Dota 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  821,400
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  03
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  League of Legends
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  1,250,900
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  04
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  PUBG: BATTLEGROUNDS
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  610,200
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  05
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Valorant
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  780,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  06
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Apex Legends
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  415,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  07
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Grand Theft Auto V
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  352,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  08
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Minecraft
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  910,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  09
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Elden Ring
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  285,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  10
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Baldur's Gate 3
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  205,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  11
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Helldivers 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  152,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  12
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Fortnite
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  1,120,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  13
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Rust
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  165,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  14
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Rainbow Six Siege
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  135,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  15
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Warframe
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  98,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  16
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Rocket League
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  255,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  17
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Team Fortress 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  88,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  18
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  World of Warcraft
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  410,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  19
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Cyberpunk 2077
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  72,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  20
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Destiny 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  115,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  21
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  The Sims 4
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  68,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  22
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Call of Duty: Warzone
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  325,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  23
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Path of Exile
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  122,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  24
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Terraria
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  58,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  25
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Stardew Valley
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  92,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  26
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Escape from Tarkov
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  105,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  27
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Dead by Daylight
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  52,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  28
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Hades
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  32,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  29
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Sea of Thieves
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  65,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  30
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Genshin Impact
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  390,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  31
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Euro Truck Simulator 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  48,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  32
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Phasmophobia
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  38,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  33
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Hollow Knight
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  28,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  34
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Factorio
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  36,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  35
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Red Dead Redemption 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  48,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  36
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Slay the Spire
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  22,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  37
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Monster Hunter: World
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  85,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  38
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Project Zomboid
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  42,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  39
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Deep Rock Galactic
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  32,000
                </div>
              </div>
              <div className="grid grid-cols-12 py-2 px-4 items-center border-b border-[#13161a] hover:bg-[#16191d] transition-all group cursor-pointer">
                <div className="col-span-1 font-mono text-[16px] text-[#222] group-hover:text-[#66c0f4]">
                  40
                </div>
                <div className="col-span-8 text-[18px] font-black text-[#8a8d90] group-hover:text-white uppercase italic tracking-tighter transition-all">
                  Left 4 Dead 2
                </div>
                <div className="col-span-3 text-right font-mono text-[16px] text-[#333] group-hover:text-white">
                  31,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#0b0e11] text-white pt-20 pb-10 border-t border-[#1f2226]">
        <div className="w-[1300px] mx-auto px-5">
          <div className="flex justify-between items-start mb-24">
            <div>
              <h2 className="text-[40px] font-black italic tracking-tighter mb-6 uppercase">
                SHIKYO<span className="text-[#66c0f4]">.</span>
              </h2>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:info@shikyo.com"
                  className="text-[18px] font-bold text-[#8a8d90] hover:text-[#66c0f4] transition-colors"
                >
                  gmail: ytkhatanbold@gmail.com
                </a>
                <a
                  href="tel:+97600000000"
                  className="text-[18px] font-bold text-[#8a8d90] hover:text-[#66c0f4] transition-colors"
                >
                  phone: +976 89860609
                </a>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-3 items-end">
                <h4 className="text-[#333] text-[11px] font-black uppercase tracking-[0.3em] mb-2">
                  Connect
                </h4>
                <a
                  href="https://www.facebook.com/hatanbold.bulag"
                  className="text-[16px] font-black uppercase italic text-[#555] hover:text-white hover:translate-x-[-10px] transition-all"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/khatanboldbulag/"
                  className="text-[16px] font-black uppercase italic text-[#555] hover:text-white hover:translate-x-[-10px] transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/ShikyoBnn"
                  className="text-[16px] font-black uppercase italic text-[#555] hover:text-white hover:translate-x-[-10px] transition-all"
                >
                  Twitter / X
                </a>
                <a
                  href="https://t.me/shikyoalt"
                  className="text-[16px] font-black uppercase italic text-[#555] hover:text-white hover:translate-x-[-10px] transition-all"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#13161a] pt-8 flex justify-center items-center">
            <span className="text-[#222] text-[11px] font-black uppercase tracking-widest">
              System Status
            </span>
            <div className="w-2 h-2 rounded-full bg-[#66c0f4] "></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
