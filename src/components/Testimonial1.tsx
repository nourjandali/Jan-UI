import React from "react";
import webflowLogo from "@/assets/images/webflow.svg";

interface Testimonial1Props {
  testimonialText?: string;
  customerName?: string;
  customerPosition?: string;
  companyName?: string;
}

export default function Testimonial1({
  testimonialText = "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
  customerName = "Customer name",
  customerPosition = "Position",
  companyName = "Company name",
}: Testimonial1Props) {
  return (
    <div className="px-global">
      <div className="w-full max-w-small mx-auto">
        <div className="py-global">
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <img src={webflowLogo.src} alt="webflow logo" />
            <blockquote className="italic text-2xl font-bold">
              {testimonialText}
            </blockquote>
            <div className="flex flex-col items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                />
                <path
                  fill="currentColor"
                  d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                />
              </svg>
              <div>
                <h1 className="text-lg font-bold">{customerName}</h1>
                <p>
                  {customerPosition}, {companyName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
