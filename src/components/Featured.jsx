import '../styles/featured.css';
import { DepartmentTitle } from './TodaysProducts';
import { Title } from './TodaysProducts';
import ps5 from '../assets/images/ps5.svg';
import woman from '../assets/images/woman.svg';
import speakers from '../assets/images/speakers.svg';
import prefume from '../assets/images/prefume.svg';
export default function Featured() {
  return (
    <section className="featured-container">
      <DepartmentTitle title="Featured" />
      <Title title="New Arrival" name="featured-title" />
      <FeaturedProducts
        products={[
          {
            name: 'PlayStation 5',
            desc: 'Black and White version of the PS5 coming out on sale.',
            img: ps5,
          },
          {
            name: 'Women’s Collections',
            desc: 'Featured woman collections that give you another vibe.',
            img: woman,
          },
          {
            name: 'Speakers',
            desc: 'Amazon wireless speakers',
            img: speakers,
          },
          {
            name: 'Perfume',
            desc: 'GUCCI INTENSE OUD EDP',
            img: prefume,
          },
        ]}
      />
    </section>
  );
}
function FeaturedProducts(props) {
  const featuredProducts = props.products;
  return (
    <div className="featuredProducts-gridbox">
      {featuredProducts.map((product, index) => (
        <FeaturedProduct
          key={index}
          id={index + 1}
          name={product.name}
          desc={product.desc}
          img={product.img}
        />
      ))}
    </div>
  );
}
function FeaturedProduct(props) {
  return (
    <article className={`featuredProduct featuredProduct${props.id}`}>
      <img src={props.img} />
      <div className="featuredProduct-description">
        <h2 className="featuredProduct-name">{props.name}</h2>
        <p className="featuredProduct-description">{props.desc}</p>
        <button>Shop Now</button>
      </div>
    </article>
  );
}
