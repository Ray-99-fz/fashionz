import { defineField, defineType } from "sanity";

export const productType = defineType({
name: "product",
title: "Products",
type: "document",

fields: [
defineField({
name: "name",
title: "Product Name",
type: "string",
validation: (Rule) => Rule.required(),
}),


defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: {
    source: "name",
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
}),

defineField({
  name: "brand",
  title: "Brand",
  type: "string",
  initialValue: "Akasi",
}),

defineField({
  name: "category",
  title: "Category",
  type: "reference",
  to: [{ type: "category" }],
  validation: (Rule) => Rule.required(),
}),

defineField({
  name: "images",
  title: "Product Images",
  type: "array",
  of: [
    {
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  validation: (Rule) => Rule.min(1).max(6),
}),

defineField({
  name: "description",
  title: "Description",
  type: "text",
  rows: 5,
}),

defineField({
  name: "price",
  title: "Current Price",
  type: "number",
  validation: (Rule) => Rule.required().positive(),
}),

defineField({
  name: "oldPrice",
  title: "Old Price",
  type: "number",
}),

defineField({
  name: "rating",
  title: "Rating",
  type: "number",
  initialValue: 5,
}),

defineField({
  name: "stock",
  title: "Stock Quantity",
  type: "number",
  validation: (Rule) => Rule.required().min(0),
}),

defineField({
  name: "featured",
  title: "Featured Product",
  type: "boolean",
  initialValue: false,
}),

defineField({
  name: "colors",
  title: "Available Colors",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "name",
          title: "Color Name",
          type: "string",
        },
        {
          name: "hex",
          title: "Hex Value",
          type: "string",
        },
      ],
    },
  ],
}),

defineField({
  name: "sizes",
  title: "Available Sizes",
  type: "array",
  of: [
    {
      type: "string",
    },
  ],
}),


],

preview: {
select: {
title: "name",
media: "images.0",
subtitle: "category.name",
},
},
});
