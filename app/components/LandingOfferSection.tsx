import { CheckCircle2, Gift, MessageCircle } from "lucide-react";
import { buyerGuide, comboOffers, comparisonItems } from "../config/landingOffers";
import { primaryChatUrl } from "../config/salesConfig";

export function LandingOfferSection() {
  return (
    <section id="chon-xe" className="bg-[#fff2c7] py-12 md:py-16">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-signal-red">
            Chon xe nhanh
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-5xl">
            Khach chi can 30 giay de chon dung mau xe
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Phan nay giup phu huynh so sanh nhanh YIGONG va XUEZHISHAN, dong thoi goi y combo de be choi cong truong day du hon.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {comparisonItems.map((item) => (
            <article key={item.name} className="rounded-[8px] border border-black/10 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.bestFor}</p>
                </div>
                <span className="rounded-full bg-safety-yellow px-3 py-1 text-xs font-black text-ink">
                  {item.price}
                </span>
              </div>
              <div className="mt-5 grid gap-2">
                {item.strengths.map((strength) => (
                  <p key={strength} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 aria-hidden="true" className="size-4 text-steel-green" />
                    {strength}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[8px] bg-ink p-5 text-white shadow-lift">
            <h3 className="text-2xl font-black">Goi y chon xe</h3>
            <div className="mt-4 grid gap-3">
              {buyerGuide.map((item) => (
                <p key={item} className="flex gap-2 text-sm font-bold leading-6 text-white/85">
                  <span className="text-safety-yellow">✓</span>
                  {item}
                </p>
              ))}
            </div>
            <a href={primaryChatUrl} className="focus-ring mt-5 inline-flex items-center gap-2 rounded-[8px] bg-zalo-blue px-4 py-3 text-sm font-black text-white">
              <MessageCircle aria-hidden="true" className="size-4" />
              Nhan Zalo de shop goi y mau
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {comboOffers.map((combo) => (
              <article key={combo.title} className="relative rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
                {combo.badge ? (
                  <span className="absolute right-3 top-3 rounded-full bg-signal-red px-3 py-1 text-xs font-black text-white">
                    {combo.badge}
                  </span>
                ) : null}
                <Gift aria-hidden="true" className="size-8 text-steel-green" />
                <h3 className="mt-4 text-xl font-black text-ink">{combo.title}</h3>
                <p className="mt-2 text-sm font-bold text-slate-700">{combo.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{combo.highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
