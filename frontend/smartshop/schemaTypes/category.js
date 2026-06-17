import { defineField, defineType } from "sanity";

export const categoryType = defineType({
name: "category",
title: "Categories",
type: "document",

fields: [
defineField({
name: "name",
title: "Category Name",
type: "string",
validation: (Rule) => Rule.required(),
}),


defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: {
    source: "name",
  },
  validation: (Rule) => Rule.required(),
}),

defineField({
  name: "description",
  title: "Description",
  type: "text",
}),

defineField({
  name: "heroImage",
  title: "Hero Image",
  type: "image",
  options: {
    hotspot: true,
  },
}),


],

preview: {
select: {
title: "name",
media: "heroImage",
},
},
});
