import { Star } from "lucide-react";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

export const Hero = ({
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Explore",
    url: "/tour",
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      { src: "https://i.pravatar.cc/50?img=1", alt: "Avatar 1" },
      { src: "https://i.pravatar.cc/50?img=2", alt: "Avatar 2" },
      { src: "https://i.pravatar.cc/50?img=3", alt: "Avatar 3" },
      { src: "https://i.pravatar.cc/50?img=4", alt: "Avatar 4" },
      { src: "https://i.pravatar.cc/50?img=5", alt: "Avatar 5" },
    ],
  },
}: Hero7Props) => {
  return (
  <div className="bg-secondary rounded-lg">
      <section className="py-24 text-center">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-semibold lg:text-6xl">{heading}</h1>
        <p className="mt-4 text-gray-600 text-lg">{description}</p>

        {/* Dummy Button */}
        <a
          href={button.url}
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          {button.text}
        </a>

        {/* Reviews Section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {reviews.avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-1 font-semibold">
                {reviews.rating?.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-500 font-medium">
              from {reviews.count}+ reviews
            </p>
          </div>

        </div>
      </div>

    </section>
  </div>
  );
};
