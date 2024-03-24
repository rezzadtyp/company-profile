import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <main className="mx-auto flex flex-col place-content-center gap-8 px-4 md:px-0">
      <div className="relative h-[600px]">
        <div className="h-full place-content-center text-center gap-4 flex flex-col">
          <h3 className="text-xl">Product Page</h3>
          <h1 className="mx-auto max-w-7xl text-center text-4xl font-semibold md:text-7xl">
            EV charging stations for homes and businesses
          </h1>
          <p>
            Explore our range of electric vehicle charging solutions and take
            the next step toward a fossil-free future of mobility.
          </p>
        </div>
      </div>
      <div className="mx-auto grid h-fit w-full max-w-5xl gap-8">
        <div className="">
          <ProductList />
        </div>
      </div>
    </main>
  );
};

export default Products;
