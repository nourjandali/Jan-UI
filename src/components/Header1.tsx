import placeholderImage from "@/assets/images/placeholder.svg";
import { Button } from "@/components/ui/button";

interface Header1Props {
  title?: string;
  description?: string;
  button1Text?: string;
  button2Text?: string;
  image?: string;
  imageAlt?: string;
}

export default function Header1({
  title = "Resonate with the visitor's problem",
  description = "Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.",
  button1Text = "Get Started",
  button2Text = "Learn More",
  image = placeholderImage.src,
  imageAlt = "placeholder",
}: Header1Props) {
  return (
    <header>
      <div className="px-global">
        <div className="w-full max-w-global mx-auto">
          <div className="py-global">
            <div className="flex flex-col md:flex-row justify-between items-center gap-20">
              <div>
                <h1 className="text-6xl font-bold">{title}</h1>
                <p className="mt-6 text-lg font-normal">{description}</p>
                <div className="mt-10 flex items-center gap-4">
                  <Button>{button1Text}</Button>
                  <Button variant="outline">{button2Text}</Button>
                </div>
              </div>

              <img src={image} alt={imageAlt} width="600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
