// import ProductCard from '../ProductCard/ProductCard';

// const NewProductPage = () => {
//   const newProduct = {
//     id: 2,
//     name: 'Spring Edition Sneakers',
//     price: 130.00,
//     originalPrice: 260.00,
//     discount: 50,
//     images: [
//       '/images/men-main.webp',
//       '/images/men-2.webp',
//       '/images/men-3.webp',
//       '/images/men-4.webp',
//     ],
//     thumbnails: [
//       '/images/men-main.webp',
//       '/images/men-2.webp',
//       '/images/men-3.webp',
//       '/images/men-4.webp',
//     ],
//   };

//   return (
//     <div>
//       <ProductCard product={newProduct} />
//     </div>
//   );
// };

// export default NewProductPage;





// import NewProductPage from '../components/NewProductPage/NewProductPage';

const womenProduct = {
  id: 1,
  brand: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  price: 125.00,
  originalPrice: 250.00,
  discount: 50,
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
  images: [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg',
  ],
  thumbnails: [
    '/images/image-product-1-thumbnail.jpg',
    '/images/image-product-2-thumbnail.jpg',
    '/images/image-product-3-thumbnail.jpg',
    '/images/image-product-4-thumbnail.jpg',
  ],
};

const menProduct = {
  id: 2,
  brand: 'Sneaker Company',
  name: 'Summer Limited Edition Sneakers',
  price: 150.00,
  originalPrice: 300.00,
  discount: 50,
  description: 'These high-profile sneakers are ideal for summer. Featuring a breathable upper material and a flexible sole.',
  images: [
    '/images/men-main.webp',
    '/images/men-2.webp',
    '/images/men-3.webp',
    '/images/men-4.webp',
  ],
  thumbnails: [
    '/images/men-main.webp',
    '/images/men-2.webp',
    '/images/men-3.webp',
    '/images/men-4.webp',
  ],
};

const App = () => {
  return (
    <div>
      {/* <ProductCard product={womenProduct} /> */}
      <ProductCard product={menProduct} />
    </div>
  );
};

export default App;
