import Image from "next/image";
import {
  BadgeCheck,
  ChevronRight,
  Clock3,
  Gift,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Wrench
} from "lucide-react";
import { ConversionWidgets } from "./components/ConversionWidgets";
import { OrderCheckout } from "./components/OrderCheckout";

const shopUrl = "https://shopee.vn/napigo_eco_home";
const phoneDisplay = "0900 000 000";
const phoneHref = "tel:0900000000";
const zaloUrl = "https://zalo.me/0900000000";

const products = [
  {
    name: "Máy xúc điều khiển từ xa YIGONG",
    model: "11 kênh, gầu hợp kim, tỉ lệ 1:20",
    price: "359.000đ - 409.000đ",
    schemaPrice: "359000",
    rating: "4.9",
    sold: "664 đã bán",
    reviews: "384 đánh giá",
    image: "/assets/products/xuc-yigong.webp",
    badge: "Bán chạy",
    highlights: ["2.4GHz", "Gầu hợp kim", "Mô phỏng chân thực"],
    href: `${shopUrl}?keyword=m%C3%A1y%20x%C3%BAc%20yigong`
  },
  {
    name: "Xe tải điều khiển từ xa XUEZHISHAN",
    model: "Thùng hợp kim nâng 65 độ, tỉ lệ 1:20",
    price: "569.000đ",
    schemaPrice: "569000",
    rating: "4.9",
    sold: "156 đã bán",
    reviews: "52 đánh giá",
    image: "/assets/products/ben-xuezhishan.webp",
    badge: "Thùng nâng 65 độ",
    highlights: ["Điều khiển từ xa", "Chi tiết sắc nét", "Quà tặng hấp dẫn"],
    href: `${shopUrl}?keyword=xuezhishan%20xe%20t%E1%BA%A3i`
  },
  {
    name: "Xe ủi điều khiển từ xa YIGONG",
    model: "9 kênh, gầu hợp kim, tỉ lệ 1:20",
    price: "369.000đ",
    schemaPrice: "369000",
    rating: "4.9",
    sold: "142 đã bán",
    reviews: "51 đánh giá",
    image: "/assets/products/ui-yigong.webp",
    badge: "Gầu hợp kim",
    highlights: ["9 chức năng", "Hỏa tốc", "Bảo hành uy tín"],
    href: `${shopUrl}?keyword=xe%20%E1%BB%A7i%20yigong`
  },
  {
    name: "Xe tải điều khiển từ xa YIGONG",
    model: "9 kênh, thùng hợp kim nâng 45 độ, tỉ lệ 1:20",
    price: "309.000đ",
    schemaPrice: "309000",
    rating: "4.8",
    sold: "306 đã bán",
    reviews: "124 đánh giá",
    image: "/assets/products/ben-yigong.webp",
    badge: "Giá tốt",
    highlights: ["9 chức năng", "Thùng nâng", "Giao hỏa tốc"],
    href: `${shopUrl}?keyword=yigong%20xe%20t%E1%BA%A3i`
  },
  {
    name: "Máy xúc điều khiển từ xa XUEZHISHAN",
    model: "11 kênh, gầu hợp kim, tỉ lệ 1:20",
    price: "789.000đ",
    schemaPrice: "789000",
    rating: "5.0",
    sold: "170 đã bán",
    reviews: "73 đánh giá",
    image: "/assets/products/xuc-xuezhishan.webp",
    badge: "Cao cấp",
    highlights: ["11 kênh", "Phụ kiện đi kèm", "Quà sinh nhật cho bé"],
    href: `${shopUrl}?keyword=m%C3%A1y%20x%C3%BAc%20xuezhishan`
  }
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "An toàn cho bé",
    text: "Thiết kế cạnh bo, vật liệu chắc tay, phù hợp làm quà tặng cho bé yêu xe công trình."
  },
  {
    icon: Wrench,
    title: "Mô phỏng chân thực",
    text: "Gầu, thùng và thân xe có chuyển động giống xe công trình thật, giúp bé chơi nhập vai lâu hơn."
  },
  {
    icon: Truck,
    title: "Giao nhanh",
    text: "Hỗ trợ giao hỏa tốc theo khu vực và đóng gói kỹ trước khi gửi hàng."
  },
  {
    icon: Gift,
    title: "Quà tặng hấp dẫn",
    text: "Một số đợt hàng có phụ kiện tặng kèm, phù hợp dịp sinh nhật hoặc phần thưởng cho bé."
  }
];

const policies = [
  "Bảo hành uy tín 7 ngày theo thông tin hiển thị trên sản phẩm.",
  "Hỗ trợ đổi trả nếu sản phẩm lỗi kỹ thuật, sai mẫu hoặc hư hỏng do vận chuyển.",
  "Tư vấn chọn xe theo độ tuổi, ngân sách và sở thích của bé trước khi đặt.",
  "Đóng gói chống móp, kiểm tra ngoại quan trước khi gửi cho đơn đặt trực tiếp."
];

const reviews = [
  {
    name: "Anh Minh, TP.HCM",
    text: "Xe chắc, bé chơi phần gầu xúc rất thích. Shop tư vấn nhanh và đóng gói cẩn thận."
  },
  {
    name: "Chị Hương, Hà Nội",
    text: "Mua làm quà sinh nhật, hình ảnh ngoài đời giống mô tả. Bé mở hộp là chơi ngay."
  },
  {
    name: "Anh Phúc, Đà Nẵng",
    text: "Điều khiển nhạy, xe chạy ổn trên nền nhà. Giá hợp lý hơn mua lẻ nhiều mẫu khác."
  }
];

const faqs = [
  {
    question: "Xe phù hợp cho bé mấy tuổi?",
    answer:
      "Các mẫu xe công trình điều khiển từ xa phù hợp cho bé từ khoảng 3 tuổi trở lên, cần người lớn hướng dẫn khi bé mới chơi."
  },
  {
    question: "Sản phẩm có bảo hành không?",
    answer:
      "Có. Shop áp dụng bảo hành uy tín 7 ngày theo thông tin hiển thị trên sản phẩm và hỗ trợ xử lý lỗi kỹ thuật hoặc sai mẫu."
  },
  {
    question: "Có giao hỏa tốc không?",
    answer:
      "Có hỗ trợ giao hỏa tốc theo khu vực. Bạn nên nhắn Zalo hoặc gọi trước để shop kiểm tra tồn kho và thời gian giao."
  },
  {
    question: "Nên chọn xe xúc, xe ben hay xe ủi?",
    answer:
      "Xe xúc hợp với bé thích thao tác gầu, xe ben hợp với bé thích chở vật liệu, xe ủi hợp với bé thích đẩy và san mặt bằng."
  },
  {
    question: "Đặt hàng bằng cách nào nhanh nhất?",
    answer:
      "Bạn có thể bấm Zalo, Gọi ngay hoặc Đặt ngay ở thanh cuối màn hình để shop tư vấn mẫu còn hàng và chốt đơn nhanh."
  }
];

const productSchema = products.map((product) => ({
  "@type": "Product",
  name: product.name,
  description: `${product.name} ${product.model}. ${product.highlights.join(", ")}.`,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: product.name.includes("YIGONG") ? "YIGONG" : "XUEZHISHAN"
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "VND",
    price: product.schemaPrice,
    availability: "https://schema.org/InStock",
    url: product.href
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: product.rating,
    reviewCount: product.reviews.replace(/\D/g, "")
  }
}));

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Napigo Eco Home",
      url: shopUrl,
      sameAs: [shopUrl]
    },
    {
      "@type": "WebPage",
      name: "Xe đồ chơi công trình cho bé",
      description:
        "Landing page bán xe đồ chơi công trình điều khiển từ xa, tập trung tư vấn và chốt đơn nhanh qua Zalo hoặc điện thoại."
    },
    ...productSchema,
    faqSchema
  ]
};

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#fffaf0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProductSection />
      <OrderCheckout
        phoneDisplay={phoneDisplay}
        phoneHref={phoneHref}
        shopUrl={shopUrl}
        zaloUrl={zaloUrl}
      />
      <VideoSection />
      <BenefitSection />
      <ReviewSection />
      <TrustSection />
      <PolicySection />
      <FaqSection />
      <ConversionWidgets zaloUrl={zaloUrl} phoneHref={phoneHref} />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#fff2c7] pb-8 pt-4 md:pb-14 md:pt-5">
      <div className="section-shell">
        <header className="flex items-center justify-between gap-4 py-2">
          <a href="#top" className="flex items-center gap-2" aria-label="Napigo Eco Home">
            <span className="grid size-10 place-items-center rounded-full bg-white text-sm font-black text-signal-red shadow-sm">
              N
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black">Napigo Eco Home</span>
              <span className="block text-xs font-semibold text-slate-600">
                Xe công trình cho bé
              </span>
            </span>
          </a>
          <a
            href={shopUrl}
            className="focus-ring hidden items-center gap-2 rounded-[8px] bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm md:inline-flex"
          >
            <ShoppingBag aria-hidden="true" className="size-4" />
            Shop Shopee
          </a>
        </header>

        <PromoBanner />

        <div className="grid items-center gap-8 pt-7 md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:pt-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-steel-green shadow-sm">
              <BadgeCheck aria-hidden="true" className="size-4" />
              Shop 4.9 sao trên Shopee
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.03] text-ink md:text-6xl">
              Xe đồ chơi công trình điều khiển từ xa cho bé
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 md:text-lg">
              Bộ xe xúc, xe ben, xe ủi YIGONG và XUEZHISHAN có gầu/thùng hợp
              kim, mô phỏng chân thực, phù hợp làm quà sinh nhật hoặc đồ chơi
              vận động tư duy cho bé.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={zaloUrl}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-zalo-blue px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]"
              >
                <MessageCircle aria-hidden="true" className="size-5" />
                Chat Zalo nhận ưu đãi
              </a>
              <a
                href={phoneHref}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-signal-red px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]"
              >
                <Phone aria-hidden="true" className="size-5" />
                Gọi ngay {phoneDisplay}
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[
                ["5", "mẫu chủ lực"],
                ["7 ngày", "bảo hành"],
                ["2h", "hỗ trợ hỏa tốc"]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-black/10 bg-white/80 px-3 py-3 shadow-sm"
                >
                  <strong className="block text-xl font-black text-ink">
                    {value}
                  </strong>
                  <span className="text-xs font-semibold text-slate-600">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-5 hidden rounded-[8px] bg-steel-green px-4 py-3 text-sm font-black text-white shadow-lift md:block">
              Có video test xe thật
            </div>
            <Image
              src="/assets/products/xuc-yigong.webp"
              alt="Máy xúc điều khiển từ xa YIGONG 11 kênh"
              width={900}
              height={900}
              priority
              className="w-full rounded-[8px] border border-black/10 bg-white object-cover shadow-soft"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <div className="mt-4 rounded-[8px] border border-black/10 bg-white p-3 shadow-lift md:p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-[8px] bg-safety-yellow text-ink">
            <Gift aria-hidden="true" className="size-6" />
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-signal-red">
              Banner khuyến mãi hôm nay
            </p>
            <p className="mt-1 text-lg font-black leading-snug text-ink md:text-2xl">
              Mua combo từ 2 xe giảm 8%, tặng phụ kiện công trường mini
            </p>
          </div>
        </div>
        <a
          href="#dat-hang"
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-ink px-4 py-3 text-sm font-black text-white"
        >
          Đặt giữ ưu đãi
          <ChevronRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </div>
  );
}

function ProductSection() {
  return (
    <section id="san-pham" className="bg-white py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Danh mục sản phẩm"
          title="5 mẫu đang bán trên shop Napigo Eco Home"
          text="Thông tin tên sản phẩm, giá, đánh giá và lượt bán được biên tập theo dữ liệu hiển thị tại shop Shopee chính thức."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group rounded-[8px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-[8px] bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  className="size-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={index === 0}
                />
                <span className="absolute left-3 top-3 rounded-full bg-safety-yellow px-3 py-1 text-xs font-black text-ink shadow-sm">
                  {product.badge}
                </span>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-1 text-sm font-bold text-amber-600">
                  <Star aria-hidden="true" className="size-4 fill-current" />
                  {product.rating}
                  <span className="font-semibold text-slate-500">
                    ({product.reviews})
                  </span>
                </div>
                <h3 className="text-lg font-black leading-snug text-ink">
                  {product.name}
                </h3>
                <p className="mt-1 min-h-12 text-sm leading-6 text-slate-600">
                  {product.model}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xl font-black text-signal-red">
                      {product.price}
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      {product.sold}
                    </p>
                  </div>
                  <a
                    href="#dat-hang"
                    className="focus-ring inline-flex items-center gap-1 rounded-[8px] bg-ink px-3 py-2 text-sm font-bold text-white"
                  >
                    Đặt
                    <ChevronRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="bg-[#eef8f5] py-12 md:py-16">
      <div className="section-shell grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-steel-green">
            Video giới thiệu
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-5xl">
            Xem chuyển động xe trước khi chốt mẫu
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Video được đặt chế độ tải sau khi người dùng bấm xem để giữ trang
            nhẹ. Đây là cách phù hợp cho landing page mobile-first nhưng vẫn
            cho khách kiểm tra sản phẩm thật.
          </p>
          <div className="mt-5 grid gap-3 text-sm font-bold text-slate-700">
            <FeatureLine icon={Clock3} text="Tải video khi cần xem" />
            <FeatureLine icon={PackageCheck} text="Có ảnh bìa sản phẩm thật" />
            <FeatureLine icon={Sparkles} text="Hỗ trợ khách ra quyết định nhanh" />
          </div>
        </div>

        <div className="rounded-[8px] border border-black/10 bg-white p-2 shadow-soft">
          <video
            className="aspect-video w-full rounded-[6px] bg-black object-cover"
            controls
            preload="none"
            poster="/assets/products/xuc-xuezhishan.webp"
          >
            <source src="/assets/products/intro-xe-do-choi.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      </div>
    </section>
  );
}

function BenefitSection() {
  return (
    <section id="loi-ich" className="bg-white py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Lợi ích"
          title="Lý do phụ huynh chọn dòng xe công trình"
          text="Tập trung vào độ bền, khả năng chơi nhập vai và trải nghiệm điều khiển để bé chơi lâu hơn một món đồ chơi thông thường."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[8px] border border-slate-200 bg-[#fffaf0] p-5"
            >
              <benefit.icon
                aria-hidden="true"
                className="size-8 text-steel-green"
              />
              <h3 className="mt-4 text-lg font-black text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewSection() {
  return (
    <section id="danh-gia" className="bg-[#17212b] py-12 text-white md:py-16">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-safety-yellow">
              Review khách hàng
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
              Shop 4.9 sao, nhiều mẫu đã bán hàng trăm đơn
            </h2>
          </div>
          <a
            href={shopUrl}
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-[8px] bg-white px-4 py-3 text-sm font-black text-ink"
          >
            Xem shop chính thức
            <ChevronRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-[8px] border border-white/12 bg-white/8 p-5"
            >
              <div className="flex gap-1 text-safety-yellow">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="size-4 fill-current"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-6 text-white/82">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-black">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Ưu tiên an toàn",
      text: "Tư vấn mẫu phù hợp độ tuổi, nhắc phụ huynh kiểm tra pin và hướng dẫn bé chơi dưới sự quan sát của người lớn."
    },
    {
      icon: BadgeCheck,
      title: "Shop chính thức",
      text: "Điều hướng thanh toán qua Shopee Napigo Eco Home để khách dùng hệ thống bảo vệ người mua khi cần."
    },
    {
      icon: PackageCheck,
      title: "Đóng gói kỹ",
      text: "Sản phẩm được kiểm tra ngoại quan, bọc chống móp và gửi đúng mẫu đã xác nhận với khách."
    },
    {
      icon: Truck,
      title: "Giao nhanh, rõ phí",
      text: "Shop xác nhận tồn kho, phí vận chuyển và thời gian giao trước khi khách thanh toán hoặc nhận COD."
    }
  ];

  return (
    <section className="bg-[#fffaf0] py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="An tâm mua cho con"
          title="Đồ chơi nhìn xịn, cầm chắc tay, quy trình mua rõ ràng"
          text="Landing page được tối ưu để phụ huynh có đủ thông tin trước khi ra quyết định: ảnh thật, video thật, đánh giá shop, chính sách và phương thức thanh toán minh bạch."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <item.icon
                aria-hidden="true"
                className="size-8 text-steel-green"
              />
              <h3 className="mt-4 text-lg font-black text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PolicySection() {
  return (
    <section id="chinh-sach" className="bg-white py-12 md:py-16">
      <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-signal-red">
            Chính sách bán hàng
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-5xl">
            Bảo hành rõ, tư vấn nhanh, đặt hàng gọn
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Nội dung chính sách được trình bày ngắn gọn để khách hàng mobile
            đọc nhanh và bấm liên hệ ngay khi cần xác nhận mẫu còn hàng.
          </p>
        </div>
        <div className="grid gap-3">
          {policies.map((policy) => (
            <div
              key={policy}
              className="flex gap-3 rounded-[8px] border border-slate-200 bg-[#fffaf0] p-4"
            >
              <BadgeCheck
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-steel-green"
              />
              <p className="text-sm font-semibold leading-6 text-slate-700">
                {policy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-[#fff2c7] py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Câu hỏi thường gặp"
          text="Trả lời nhanh những điểm khách hàng thường hỏi trước khi đặt xe công trình cho bé."
        />
        <div className="mt-8 grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[8px] border border-black/10 bg-white p-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-ink">
                {faq.question}
                <ChevronRight
                  aria-hidden="true"
                  className="size-5 shrink-0 transition group-open:rotate-90"
                />
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-steel-green">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function FeatureLine({
  icon: Icon,
  text
}: {
  icon: typeof Clock3;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-steel-green">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <span>{text}</span>
    </div>
  );
}
