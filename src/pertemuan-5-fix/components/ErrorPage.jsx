import { Link } from "react-router-dom"

function DefaultErrorVisual({ code }) {
  return (
    <div className="relative mx-auto flex h-[330px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-md border-4 border-[#7c4f2a] bg-[#f8f8f8]">
      <div className="absolute -top-2 left-6 text-5xl font-black text-slate-800">
        Oops!
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#e5e7eb_0,_transparent_40%),radial-gradient(circle_at_80%_30%,_#e5e7eb_0,_transparent_45%)] opacity-80" />
      <div className="relative flex items-end gap-3">
        <span className="text-[120px] font-black leading-none text-[#7c4f2a]">
          {String(code)[0] ?? "4"}
        </span>
        <span className="text-[120px] font-black leading-none text-[#7c4f2a]">
          {String(code)[1] ?? "0"}
        </span>
        <span className="text-[120px] font-black leading-none text-[#7c4f2a]">
          {String(code)[2] ?? "4"}
        </span>
      </div>
    </div>
  )
}

export default function ErrorPage({
  code = "404",
  description = "This page does not exist or was removed.",
  image,
}) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="grid items-center gap-8 lg:grid-cols-[360px_1fr]">
        <div>
          <h2 className="mb-2 text-5xl font-extrabold text-slate-900">Oops....</h2>
          <p className="mb-3 text-4xl font-semibold text-slate-900">{code}</p>
          <p className="mb-2 text-3xl font-medium text-slate-900">Coffee Shop System Error</p>
          <p className="mb-8 text-gray-500">{description}</p>
          <Link
            to="/pertemuan-5-fix/dashboard"
            className="inline-flex items-center rounded-md bg-hijau px-5 py-2.5 text-white transition hover:brightness-95"
          >
            ← Back to home
          </Link>
        </div>

        {image ? (
          <div className="mx-auto w-full max-w-[440px]">
            <img src={image} alt={`Error ${code}`} className="w-full rounded-md object-cover" />
          </div>
        ) : (
          <DefaultErrorVisual code={code} />
        )}
      </div>
    </section>
  )
}
