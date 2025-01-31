import {Template} from "tinacms";

const verticalCard: Template = {
    name: 'VerticalCard',
    fields: [
        {
            name: "cards",
            label: "Cards",
            type: "object",
            list: true,
            ui: {
                itemProps: (item) => {
                    return {label: `${item?.title}  `}
                },
            },
            fields: [
                {
                    name: "title",
                    label: "Title",
                    type: "string",
                    required: true,
                    isTitle: true,
                },
                {
                    name: "imgSrc",
                    label: "Image",
                    type: "string",
                    required: true,
                },
                {
                    name: "subtitle",
                    label: "Subtitle",
                    type: "string",
                },
                {
                    name: "link",
                    label: "Link",
                    type: "string",
                    required: true,
                },
                {
                    name: "yOffset",
                    label: "Vertical Offset",
                    type: "string",
                },
            ]
        }
    ],
}

export default verticalCard;
