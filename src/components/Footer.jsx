import { Logo } from "./Brand.jsx";
import { footer, links } from "../content/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[22rem] text-[0.9rem] font-medium leading-[1.65] text-muted">
              {footer.blurb}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footer.columns.map((column) => {
              // Social links are optional — an empty href means the
              // account doesn't exist yet, so the entry is dropped.
              const items = column.items.filter((item) => Boolean(item.href));
              if (!items.length) return null;

              return (
                <nav key={column.title} aria-label={column.title}>
                  <p className="text-[0.72rem] font-black uppercase tracking-[0.14em] text-ink">
                    {column.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {items.map((item) => {
                      const external = item.href.startsWith("http");
                      return (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                            className="text-[0.875rem] font-medium text-muted transition-colors duration-200 hover:text-ink"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.85rem] font-medium text-muted">{footer.copyright}</p>
          <a
            href={links.email}
            className="text-[0.85rem] font-semibold text-muted transition-colors hover:text-ink"
          >
            help.promptly@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
