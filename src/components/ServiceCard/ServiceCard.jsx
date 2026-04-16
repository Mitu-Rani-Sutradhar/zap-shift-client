import ServiceImg from "../../assets/service.png";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border hover:-translate-y-1 hover:bg-primary">
       <img className="mx-auto pb-4" src={ServiceImg} alt="" />
      <h2 className="text-center text-lg font-bold mb-3 text-gray-800">
        {service.title}
      </h2>

      <p className="text-center text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>

    </div>
  );
};

export default ServiceCard;