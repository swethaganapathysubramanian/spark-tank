import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "author",
            type: "reference",
            to: { type: "author" },
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "techStack",
            type: "array",
            of: [{type: 'string'}]
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) =>
                Rule.min(1).max(20).required().error("Please enter a category"),
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'poster',
            type: 'image',
            // 👇 Enables crop and hotspot tools
            options: {
                hotspot: true
            },
            // 👇 Optionally append additional fields to the image object
            fields: [
                defineField({
                    name: 'caption',
                    type: 'string',
                }),
                defineField({
                    name: 'attribution',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
    ],
});