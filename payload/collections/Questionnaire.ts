import { CollectionConfig } from "payload/types";

export const Questionnaire: CollectionConfig = {
  slug: "questionnaire",
  fields: [
    {
      name: "questions", // required
      type: "array", // required
      label: "Questionnaire",
      minRows: 1,
      maxRows: 27,
    //   interfaceName: "CardSlider", // optional
      labels: {
        singular: "Question",
        plural: "Questions",
      },
      fields: [
        // required
        {
          name: "question",
          type: "text",
        },
        {
            name: "questionId",
            type: "text",
        },
        {
            name: 'type', // required
            type: 'radio', // required
            options: [ // required
        {
            label: 'Single Choice',
            value: 'single-choice',
        },
        {
            label: 'Multiple Choice',
            value: 'multiple-choice',
        },
      ],
    //   defaultValue: 'single-choice', // The first value in options.
      admin: {
        layout: 'horizontal',
      }
    },
    {
      name: 'stepperName', // required
      type: 'select', // required
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: 'General Requirment',
          value: 'general requirment',
        },
        {
          label: 'Content Management',
          value: 'content management',
        },
        {
          label: 'Marketing',
          value: 'marketing',
        },
        {
          label: 'Technical IT',
          value: 'technical it',
        },
        {
          label: 'Technical Development',
          value: 'technical development',
        },
      ],
    },
    {
      name: "options", // required
      type: "array", // required
      label: "Options",
      minRows: 1,
      maxRows: 10,
    //   interfaceName: "CardSlider", // optional
      labels: {
        singular: "Option",
        plural: "Options",
      },
      fields: [
        // required
        {
          name: "option",
          type: "text",
        },
        {
          name: "optionId",
          type: "text",
        },
        {
      name: "recommendation", // required
      type: "array", // required
      label: "Recommendation",
      minRows: 1,
      maxRows: 14,
    //   interfaceName: "CardSlider", // optional
      labels: {
        singular: "Recommendation",
        plural: "Recommendations",
      },
      fields: [
    {
      name: 'CMS', // required
      type: 'select', // required
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: 'AEM',
          value: 'AEM',
        },
        {
          label: 'Drupal',
          value: 'Drupal',
        },
        {
          label: 'Wordpress',
          value: 'Wordpress',
        },
        {
          label: 'Kentico',
          value: 'Kentico',
        },
        {
          label: 'Sitecore',
          value: 'Sitecore',
        },
        {
          label: 'Hubspot',
          value: 'Hubspot',
        },
        {
          label: 'Magento',
          value: 'Magento',
        },
        {
          label: 'Shopify',
          value: 'Shopify',
        },
        {
          label: 'BigCommerce',
          value: 'BigCommerce',
        },
        {
          label: 'Prestashop',
          value: 'Prestashop',
        },
        {
          label: 'Django CMS',
          value: 'Django CMS',
        },
        {
          label: 'Sharepoint',
          value: 'Sharepoint',
        },
        {
          label: 'Joomla',
          value: 'Joomla',
        },
        {
          label: 'Craft CMS',
          value: 'Craft CMS',
        },
      ],
    },
    {
        label: "Recommendation Value",
        name: "recommendation_value",
        type: "number",
    },
    {
        name: "image",
        type: "upload",
        relationTo: 'media',
    }

      ],

    },
      ],
        },
      ],

    },
  ],
};