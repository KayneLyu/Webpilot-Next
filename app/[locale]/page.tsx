export default function HomePage() {
  return (
    <section className="px-4 py-12 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">欢迎来到我们公司</h1>
      <p className=" text-base md:text-lg text-gray-600 max-w-xl mx-auto">
        我们致力于为客户提供优质的产品与服务，打造专业可靠的解决方案。
      </p>
      <div className="mt-6">
        <a
          href="/products"
          className="font-[family-name:var(--font-geist-mono)] font-semibold inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          查看我们的产品
        </a>
      </div>

    </section>
  )
}
