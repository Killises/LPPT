export default function Section({ id, title, subtitle, children, muted = false }) {
  return (
    <section id={id} className={muted ? "py-16 bg-slate-50 dark:bg-slate-800" : "py-16"}>
      <div className="container">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl font-bold dark:text-slate-100">{title}</h2>}
            {subtitle && <p className="mt-2 text-slate-900 dark:text-slate-200">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
