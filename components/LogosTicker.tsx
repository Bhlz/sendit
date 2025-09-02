import Image from "next/image";

const carriers = [
  { name: "DHL",      src: "/logos/DHL_Logo.svg.png",      w: 84, h: 28 },
  { name: "FedEx",    src: "/logos/FedEx_Express.svg.png",    w: 84, h: 28 },
  { name: "UPS",      src: "/logos/logo-ups.svg.png",      w: 72, h: 28 },
  { name: "Estafeta", src: "/logos/Logo_de_Estafeta.svg", w: 110, h: 28 },
  { name: "Redpack",  src: "/logos/redpack.svg.png",  w: 110, h: 28 },
  { name: "Redpack",  src: "/logos/sendit_logo_complete.svg",  w: 110, h: 28 },

];

export default function LogosTicker() {
  // Duplicamos la lista para un loop continuo
  const items = [...carriers, ...carriers];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Bordes con fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20"
        style={{ maskImage: "linear-gradient(to right, black, transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20"
        style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
        aria-hidden
      />

      <div className="flex whitespace-nowrap opacity-80 hover:opacity-100 transition">
        <div className="flex gap-10 pr-10 animate-ticker will-change-transform">
          {items.map((it, i) => (
            <div key={i} className="inline-flex items-center">
              <Image
                src={it.src}
                alt={it.name}
                width={it.w}
                height={it.h}
                className="object-contain opacity-90 hover:opacity-100 transition"
                aria-label={it.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
