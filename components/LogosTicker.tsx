const items = ["DHL","FedEx","UPS","Estafeta","Redpack"];

export default function LogosTicker(){
  return (
    <div className="relative overflow-hidden py-2">
      <div className="flex whitespace-nowrap opacity-80 hover:opacity-100 transition">
        <div className="animate-ticker flex gap-10 pr-10">
          {[...items, ...items].map((label,i)=>(
            <span key={i} className="inline-block text-sm md:text-base tracking-wide uppercase" style={{ color: 'rgba(10,27,46,0.55)' }} aria-label={label}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}