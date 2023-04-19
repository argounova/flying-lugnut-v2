import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { AddToCart } from 'components/Product/add-to-cart';
import { Gallery } from 'components/Product/gallery';
import Prose from 'components/prose';
import clientPromise from '../../../lib/mongodb'
import { getProduct } from 'lib/shopify';
import { Image } from 'lib/shopify/types';

export async function getServerSideProps(context) {
    const { query } = useRouter()
    console.log(query.id)
    const client = await clientPromise
    const db = client.db('hot_wheels')
    let car = await db.collection('cars').findOne({ _id: query.id }).toArray()
    car = JSON.parse(JSON.stringify(car))
    return {
      props: { car },
    }
  }

export default async function ProductPage({ car }) {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-span-4">
          <Gallery
            title={car.make}
            amount={car.price}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            images={product.images.map((image) => ({
              src: image.url,
              altText: image.altText
            }))}
          />
        </div>

        <div className="p-6 lg:col-span-2">
          {/* @ts-expect-error Server Component */}
          {product.descriptionHtml ? (
            <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
          ) : null}

          <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
        </div>
      </div>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <RelatedProducts id={product.id} />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </div>
  );
}