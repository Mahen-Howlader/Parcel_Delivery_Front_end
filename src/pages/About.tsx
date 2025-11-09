import { Button } from "@/components/ui/button";
import { Truck, Lock, Users } from "lucide-react";
export default function AboutPage() {
  const features = [
    {
      icon: <Truck size={32} className="text-blue-600 mb-3" />,
      title: "Fast Delivery",
      desc: "Quick delivery with real-time tracking.",
    },
    {
      icon: <Lock size={32} className="text-blue-600 mb-3" />,
      title: "Secure Packages",
      desc: "Safe handling and packaging of your parcels.",
    },
    {
      icon: <Users size={32} className="text-blue-600 mb-3" />,
      title: "Trusted Service",
      desc: "Thousands of happy customers trust us.",
    },
  ];

  const teamMembers = [
    { name: "Rahim Uddin", role: "Founder & CEO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXwYM0m8Qg6eIWLCHAzTBU9b4baDvAIoRXg&s" },
    { name: "Sadia Khan", role: "Operations Manager", img: "https://exeedcollege.com/wp-content/uploads/2024/11/exeed-college-become-english-teacher-768x407.jpg" },
    { name: "Imran Hossain", role: "Customer Support", img: "https://i.guim.co.uk/img/media/59baecefbc73d3bcf4a47b017453a27f19b55175/331_488_2481_1489/master/2481.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=285e4f639f1c71cbdf27c57315394bb1" },
  ];

  return (
    <div className="space-y-14">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white bg-secondary rounded-sm" >
        <div className="absolute"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">About ParcelPro</h1>
          <p className="text-lg mb-6 drop-shadow-md">
            Delivering parcels safely, quickly, and reliably. We make logistics simple for everyone.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">Get Started</Button>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          ParcelPro is a leading parcel delivery service focused on providing fast, secure, and convenient shipping solutions.
          From local deliveries to international shipping, we ensure your packages reach safely and on time.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto py-10 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-600">Simplify parcel delivery for everyone with fast, transparent, and reliable service.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-600">Become the most trusted parcel delivery service worldwide, recognized for reliability and innovation.</p>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our services are designed to make parcel delivery safe, fast, and reliable. Here are some reasons why customers trust us.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto  text-center">
        <h2 className="text-3xl font-semibold mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional: Testimonials Section */}
      <section className="bg-secondary text-white py-10 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="italic text-lg">
            “ParcelPro is fast, reliable, and always on time. Highly recommended for anyone who needs safe delivery.”
          </p>
          <p className="italic text-lg">“The team is professional and responsive. My parcels always arrive without any issues.”</p>
        </div>
      </section>
    </div>
  );
}
