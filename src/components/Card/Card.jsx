
import DeliveryVan from '../../assets/delivery-van.png';


const Card = ({ item }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <img src={DeliveryVan} alt='' className="w-10 h-10 mb-4" />
      <h2 className="text-lg font-bold mb-2">{item.title}</h2>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
};

export default Card;