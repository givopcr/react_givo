function normalizeBreadcrumb(breadcrumb) {
  if (Array.isArray(breadcrumb)) return breadcrumb
  if (typeof breadcrumb === "string" && breadcrumb.trim()) {
    return breadcrumb.split("/").map((item) => item.trim()).filter(Boolean)
  }
  return []
}

export default function PageHeader({ title, breadcrumb, children }) {
  const crumbs = normalizeBreadcrumb(breadcrumb)

  return (
    <div
      id="pageheader-container"
      className="mb-4 flex flex-wrap items-start justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm"
    >
      <div id="pageheader-left" className="flex flex-col">
        <h1 id="page-title" className="text-3xl font-semibold text-gray-800">
          {title}
        </h1>

        <div
          id="breadcrumb-links"
          className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500"
        >
          {crumbs.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-2">
              <span>{item}</span>
              {index < crumbs.length - 1 ? <span>/</span> : null}
            </div>
          ))}
        </div>
      </div>

      {children ? <div id="action-button">{children}</div> : null}
    </div>
  )
}