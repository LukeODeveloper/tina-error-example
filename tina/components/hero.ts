import {Template} from "tinacms";

const hero: Template = {
    name: 'Hero',
    fields: [
        {
            name: "imgSrc",
            label: "Hero Image Link",
            type: 'string',
            required: true
        },
        {
            name: "children",
            label: "Hero Content",
            type: 'rich-text',
            required: true
        },
    ],
}

export default hero;