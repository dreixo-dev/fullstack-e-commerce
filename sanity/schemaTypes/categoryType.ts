import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const categoryType = defineType({
    name: "category",
    title: "Category",
    type: "document",
    icon:TagIcon,
    fields:[
        defineField({
        name:"title",
        type:"string",
        validation: (Rule) => Rule.required(),
    }),
        defineField({
            name:"slug",
            type: "slug",
            options:{
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "range",
            type: "number",
            description: "Starting Form",
        }),
        defineField({
            name: "featured",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "image",
            title: "Category Image",
            type: "image",
            options: {
            hotspot: true,
            },
        }),
    ],
    preview:{
        select:{
            title: "title",
            subtitle: "description",
            media: "image",
        },
    },
});