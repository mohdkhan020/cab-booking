declare module '*.jpg';
declare module '*.webp';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module "react-helmet" {
    import * as React from "react";
  
    export interface HelmetProps {
      base?: any;
      bodyAttributes?: any;
      children?: React.ReactNode;
      defaultTitle?: string;
      defer?: boolean;
      encodeSpecialCharacters?: boolean;
      htmlAttributes?: any;
      link?: any[];
      meta?: any[];
      noscript?: any[];
      onChangeClientState?: (newState: any, addedTags: any, removedTags: any) => void;
      script?: any[];
      style?: any[];
      title?: string;
      titleAttributes?: any;
      titleTemplate?: string;
    }
  
    export class Helmet extends React.Component<HelmetProps, any> {}
  }
  