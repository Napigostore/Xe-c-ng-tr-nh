"use client";

import {
  Eye,
  MessageCircle,
  PackageOpen,
  ShoppingBag
} from "lucide-react";
import { useEffect, useState } from "react";

type Snapshot = {
  viewers: number;
  chats: number;
  consulting: number;
  stock: number;
};

const defaultSnapshot: Snapshot = {
  viewers: 8,
  chats: 3,
  consulting: 2,
  stock: 15
};

function buildSnapshot(date = new Date()): Snapshot {
  const bucket =
    date.getDate() * 19 + date.getHours() * 7 + Math.floor(date.getMinutes() / 10);

  return {
    viewers: 6 + (bucket % 5),
    chats: 2 + (bucket % 4),
    consulting: 1 + (bucket % 3),
    stock: 12 + (bucket % 7)
  };
}

export function PremiumActivityStrip() {
  const [snapshot, setSnapshot] = useState(defaultSnapshot);

  useEffect(() => {
    const update = () => setSnapshot(buildSnapshot());
    update();
    const timer = window.setInterval(update, 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  const signals = [
    {
      icon: Eye,
      value: snapshot.viewers,
      label: "người đang xem",
      note: "khung giờ hiện tại"
    },
    {
      icon: MessageCircle,
      value: snapshot.chats,
      label: "khách vừa hỏi Zalo",
      note: "ưu tiên mẫu còn hàng"
    },
    {
      icon: ShoppingBag,
      value: snapshot.consulting,
      label: "đơn đang tư vấn",
      note: "shop xác nhận trước khi chốt"
    }
  ];

  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-3">
      {signals.map((signal) => {
        const Icon = signal.icon;
        return (
          <div
            key={signal.label}
            className="flex items-center gap-3 rounded-[8px] border border-black/10 bg-white/90 px-3 py-3 shadow-sm"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-[#eef8f5] text-steel-green">
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-black text-ink">
                Có {signal.value} {signal.label}
              </span>
              <span className="block text-xs font-semibold text-slate-500">
                {signal.note}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function StockTodayCard() {
  const [snapshot, setSnapshot] = useState(defaultSnapshot);

  useEffect(() => {
    const update = () => setSnapshot(buildSnapshot());
    update();
    const timer = window.setInterval(update, 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-[8px] border border-white/12 bg-white/10 p-4 shadow-lift">
      <p className="flex items-center gap-2 text-sm font-black text-safety-yellow">
        <PackageOpen aria-hidden="true" className="size-5" />
        Kho hàng hôm nay
      </p>
      <p className="mt-2 text-4xl font-black">{snapshot.stock}</p>
      <p className="text-sm font-bold text-white/82">combo còn trong hôm nay</p>
      <p className="mt-2 max-w-xs text-xs leading-5 text-white/60">
        Số lượng được shop xác nhận lại qua Zalo hoặc điện thoại trước khi khách
        thanh toán.
      </p>
    </div>
  );
}
