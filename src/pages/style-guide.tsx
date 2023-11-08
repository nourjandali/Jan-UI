import React from "react";
import { Button } from "@/components/ui/button";

const StyleGuide = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        {/* Default button */}
        <Button>Default Button</Button>

        {/* Outline button */}
        <Button variant="outline">Outline Button</Button>

        {/* Ghost button */}
        <Button variant="ghost">Ghost Button</Button>

        {/* Small size button */}
        <Button size="sm">Small Button</Button>
      </div>
    </section>
  );
};

export default StyleGuide;
