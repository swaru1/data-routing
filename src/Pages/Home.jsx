import { data, useLoaderData } from "react-router"
import ProductCard from "../components/ProductCard"

const Home = () => {

  const products = useLoaderData()

  return (
    <div className='bg-neutral-300 flex min-h-[90%] justify-center items-center gap-2 p-2 flex-wrap'>
      {products.map((product)=> {
        return <ProductCard key={product.id} elem={product}/>
      })}
    </div>
  )
}

export default Home
