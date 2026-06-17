import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
name: "siteSettings",
title: "Site Settings",
type: "document",

fields: [
defineField({
name: "storeName",
title: "Store Name",
type: "string",
}),

```
defineField({
  name: "logo",
  title: "Logo",
  type: "image",
}),

defineField({
  name: "phone",
  title: "Phone Number",
  type: "string",
}),

defineField({
  name: "email",
  title: "Email Address",
  type: "string",
}),

defineField({
  name: "facebook",
  title: "Facebook URL",
  type: "url",
}),

defineField({
  name: "instagram",
  title: "Instagram URL",
  type: "url",
}),

defineField({
  name: "tiktok",
  title: "TikTok URL",
  type: "url",
}),

defineField({
  name: "whatsapp",
  title: "WhatsApp Number",
  type: "string",
}),
```

],
});
