// Use type safe message keys with `next-intl`
type Messages = typeof import("./messages/en.json");
type ZodMessages = typeof import("./messages/zod/en.json");
declare interface IntlMessages extends Messages, ZodMessages {}
