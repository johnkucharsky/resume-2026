export const introductionStyles = {
  backgroundOnHover: `
    absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md
    transition motion-reduce:transition-none
    lg:-inset-x-6 lg:block
    lg:group-hover:bg-slate-800/50
    lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
    lg:group-hover:drop-shadow-lg
  `,

  listItemWrapper: `
    group relative grid gap-4 pb-1
    transition-all
    sm:grid-cols-8 sm:gap-8
    md:gap-4
    lg:hover:!opacity-100
    lg:group-hover/list:opacity-50
  `,

  arrowTopRight: `
    inline-block h-4 w-4 shrink-0
    transition-transform
    group-hover/link:-translate-y-1
    group-hover/link:translate-x-1
    group-focus-visible/link:-translate-y-1
    group-focus-visible/link:translate-x-1
    motion-reduce:transition-none
    ml-1 translate-y-px
  `,

  tagItem: `
    flex items-center rounded-full
    bg-teal-400/10
    px-3 py-1
    text-xs 
    font-medium 
    leading-5
    text-teal-300
  `,
} as const;
