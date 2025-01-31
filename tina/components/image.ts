import {Template} from "tinacms";

const image: Template = {
    name: 'Image',
    fields: [
        {
            name: "href",
            type: "string",
            label: "Link",
        },
        {
            name: "w",
            type: "string",
            label: "Width",
        },
        {
            name: "h",
            type: "string",
            label: "Height",
        }
    ]
}

export default image;