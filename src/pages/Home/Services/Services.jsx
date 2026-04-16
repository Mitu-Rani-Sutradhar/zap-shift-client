import services from "../../../json/services.json";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section className="w-11/12 mx-auto py-12 bg-secondary rounded-2xl">

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white">Our Services</h1>
        <p className="text-gray-600 mt-2 text-white font-sm mx-auto">
         Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
};

export default Services;