import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentText extends Schema.Component {
  collectionName: 'components_component_texts';
  info: {
    displayName: 'Text';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface ComponentDescriptionService extends Schema.Component {
  collectionName: 'components_component_description_services';
  info: {
    displayName: 'descriptionService';
  };
  attributes: {
    title: Attribute.String;
    tags: Attribute.Component<'component.text', true>;
  };
}

export interface ComponentAboutMe extends Schema.Component {
  collectionName: 'components_component_about_mes';
  info: {
    displayName: 'AboutMe';
    icon: 'expand';
    description: '';
  };
  attributes: {
    Main: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Left: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Right: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Suggestion: Attribute.Component<'component.text', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.text': ComponentText;
      'component.description-service': ComponentDescriptionService;
      'component.about-me': ComponentAboutMe;
    }
  }
}
