import HonorList from './honorList';
import BackButton from '@/components/common/BackButton';
export default function HonorsPage() {

  const cases = [
    "/honor/1.webp",
    "/honor/2.webp",
    "/honor/3.webp",
    "/honor/4.webp",
    "/honor/5.webp",
    "/honor/6.webp",
    "/honor/7.webp",
    "/honor/8.webp",
    "/honor/9.webp",
    "/honor/10.webp",
    "/honor/11.webp",
    "/honor/12.webp",
  ]
  return (
    <div className='max-w-main mx-auto py-10 md:py-20'>
      <div className='px-5 hidden md:block'>
        <BackButton />
      </div>
      <div  className=''>
        <HonorList cases={cases} />
      </div>
    </div>
  )
}