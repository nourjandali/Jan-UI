import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface Footer6Props {
  newsletterTitle?: string;
  newsletterSubtitle?: string;
  emailPlaceholder?: string;
  subscribeButtonText?: string;
  logoText?: string;
  copyrightText?: string;
}

export default function Footer6({
  newsletterTitle = "Join our newsletter",
  newsletterSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  emailPlaceholder = "Enter your email",
  subscribeButtonText = "Subscribe",
  logoText = "Logo",
  copyrightText = "© 2023 Relume. All rights reserved.",
}: Footer6Props) {
  return (
    <div className="px-global">
      <div className="w-full max-w-global mx-auto">
        <div className="py-medium">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 md:gap-0">
            <div>
              <h1 className="text-lg font-semibold">{newsletterTitle}</h1>
              <p>{newsletterSubtitle}</p>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-4 ">
              <Input
                type="email"
                placeholder={emailPlaceholder}
                className="input-border"
              />
              <Button variant="outline" className="w-full md:w-fit">
                {subscribeButtonText}
              </Button>
            </div>
          </div>
          <Separator className="mt-20 mb-8 w-full mx-auto bg-black" />

          <div className="flex flex-col md:flex-row justify-between items-center md:text-left text-center gap-6 md:gap-0">
            <h1 className="text-3xl font-bold">{logoText}</h1>
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
