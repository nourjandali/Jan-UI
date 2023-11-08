import relumeLogo from "@/assets/images/relume.svg";
import webflowLogo from "@/assets/images/webflow.svg";

const defaultLogos = [
  { img: relumeLogo.src, alt: "Relume logo" },
  { img: webflowLogo.src, alt: "Webflow logo" },
  { img: relumeLogo.src, alt: "Relume logo" },
  { img: webflowLogo.src, alt: "Webflow logo" },
  { img: relumeLogo.src, alt: "Relume logo" },
  { img: webflowLogo.src, alt: "Webflow logo" },
  { img: relumeLogo.src, alt: "Relume logo" },
  { img: webflowLogo.src, alt: "Webflow logo" },
  { img: relumeLogo.src, alt: "Relume logo" },
  { img: webflowLogo.src, alt: "Webflow logo" },
];

interface Logo1Props {
  title?: string;
  logoData?: { img: any; alt: string }[];
}

export default function Logo1({
  title = "Trusted by the world's best companies",
  logoData = defaultLogos,
}: Logo1Props) {
  return (
    <div className="py-medium">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="font-semibold text-lg px-global">{title}</h1>
        <div className="flex flex-col md:flex-row flex-shrink-0 justify-center items-center gap-6 w-full">
          {logoData.map((logo, index) => (
            <img key={index} src={logo.img} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
