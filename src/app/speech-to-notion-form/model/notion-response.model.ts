export interface NotionCreatePageResponse {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: Cover;
  icon: Icon;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

interface User {
  object: string;
  id: string;
}

interface Cover {
  type: string;
  external: External;
}

interface External {
  url: string;
}

interface Icon {
  type: string;
  emoji: string;
}

interface Parent {
  type: string;
  database_id: string;
}

interface Properties {
  'Store availability': Property;
  'Food group': Property;
  Price: Property;
  'Responsible Person': Property;
  'Last ordered': Property;
  'Cost of next trip': Property;
  Recipes: Property;
  Description: Property;
  'In stock': Property;
  'Number of meals': Property;
  Photo: Property;
  Name: Property;
}

interface Property {
  id: string;
}
