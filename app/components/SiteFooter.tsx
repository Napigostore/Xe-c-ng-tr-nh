import { Facebook, MessageCircle, Phone, ShoppingBag, Truck } from "lucide-react";
import { company } from "../config/company";
import { policies } from "../config/policies";
import { salesConfig, socialLinks } from "../config/salesConfig";
import { shipping } from "../config/shipping";

const socialIcons: Record<string, string> = {
  Shopee: "🛒",
  Facebook: "📘",
  Zalo: "💬",
  TikTok: "🎵",
  YouTube: "▶️",
};

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-24 pt-12 text-white md:pb-12 md:pt-16">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-safety-yellow text-base font-black text-ink">
                N
              </span>
              <div>
                <p className="text-xl font-black">{company.name}</p>
                <p className="text-sm font-semibold text-white/70">
                  {company.slogan}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
              Shop đồ chơi công trình cho bé, tư vấn nhanh qua Zalo/Shopee,
              hỗ trợ gửi video thật, đóng gói kỹ và giao hàng rõ thời gian.
            </p>
            <div className="mt-5 grid gap-2 text-sm font-bold text-white/85">
              <p className="flex items-center gap-2">
                <Truck aria-hidden="true" className="size-4 text-safety-yellow" />
                {shipping.express} • {shipping.nationwide}
              </p>
              <p className="flex items-center gap-2">
                <Phone aria-hidden="true" className="size-4 text-safety-yellow" />
                Hotline: {salesConfig.phoneDisplay}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-safety-yellow">
              Liên hệ nhanh
            </h2>
            <div className="mt-4 grid gap-3">
              <a
                href={salesConfig.zaloUrl}
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] bg-zalo-blue px-4 py-3 text-sm font-black text-white"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Chat Zalo
              </a>
              <a
                href={salesConfig.phoneHref}
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] bg-signal-red px-4 py-3 text-sm font-black text-white"
              >
                <Phone aria-hidden="true" className="size-4" />
                Gọi {salesConfig.phoneDisplay}
              </a>
              <a
                href={salesConfig.shopUrl}
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] bg-white px-4 py-3 text-sm font-black text-ink"
              >
                <ShoppingBag aria-hidden="true" className="size-4" />
                Mở Shopee
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-safety-yellow">
              Kênh chính thức
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  className="focus-ring rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm font-bold text-white transition hover:bg-white/14"
                >
                  <span aria-hidden="true">{socialIcons[item.label] ?? "🔗"}</span>{" "}
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-5 grid gap-2 text-sm leading-6 text-white/75">
              {policies.slice(0, 3).map((policy) => (
                <p key={policy}>• {policy}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-5 text-xs font-semibold text-white/55 md:flex md:items-center md:justify-between">
          <p>{company.copyright}</p>
          <p className="mt-2 md:mt-0">Website: {company.website}</p>
        </div>
      </div>
    </footer>
  );
}
