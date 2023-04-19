import clsx from 'clsx';
import Image from 'next/image';
import Price from 'components/price';

export function GridTileImage(imageProps) {
    imageProps = {
        isInteractive,
        active,
        labels: {
            title,
            amount,
            currencyCode,
            isSmall
        }
    }
  return (
    <div>
      {active !== undefined && active ? (
        <span className="absolute h-full w-full bg-white opacity-25"></span>
      ) : null}
      {props.src ? (
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out hover:scale-105': isInteractive
          })}
          {...props}
          alt={props.title || ''}
        />
      ) : null}
      {labels ? (
        <div className="absolute top-0 left-0 w-3/4 text-black dark:text-white">
          <h3
            data-testid="product-name"
            className={clsx(
              'inline bg-white box-decoration-clone py-3 pl-5 font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white dark:bg-black dark:shadow-black',
              !labels.isSmall ? 'text-3xl' : 'text-lg'
            )}
          >
            {labels.title}
          </h3>
          <Price
            className="w-fit bg-white px-5 py-3 text-sm font-semibold dark:bg-black dark:text-white"
            amount={labels.amount}
            currencyCode={labels.currencyCode}
          />
        </div>
      ) : null}
    </div>
  );
}