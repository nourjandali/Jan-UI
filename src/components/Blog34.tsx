import placeholderImage from "@/assets/images/placeholder.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  imageSrc: string;
  summary: string;
}

interface Blog34Props {
  blogPosts?: BlogPost[];
  headline?: string;
  subHeadline?: string;
  buttonText?: string;
}

const defaultBlogPosts = [
  {
    title: "Blog title heading will go here",
    category: "Category",
    readTime: "5 min read",
    imageSrc: placeholderImage.src,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Blog title heading will go here",
    category: "Category",
    readTime: "5 min read",
    imageSrc: placeholderImage.src,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    title: "Blog title heading will go here",
    category: "Category",
    readTime: "5 min read",
    imageSrc: placeholderImage.src,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

export default function Blog34({
  blogPosts = defaultBlogPosts,
  headline = "Headline introducing resources",
  subHeadline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttonText = "View all",
}: Blog34Props) {
  return (
    <div className="px-global">
      <div className="w-full max-w-global mx-auto">
        <div className="py-global">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-5xl font-bold text-center">{headline}</h1>
              <p className="text-center">{subHeadline}</p>
            </div>
            {/* Cards  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <img
                    src={post.imageSrc || placeholderImage.src}
                    alt="placeholder"
                  />
                  <div className="flex w-full items-center justify-between">
                    <Badge className="bg-gray-100 text-black font-normal">
                      {post.category}
                    </Badge>
                    <p>{post.readTime}</p>
                  </div>

                  <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p>{post.summary}</p>
                    <Button
                      className="w-fit border-none p-0 hover:bg-transparent flex items-center gap-2 font-normal mt-4"
                      variant="ghost"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-16" variant="outline">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
