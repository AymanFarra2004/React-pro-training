import '../styles/ourFeatures.css';
import deliveryIcon from '../assets/images/icon-delivery.svg';
import customerServiceIcon from '../assets/images/Icon-customerService.svg';
import secureIcon from '../assets/images/Icon-secure.svg';
export default function OurFeatures() {
  const features = [
    {
      name: 'FREE AND FAST DELIVERY',
      id: 1,
      desc: 'Free delivery for all orders over $140',
      img: deliveryIcon,
    },
    {
      name: '24/7 CUSTOMER SERVICE',
      id: 2,
      desc: 'Friendly 24/7 customer support',
      img: customerServiceIcon,
    },
    {
      name: 'MONEY BACK GUARANTEE',
      id: 3,
      desc: 'We reurn money within 30 days',
      img: secureIcon,
    },
  ];
  return (
    <section className="ourFeatures-container">
      <div className='ourFeatures-flexbox'>
        {features.map((feature, index) => (
          <Feature
            key={index}
            name={feature.name}
            desc={feature.desc}
            id={feature.id}
            img={feature.img}
          />
        ))}
      </div>
    </section>
  );
}
function Feature(props) {
  return (
    <article className={`feature feature${props.id}`}>
      <div className="feature-img">
        <div>
          <img src={props.img} alt={`${props.name} image`} />
        </div>
      </div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
    </article>
  );
}
