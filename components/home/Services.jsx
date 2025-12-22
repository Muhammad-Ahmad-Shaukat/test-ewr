import Image from "next/image";

export default function ServiceCard({ item }) {
  return (
    <div className="p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <Image src={item.icon} alt={item.title} width={25} height={25} />
        <h3 className="font-bold text-lg text-[#131316]">{item.title}</h3>
      </div>

      <p className="text-[#131316] text-base leading-[145%]">
        {item.description}
      </p>
    </div>
  );
}
