'use client'
import { useEffect, useState } from "react"
import { useParams,useRouter} from "next/navigation" // Update import statement
import { ProductType } from "@/interface"
import { Dialog } from "@headlessui/react"
import CustomImage from "@/components/image"
import { StarIcon } from "@heroicons/react/16/solid"

const ProductDetail = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState<ProductType | undefined>();
  const [isOpen, setIsOpen] = useState(true);

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const product = await res.json();
      setProduct(product)
      setLoading(false) // Corrected setLoading statement
    }
    getData();
  }, [id])

  return (
    <Dialog open={isOpen} onClose={() => {
      setIsOpen(false);
      router.back();
    }} className='relative z-50'>
      <div className="fixed inset-0 bg-black/30" aria-hidden='true' />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className={'mx-auto max-w-3xl rounded bg-white p-10'}>
            {loading ? (
              <div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
            ) : (
              <div className="flex gap-x-8 h-96">
                {product ?.image && (
                  <div className="relative w-72 h-full hidden md:inline">
                    <CustomImage product={product} fill/>
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold">
                      {product ?.title}
                    </h4>
                    <p className="font-medium text-sm">
                      ${product ?.price}
                    </p>

                    <div className="flex items-center text-sm my-4">
                      <p>{product ?.rating.rate}</p>
                      {product ?.rating.rate && (
                        <div className="flex items-center ml-2 mr-6">
                          {Array.from({length: Math.floor(product.rating.rate)}, (_, i) =>(
                            <StarIcon key={i} className="h-4 w-4 text-yellow-500"/>
                          ))}
                            {Array.from({length: 5 - Math.floor(product.rating.rate)}, (_, i) =>(
                            <StarIcon key={i} className="h-4 w-4"/>
                          ))}
                        </div>
                      )}
                      <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                        See All {product ?.rating.count} reviews
                      </p>
                    </div>
                    <p className="line-clamp-5 text-sm">
                      {product ?.description}
                    </p>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Cart
                </button>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default ProductDetail;
