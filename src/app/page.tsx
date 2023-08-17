import { Collection } from "@/app/Collection";
import Footer from "./Footer";
import Category from "./Category";
import Gallery from "./Gallery";
import HeroSection  from "./HeroSection";
import axios from "axios";
import { Product } from "@/types/productsApiTypings";
export default async function Home() {
    const { data:products }:{ data:Product[] }=await  axios.get("https://fakestoreapi.com/products");
    const { data:categories }:{ data:string[] }=await  axios.get("https://fakestoreapi.com/products/categories");
  return (
    <>
      <main className="relative font-poppins">
        <HeroSection />
        <Collection />
        <Category category={categories} products={products} />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
