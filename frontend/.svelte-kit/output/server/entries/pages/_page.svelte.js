import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, d as escape_object, e as escape_attribute_value, v as validate_component, f as escape, h as add_attribute, k as compute_slots, n as is_promise, o as noop } from "../../chunks/ssr.js";
import { i as is_void, B as Button } from "../../chunks/modal.store.js";
import { P as Popper, B as ButtonGroup } from "../../chunks/Popper.js";
import { c as clampSize, H as Heading, L as Logo, I as Input } from "../../chunks/logo.js";
import { twMerge } from "tailwind-merge";
const InputAddon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let divClass;
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = void 0 } = $$props;
  let background = getContext("background");
  let group = getContext("group");
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500"
  };
  const darkBgClasses = {
    base: "dark:bg-gray-600 dark:text-gray-400",
    tinted: "dark:bg-gray-500 dark:text-gray-300"
  };
  const divider = {
    base: "dark:border-r-gray-700 dark:last:border-r-gray-600",
    tinted: "dark:border-r-gray-600 dark:last:border-r-gray-500"
  };
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const prefixPadding = { sm: "px-2", md: "px-3", lg: "px-4" };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  _size = size || clampSize(group?.size) || "md";
  divClass = twMerge(
    textSizes[_size],
    prefixPadding[_size],
    background ? borderClasses["tinted"] : borderClasses["base"],
    "text-gray-500 bg-gray-200",
    background ? darkBgClasses.tinted : darkBgClasses.base,
    background ? divider.tinted : divider.base,
    "inline-flex items-center border-t border-b first:border-l border-r",
    "first:rounded-l-lg last:rounded-r-lg",
    $$props.class
  );
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { defaultClass = "py-2 px-3" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Popper, "Popper").$$render(
    $$result,
    Object.assign({}, { activeContent: true }, { border: true }, { shadow: true }, { rounded: true }, $$restProps, {
      class: "dark:!border-gray-600 " + $$props.class
    }),
    {},
    {
      default: () => {
        return `${$$slots.title || title ? `<div class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">${slots.title ? slots.title({}) : ` <h3 class="font-semibold text-gray-900 dark:text-white">${escape(title)}</h3> `}</div>` : ``} <div${add_attribute("class", defaultClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} `;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { height = "normal" } = $$props;
  let { align = "left" } = $$props;
  let { justify = false } = $$props;
  let { italic = false } = $$props;
  let { firstupper = false } = $$props;
  let { upperClass = "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left" } = $$props;
  let { opacity = void 0 } = $$props;
  let { whitespace = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { space = void 0 } = $$props;
  let { weight = "normal" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  let colorAndopacity = color.split(" ").map((element) => element.trim()).map((element) => element + "/" + String(opacity)).join(" ");
  let classP = twMerge(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.firstupper === void 0 && $$bindings.firstupper && firstupper !== void 0)
    $$bindings.firstupper(firstupper);
  if ($$props.upperClass === void 0 && $$bindings.upperClass && upperClass !== void 0)
    $$bindings.upperClass(upperClass);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.whitespace === void 0 && $$bindings.whitespace && whitespace !== void 0)
    $$bindings.whitespace(whitespace);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  return `<p${spread([escape_object($$restProps), { class: escape_attribute_value(classP) }], {})}>${slots.default ? slots.default({}) : ``}</p> `;
});
const Typewriter_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1gv2i7t-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1gv2i7t *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1gv2i7t .finished-typing::after{content:none}.cursor.svelte-1gv2i7t .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent.js"),
    cascade: () => import("../../chunks/cascade.js"),
    loop: () => import("../../chunks/loop.js"),
    loopOnce: () => import("../../chunks/loopOnce.js"),
    loopRandom: () => import("../../chunks/loopRandom.js"),
    scramble: () => import("../../chunks/scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0)
    $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0)
    $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript> ${disabled ? `<div class="typewriter-container svelte-1gv2i7t">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${showCursorOnDelay ? `<div class="typewriter-container cursor svelte-1gv2i7t" data-svelte-h="svelte-1ssf3hl"><p class="typing"></p></div>` : ``} `;
    }
    return function() {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return ` ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-1gv2i7t", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)} `;
        }();
      }(modes[mode]())} `;
    }();
  }(delayPromise())}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-13w8iza_START -->${$$result.title = `<title>MBTI Movies - Home</title>`, ""}<!-- HEAD_svelte-13w8iza_END -->`, ""} <div class="flex flex-col grow items-center justify-start gap-12 mt-60 px-8"><div class="flex flex-col items-center text-center">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      id: "search-heading",
      class: "text-white dark:text-gray-200 dark:font-semibold",
      tag: "h2"
    },
    {},
    {
      default: () => {
        return `${validate_component(Typewriter, "Typewriter").$$render($$result, { scrambleDuration: 2e3, mode: "scramble" }, {}, {
          default: () => {
            return `MBTI Movies Recommender`;
          }
        })}`;
      }
    }
  )}</div> ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { id: "input-search", class: "w-2/3" }, {}, {
    default: () => {
      return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
        default: () => {
          return `<img${add_attribute("src", Logo, 0)} alt="Logo" class="h-3 sm:h-6">`;
        }
      })} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "input-addon",
          type: "text",
          placeholder: "Enter a phrase that best describes you :)"
        },
        {},
        {}
      )} ${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
        default: () => {
          return `${`Search`}`;
        }
      })}`;
    }
  })} ${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "right",
      offset: 20,
      class: "w-30 md:w-50 text-sm font-gray-200 dark:bg-gray-700",
      triggeredBy: "#input-search"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render(
          $$result,
          {
            size: "sm",
            height: "relaxed",
            class: "w-20 md:w-30 lg:w-40 dark:text-gray-100"
          },
          {},
          {
            default: () => {
              return `Type something into the input field, we will recommend some movies to match your MBTI mojo!
			😎`;
            }
          }
        )}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
