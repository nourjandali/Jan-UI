import React, { useState } from "react";
import Navbar1 from "@/components/Navbar1";
import Header1 from "@/components/Header1";
import Logo1 from "@/components/Logo1";
import Layout238 from "@/components/Layout238";
import Layout141 from "@/components/Layout141";
import Layout225 from "@/components/Layout225";
import Layout25 from "@/components/Layout25";
import Testimonial1 from "@/components/Testimonial1";
import Header23 from "@/components/Header23";
import FAQ1 from "@/components/FAQ1";
import Blog34 from "@/components/Blog34";
import Footer6 from "@/components/Footer6";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Data {
  header1: any;
  layout238: any;
  layout141: any;
  layout225: any;
  layout25: any;
  testimonial1: any;
  header23: any;
  faq1: any;
  blog34: any;
  footer6: any;
}

const ChatInterface = () => {
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState("");
  const initialData: Data = {
    header1: null,
    layout238: null,
    layout141: null,
    layout225: null,
    layout25: null,
    testimonial1: null,
    header23: null,
    faq1: null,
    blog34: null,
    footer6: null,
  };
  const [data, setData] = useState<Data>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(message: any) {
    setIsLoading(true);
    const response = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      const data = await response.json();
      setData(data);
      setFinished(true);
    } else {
      console.error("Failed to send message:", response.statusText);
    }
    setIsLoading(false);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await sendMessage(message);
  };
  if (finished && data) {
    return (
      <>
        <Navbar1 />
        <Header1 {...data.header1} />
        <Logo1 />
        <Layout238 {...data.layout238} />
        <Layout141 {...data.layout141} />
        <Layout225 {...data.layout225} />
        <Layout25 {...data.layout25} />
        <Testimonial1 {...data.testimonial1} />
        <Header23 {...data.header23} />
        <FAQ1 {...data.faq1} />
        <Blog34 {...data.blog34} />
        <Footer6 {...data.footer6} />
      </>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen flex justify-center items-center"
    >
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <Textarea
          placeholder="Type your company description..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-[500px] h-[100px] border-black shadow-lg text-base placeholder:font-normal placeholder:text-base placeholder:tracking-wide"
        />
        <Button
          type="submit"
          className="shadow-lg bg-indigo-500 hover:bg-indigo-700 rounded-lg flex items-center gap-2 py-2 px-4 font-bold tracking-wider"
        >
          {isLoading ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                >
                  <path
                    stroke-dasharray="60"
                    stroke-dashoffset="60"
                    stroke-opacity=".3"
                    d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="1.3s"
                      values="60;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="15"
                    stroke-dashoffset="15"
                    d="M12 3C16.9706 3 21 7.02944 21 12"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.3s"
                      values="15;0"
                    />
                    <animateTransform
                      attributeName="transform"
                      dur="1.5s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </g>
              </svg>
              Loading...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
                />
              </svg>
              {"Generate"}
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ChatInterface;

{
  /* <form onSubmit={handleSubmit}>
<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Type your message here..."
  style={{ width: "300px", height: "100px" }}
/>
<button type="submit" style={{ marginTop: "10px" }}>
  {isLoading ? "Loading..." : "Send Message"}
</button>
</form> */
}
