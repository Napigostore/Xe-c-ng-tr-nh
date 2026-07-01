import Image from "next/image";
import {
  BadgeCheck,
  ChevronRight,
  Clock3,
  Flame,
  Gift,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Wrench
} from "lucide-react";
import { ConversionWidgets } from "./components/ConversionWidgets";
import { OrderCheckout } from "./components/OrderCheckout";
import {
  PremiumActivityStrip,
  StockTodayCard
} from "./components/PremiumActivity";
import {
  salesConfig,
  hasPhoneContact,
  primaryChatLabel,
  primaryChatUrl
} from "./config/salesConfig";
import { company } from "./config/company";
import { shipping } from "./config/shipping";
import { banner } from "./config/banner";
import { products } from "./config/products";
import { benefits } from "./config/benefits";
import { policies } from "./config/policies";
import { reviews } from "./config/reviews";
import { faqs } from "./config/faqs";

const shopUrl = salesConfig.shopUrl;
const phoneDisplay = salesConfig.phoneDisplay;
const phoneHref = salesConfig.phoneHref;
const zaloUrl = salesConfig.zaloUrl;
const comboProducts = products.slice(0, 2);
const benefitIcons = [ShieldCheck, Wrench, Truck, Gift];

const productSchema = products.map((product) => {
  const reviewCount = product.reviews.includes("đánh giá")
    ? product.reviews.replace(/\D/g, "")
    : "";

  return {
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
    ...(reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount
          }
        }
      : {})
  };
});

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
      name: company.name,
      url: shopUrl,
      sameAs: [shopUrl, salesConfig.facebookUrl, salesConfig.zaloUrl].filter(Boolean)
    },
    {
      "@type": "WebPage",
      name: banner.heroTitle,
      description:
        "Landing page bán xe đồ chơi công trình điều khiển từ xa, tập trung tư vấn, đặt hàng và thanh toán qua shop Shopee chính thức."
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
      <ComboSection />
      <ProductSection />
      <OrderCheckout
        phoneDisplay={phoneDisplay}
        phoneHref={phoneHref}
        hasPhoneContact={hasPhoneContact}
        primaryChatLabel={primaryChatLabel}
        primaryChatUrl={primaryChatUrl}
        shopUrl={shopUrl}
        zaloUrl={zaloUrl}
      />
      <VideoSection />
      <BenefitSection />
      <ReviewSection />
      <TrustSection />
      <PolicySection />
      <FaqSection />
      <ConversionWidgets
        hasPhoneContact={hasPhoneContact}
        phoneHref={phoneHref}
        primaryChatLabel={primaryChatLabel}
        primaryChatUrl={primaryChatUrl}
        shopUrl={shopUrl}
      />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#fff2c7] pb-8 pt-4 md:pb-14 md:pt-5">
      <div className="section-shell">
        <header className="flex items-center justify-between gap-4 py-2">
          <a href="#top" className="flex items-center gap-2" aria-label={company.name}>
            <span className="grid size-10 place-items-center rounded-full bg-white text-sm font-black text-signal-red shadow-sm">
              N
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black">{company.name}</span>
              <span className="block text-xs font-semibold text-slate-600">
                {company.slogan}
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
              {banner.heroBadge}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.03] text-ink md:text-6xl">
              {banner.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 md:text-lg">
              {banner.heroSubtitle}
            </p>

            <div className="mt-4 inline-flex rounded-[8px] bg-white px-4 py-3 text-sm font-black text-steel-green shadow-sm">
              {shipping.express} • {shipping.nationwide}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryChatUrl}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-zalo-blue px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]"
              >
                <MessageCircle aria-hidden="true" className="size-5" />
                {primaryChatLabel} nhận ưu đãi
              </a>
              {hasPhoneContact ? (
                <a
                  href={phoneHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-signal-red px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]"
                >
                  <Phone aria-hidden="true" className="size-5" />
                  Gọi ngay {phoneDisplay}
                </a>
              ) : (
                <a
                  href={shopUrl}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-signal-red px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]"
                >
                  <ShoppingBag aria-hidden="true" className="size-5" />
                  Mua an toàn trên Shopee
                </a>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[
                [String(products.length), "mẫu chủ lực"],
                ["7 ngày", "bảo hành"],
                ["30 phút", "hỏa tốc nội thành"]
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
            <PremiumActivityStrip />
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
              {banner.promoTitle}, {banner.promoSubtitle}
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

function ComboSection() {
  return (
    <section id="combo" className="bg-ink py-12 text-white md:py-16">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-signal-red px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
              <Flame aria-hidden="true" className="size-4" />
              Combo tiết kiệm
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Mua theo bộ để bé có đủ xe công trường và tiết kiệm hơn mua lẻ
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
              Chọn nhanh dòng xe phù hợp với ngân sách, sau đó nhắn Zalo để shop
              xác nhận mẫu còn hàng, ảnh thực tế và phí giao trước khi chốt đơn.
            </p>
          </div>

          <StockTodayCard />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {comboProducts.map((product, index) => (
            <article
              key={product.name}
              className="grid gap-5 rounded-[8px] border border-white/12 bg-white p-4 text-ink shadow-soft md:grid-cols-[190px_1fr] md:p-5"
            >
              <div className="relative aspect-square overflow-hidden rounded-[8px] bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 190px, 45vw"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-safety-yellow px-3 py-1 text-xs font-black text-ink">
                    Tiết kiệm 20%
                  </span>
                  <span className="rounded-full bg-[#eef8f5] px-3 py-1 text-xs font-black text-steel-green">
                    {product.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-black">
                  {index === 0 ? "Combo XUEZHISHAN" : "Combo YIGONG"}
                </h3>
                <p className="mt-2 text-4xl font-black text-signal-red">
                  {product.price}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.model}
                </p>
                <div className="mt-4 grid gap-2">
                  {product.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-bold">
                      <BadgeCheck
                        aria-hidden="true"
                        className="size-4 shrink-0 text-steel-green"
                      />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href="#dat-hang"
                    className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-signal-red px-4 py-3 text-sm font-black text-white"
                  >
                    Mua ngay
                    <ChevronRight aria-hidden="true" className="size-4" />
                  </a>
                  <a
                    href={primaryChatUrl}
                    className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 py-3 text-sm font-black text-ink"
                  >
                    <MessageCircle aria-hidden="true" className="size-4" />
                    Hỏi combo này
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 rounded-[8px] border border-white/12 bg-white/8 p-4 md:grid-cols-3">
          {[
            ["Mua lẻ", "Tự chọn từng xe, phù hợp khi bé mới thử chơi một mẫu."],
            ["Mua combo", "Tiết kiệm hơn, có đủ xe để chơi nhập vai công trường."],
            ["Chốt qua Zalo", "Shop xác nhận ảnh/video, phí giao và bảo hành trước khi thanh toán."]
          ].map(([title, text]) => (
            <div key={title} className="flex gap-3">
              <TrendingUp
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-safety-yellow"
              />
              <p>
                <span className="block text-sm font-black">{title}</span>
                <span className="mt-1 block text-sm leading-6 text-white/70">
                  {text}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="san-pham" className="bg-white py-12 md:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Danh mục sản phẩm"
          title={`${products.length} mẫu đang bán trên shop ${company.name}`}
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
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? ShieldCheck;
            return (
              <div
                key={benefit.title}
                className="rounded-[8px] border border-slate-200 bg-[#fffaf0] p-5"
              >
                <Icon aria-hidden="true" className="size-8 text-steel-green" />
                <h3 className="mt-4 text-lg font-black text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {benefit.text}
                </p>
              </div>
            );
          })}
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
      text: shipping.note
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
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
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
