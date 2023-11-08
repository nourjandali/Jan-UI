import PropTypes from "prop-types";
import relumeLogo from "@/assets/images/relume.svg";
import placeholderImage from "@/assets/images/placeholder.svg";
import { Button } from "./ui/button";

const defaultFeatures = [
  {
    id: 1,
    logo: relumeLogo.src,
    title: "Describe feature one",
    description:
      "Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.",
  },
  {
    id: 2,
    logo: relumeLogo.src,
    title: "Describe feature two",
    description:
      "Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.",
  },
  {
    id: 3,
    logo: relumeLogo.src,
    title: "Describe feature three",
    description:
      "Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.",
  },
];

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Layout225Props {
  title?: string;
  featureDescription?: string;
  buttonText?: string;
  features?: Feature[];
}

export default function Layout225({
  title = "Describe feature",
  featureDescription = "Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.",
  buttonText = "Learn more",
  features = defaultFeatures,
}: Layout225Props) {
  return (
    <div className="px-global">
      <div className="w-full max-w-global mx-auto">
        <div className="py-global">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img src={placeholderImage.src} alt="placeholder" width="600" />
            <div className="grid grid-cols-1 gap-12">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="grid grid-cols-[auto_1fr] gap-4 items-start"
                >
                  <img src={relumeLogo.src} alt="feature logo" width="40" />
                  <div className="grid gap-4">
                    <h1 className="text-2xl font-bold">
                      {title + " " + (index + 1)}
                    </h1>
                    <p>{featureDescription}</p>
                    <Button
                      className="w-fit border-none p-0 hover:bg-transparent flex items-center gap-2 font-normal"
                      variant="ghost"
                    >
                      {buttonText}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
