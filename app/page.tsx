import Image from "next/image";

export default function page() {
  return (
    <div className="max-w-[1100px] mx-auto pt-40">
      <div className="grid md:grid-rows-2 md:grid-flow-col gap-4">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div className="flex h-[250px] dev" key={i}>
              <div className="pt-2">
                <Image
                  src={`/homepage/highlight-${i + 1}.png`}
                  height={70}
                  width={70}
                  alt=""
                />
              </div>
              <div className="dev__hover_effect"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
