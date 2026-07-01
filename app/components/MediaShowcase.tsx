import { feedbackImages, galleryImages, videos } from "../config/media";

export function MediaShowcase() {
  return (
    <section id="anh-video-that" className="bg-white py-12 md:py-16">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-steel-green">
            Anh that va video that
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-5xl">
            Xem san pham, kho hang va feedback truoc khi dat
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Phan nay giup phu huynh xem nhanh anh kho, anh be choi, feedback va video test xe.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {galleryImages.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-[8px] border border-slate-200 bg-[#fffaf0] shadow-sm">
              <img src={item.src} alt={item.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-signal-red">
            Video trai nghiem
          </p>
          <h3 className="mt-2 text-2xl font-black text-ink md:text-4xl">
            Video ngan de xem tren dien thoai
          </h3>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-3">
            {videos.map((video) => (
              <article key={video.src} className="min-w-[250px] max-w-[250px] rounded-[8px] border border-slate-200 bg-white p-2 shadow-sm md:min-w-[280px] md:max-w-[280px]">
                <video className="aspect-[9/16] w-full rounded-[6px] bg-black object-cover" controls preload="metadata" playsInline>
                  <source src={video.src} type="video/mp4" />
                </video>
                <p className="mt-3 px-1 pb-1 text-sm font-black text-ink">{video.title}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[8px] bg-[#17212b] p-5 text-white md:p-6">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-safety-yellow">
            Feedback that
          </p>
          <h3 className="mt-2 text-2xl font-black md:text-4xl">
            Anh danh gia tu khach da mua
          </h3>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-3">
            {feedbackImages.map((src, index) => (
              <figure key={src} className="min-w-[230px] max-w-[230px] overflow-hidden rounded-[8px] border border-white/12 bg-white/8 md:min-w-[260px] md:max-w-[260px]">
                <img src={src} alt={`Feedback khach hang ${index + 1}`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
