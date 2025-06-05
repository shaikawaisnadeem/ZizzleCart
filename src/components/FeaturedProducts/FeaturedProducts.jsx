import React, { useEffect, useState } from 'react';
import './FeaturesProducts.css';
import SyncLoader from 'react-spinners/SyncLoader';
import ProductCard from '../Productcard/ProductCard';

const FeaturedProducts = () => {
  const [loader, setLoader] = useState(false);
  const [productsSmart, setProductsSmart] = useState([]);
  const [productLaptop, setLaptop] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  const [skincare, setSkincare] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [homeDecoration, setHomeDecoration] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [tops, setTops] = useState([]);
  const [womensDresses, setWomensDresses] = useState([]);
  const [womensShoes, setWomensShoes] = useState([]);
  const [mensShirts, setMensShirts] = useState([]);
  const [mensShoes, setMensShoes] = useState([]);
  const [mensWatches, setMensWatches] = useState([]);
  const [womensWatches, setWomensWatches] = useState([]);
  const [womensBags, setWomensBags] = useState([]);
  const [womensJewellery, setWomensJewellery] = useState([]);
  const [sunglasses, setSunglasses] = useState([]);
  const [automotive, setAutomotive] = useState([]);
  const [lighting, setLighting] = useState([]);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const [
          smartRes,
          laptopRes,
          fragrancesRes,
          skincareRes,
          groceriesRes,
          homeDecorationRes,
          furnitureRes,
          topsRes,
          womensDressesRes,
          womensShoesRes,
          mensShirtsRes,
          mensShoesRes,
          mensWatchesRes,
          womensWatchesRes,
          womensBagsRes,
          womensJewelleryRes,
          sunglassesRes,
          automotiveRes,
          lightingRes,
        ] = await Promise.all([
          fetch('https://dummyjson.com/products/category/smartphones'),
          fetch('https://dummyjson.com/products/category/laptops'),
          fetch('https://dummyjson.com/products/category/fragrances'),
          fetch('https://dummyjson.com/products/category/skincare'),
          fetch('https://dummyjson.com/products/category/groceries'),
          fetch('https://dummyjson.com/products/category/home-decoration'),
          fetch('https://dummyjson.com/products/category/furniture'),
          fetch('https://dummyjson.com/products/category/tops'),
          fetch('https://dummyjson.com/products/category/womens-dresses'),
          fetch('https://dummyjson.com/products/category/womens-shoes'),
          fetch('https://dummyjson.com/products/category/mens-shirts'),
          fetch('https://dummyjson.com/products/category/mens-shoes'),
          fetch('https://dummyjson.com/products/category/mens-watches'),
          fetch('https://dummyjson.com/products/category/womens-watches'),
          fetch('https://dummyjson.com/products/category/womens-bags'),
          fetch('https://dummyjson.com/products/category/womens-jewellery'),
          fetch('https://dummyjson.com/products/category/sunglasses'),
          fetch('https://dummyjson.com/products/category/automotive'),
          fetch('https://dummyjson.com/products/category/lighting'),
        ]);
        const smartData = await smartRes.json();
        const laptopData = await laptopRes.json();
        const fragrancesData = await fragrancesRes.json();
        const skincareData = await skincareRes.json();
        const groceriesData = await groceriesRes.json();
        const homeDecorationData = await homeDecorationRes.json();
        const furnitureData = await furnitureRes.json();
        const topsData = await topsRes.json();
        const womensDressesData = await womensDressesRes.json();
        const womensShoesData = await womensShoesRes.json();
        const mensShirtsData = await mensShirtsRes.json();
        const mensShoesData = await mensShoesRes.json();
        const mensWatchesData = await mensWatchesRes.json();
        const womensWatchesData = await womensWatchesRes.json();
        const womensBagsData = await womensBagsRes.json();
        const womensJewelleryData = await womensJewelleryRes.json();
        const sunglassesData = await sunglassesRes.json();
        const automotiveData = await automotiveRes.json();
        const lightingData = await lightingRes.json();

        setProductsSmart(smartData.products.slice(0, 4));
        setLaptop(laptopData.products.slice(0, 4));
        setFragrances(fragrancesData.products.slice(0, 4));
        setSkincare(skincareData.products.slice(0, 4));
        setGroceries(groceriesData.products.slice(0, 4));
        setHomeDecoration(homeDecorationData.products.slice(0, 4));
        setFurniture(furnitureData.products.slice(0, 4));
        setTops(topsData.products.slice(0, 4));
        setWomensDresses(womensDressesData.products.slice(0, 4));
        setWomensShoes(womensShoesData.products.slice(0, 4));
        setMensShirts(mensShirtsData.products.slice(0, 4));
        setMensShoes(mensShoesData.products.slice(0, 4));
        setMensWatches(mensWatchesData.products.slice(0, 4));
        setWomensWatches(womensWatchesData.products.slice(0, 4));
        setWomensBags(womensBagsData.products.slice(0, 4));
        setWomensJewellery(womensJewelleryData.products.slice(0, 4));
        setSunglasses(sunglassesData.products.slice(0, 4));
        setAutomotive(automotiveData.products.slice(0, 4));
        setLighting(lightingData.products.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainDiv">
      {loader ? (
        <div className="loaderWrapper">
          <SyncLoader className="loader" color="#2b303b" size={20} />
          <p className="loaderText">Loading products...</p>
        </div>
      ) : (
        <div className="featuredProducts">
          {productsSmart.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {productLaptop.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {fragrances.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {skincare.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {groceries.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {homeDecoration.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {furniture.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {tops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {womensDresses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {womensShoes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {mensShirts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {mensShoes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {mensWatches.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {womensWatches.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {womensBags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {womensJewellery.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {sunglasses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {automotive.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {lighting.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
