# Backend Notes

- Used Hono just for a change. I usually go by Fastify but Hono was in my play-next list so I wanted to try. It turned out to be truly handy especially with Zod integration builtin.

- Code is pretty basic; could be a single file server too.

- The important stuff is schemas.ts which is just Zod declarations. I love Zod as it enforces type safety at runtime (forms, api input/output, etc.) where Typescript's compile-time only type system


# Frontend Notes

- Basic Typescript / Next.js / Shadcn project. The outer shell is lifted from Shadcn examples as with most components.

- AFAICS Shadeform also uses the exact same components :D

- The meaty part is the "instances/create" page.

  AFAICS Shadeform's launch pages are what most priority work would be (I already saw some layout oddities).

  First thing IMHO is the multi-page wizard-like launch interface should go. One single/long form is the way to go. Something very similar to Scaleway's console is implemented as a proof of concept here. (I am no designer but I've grown some taste in cloud panels after all these years and I think Scaleway has the UX for a complex panel)

  Let me attach a screenshot here:

# TODO

- bind paginate instances screen.
- tons to refactor
- missing api implementations
- smell: cross repo module import for schema.js
- separate repos.
- regenerate package