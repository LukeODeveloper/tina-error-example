import {Collection} from "tinacms";

import panel from "../components/panel";
import pageNav from "../components/pageNav";


const dynamicPages: Collection =  {
    name: "DynamicPages",
    path: "content/dynamic-pages",
    format: "mdx",
    fields: [
        {
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            type: "string"
        },
        {
            name: "desc",
            label: "Description",
            required: true,
            type: "string"
        },
        {
            name: "body",
            label: "Body",
            isBody: true,
            type: "rich-text",
            templates: [panel,pageNav]
        }
    ]
}

export default dynamicPages;