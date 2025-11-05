import { Button } from "@/components/ui/button";
import image from "../../../assets/hero.jpeg";
function Hero() {
  return (
    <section className="relative bg-secondary text-primary-foreground rounded-t-2xl pt-32 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Fast & Reliable <span className="text-blue-600">Parcel Delivery</span> Anywhere You Need
          </h1>
          <p className="text-muted mb-8 max-w-md mx-auto md:mx-0">
            Send and receive parcels quickly with real-time tracking and trusted courier partners — at the best rates.
          </p>
          <div className="">
            <Button size="lg" variant={"primary"} className="text-lg cursor-pointer btn-special-font">
              Get Start
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <img
            src={image}
            alt="Parcel Delivery"
            className="w-full max-w-lg mx-auto animate-float"
          />
          <div className="absolute -top-6 -right-6 bg-card text-card-foreground px-4 py-3 rounded-2xl shadow-md">
            <p className="text-sm font-semibold">
              🚚 2,000+ Parcels Delivered Today!
            </p>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  `}</style>
    </section>

  );
}

export default Hero;