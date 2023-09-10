import { c as create_ssr_component, a as compute_rest_props, v as validate_component, h as add_attribute, s as setContext, k as compute_slots, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, p as each, m as missing_component } from "../../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { F as Frame, W as Wrapper, i as is_void, B as Button } from "../../../chunks/modal.store.js";
import { P as Popper, B as ButtonGroup } from "../../../chunks/Popper.js";
import { w as writable } from "../../../chunks/index.js";
import { S as Span } from "../../../chunks/Span.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerPadding;
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-6 md:p-8",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge(
    "flex",
    sizes[size],
    reverse ? "flex-col-reverse" : "flex-col",
    horizontal && (reverse ? "md:flex-row-reverse md:max-w-xl" : "md:flex-row md:max-w-xl"),
    href && "hover:bg-gray-100 dark:hover:bg-gray-700",
    !img && innerPadding,
    $$props.class
  );
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-r-lg" : "md:rounded-l-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"]);
  let $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let activeCls = twMerge(activeClass, $$props.classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  let containerCls = twMerge(containerClass, $$props.classContainer);
  let headerCls = twMerge(headerClass, $$props.classHeader);
  let ulCls = twMerge("py-1", $$props.class);
  let footerCls = twMerge(footerClass, $$props.classFooter);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0)
    $$bindings.headerClass(headerClass);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0)
    $$bindings.footerClass(footerClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      activeUrlStore.set(activeUrl);
    }
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const ChevronDownSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "chevron down solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 10 6" }
    ],
    {}
  )}><path fill="currentColor" d="M5.012 6a1 1 0 0 1-.707-.292l-4-3.992A.998.998 0 0 1 1.395.08a1 1 0 0 1 .324.224L5.012 3.59 8.305.305A1.001 1.001 0 0 1 10 1.014a.997.997 0 0 1-.28.702l-4 3.992A1.001 1.001 0 0 1 5.011 6Z"></path></svg> `;
});
const ChevronRightSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "chevron right solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 6 10" }
    ],
    {}
  )}><path fill="currentColor" d="M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10Z"></path></svg> `;
});
const MovieCard_component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isHidden = false } = $$props;
  let { customClass = "" } = $$props;
  let { customStyle = "" } = $$props;
  if ($$props.isHidden === void 0 && $$bindings.isHidden && isHidden !== void 0)
    $$bindings.isHidden(isHidden);
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.customStyle === void 0 && $$bindings.customStyle && customStyle !== void 0)
    $$bindings.customStyle(customStyle);
  return `${!isHidden ? `${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: customStyle,
      class: "dark:bg-gray-700 " + customClass
    },
    {},
    {
      default: () => {
        return `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-svelte-h="svelte-1rgknz9">Noteworthy technology acquisitions 2021</h5> <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight" data-svelte-h="svelte-wrjek5">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.</p>`;
      }
    }
  )}` : ``}`;
});
const Gallery_component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isHidden = false } = $$props;
  let { customClass = "" } = $$props;
  let { customStyle = "" } = $$props;
  let { items = [] } = $$props;
  if ($$props.isHidden === void 0 && $$bindings.isHidden && isHidden !== void 0)
    $$bindings.isHidden(isHidden);
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.customStyle === void 0 && $$bindings.customStyle && customStyle !== void 0)
    $$bindings.customStyle(customStyle);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `${!isHidden ? `${slots["filter-bar"] ? slots["filter-bar"]({}) : ``} <div${add_attribute("style", customStyle, 0)} class="${"grid " + escape(customClass, true)}">${items.length ? each(items, (item, i) => {
    return `<div${add_attribute("id", "gallery-item-" + i, 0)} class="cursor-pointer" draggable="true">${validate_component(item?.component || missing_component, "svelte:component").$$render($$result, Object.assign({}, item?.props), {}, {})} </div>`;
  }) : ` ${slots.default ? slots.default({}) : ``}`}</div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const movieItems = [
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 },
    { component: MovieCard_component, props: void 0 }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    console.log(data);
  }
  return `${$$result.head += `<!-- HEAD_svelte-yr6y3z_START -->${$$result.title = `<title>MBTI Movies - Browse</title>`, ""}<!-- HEAD_svelte-yr6y3z_END -->`, ""} ${validate_component(Gallery_component, "Gallery").$$render(
    $$result,
    {
      items: movieItems,
      customClass: "gap-6 grid-cols-2 md:grid-cols-4"
    },
    {},
    {
      "filter-bar": () => {
        return `<div slot="filter-bar" class="flex items-center justify-center py-2 md:py-4 gap-3 mb-3 mx-auto">${validate_component(Span, "Span").$$render($$result, { class: "text-black dark:text-white" }, {}, {
          default: () => {
            return `Sort:`;
          }
        })} ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                color: "light",
                class: "dark:bg-gray-700",
                size: "sm"
              },
              {},
              {
                default: () => {
                  return `Date`;
                }
              }
            )} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                color: "light",
                class: "dark:bg-gray-700",
                size: "sm"
              },
              {},
              {
                default: () => {
                  return `Name`;
                }
              }
            )}`;
          }
        })}  ${validate_component(Span, "Span").$$render(
          $$result,
          {
            class: "text-black dark:text-white ml-12"
          },
          {},
          {
            default: () => {
              return `Filter:`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "light",
            class: "dark:bg-gray-700 dark:hover:bg-gray-700"
          },
          {},
          {
            default: () => {
              return `Dropdown button${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render(
                $$result,
                {
                  class: "w-3 h-3 ml-2 text-primary-700 dark:text-white"
                },
                {},
                {}
              )}`;
            }
          }
        )}  ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {
          footer: () => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { slot: "footer" }, {}, {
              default: () => {
                return `Sign out`;
              }
            })}`;
          },
          default: () => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
              default: () => {
                return `Dashboard`;
              }
            })} ${validate_component(DropdownItem, "DropdownItem").$$render(
              $$result,
              {
                class: "flex items-center justify-between"
              },
              {},
              {
                default: () => {
                  return `Dropdown${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render(
                    $$result,
                    {
                      class: "w-3 h-3 ml-2 text-primary-700 dark:text-white"
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} ${validate_component(Dropdown, "Dropdown").$$render($$result, { placement: "right-start" }, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Overview`;
                  }
                })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `My downloads`;
                  }
                })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Billing`;
                  }
                })}`;
              }
            })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
              default: () => {
                return `Earnings`;
              }
            })}`;
          }
        })}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
