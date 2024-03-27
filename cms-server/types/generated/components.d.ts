import type { Schema, Attribute } from '@strapi/strapi';

export interface ListContentItem extends Schema.Component {
  collectionName: 'components_list_content_items';
  info: {
    displayName: 'content-item';
  };
  attributes: {
    content: Attribute.String;
    note: Attribute.String;
  };
}

export interface ListImageList extends Schema.Component {
  collectionName: 'components_list_image_lists';
  info: {
    displayName: 'image-item';
    icon: '';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.content-item': ListContentItem;
      'list.image-list': ListImageList;
    }
  }
}
