import { Button } from "./ui/button";

interface Header23Props {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function Header23({
  title,
  description,
  buttonText,
}: Header23Props) {
  return (
    <div className="px-global">
      <div className="w-full max-w-small mx-auto">
        <div className="py-global">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>{description}</p>
            <Button className="mt-4">{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Header23.defaultProps = {
  title: "Call to action that excites the visitor to try your product",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttonText: "Get Started",
};
