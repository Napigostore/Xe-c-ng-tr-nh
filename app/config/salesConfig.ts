export const salesConfig = {
  phoneDisplay: "0367 568 563",
  phoneHref: "tel:0367568563",

  zaloUrl: "https://zalo.me/0367568563",

  facebookUrl: "https://www.facebook.com/Napigo.TongKhoDoChoiNK/",

  tiktokUrl: "",

  youtubeUrl: "",

  shopUrl: "https://shopee.vn/napigo_eco_home",

  shopChatUrl:
    "https://shopee.vn/webchat/conversations/new?shop_id=784893329",

  primaryChat: "zalo",
};

export const hasPhoneContact = Boolean(salesConfig.phoneHref);

export const hasZaloContact = Boolean(salesConfig.zaloUrl);

export const primaryChatUrl =
  salesConfig.primaryChat === "zalo"
    ? salesConfig.zaloUrl
    : salesConfig.shopChatUrl;

export const primaryChatLabel =
  salesConfig.primaryChat === "zalo" ? "Chat Zalo" : "Chat Shopee";
