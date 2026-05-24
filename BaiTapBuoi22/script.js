const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const data = {
  meta: {
    invoiceNo: "WM-20260521-0001",
    saleDate: "2026/05/21",
    currency: "VND",
    paymentMethod: "Cash", // Tiền mặt / Chuyển khoản...
  },

  seller: {
    name: "WinMark 2 ba trung",
    address: "2 Ba trung - HN",
    phone: "012345678",
    representative: "Đại diện WinMark",
  },

  customer: {
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Dong Ha noi",
  },

  items: [
    {
      no: 1,
      name: "Ao Thun",
      size: "XL",
      quantity: 1,
      price: 200000,
    },
    {
      no: 2,
      name: "Ao Thun",
      size: "XL",
      quantity: 1,
      price: 200000,
    },
  ],

  // 5. Chương trình ưu đãi / Giảm giá (Promotion & Discount)
  promotion: {
    description: "Khuyen mai 50% chi KH than thiet",
    discountPercent: 50,
  },
};

// Sử dụng DOM để render ra file hóa đơn sau (HTML)

const billList = data.items
  .map((billItem) => {
    return `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="text-xs text-slate-300 font-semibold text-center px-3 py-4">${billItem.no}</td>
      <td class="text-sm font-semibold text-slate-800 px-3 py-4">${billItem.name}</td>
      <td class="text-sm font-semibold text-slate-500 text-center px-3 py-4">${billItem.quantity}</td>
      <td class="text-sm text-slate-500 font-medium text-right px-3 py-4">${billItem.price}</td>
      <td class="text-sm font-bold text-slate-800 text-right px-3 py-4">${billItem.price * billItem.quantity}</td>
  </tr>`;
  })
  .join("");

const subTotal = data.items.reduce((total, item) => {
  return total + item.quantity * item.price;
}, 0);

const finalTotal = subTotal - (subTotal * data.promotion.discountPercent) / 100;

const container = $("#bill");

container.innerHTML = `
  <body class="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-sky-50 flex items-center justify-center p-8">

    <div class="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden">

      <div class="flex justify-between items-start px-8 py-7 border-b border-slate-100">

        <div class="flex items-center gap-3">
          <div class="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center text-white text-sm font-black shadow-md flex-shrink-0">
            WM
          </div>
          <div>
            <p class="text-lg font-extrabold text-slate-900 tracking-tight">${data.seller.name}</p>
            <p class="text-xs text-slate-400 font-normal mt-0.5">Cung cấp sản phẩm thời trang cao cấp &amp; thiết kế độc quyền.</p>
          </div>
        </div>

        <div class="text-right">
          <span class="inline-block bg-emerald-500 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md mb-1.5">
            Hóa Đơn Bán Lẻ
          </span>
          <p class="text-xs text-slate-500 font-medium">
            Mã số: <span class="text-slate-800 font-bold">${data.meta.invoiceNo}</span>
          </p>
          <p class="text-xs text-slate-500 font-medium mt-0.5">
            Ngày bán: <span class="text-slate-700 font-semibold">${data.meta.saleDate}</span>
          </p>
        </div>

      </div>

      <div class="grid grid-cols-2 gap-6 px-8 py-6">

        <div>
          <p class="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2.5">Đơn Vị Bán Hàng (Seller)</p>
          <p class="text-sm font-bold text-slate-900 mb-2">${data.seller.representative}</p>

          <div class="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
            <svg class="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            ${data.seller.address}
          </div>

          <div class="flex items-center gap-1.5 text-xs text-slate-500">
            <svg class="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            ${data.seller.phone}
          </div>
        </div>

        <div>
          <p class="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2.5">Khách Hàng (Buyer)</p>
          <p class="text-sm font-bold text-slate-900 mb-2">${data.customer.name}</p>

          <div class="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
            <svg class="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            Tuổi: ${data.customer.age}
          </div>

          <div class="flex items-center gap-1.5 text-xs text-slate-500">
            <svg class="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
            ${data.customer.address}
          </div>
        </div>

      </div>

      <hr>

      <div class="px-8 pt-5 pb-2">

        <table class="w-full">
          <thead>
            <tr class="bg-slate-50 rounded-xl">
              <th class="text-[10px] font-bold tracking-wide uppercase text-slate-400 text-center px-3 py-2.5 w-7">STT</th>
              <th class="text-[10px] font-bold tracking-wide uppercase text-slate-400 text-left px-3 py-2.5">Tên Sản Phẩm</th>
              <th class="text-[10px] font-bold tracking-wide uppercase text-slate-400 text-center px-3 py-2.5 w-16">Size</th>
              <th class="text-[10px] font-bold tracking-wide uppercase text-slate-400 text-center px-3 py-2.5 w-11">SL</th>
              <th class="text-[10px] font-bold tracking-wide uppercase text-slate-400 text-right px-3 py-2.5 w-24">Đơn Giá</th>
              <th class="text-[10px] font-bold tracking-wide uppercase text-slate-400 text-right px-3 py-2.5 w-24">Thành Tiền</th>
            </tr>
          </thead>
          <tbody>
            ${billList}
          </tbody>
        </table>

      <hr>

      <div class="grid grid-cols-[1fr_auto] gap-6 items-end px-8 py-6">

        <div class="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3.5">
          <div class="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow shadow-emerald-200">
            <svg class="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <p class="text-[10px] font-extrabold tracking-widest uppercase text-emerald-600 mb-1">Khuyến Mãi / Trợ Giá</p>
            <p class="text-xs text-emerald-700 font-medium leading-relaxed">${data.promotion.description}</p>
          </div>
        </div>

        <div class="min-w-[200px]">
          <div class="flex justify-between items-center gap-6 mb-2">
            <span class="text-xs text-slate-500 font-medium whitespace-nowrap">Cộng tiền hàng:</span>
            <span class="text-xs font-semibold text-slate-700">${subTotal}</span>
          </div>
          <div class="flex justify-between items-center gap-6 mb-2">
            <span class="text-xs text-slate-500 font-medium whitespace-nowrap">Khấu trừ giảm giá:</span>
            <span class="text-xs font-semibold text-emerald-600">-${(subTotal * data.promotion.discountPercent) / 100}đ</span>
          </div>
          <div class="h-px bg-slate-200 my-3"></div>
          <div class="flex justify-between items-baseline gap-4">
            <span class="text-sm font-bold text-slate-800 leading-snug">Tổng thanh<br/>toán:</span>
            <span class="text-2xl font-extrabold text-emerald-500 leading-none">
              ${finalTotal} <span class="text-base">đ</span>
            </span>
          </div>
        </div>

      </div>

    </div>
  </body>

`;
