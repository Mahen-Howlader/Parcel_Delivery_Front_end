import Hero from "@/components/modules/HomePage/Hero";
import { Button } from "@/components/ui/button";

function HomePage() {
    return (
        <div>
            <Hero></Hero>
             <section className="container mx-auto text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">About Our Service</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a trusted parcel delivery service helping thousands of customers deliver their packages safely and on time. 
          Whether it’s local or international, we ensure fast and secure delivery.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Same Day Delivery", desc: "Deliver parcels within the same day across your city." },
              { title: "International Shipping", desc: "We deliver worldwide with full tracking support." },
              { title: "Secure Packaging", desc: "Ensuring your items are safely handled and packed." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Book a Parcel", desc: "Fill in parcel details & destination." },
            { step: "2", title: "Pickup", desc: "Our rider picks up your parcel." },
            { step: "3", title: "Delivered", desc: "Your parcel reaches safely on time." },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded-2xl p-6">
              <div className="text-blue-600 text-4xl font-bold mb-3">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 mb-4">
              “Super fast delivery and excellent service. My parcel reached on time!”
            </p>
            <h4 className="font-semibold text-blue-600">— Sarah Rahman</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 mb-4">
              “Very reliable and affordable. Highly recommended for regular users.”
            </p>
            <h4 className="font-semibold text-blue-600">— Arif Khan</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">Have questions or want to book a delivery? Reach out to us anytime.</p>
        <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
        </div>
    );
}

export default HomePage;