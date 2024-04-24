# How to run

It's just 2 npm projects:

```
$ cd backend && npm i && npm run dev

$ cd frontend && npm i && npm run dev
```

# Backend Notes

- Used Hono just for a change. I usually go by Fastify but Hono was in my play-next list so I wanted to try. It turned out to be truly handy especially with Zod integration builtin.

- Code is pretty basic; could be a single file server too.

- The important stuff is schemas.ts which is just Zod declarations. I love Zod as it enforces type safety at runtime (forms, api input/output, etc.) where Typescript's compile-time only type system is not enough.


# Frontend Notes

- Basic Typescript / Next.js / Shadcn project. The outer shell is lifted from Shadcn examples as with most components.

- AFAICS Shadeform also uses the exact same components :D

- The meaty part is the "instances/create" page.

  AFAICS Shadeform's launch pages are what most priority work would be (I already saw some layout oddities).

  First thing IMHO is the multi-page wizard-like launch interface should go. One single/long form is the way to go. Something very similar to Scaleway's console is implemented as a proof of concept here. (I am no designer but I've grown some taste in cloud panels after all these years and I think Scaleway has the UX for a complex panel)

  Let me attach a screenshot of Scaleway's panel here:

![image](https://github.com/utkukaratas/assignment-shadeform/assets/59096/d6a502e3-88c7-4526-96fb-0bf6c09aa169)

# ORIG SPEC

Shadeform is a unified cloud console that allows customers to create, view, and delete GPU instances. For Shadeform’s take home assessment, build a full stack, local version of Shadeform’s basic instance management functionality. You can ask clarifying questions or make sensible assumptions. If you want to try out Shadeform’s platform, please create an account and message Ronald the email you used for the account so we can add credits to the account. Please spend no more than 6 hours on this assessment. We will assess the take home assignment based on this time restriction. It is okay if not everything is done perfectly.

Back End:

[+] Set up an API server that supports the /instances/create, /instances/delete, and /instances API spec as documented here: https://docs.shadeform.ai/getting-started/introduction
  [+] You can ignore all fields that are not required
  [+] /create should store the details of an instance that’s created;
  [+] The instance should be created in the ‘active’ status and the IP can be randomly generated
  [+] /delete should remove a created instance
  [xxx] /instances should return all active instances. Some of the metadata fields in the /instances API are not passed in through the /create API. Therefore, you must call the production /instances/types API to retrieve the corresponding metadata.
[+] Your backend server should use in-memory data structures instead of a database; this means that it is okay for all data to be wiped if the backend server is restarted.
[+] Authorization and authentication are not required; you can assume all callers of the API are from the same user
[+] Tech stack can be any generally used tech stack used in commercial software

Front End:

[+] Build a web app that supports creating a new instance, displaying all active instances, and deleting an instance
[+] Instance creation should be a guided flow that minimizes sources of customer error and sources of logical errors. You will have to call the /instances/types API to get instance details and cloud to region mappings.
  [+] For example, a customer should not be able to leave the name field empty
  [+] Additionally, instances that are not currently available should not be selectable
[+] A user should be able to view all active instances and its metadata.
[SKIPPED TOO TRIVIAL] A user should be able to delete any specific instance
[+] The UI should support more than 50 instances so pagination is needed
[+] Only the specified requirements are needed. There’s no need to build a sign in page, navbar, sidebar, etc. You can assume that only one user can reach the page so authorization and authentication are not required.
  [+] Because there’s no need for a navbar, the two pages for creating an instance and viewing active instances should be accessible through URL
[+] Tech stack should be NextJS, React, and Tailwinds

# TODO

[+] bind paginate instances screen.
[+] tons to refactor
[+] missing api implementations
[ ] smell: cross repo module import for schema.js
[ ] separate repos.
[+] regenerate package
[ ] form error handling
