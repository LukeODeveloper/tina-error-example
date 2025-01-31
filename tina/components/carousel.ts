import {Template} from "tinacms";

const carousel: Template = {
    name: 'Carousel',
    fields: [
        {
            name: "album",
            type: "string",
            label: "Album Link",
        },
        {
            name: "name",
            type: "string",
            label: "Name",
        }
    ]
}

export default carousel;