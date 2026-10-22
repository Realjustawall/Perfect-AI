(() => {
  "use strict";
  const grid = document.querySelector("#references");
  const search = document.querySelector("#search");
  const theme = document.querySelector("#theme");
  const resultsCount = document.querySelector("#results-count");
  const totalCount = document.querySelector("#total-count");
  const emptyState = document.querySelector("#empty-state");
  const loadError = document.querySelector("#load-error");
  const normalize = (value) => String(value || "").normalize("NFKC").toLocaleLowerCase().replace(/[\u064B-\u065F\u0670]/g, "").replace(/[\s_-]+/g, " ").trim();
  const numberFa = (value) => Number(value).toLocaleString("fa-IR");
  const safeText = (value) => String(value ?? "");
  const makeLink = (label, target) => {
    const a = document.createElement("a");
    a.textContent = label;
    a.href = "../../" + String(target).split("/").map((segment) => encodeURIComponent(segment)).join("/");
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", label + " — باز کردن فایل مرجع");
    return a;
  };

  function cardFor(item) {
    const article = document.createElement("article");
    article.className = "reference-card";
    const top = document.createElement("div");
    top.className = "card-top";
    const title = document.createElement("h3");
    title.textContent = safeText(item.name);
    const chip = document.createElement("span");
    chip.className = "theme-chip " + safeText(item.theme);
    chip.textContent = ({light:"روشن", dark:"تیره", mixed:"ترکیبی"})[item.theme] || safeText(item.theme);
    top.append(title, chip);

    const tagline = document.createElement("p");
    tagline.className = "tagline";
    tagline.textContent = safeText(item.tagline);
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = safeText(item.summary);
    const meta = document.createElement("p");
    meta.className = "token-meta";
    const counts = item.token_counts || {};
    meta.textContent = "توکن رنگ: " + numberFa(counts.color || 0) + " · خانوادهٔ فونت: " + numberFa(counts.font || 0);

    const links = document.createElement("nav");
    links.className = "card-links";
    links.setAttribute("aria-label", "فایل‌های " + safeText(item.name));
    links.append(
      makeLink("شرح طراحی", item.files.design),
      makeLink("توکن‌ها", item.files.tokens),
      makeLink("متغیرها", item.files.variables),
      makeLink("Theme CSS", item.files.theme)
    );
    article.append(top, tagline, summary, meta, links);
    return article;
  }

  let entries = [];
  function render() {
    const q = normalize(search.value);
    const selectedTheme = theme.value;
    const terms = q ? q.split(" ").filter(Boolean) : [];
    const visible = entries.filter((item) => {
      if (selectedTheme !== "all" && item.theme !== selectedTheme) return false;
      const haystack = normalize([item.name, item.title, item.theme, item.tagline, item.summary].join(" "));
      return terms.every((term) => haystack.includes(term));
    });
    const fragment = document.createDocumentFragment();
    visible.forEach((item) => fragment.appendChild(cardFor(item)));
    grid.replaceChildren(fragment);
    resultsCount.textContent = numberFa(visible.length) + " مورد از " + numberFa(entries.length) + " مرجع";
    emptyState.hidden = visible.length !== 0;
    if (!entries.length) return;
  }

  search.addEventListener("input", render);
  theme.addEventListener("change", render);
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !event.ctrlKey && !event.metaKey && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === "Escape" && document.activeElement === search) {
      search.value = "";
      render();
    }
  });

  fetch("../../catalog.json")
    .then((response) => {
      if (!response.ok) throw new Error("Catalog request failed: " + response.status);
      return response.json();
    })
    .then((catalog) => {
      entries = Array.isArray(catalog.references) ? catalog.references : [];
      totalCount.textContent = numberFa(entries.length);
      render();
    })
    .catch((error) => {
      console.error(error);
      grid.replaceChildren();
      loadError.hidden = false;
      resultsCount.textContent = "خطا در دریافت فهرست";
      emptyState.hidden = true;
    });
})();
