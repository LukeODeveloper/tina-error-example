import {Template} from "tinacms";

const pageNav: Template = {
    name: "PageNav",
    label: "Page Nav",
    fields: [
        {
            name: "tabs",
            label: "Page Tabs",
            list: true,
            type: "string"
        }
    ]
}

export default pageNav;