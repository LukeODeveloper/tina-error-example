import {Template} from "tinacms";
import carousel from "./carousel"
import verticalCard from "./verticalCard";
import image from "./image";

const panel: Template = {
    name: 'Panel',
    fields: [
        {
            name: "id",
            label: "Panel ID",
            type: 'string',
        },
        {
            name: "body",
            isBody: true,
            label: "Panel Content",
            type: 'rich-text',
            templates: [verticalCard,carousel,image]
        }
    ],
}

export default panel;