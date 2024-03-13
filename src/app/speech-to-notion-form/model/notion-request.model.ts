export interface NotionCreatePageRequest {
  parent: Parent;
  properties: Properties;
  children: Child[];
}

export interface Parent {
  type: string;
  database_id?: string;
  page_id?: string;
}

export interface Properties {
  title: TitleElement[];
}

export interface Type {
  select: Select;
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface Name {
  title: TitleElement[];
}

export interface TitleElement {
  text: Text;
}

export interface Text {
  content: string;
}

export interface Summary {
  rich_text: RichTextElement[];
}

export interface RichTextElement {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any; // Since it can be null
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Read {
  checkbox: boolean;
}

export interface Child {
  object: string;
  type: string;
  heading_2?: Heading2;
  paragraph?: Paragraph;
}

export interface Heading2 {
  rich_text: RichTextElement[];
}

export interface Paragraph {
  rich_text: ParagraphRichTextElement[];
}

export interface ParagraphRichTextElement {
  type: string;
  text: ParagraphText;
}

export interface ParagraphText {
  link?: Link;
  content: string;
}

export interface Link {
  url: string;
}
