import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="px-global">
      <div className="w-full max-w-global mx-auto ">
        <div className="py-medium">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 md:gap-0">
            <div>
              <h1 className="text-lg font-semibold">Join our newsletter</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="flex items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="input-border"
              />
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
