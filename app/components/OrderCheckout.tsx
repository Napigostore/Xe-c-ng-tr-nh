"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Banknote,
  CheckCircle2,
  Copy,
  CreditCard,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Truck
} from "lucide-react";
import { useMemo, useState } from "react";

type OrderCheckoutProps = {
  phoneHref: string;
  phoneDisplay: string;
  hasPhoneContact: boolean;
  primaryChatLabel: string;
  primaryChatUrl: string;
  shopUrl: string;
  zaloUrl: string;
};

const products = [
  {
    id: "xuc-yigong",
    displayName: "Máy xúc YIGONG 11 kênh",
    price: 359000,
    image: "/assets/products/xuc-yigong.webp",
    href: "https://shopee.vn/napigo_eco_home?keyword=m%C3%A1y%20x%C3%BAc%20yigong"
  },
  {
    id: "ben-xuezhishan",
    displayName: "Xe tải XUEZHISHAN 6 kênh",
    price: 569000,
    image: "/assets/products/ben-xuezhishan.webp",
    href: "https://shopee.vn/napigo_eco_home?keyword=xuezhishan%20xe%20t%E1%BA%A3i"
  },
  {
    id: "ui-yigong",
    displayName: "Xe ủi YIGONG 9 kênh",
    price: 369000,
    image: "/assets/products/ui-yigong.webp",
    href: "https://shopee.vn/napigo_eco_home?keyword=xe%20%E1%BB%A7i%20yigong"
  },
  {
    id: "ben-yigong",
    displayName: "Xe tải YIGONG 9 kênh",
    price: 309000,
    image: "/assets/products/ben-yigong.webp",
    href: "https://shopee.vn/napigo_eco_home?keyword=yigong%20xe%20t%E1%BA%A3i"
  },
  {
    id: "xuc-xuezhishan",
    displayName: "Máy xúc XUEZHISHAN 11 kênh",
    price: 789000,
    image: "/assets/products/xuc-xuezhishan.webp",
    href: "https://shopee.vn/napigo_eco_home?keyword=m%C3%A1y%20x%C3%BAc%20xuezhishan"
  }
];

const paymentMethods = [
  {
    id: "shopee",
    title: "Thanh toán Shopee",
    description:
      "Vào shop chính thức để dùng ví, thẻ, ShopeePay hoặc ưu đãi sàn nếu đang có.",
    icon: CreditCard
  },
  {
    id: "cod",
    title: "Nhận hàng trả tiền",
    description:
      "Shop xác nhận tồn kho, đóng gói và gửi COD theo khu vực hỗ trợ.",
    icon: Truck
  },
  {
    id: "transfer",
    title: "Chuyển khoản sau xác nhận",
    description:
      "Chỉ chuyển khoản sau khi shop xác nhận mẫu, giá cuối và phí vận chuyển.",
    icon: Banknote
  }
];

const currency = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0
});

export function OrderCheckout({
  phoneHref,
  phoneDisplay,
  hasPhoneContact,
  primaryChatLabel,
  primaryChatUrl,
  shopUrl,
  zaloUrl
}: OrderCheckoutProps) {
  const [productId, setProductId] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [location, setLocation] = useState("");
  const [childAge, setChildAge] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
  const [copied, setCopied] = useState(false);

  const selectedProduct =
    products.find((product) => product.id === productId) || products[0];
  const subtotal = selectedProduct.price * quantity;
  const discount = quantity >= 2 ? Math.round(subtotal * 0.08) : 0;
  const total = subtotal - discount;

  const zaloMessage = useMemo(() => {
    const paymentLabel =
      paymentMethods.find((method) => method.id === paymentMethod)?.title ||
      "Chưa chọn";

    return [
      "Chào Napigo, tôi muốn đặt xe đồ chơi công trình:",
      `- Mẫu: ${selectedProduct.displayName}`,
      `- Số lượng: ${quantity}`,
      `- Tạm tính: ${currency.format(total)}`,
      `- Phương thức: ${paymentLabel}`,
      customerName ? `- Tên: ${customerName}` : "",
      customerPhone ? `- SĐT: ${customerPhone}` : "",
      location ? `- Khu vực giao: ${location}` : "",
      childAge ? `- Tuổi của bé: ${childAge}` : "",
      note ? `- Ghi chú: ${note}` : "",
      "Shop kiểm tra tồn kho và xác nhận giúp tôi nhé."
    ]
      .filter(Boolean)
      .join("\n");
  }, [
    childAge,
    customerName,
    customerPhone,
    location,
    note,
    paymentMethod,
    quantity,
    selectedProduct.displayName,
    total
  ]);

  const chatOrderUrl = zaloUrl
    ? `${zaloUrl}?text=${encodeURIComponent(zaloMessage)}`
    : primaryChatUrl;

  const copyOrder = async () => {
    await navigator.clipboard.writeText(zaloMessage);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="dat-hang" className="bg-white py-12 md:py-16">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[8px] bg-ink p-6 text-white shadow-soft md:p-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-safety-yellow">
              <PackageCheck aria-hidden="true" className="size-4" />
              Tạo đơn trong 30 giây
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Chọn xe, nhận giá tạm tính, chốt đơn qua chat hoặc Shopee
            </h2>
            <p className="mt-4 text-base leading-7 text-white/78">
              Form này không thu tiền trực tiếp trên website. Khách có thể
              thanh toán thật qua Shopee chính thức, hoặc gửi thông tin để shop xác
              nhận tồn kho, phí vận chuyển và bảo hành trước khi thanh toán.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Không nhập thẻ ngân hàng trên landing page",
                "Thanh toán qua Shopee có hệ thống bảo vệ người mua",
                "COD hoặc chuyển khoản chỉ sau khi shop xác nhận"
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-safety-yellow"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] border border-slate-200 bg-[#fffaf0] p-4 shadow-lift md:p-6">
            <div className="grid gap-4 md:grid-cols-[120px_1fr]">
              <div className="relative aspect-square overflow-hidden rounded-[8px] bg-white">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.displayName}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div>
                <label
                  htmlFor="product"
                  className="text-sm font-black text-slate-700"
                >
                  Chọn mẫu xe
                </label>
                <select
                  id="product"
                  value={productId}
                  onChange={(event) => setProductId(event.target.value)}
                  className="mt-2 w-full rounded-[8px] border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-ink"
                >
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.displayName} - {currency.format(product.price)}
                    </option>
                  ))}
                </select>

                <div className="mt-3 grid grid-cols-[1fr_118px] gap-3">
                  <label className="block">
                    <span className="text-sm font-black text-slate-700">
                      Số lượng
                    </span>
                    <input
                      min={1}
                      max={9}
                      type="number"
                      value={quantity}
                      onChange={(event) =>
                        setQuantity(
                          Math.max(
                            1,
                            Math.min(9, Number(event.target.value) || 1)
                          )
                        )
                      }
                      className="mt-2 w-full rounded-[8px] border border-slate-300 bg-white px-3 py-3 text-sm font-bold text-ink"
                    />
                  </label>
                  <div className="rounded-[8px] bg-white p-3">
                    <p className="text-xs font-bold text-slate-500">Tạm tính</p>
                    <p className="mt-1 text-lg font-black text-signal-red">
                      {currency.format(total)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[8px] bg-white px-4 py-3 text-sm font-bold text-slate-700">
              {discount > 0
                ? `Đã áp dụng ưu đãi combo: -${currency.format(discount)}`
                : "Mua từ 2 xe được giảm thêm 8% theo chương trình combo."}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <TextInput
                label="Tên phụ huynh"
                value={customerName}
                onChange={setCustomerName}
                placeholder="Ví dụ: Chị Hương"
              />
              <TextInput
                label="Số điện thoại"
                value={customerPhone}
                onChange={setCustomerPhone}
                placeholder="Số để shop gọi xác nhận"
                inputMode="tel"
              />
              <TextInput
                label="Khu vực giao"
                value={location}
                onChange={setLocation}
                placeholder="Quận/huyện, tỉnh/thành"
              />
              <TextInput
                label="Tuổi của bé"
                value={childAge}
                onChange={setChildAge}
                placeholder="Ví dụ: 4 tuổi"
              />
            </div>

            <label
              htmlFor="note"
              className="mt-4 block text-sm font-black text-slate-700"
            >
              Ghi chú thêm
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Màu xe, cần giao gấp, muốn xem thêm video..."
              rows={3}
              className="mt-2 w-full resize-none rounded-[8px] border border-slate-300 bg-white px-3 py-3 text-sm text-ink"
            />

            <fieldset className="mt-5">
              <legend className="text-sm font-black text-slate-700">
                Chọn cách thanh toán
              </legend>
              <div className="mt-3 grid gap-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex cursor-pointer gap-3 rounded-[8px] border p-3 ${
                      paymentMethod === method.id
                        ? "border-zalo-blue bg-white"
                        : "border-slate-200 bg-white/70"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="mt-1"
                    />
                    <method.icon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-steel-green"
                    />
                    <span>
                      <span className="block text-sm font-black text-ink">
                        {method.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">
                        {method.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5 rounded-[8px] border border-dashed border-slate-300 bg-white p-3">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Nội dung đơn đã soạn
              </p>
              <pre className="mt-2 max-h-36 overflow-auto whitespace-pre-wrap text-xs leading-5 text-slate-700">
                {zaloMessage}
              </pre>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <button
                type="button"
                onClick={copyOrder}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-slate-300 bg-white px-4 py-3 text-sm font-black text-ink"
              >
                {copied ? (
                  <CheckCircle2 aria-hidden="true" className="size-5" />
                ) : (
                  <Copy aria-hidden="true" className="size-5" />
                )}
                {copied ? "Đã copy" : "Copy đơn"}
              </button>
              <a
                href={chatOrderUrl}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-zalo-blue px-4 py-3 text-sm font-black text-white"
              >
                <MessageCircle aria-hidden="true" className="size-5" />
                {zaloUrl ? "Gửi Zalo" : primaryChatLabel}
              </a>
              <a
                href={selectedProduct.href || shopUrl}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-safety-yellow px-4 py-3 text-sm font-black text-ink"
              >
                <ShoppingBag aria-hidden="true" className="size-5" />
                Thanh toán Shopee
              </a>
              {hasPhoneContact ? (
                <a
                  href={phoneHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-ink px-4 py-3 text-sm font-black text-white"
                >
                  <Phone aria-hidden="true" className="size-5" />
                  {phoneDisplay}
                </a>
              ) : (
                <a
                  href={shopUrl}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-ink px-4 py-3 text-sm font-black text-white"
                >
                  <ShoppingBag aria-hidden="true" className="size-5" />
                  Shop chính thức
                </a>
              )}
            </div>

            <p className="mt-4 flex gap-2 text-xs font-semibold leading-5 text-slate-600">
              <BadgeCheck
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-steel-green"
              />
              Giá trên website là tạm tính theo giá đang hiển thị. Giá cuối,
              phí vận chuyển và quà tặng được shop xác nhận trước khi thanh
              toán.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  inputMode
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  inputMode?: "text" | "tel";
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-slate-700">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className="mt-2 w-full rounded-[8px] border border-slate-300 bg-white px-3 py-3 text-sm text-ink"
      />
    </label>
  );
}
