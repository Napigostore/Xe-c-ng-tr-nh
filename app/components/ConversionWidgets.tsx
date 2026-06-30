"use client";

import { Home, MessageCircle, Phone, ShoppingCart, Store, X } from "lucide-react";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

type ConversionWidgetsProps = {
  hasPhoneContact: boolean;
  phoneHref: string;
  primaryChatLabel: string;
  primaryChatUrl: string;
  shopUrl: string;
};

const storageKey = "toy-construction-offer-dismissed-at";
const oneDay = 24 * 60 * 60 * 1000;

export function ConversionWidgets({
  hasPhoneContact,
  phoneHref,
  primaryChatLabel,
  primaryChatUrl,
  shopUrl
}: ConversionWidgetsProps) {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const dismissedAt = Number(localStorage.getItem(storageKey) || 0);
    const shouldShow = Date.now() - dismissedAt > oneDay;
    if (!shouldShow) return;

    const timer = window.setTimeout(() => setShowOffer(true), 20000);
    return () => window.clearTimeout(timer);
  }, []);

  const closeOffer = () => {
    localStorage.setItem(storageKey, String(Date.now()));
    setShowOffer(false);
  };

  return (
    <>
      <a
        href={primaryChatUrl}
        aria-label={`${primaryChatLabel} để nhận tư vấn`}
        className="focus-ring fixed bottom-[92px] right-4 z-40 grid size-14 place-items-center rounded-full bg-zalo-blue text-white shadow-lift transition hover:translate-y-[-2px] md:bottom-6 md:right-6"
      >
        <MessageCircle aria-hidden="true" className="size-7" />
      </a>

      <nav
        aria-label="Hành động nhanh"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/96 px-2 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2 shadow-[0_-10px_28px_rgba(22,32,42,0.12)] backdrop-blur md:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          <MobileAction href="#top" label="Trang chủ" icon={<Home />} />
          <MobileAction
            href={primaryChatUrl}
            label={primaryChatLabel.replace("Chat ", "")}
            icon={<MessageCircle />}
          />
          <MobileAction
            href={hasPhoneContact ? phoneHref : shopUrl}
            label={hasPhoneContact ? "Gọi" : "Shop"}
            icon={hasPhoneContact ? <Phone /> : <Store />}
          />
          <MobileAction
            href="#dat-hang"
            label="Đặt ngay"
            icon={<ShoppingCart />}
            emphasis
          />
        </div>
      </nav>

      {showOffer ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-title"
          className="fixed inset-0 z-[60] grid place-items-end bg-black/35 p-4 md:place-items-center"
        >
          <div className="w-full max-w-md rounded-[8px] bg-white p-5 shadow-soft">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal-red">
                  Ưu đãi hôm nay
                </p>
                <h2 id="offer-title" className="mt-1 text-2xl font-black">
                  Giảm 15% cho combo công trường
                </h2>
              </div>
              <button
                type="button"
                onClick={closeOffer}
                aria-label="Đóng ưu đãi"
                className="focus-ring grid size-9 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Tặng thêm 6 biển báo mini cho đơn đặt qua chat trong hôm nay. Số
              lượng quà tặng có hạn theo từng đợt hàng.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={primaryChatUrl}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-[8px] bg-zalo-blue px-4 py-3 text-sm font-bold text-white"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                Nhận ưu đãi
              </a>
              <a
                href={hasPhoneContact ? phoneHref : shopUrl}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-[8px] border border-slate-200 px-4 py-3 text-sm font-bold text-slate-900"
              >
                {hasPhoneContact ? (
                  <Phone aria-hidden="true" className="size-4" />
                ) : (
                  <Store aria-hidden="true" className="size-4" />
                )}
                {hasPhoneContact ? "Gọi tư vấn" : "Mở Shopee"}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MobileAction({
  href,
  label,
  icon,
  emphasis = false
}: {
  href: string;
  label: string;
  icon: ReactElement;
  emphasis?: boolean;
}) {
  return (
    <a
      href={href}
      className={`focus-ring flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-[8px] px-1 text-[11px] font-bold ${
        emphasis
          ? "bg-safety-yellow text-ink"
          : "bg-slate-50 text-slate-700"
      }`}
    >
      <span className="grid size-5 place-items-center">
        {icon ? (
          <span className="[&>svg]:size-5" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </span>
      <span className="leading-none">{label}</span>
    </a>
  );
}
