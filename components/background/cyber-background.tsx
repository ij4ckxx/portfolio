export function CyberBackground() {
  const matrix = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020516]">
      <div className="domain-field absolute left-1/2 top-1/2 h-[62rem] w-[62rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute inset-0 bg-cyber-grid opacity-35" />
      <div className="absolute inset-0 bg-scanlines opacity-[0.055]" />
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="cyber-fog-a absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-cyber-blue/24 blur-3xl" />
      <div className="cyber-fog-b absolute bottom-[10%] right-[7%] h-96 w-96 rounded-full bg-cyber-violet/28 blur-3xl" />
      <div className="cyber-fog-c absolute right-[30%] top-[28%] h-80 w-80 rounded-full bg-cyber-violet/16 blur-3xl" />
      <div className="absolute left-0 top-0 flex h-full w-full justify-between overflow-hidden px-4 opacity-12">
        {matrix.map((item) => (
          <div
            key={item}
            className="matrix-column font-mono text-[10px] leading-5 text-cyber-cyan"
            style={{ transform: `translateY(-${20 + item * 5}%)` }}
          >
            0101
            <br />
            SYS
            <br />
            0xJN
            <br />
            API
            <br />
            AUTH
            <br />
            1010
            <br />
            UI
            <br />
            CORE
          </div>
        ))}
      </div>
    </div>
  );
}
