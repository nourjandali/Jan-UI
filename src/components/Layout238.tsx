import relumeLogo from "@/assets/images/relume.svg";

const defaultSteps = [
  {
    id: 1,
    alt: "relume logo",
    title: "Short summary of step one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    id: 2,
    alt: "relume logo",
    title: "Short summary of step two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    id: 3,
    alt: "relume logo",
    title: "Short summary of step three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
];

export default function Layout238({
  title = "How it works",
  steps = defaultSteps,
}) {
  return (
    <div className="px-global">
      <div className="w-full max-w-global mx-auto">
        <div className="py-global">
          <div className="flex flex-col items-center justify-center text-center gap-20">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="grid grid-rows-1 md:grid-cols-3 items-center justify-center gap-12">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-row md:flex-col items-start md:items-center justify-center gap-6"
                >
                  <img src={relumeLogo.src} alt={step.alt} width="48" />
                  <div className="flex flex-col items-start md:items-center justify-start md:justify-center text-left md:text-center gap-4 w-fit">
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                    <p className="text-base font-normal">{step.description}</p>
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
