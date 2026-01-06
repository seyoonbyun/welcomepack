export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#2a2a2a] text-white/90 text-xs py-1.5 border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-white/85">Special-Order Showcase</span>
          <span className="text-white/85">BNI</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/85 cursor-pointer hover:text-white transition-colors">
            검색
          </span>
        </div>
      </div>
    </div>
  )
}

