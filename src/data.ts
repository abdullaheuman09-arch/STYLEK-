export const WHATSAPP_NUMBER = "201000000000";

export type Product = {
  id: number; name: string; category: string; icon: string;
    price: number; oldPrice: number; rating: number;
      storeId: number; material: string; care: string;
        sizes: string[]; unavailableSizes: string[];
          colors: { name: string; hex: string }[]; stock: number; desc: string;
            deliveryFee: number; deliveryDays: string;
              addedAt: string;
                image?: string;
                  views?: number;
                  };

                  export const stores = [
                    { id: 1, name: "محل الأناقة", icon: "🏬", verified: true, rating: 4.8, area: "كفر الشيخ", about: "ملابس رجالي عصرية بأسعار مناسبة.", since: 2024 },
                      { id: 2, name: "ستايل هاوس", icon: "🏪", verified: true, rating: 4.7, area: "دسوق", about: "تيشيرتات وهوديز بطبعات مميزة.", since: 2025 }
                      ];

                      export const products: Product[] = [
                        { id: 1, name: "هودي كاجوال عصري", category: "هوديز", icon: "🧥", price: 399, oldPrice: 599, rating: 4.8, storeId: 2, material: "قطن 100%", care: "غسيل بارد، لا يُكوى على الطبعة", sizes: ["S", "M", "L", "XL"], unavailableSizes: ["S"], colors: [{ name: "أسود", hex: "#111111" }, { name: "رمادي", hex: "#888888" }], stock: 12, desc: "هودي شتوي بخامة قطن ثقيلة وطبعة أمامية.", deliveryFee: 40, deliveryDays: "2-3 أيام", addedAt: "2026-11-12" },
                          { id: 2, name: "تيشيرت قطن", category: "تيشيرتات", icon: "👕", price: 249, oldPrice: 349, rating: 4.7, storeId: 2, material: "قطن بيما", care: "غسيل بارد", sizes: ["S", "M", "L"], unavailableSizes: [], colors: [{ name: "أبيض", hex: "#ffffff" }, { name: "أسود", hex: "#111111" }], stock: 3, desc: "تيشيرت قطن مريح بطبعة تاج صغيرة.", deliveryFee: 40, deliveryDays: "2-3 أيام", addedAt: "2026-11-10" },
                            { id: 3, name: "جاكيت جينز", category: "جاكيتات", icon: "🧥", price: 699, oldPrice: 899, rating: 4.9, storeId: 1, material: "جينز", care: "غسيل مقلوب", sizes: ["M", "L", "XL"], unavailableSizes: ["XL"], colors: [{ name: "أزرق", hex: "#2f5d8a" }], stock: 20, desc: "جاكيت جينز قصة عصرية بخامة متينة.", deliveryFee: 30, deliveryDays: "يوم - 2 يوم", addedAt: "2026-11-05" },
                              { id: 4, name: "بولو شيرت", category: "قمصان", icon: "👔", price: 299, oldPrice: 399, rating: 4.8, storeId: 1, material: "قطن مخلوط", care: "كي متوسط", sizes: ["M", "L", "XL"], unavailableSizes: [], colors: [{ name: "أسود", hex: "#111111" }, { name: "أبيض", hex: "#ffffff" }], stock: 0, desc: "بولو شيرت مناسب للشغل والخروج.", deliveryFee: 30, deliveryDays: "يوم - 2 يوم", addedAt: "2026-11-01" }
                              ];

                              export const categories = [
                                { icon: "👕", name: "تيشيرتات" },
                                  { icon: "👔", name: "قمصان" },
                                    { icon: "👖", name: "بناطيل" },
                                      { icon: "🧶", name: "هوديز" },
                                        { icon: "🧥", name: "جاكيتات" },
                                          { icon: "🏃", name: "ملابس رياضية" },
                                            { icon: "👟", name: "أحذية" },
                                              { icon: "🕶️", name: "إكسسوارات" }
                                              ];

                                              export const governorates = [
                                                { name: "كفر الشيخ", available: true },
                                                  { name: "القاهرة", available: false },
                                                    { name: "الجيزة", available: false },
                                                      { name: "الإسكندرية", available: false },
                                                        { name: "الغربية", available: false },
                                                          { name: "الدقهلية", available: false },
                                                            { name: "المنوفية", available: false },
                                                              { name: "البحيرة", available: false }
                                                              ];

                                                              export const banners = [
                                                                { id: 1, title: "ستايلك .. اختيارات أجمل", subtitle: "أزياء عصرية من محلات كفر الشيخ", button: "اكتشف الآن", target: "new" },
                                                                  { id: 2, title: "عروض المحلات", subtitle: "خصومات يضيفها أصحاب المحلات", button: "شوف العروض", target: "offers" }
                                                                  ];

                                                                  // العربة وطلباتي مؤجلتان لمرحلة لاحقة (مش ملغيتين)
                                                                  export const tabs = [
                                                                    { id: "home", icon: "🏠", name: "الرئيسية" },
                                                                      { id: "categories", icon: "🗂️", name: "الأقسام" },
                                                                        { id: "favs", icon: "🤍", name: "المفضلة" },
                                                                          { id: "stores", icon: "🏪", name: "المحلات" },
                                                                            { id: "account", icon: "👤", name: "حسابي" }
                                                                            ];

                                                                            export function stockInfo(stock: number) {
                                                                              if (stock === 0) return { text: "نفد مؤقتًا", cls: "stock-low" };
                                                                                if (stock <= 5) return { text: "كمية محدودة (" + stock + ")", cls: "stock-low" };
                                                                                  return { text: "متوفر", cls: "stock-ok" };
                                                                                  }