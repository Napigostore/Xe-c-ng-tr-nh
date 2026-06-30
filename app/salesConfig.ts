export const shopUrl = "https://shopee.vn/napigo_eco_home";
export const shopChatUrl =
  "https://shopee.vn/webchat/conversations/new?shop_id=784893329";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dochoinhapkhau.tienso.vn";

// Fill these when the shop has an official public phone or Zalo number.
export const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "";
export const phoneHref = process.env.NEXT_PUBLIC_PHONE_HREF || "";
export const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL || "";

export const hasPhoneContact = phoneHref.startsWith("tel:");
export const hasZaloContact = zaloUrl.startsWith("https://zalo.me/");

export const primaryChatUrl = hasZaloContact ? zaloUrl : shopChatUrl;
export const primaryChatLabel = hasZaloContact ? "Chat Zalo" : "Chat Shopee";
