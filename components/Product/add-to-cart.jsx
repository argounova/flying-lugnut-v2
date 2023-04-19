// import { useRouter, useSearchParams } from 'next/navigation';
// import { useEffect, useState, useTransition } from 'react';

export function AddToCart() {
  // let availableForSale

  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const [isPending, startTransition] = useTransition();
  // const [adding, setAdding] = useState(false);
  // const isMutating = adding || isPending;

  // async function handleAdd() {
  //   if (!availableForSale) return;

  //   setAdding(true);

  //   const response = await fetch(`/api/cart`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       merchandiseId: selectedVariantId
  //     })
  //   });

  //   const data = await response.json();

  //   if (data.error) {
  //     alert(data.error);
  //     return;
  //   }

  //   setAdding(false);

  //   startTransition(() => {
  //     router.refresh();
  //   });
  // }

  return (
    <button
      aria-label="Add item to cart"
      // onClick={handleAdd}
    //   className={`${
    //     availableForSale ? 'opacity-90 hover:opacity-100' : 'cursor-not-allowed opacity-60'
    //   } flex w-full items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white dark:bg-white dark:text-black`}
    >
       {/* <span>{availableForSale ? 'Add To Cart' : 'Out Of Stock'}</span>
       {isMutating ? <LoadingDots className="bg-white dark:bg-black" /> : null} */}
    </button>
  );
}