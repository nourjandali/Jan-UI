import placeholderImage from "@/assets/images/placeholder.svg";

interface Layout25Props {
  title?: string;
  subtext?: string;
  statistics?: { value: string; description: string }[];
}

export default function Layout25({
  title = "Headline highlighting customer results",
  subtext = "Emphasise time-saving and use numbers to maximise credibility.",
  statistics = [
    { value: "10x", description: "Increase in productivity" },
    { value: "300%", description: "Return on investment" },
    { value: "5k+", description: "Happy customers" },
    { value: "100+", description: "5-star reviews" },
  ],
}: Layout25Props) {
  return (
    <div className="px-global">
      <div className="w-full max-w-global mx-auto">
        <div className="py-global">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="flex flex-col items-start justify-start gap-6">
              <h1 className="text-5xl font-bold text-center md:text-left">
                {title}
              </h1>
              <p className="text-center md:text-left">{subtext}</p>
              <div className="grid grid-cols-2 gap-10 mt-10 place-items-center">
                {statistics.map((stat) => (
                  <div key={stat.value} className="text-center">
                    <div className="text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-xl">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <img src={placeholderImage.src} alt="placeholder" width="600" />
          </div>
        </div>
      </div>
    </div>
  );
}
