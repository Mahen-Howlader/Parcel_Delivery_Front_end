import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // এখানে তুমি API call করতে পারো বা Firebase/EmailJS use করতে পারো
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-20">
      {/* Header Section */}
      <section className="bg-secondary rounded-sm text-white py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-xl mx-auto">
          Have questions or want to send a parcel? Contact us anytime, we’re here to help!
        </p>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          <MapPin size={32} className="text-blue-600 mb-3" />
          <h3 className="text-xl font-bold mb-1">Our Office</h3>
          <p className="text-gray-600">123 Main Street, Gournadi, Barishal</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          <Phone size={32} className="text-blue-600 mb-3" />
          <h3 className="text-xl font-bold mb-1">Phone</h3>
          <p className="text-gray-600">+880 1234 567 890</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
          <Mail size={32} className="text-blue-600 mb-3" />
          <h3 className="text-xl font-bold mb-1">Email</h3>
          <p className="text-gray-600">support@parcelpro.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto max-w-2xl bg-gray-50 p-10 rounded-2xl shadow">
        <h2 className="text-3xl font-semibold mb-6 text-center">Send Us a Message</h2>
        {submitted && <p className="text-green-600 mb-4 text-center">Message sent successfully!</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="h-32"
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Send Message
          </Button>
        </form>
      </section>

      {/* Optional: Map Placeholder */}
      <section className="container mx-auto h-64 rounded-2xl overflow-hidden shadow">
        <iframe
          title="Office Map"
          src="https://maps.google.com/maps?q=Gournadi,%20Barishal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
