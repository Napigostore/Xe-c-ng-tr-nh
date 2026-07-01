import Image from "next/image";
import {
  BadgeCheck,
  ChevronRight,
  Flame,
  Gift,
  MessageCircle,
  Phone,
  ShoppingBag,
  TrendingUp
} from "lucide-react";
import {
  PremiumActivityStrip,
  StockTodayCard
} from "../PremiumActivity";
import { banner } from "../../config/banner";
import { company } from "../../config/company";
import { products } from "../../config/products";
import { salesConfig, hasPhoneContact, primaryChatLabel, primaryChatUrl } from "../../config/salesConfig";
import { shipping } from "../../config/shipping";

const shopUrl = salesConfig.shopUrl;
const phoneDisplay = salesConfig.phoneDisplay;
const phoneHref = salesConfig.phoneHref;
const comboProducts = products.slice(0, 2);

export function Hero() {
  return (
    <section className="relative bg-[#fff2c7] pb-8 pt-4 md:pb-14 md:pt-5">
      <div className="section-shell">
        <header className="flex items-center justify-between gap-4 py-2">
          <a href="#top" className="flex items-center gap-2" aria-label={company.name}>
            <span className="grid size-10 place-items-center rounded-full bg-white text-sm font-black text-signal-red shadow-sm">N</span>
            <span className="leading-tight">
              <span className="block text-sm font-black">{company.name}</span>
              <span className="block text-xs font-semibold text-slate-600">{company.slogan}</span>
            </span>
          </a>
          <a href={shopUrl} className="focus-ring hidden items-center gap-2 rounded-[8px] bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm md:inline-flex">
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
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.03] text-ink md:text-6xl">{banner.heroTitle}</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 md:text-lg">{banner.heroSubtitle}</p>

            <div className="mt-4 inline-flex rounded-[8px] bg-white px-4 py-3 text-sm font-black text-steel-green shadow-sm">
              {shipping.express} • {shipping.nationwide}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={primaryChatUrl} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-zalo-blue px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]">
                <MessageCircle aria-hidden="true" className="size-5" />
                {primaryChatLabel} nhận ưu đãi
              </a>
              {hasPhoneContact ? (
                <a href={phoneHref} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-signal-red px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]">
                  <Phone aria-hidden="true" className="size-5" />
                  Gọi ngay {phoneDisplay}
                </a>
              ) : (
                <a href={shopUrl} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-signal-red px-5 py-3 text-base font-black text-white shadow-lift transition hover:translate-y-[-1px]">
                  <ShoppingBag aria-hidden="true" className="size-5" />
                  Mua an toàn trên Shopee
                </a>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[[String(products.length), "mẫu chủ lực"], ["7 ngày", "bảo hành"], ["30 phút", "hỏa tốc nội thành"]].map(([value, label]) => (
                <div key={label} className="rounded-[8px] border border-black/10 bg-white/80 px-3 py-3 shadow-sm">
                  <strong className="block text-xl font-black text-ink">{value}</strong>
                  <span className="text-xs font-semibold text-slate-600">{label}</span>
                </div>
              ))}
            </div>
            <PremiumActivityStrip />
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-5 hidden rounded-[8px] bg-steel-green px-4 py-3 text-sm font-black text-white shadow-lift md:block">Có video test xe thật</div>
            <Image src="/assets/products/xuc-yigong.webp" alt="Máy xúc điều khiển từ xa YIGONG 11 kênh" width={900} height={900} priority className="w-full rounded-[8px] border border-black/10 bg-white object-cover shadow-soft" sizes="(min-width: 768px) 50vw, 100vw" />
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
          <span className="grid size-11 shrink-0 place-items-center rounded-[8px] bg-safety-yellow text-ink"><Gift aria-hidden="true" className="size-6" /></span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-signal-red">Banner khuyến mãi hôm nay</p>
            <p className="mt-1 text-lg font-black leading-snug text-ink md:text-2xl">{banner.promoTitle}, {banner.promoSubtitle}</p>
          </div>
        </div>
        <a href="#dat-hang" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-ink px-4 py-3 text-sm font-black text-white">
          Đặt giữ ưu đãi
          <ChevronRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </div>
  );
}

export function ComboSection() {
  return (
    <section id="combo" className="bg-ink py-12 text-white md:py-16">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-signal-red px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
              <Flame aria-hidden="true" className="size-4" />
              Combo tiết kiệm
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">Mua theo bộ để bé có đủ xe công trường và tiết kiệm hơn mua lẻ</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">Chọn nhanh dòng xe phù hợp với ngân sách, sau đó nhắn Zalo để shop xác nhận mẫu còn hàng, ảnh thực tế và phí giao trước khi chốt đơn.</p>
          </div>
          <StockTodayCard />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {comboProducts.map((product, index) => (
            <article key={product.name} className="grid gap-5 rounded-[8px] border border-white/12 bg-white p-4 text-ink shadow-soft md:grid-cols-[190px_1fr] md:p-5">
              <div className="relative aspect-square overflow-hidden rounded-[8px] bg-slate-100">
                <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 190px, 45vw" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-safety-yellow px-3 py-1 text-xs font-black text-ink">Tiết kiệm 20%</span>
                  <span className="rounded-full bg-[#eef8f5] px-3 py-1 text-xs font-black text-steel-green">{product.badge}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black">{index === 0 ? "Combo XUEZHISHAN" : "Combo YIGONG"}</h3>
                <p className="mt-2 text-4xl font-black text-signal-red">{product.price}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.model}</p>
                <div className="mt-4 grid gap-2">
                  {product.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-bold">
                      <BadgeCheck aria-hidden="true" className="size-4 shrink-0 text-steel-green" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a href="#dat-hang" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-signal-red px-4 py-3 text-sm font-black text-white">Mua ngay<ChevronRight aria-hidden="true" className="size-4" /></a>
                  <a href={primaryChatUrl} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 py-3 text-sm font-black text-ink"><MessageCircle aria-hidden="true" className="size-4" />Hỏi combo này</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 rounded-[8px] border border-white/12 bg-white/8 p-4 md:grid-cols-3">
          {[["Mua lẻ", "Tự chọn từng xe, phù hợp khi bé mới thử chơi một mẫu."], ["Mua combo", "Tiết kiệm hơn, có đủ xe để chơi nhập vai công trường."], ["Chốt qua Zalo", "Shop xác nhận ảnh/video, phí giao và bảo hành trước khi thanh toán."]].map(([title, text]) => (
            <div key={title} className="flex gap-3">
              <TrendingUp aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-safety-yellow" />
              <p><span className="block text-sm font-black">{title}</span><span className="mt-1 block text-sm leading-6 text-white/70">{text}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
