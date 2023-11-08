import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

const defaultAccordionData = [
  {
    id: "item-1",
    trigger: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "item-2",
    trigger: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "item-3",
    trigger: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "item-4",
    trigger: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    id: "item-5",
    trigger: "Question text goes here",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

export default function FAQ1({
  title = "Frequently asked questions",
  accordionData = defaultAccordionData,
  subTitle = "Still have questions?",
  paragraph = "Support details to capture customers that might be on the fence.",
  buttonText = "Contact Us",
}) {
  return (
    <div className="px-global">
      <div className="w-full max-w-small mx-auto">
        <div className="py-global">
          <div className="flex flex-col items-center gap-20 ">
            <h1 className="text-5xl font-bold text-center">{title}</h1>
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-black"
            >
              {accordionData.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-black text-lg"
                >
                  <AccordionTrigger>{item.trigger}</AccordionTrigger>
                  <AccordionContent className="font-normal tracking-wide text-base text-gray-700">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <h1 className="text-3xl font-bold text-center">{subTitle}</h1>
              <p className="text-center">{paragraph}</p>
              <Button className="mt-2" variant="outline">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
