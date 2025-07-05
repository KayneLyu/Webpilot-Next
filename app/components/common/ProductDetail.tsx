import {useTranslations} from 'next-intl';

export default function SpecialList({ product} : { product: string }) {
  const t = useTranslations();
  const features = t.raw(`detail.${product}`) as string[];

  return (
    <ul className='flex flex-col gap-4 text-[16px] md:text-[20px]'>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  );
}
