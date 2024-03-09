import type { Schema, Attribute } from '@strapi/strapi';

export interface ListContent extends Schema.Component {
  collectionName: 'components_list_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    content: Attribute.String;
    note: Attribute.String;
  };
}

export interface ListImages extends Schema.Component {
  collectionName: 'components_list_images';
  info: {
    displayName: 'images';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.content': ListContent;
      'list.images': ListImages;
    }
  }
}
