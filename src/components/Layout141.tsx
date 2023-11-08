import { Button } from "./ui/button";
import placeholderImage from "@/assets/images/placeholder.svg";

interface Layout141Props {
  title?: string;
  summary?: string;
  buttonText?: string;
  imageAlt?: string;
}

export default function Layout141({
  title = "Short headline about the benefit of using your product or service",
  summary = "Highlight the Unique Selling Proposition (USP) with a short summary of the main feature and how it benefits customers. The idea here is to keep it short and direct. If the visitor wishes to learn more they will hit the button.",
  buttonText = "Learn more",
  imageAlt = "placeholder",
}: Layout141Props) {
  return (
    <header className="px-global">
      <div className="w-full max-w-small mx-auto">
        <div className="py-global">
          <div className="flex flex-col gap-20 ">
            <div className="flex flex-col items-center justify-center text-center gap-6">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="text-base font-normal">{summary}</p>

              <Button className="mt-4" variant="outline">
                {buttonText}
              </Button>
            </div>

            <img src={placeholderImage.src} alt={imageAlt} />
          </div>
        </div>
      </div>
    </header>
  );
}
