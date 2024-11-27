import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
};

export type Audience = _Document & _Linkable & {
  __typename: 'Audience';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type AudienceConnectionConnection = {
  __typename: 'AudienceConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AudienceConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type AudienceConnectionEdge = {
  __typename: 'AudienceConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Audience;
};

export type Blog = _Document & _Linkable & {
  __typename: 'Blog';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type BlogConnectionConnection = {
  __typename: 'BlogConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type BlogConnectionEdge = {
  __typename: 'BlogConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Blog;
};

export type Blog_Post = _Document & _Linkable & {
  __typename: 'Blog_post';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  audience?: Maybe<_Linkable>;
  author?: Maybe<_Linkable>;
  body?: Maybe<Array<Blog_PostBody>>;
  categories?: Maybe<Array<Blog_PostCategories>>;
  date?: Maybe<Scalars['Date']['output']>;
  hero_image?: Maybe<Scalars['Json']['output']>;
  related_links?: Maybe<Array<Blog_PostRelated_Links>>;
  seo_description?: Maybe<Scalars['Json']['output']>;
  seo_title?: Maybe<Scalars['Json']['output']>;
  sidebar_items?: Maybe<Array<Blog_PostSidebar_Items>>;
  summary?: Maybe<Scalars['Json']['output']>;
  thumbnail_image?: Maybe<Scalars['Json']['output']>;
  title?: Maybe<Scalars['Json']['output']>;
};

export type Blog_PostBody = Blog_PostBodyRich_Text | Blog_PostBodyTable;

export type Blog_PostBodyRich_Text = {
  __typename: 'Blog_postBodyRich_text';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Blog_PostBodyRich_TextPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Blog_PostBodyRich_TextPrimary = {
  __typename: 'Blog_postBodyRich_textPrimary';
  body?: Maybe<Scalars['Json']['output']>;
};

export type Blog_PostBodyTable = {
  __typename: 'Blog_postBodyTable';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Blog_PostBodyTablePrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Blog_PostBodyTablePrimary = {
  __typename: 'Blog_postBodyTablePrimary';
  code_block?: Maybe<Scalars['Json']['output']>;
};

export type Blog_PostCategories = {
  __typename: 'Blog_postCategories';
  category?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type Blog_PostConnectionConnection = {
  __typename: 'Blog_postConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Blog_PostConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type Blog_PostConnectionEdge = {
  __typename: 'Blog_postConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Blog_Post;
};

export type Blog_PostRelated_Links = {
  __typename: 'Blog_postRelated_links';
  related_link?: Maybe<_Linkable>;
  related_link_label?: Maybe<Scalars['Json']['output']>;
};

export type Blog_PostSidebar_Items = Blog_PostSidebar_ItemsEmail_Form;

export type Blog_PostSidebar_ItemsEmail_Form = {
  __typename: 'Blog_postSidebar_itemsEmail_form';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Blog_PostSidebar_ItemsEmail_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Blog_PostSidebar_ItemsEmail_FormPrimary = {
  __typename: 'Blog_postSidebar_itemsEmail_formPrimary';
  endpoint_url?: Maybe<_Linkable>;
  sidebar_item_theme?: Maybe<_Linkable>;
  sidebar_item_title?: Maybe<Scalars['Json']['output']>;
};

export type Category = _Document & _Linkable & {
  __typename: 'Category';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  name?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type CategoryConnectionConnection = {
  __typename: 'CategoryConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CategoryConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type CategoryConnectionEdge = {
  __typename: 'CategoryConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
};

export type Customer = _Document & _Linkable & {
  __typename: 'Customer';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  banner_copy?: Maybe<Scalars['Json']['output']>;
  banner_image?: Maybe<Scalars['Json']['output']>;
  body?: Maybe<Scalars['Json']['output']>;
  card_image?: Maybe<Scalars['Json']['output']>;
  card_quote?: Maybe<Scalars['Json']['output']>;
  case_study_pdf?: Maybe<_Linkable>;
  color?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['Json']['output']>;
  has_case_study?: Maybe<Scalars['Boolean']['output']>;
  headline?: Maybe<Scalars['Json']['output']>;
  hero_image?: Maybe<Scalars['Json']['output']>;
  impact?: Maybe<Scalars['Json']['output']>;
  industry?: Maybe<_Linkable>;
  intro?: Maybe<Scalars['Json']['output']>;
  logo?: Maybe<Scalars['Json']['output']>;
  logo_height_basis?: Maybe<Scalars['Float']['output']>;
  logo_white?: Maybe<Scalars['Json']['output']>;
  products?: Maybe<Array<CustomerProducts>>;
  quote_name?: Maybe<Scalars['Json']['output']>;
  quote_title?: Maybe<Scalars['Json']['output']>;
  sidebar_quote?: Maybe<Scalars['Json']['output']>;
  situation?: Maybe<Scalars['Json']['output']>;
  solution?: Maybe<Scalars['Json']['output']>;
  website?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type CustomerConnectionConnection = {
  __typename: 'CustomerConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomerConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type CustomerConnectionEdge = {
  __typename: 'CustomerConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Customer;
};

export type CustomerProducts = {
  __typename: 'CustomerProducts';
  product?: Maybe<_Linkable>;
};

export type Data_Center = _Document & _Linkable & {
  __typename: 'Data_center';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  address?: Maybe<Scalars['Json']['output']>;
  location?: Maybe<Scalars['Json']['output']>;
  name?: Maybe<Scalars['Json']['output']>;
  status_page?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type Data_CenterConnectionConnection = {
  __typename: 'Data_centerConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Data_CenterConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type Data_CenterConnectionEdge = {
  __typename: 'Data_centerConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Data_Center;
};

export type Dynamic_Page = _Document & _Linkable & {
  __typename: 'Dynamic_page';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<Dynamic_PageBody>>;
  title?: Maybe<Scalars['Json']['output']>;
};

export type Dynamic_PageBody = Dynamic_PageBodyCta_Banner | Dynamic_PageBodyEvents_Form | Dynamic_PageBodyEvents_Grid | Dynamic_PageBodyLogo_Carousel_Simple | Dynamic_PageBodyOpen_Source_Members_Grid;

export type Dynamic_PageBodyCta_Banner = {
  __typename: 'Dynamic_pageBodyCta_banner';
  fields?: Maybe<Array<Dynamic_PageBodyCta_BannerFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Dynamic_PageBodyCta_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Dynamic_PageBodyCta_BannerFields = {
  __typename: 'Dynamic_pageBodyCta_bannerFields';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type Dynamic_PageBodyCta_BannerPrimary = {
  __typename: 'Dynamic_pageBodyCta_bannerPrimary';
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
};

export type Dynamic_PageBodyEvents_Form = {
  __typename: 'Dynamic_pageBodyEvents_form';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Dynamic_PageBodyEvents_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Dynamic_PageBodyEvents_FormPrimary = {
  __typename: 'Dynamic_pageBodyEvents_formPrimary';
  section_description?: Maybe<Scalars['Json']['output']>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type Dynamic_PageBodyEvents_Grid = {
  __typename: 'Dynamic_pageBodyEvents_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Dynamic_PageBodyLogo_Carousel_Simple = {
  __typename: 'Dynamic_pageBodyLogo_carousel_simple';
  fields?: Maybe<Array<Dynamic_PageBodyLogo_Carousel_SimpleFields>>;
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Dynamic_PageBodyLogo_Carousel_SimpleFields = {
  __typename: 'Dynamic_pageBodyLogo_carousel_simpleFields';
  section_logo_image?: Maybe<Scalars['Json']['output']>;
  section_logo_link?: Maybe<_Linkable>;
};

export type Dynamic_PageBodyOpen_Source_Members_Grid = {
  __typename: 'Dynamic_pageBodyOpen_source_members_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type Dynamic_PageConnectionConnection = {
  __typename: 'Dynamic_pageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Dynamic_PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type Dynamic_PageConnectionEdge = {
  __typename: 'Dynamic_pageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Dynamic_Page;
};

export type Event = _Document & _Linkable & {
  __typename: 'Event';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  cta_label?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Date']['output']>;
  event_region?: Maybe<Scalars['String']['output']>;
  event_type?: Maybe<_Linkable>;
  image?: Maybe<Scalars['Json']['output']>;
  link?: Maybe<_Linkable>;
  location?: Maybe<Scalars['Json']['output']>;
  location_label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['Json']['output']>;
  speaker_name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['Date']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type EventConnectionConnection = {
  __typename: 'EventConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EventConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type EventConnectionEdge = {
  __typename: 'EventConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Event;
};

export type Event_Type = _Document & _Linkable & {
  __typename: 'Event_type';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  title?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type Event_TypeConnectionConnection = {
  __typename: 'Event_typeConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Event_TypeConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type Event_TypeConnectionEdge = {
  __typename: 'Event_typeConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Event_Type;
};

export type Form = _Document & _Linkable & {
  __typename: 'Form';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<FormBody>>;
  endpoint?: Maybe<_Linkable>;
  form_audience?: Maybe<_Linkable>;
  form_name?: Maybe<Scalars['Json']['output']>;
  form_type?: Maybe<Scalars['String']['output']>;
};

export type FormBody = FormBodyCheckbox | FormBodyRadio | FormBodySelect | FormBodyText | FormBodyTextarea;

export type FormBodyCheckbox = {
  __typename: 'FormBodyCheckbox';
  fields?: Maybe<Array<FormBodyCheckboxFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<FormBodyCheckboxPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FormBodyCheckboxFields = {
  __typename: 'FormBodyCheckboxFields';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FormBodyCheckboxPrimary = {
  __typename: 'FormBodyCheckboxPrimary';
  label?: Maybe<Scalars['Json']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type FormBodyRadio = {
  __typename: 'FormBodyRadio';
  fields?: Maybe<Array<FormBodyRadioFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<FormBodyRadioPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FormBodyRadioFields = {
  __typename: 'FormBodyRadioFields';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FormBodyRadioPrimary = {
  __typename: 'FormBodyRadioPrimary';
  label?: Maybe<Scalars['Json']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type FormBodySelect = {
  __typename: 'FormBodySelect';
  fields?: Maybe<Array<FormBodySelectFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<FormBodySelectPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FormBodySelectFields = {
  __typename: 'FormBodySelectFields';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FormBodySelectPrimary = {
  __typename: 'FormBodySelectPrimary';
  default_label?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['Json']['output']>;
  multi_select?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type FormBodyText = {
  __typename: 'FormBodyText';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<FormBodyTextPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FormBodyTextPrimary = {
  __typename: 'FormBodyTextPrimary';
  label?: Maybe<Scalars['Json']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FormBodyTextarea = {
  __typename: 'FormBodyTextarea';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<FormBodyTextareaPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FormBodyTextareaPrimary = {
  __typename: 'FormBodyTextareaPrimary';
  label?: Maybe<Scalars['Json']['output']>;
  max_height?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
};

/** A connection to a list of items. */
export type FormConnectionConnection = {
  __typename: 'FormConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FormConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type FormConnectionEdge = {
  __typename: 'FormConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Form;
};

export type Global = _Document & _Linkable & {
  __typename: 'Global';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  footer_macstadium?: Maybe<Array<GlobalFooter_Macstadium>>;
  footer_products?: Maybe<Array<GlobalFooter_Products>>;
  footer_support?: Maybe<Array<GlobalFooter_Support>>;
  global_banner_link?: Maybe<_Linkable>;
  global_banner_text?: Maybe<Scalars['Json']['output']>;
  locations?: Maybe<Array<GlobalLocations>>;
  site_name?: Maybe<Scalars['Json']['output']>;
  social_media?: Maybe<Array<GlobalSocial_Media>>;
};

/** A connection to a list of items. */
export type GlobalConnectionConnection = {
  __typename: 'GlobalConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GlobalConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type GlobalConnectionEdge = {
  __typename: 'GlobalConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Global;
};

export type GlobalFooter_Macstadium = {
  __typename: 'GlobalFooter_macstadium';
  link?: Maybe<_Linkable>;
  title_override?: Maybe<Scalars['String']['output']>;
};

export type GlobalFooter_Products = {
  __typename: 'GlobalFooter_products';
  link?: Maybe<_Linkable>;
  title_override?: Maybe<Scalars['String']['output']>;
};

export type GlobalFooter_Support = {
  __typename: 'GlobalFooter_support';
  link?: Maybe<_Linkable>;
  title_override?: Maybe<Scalars['String']['output']>;
};

export type GlobalLocations = {
  __typename: 'GlobalLocations';
  hq?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<_Linkable>;
  title_override?: Maybe<Scalars['String']['output']>;
};

export type GlobalSocial_Media = {
  __typename: 'GlobalSocial_media';
  show_on_website?: Maybe<Scalars['Boolean']['output']>;
  social_media_icon?: Maybe<Scalars['String']['output']>;
  social_media_link?: Maybe<_Linkable>;
  social_media_name?: Maybe<Scalars['String']['output']>;
};

export type Home = _Document & _Linkable & {
  __typename: 'Home';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<HomeBody>>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_description_max_width?: Maybe<Scalars['Float']['output']>;
  hero_metrics?: Maybe<Array<HomeHero_Metrics>>;
  hero_rotator?: Maybe<Array<HomeHero_Rotator>>;
  hero_slider?: Maybe<Array<HomeHero_Slider>>;
  hero_title?: Maybe<Scalars['Json']['output']>;
  home_hero_cards?: Maybe<Array<HomeHome_Hero_Cards>>;
  primary_cta_label?: Maybe<Scalars['String']['output']>;
  primary_cta_link?: Maybe<_Linkable>;
  primary_cta_segment_audience?: Maybe<_Linkable>;
  secondary_cta_label?: Maybe<Scalars['String']['output']>;
  secondary_cta_link?: Maybe<_Linkable>;
  secondary_cta_segment_audience?: Maybe<_Linkable>;
};

export type HomeBody = HomeBody5050 | HomeBody5050_Form | HomeBodyCase_Study_Banner | HomeBodyCase_Study_Carousel | HomeBodyComparison_Cards | HomeBodyContent_Carousel | HomeBodyCta_Banner | HomeBodyEmbed_Code_Snippet | HomeBodyEvents_Grid | HomeBodyFaq | HomeBodyFeature_Grid | HomeBodyFull_Width_Form | HomeBodyFull_Width_Image | HomeBodyFull_Width_Video | HomeBodyGradient_Image_Tabs | HomeBodyImage_Intro_Features | HomeBodyLogo_Party | HomeBodyOpen_Source_Members_Grid | HomeBodyPricing_Cards | HomeBodyRecent_Blogs | HomeBodyStandalone_Heading | HomeBodyTestimonial_Carousel | HomeBodyThree_Part_Cta | HomeBodyWidget_Grid;

export type HomeBody5050 = {
  __typename: 'HomeBody5050';
  fields?: Maybe<Array<HomeBody5050Fields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBody5050Primary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBody5050Fields = {
  __typename: 'HomeBody5050Fields';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBody5050Primary = {
  __typename: 'HomeBody5050Primary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  image_link?: Maybe<_Linkable>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBody5050_Form = {
  __typename: 'HomeBody5050_form';
  fields?: Maybe<Array<HomeBody5050_FormFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBody5050_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBody5050_FormFields = {
  __typename: 'HomeBody5050_formFields';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBody5050_FormPrimary = {
  __typename: 'HomeBody5050_formPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_form?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyCase_Study_Banner = {
  __typename: 'HomeBodyCase_study_banner';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyCase_Study_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyCase_Study_BannerPrimary = {
  __typename: 'HomeBodyCase_study_bannerPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<_Linkable>;
  section_foreground_theme?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type HomeBodyCase_Study_Carousel = {
  __typename: 'HomeBodyCase_study_carousel';
  fields?: Maybe<Array<HomeBodyCase_Study_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyCase_Study_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyCase_Study_CarouselFields = {
  __typename: 'HomeBodyCase_study_carouselFields';
  customer?: Maybe<_Linkable>;
};

export type HomeBodyCase_Study_CarouselPrimary = {
  __typename: 'HomeBodyCase_study_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_industry?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyComparison_Cards = {
  __typename: 'HomeBodyComparison_cards';
  fields?: Maybe<Array<HomeBodyComparison_CardsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyComparison_CardsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyComparison_CardsFields = {
  __typename: 'HomeBodyComparison_cardsFields';
  card_body?: Maybe<Scalars['Json']['output']>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_segment_cta_1_audience?: Maybe<_Linkable>;
  section_segment_cta_2_audience?: Maybe<_Linkable>;
};

export type HomeBodyComparison_CardsPrimary = {
  __typename: 'HomeBodyComparison_cardsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  bullet_icon?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
};

export type HomeBodyContent_Carousel = {
  __typename: 'HomeBodyContent_carousel';
  fields?: Maybe<Array<HomeBodyContent_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyContent_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyContent_CarouselFields = {
  __typename: 'HomeBodyContent_carouselFields';
  section_card_description?: Maybe<Scalars['Json']['output']>;
  section_card_image?: Maybe<Scalars['Json']['output']>;
  section_card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyContent_CarouselPrimary = {
  __typename: 'HomeBodyContent_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyCta_Banner = {
  __typename: 'HomeBodyCta_banner';
  fields?: Maybe<Array<HomeBodyCta_BannerFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyCta_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyCta_BannerFields = {
  __typename: 'HomeBodyCta_bannerFields';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyCta_BannerPrimary = {
  __typename: 'HomeBodyCta_bannerPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyEmbed_Code_Snippet = {
  __typename: 'HomeBodyEmbed_code_snippet';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyEmbed_Code_SnippetPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyEmbed_Code_SnippetPrimary = {
  __typename: 'HomeBodyEmbed_code_snippetPrimary';
  section_code?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyEvents_Grid = {
  __typename: 'HomeBodyEvents_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyFaq = {
  __typename: 'HomeBodyFaq';
  fields?: Maybe<Array<HomeBodyFaqFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyFaqPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyFaqFields = {
  __typename: 'HomeBodyFaqFields';
  answer?: Maybe<Scalars['Json']['output']>;
  question?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyFaqPrimary = {
  __typename: 'HomeBodyFaqPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyFeature_Grid = {
  __typename: 'HomeBodyFeature_grid';
  fields?: Maybe<Array<HomeBodyFeature_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyFeature_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyFeature_GridFields = {
  __typename: 'HomeBodyFeature_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyFeature_GridPrimary = {
  __typename: 'HomeBodyFeature_gridPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  style?: Maybe<Scalars['Boolean']['output']>;
};

export type HomeBodyFull_Width_Form = {
  __typename: 'HomeBodyFull_width_form';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyFull_Width_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyFull_Width_FormPrimary = {
  __typename: 'HomeBodyFull_width_formPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  linked_form?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type HomeBodyFull_Width_Image = {
  __typename: 'HomeBodyFull_width_image';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyFull_Width_ImagePrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyFull_Width_ImagePrimary = {
  __typename: 'HomeBodyFull_width_imagePrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyFull_Width_Video = {
  __typename: 'HomeBodyFull_width_video';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyFull_Width_VideoPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyFull_Width_VideoPrimary = {
  __typename: 'HomeBodyFull_width_videoPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  embed?: Maybe<Scalars['Json']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyGradient_Image_Tabs = {
  __typename: 'HomeBodyGradient_image_tabs';
  fields?: Maybe<Array<HomeBodyGradient_Image_TabsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyGradient_Image_TabsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyGradient_Image_TabsFields = {
  __typename: 'HomeBodyGradient_image_tabsFields';
  section_tab_description?: Maybe<Scalars['Json']['output']>;
  section_tab_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyGradient_Image_TabsPrimary = {
  __typename: 'HomeBodyGradient_image_tabsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyImage_Intro_Features = {
  __typename: 'HomeBodyImage_intro_features';
  fields?: Maybe<Array<HomeBodyImage_Intro_FeaturesFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyImage_Intro_FeaturesPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyImage_Intro_FeaturesFields = {
  __typename: 'HomeBodyImage_intro_featuresFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyImage_Intro_FeaturesPrimary = {
  __typename: 'HomeBodyImage_intro_featuresPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyLogo_Party = {
  __typename: 'HomeBodyLogo_party';
  fields?: Maybe<Array<HomeBodyLogo_PartyFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyLogo_PartyPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyLogo_PartyFields = {
  __typename: 'HomeBodyLogo_partyFields';
  logo?: Maybe<Scalars['Json']['output']>;
  logo_link?: Maybe<_Linkable>;
};

export type HomeBodyLogo_PartyPrimary = {
  __typename: 'HomeBodyLogo_partyPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyOpen_Source_Members_Grid = {
  __typename: 'HomeBodyOpen_source_members_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyPricing_Cards = {
  __typename: 'HomeBodyPricing_cards';
  fields?: Maybe<Array<HomeBodyPricing_CardsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyPricing_CardsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyPricing_CardsFields = {
  __typename: 'HomeBodyPricing_cardsFields';
  card_annual_price?: Maybe<Scalars['Json']['output']>;
  card_body?: Maybe<Scalars['Json']['output']>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_monthly_price?: Maybe<Scalars['Json']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_segment_cta_1_audience?: Maybe<_Linkable>;
  section_segment_cta_2_audience?: Maybe<_Linkable>;
};

export type HomeBodyPricing_CardsPrimary = {
  __typename: 'HomeBodyPricing_cardsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  bullet_icon?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
};

export type HomeBodyRecent_Blogs = {
  __typename: 'HomeBodyRecent_blogs';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyRecent_BlogsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyRecent_BlogsPrimary = {
  __typename: 'HomeBodyRecent_blogsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type HomeBodyStandalone_Heading = {
  __typename: 'HomeBodyStandalone_heading';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyStandalone_HeadingPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyStandalone_HeadingPrimary = {
  __typename: 'HomeBodyStandalone_headingPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  section_title_max_width?: Maybe<Scalars['Float']['output']>;
  title_theme?: Maybe<_Linkable>;
};

export type HomeBodyTestimonial_Carousel = {
  __typename: 'HomeBodyTestimonial_carousel';
  fields?: Maybe<Array<HomeBodyTestimonial_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyTestimonial_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyTestimonial_CarouselFields = {
  __typename: 'HomeBodyTestimonial_carouselFields';
  testimonial_author?: Maybe<Scalars['Json']['output']>;
  testimonial_company?: Maybe<Scalars['String']['output']>;
  testimonial_image?: Maybe<Scalars['Json']['output']>;
  testimonial_job_title?: Maybe<Scalars['String']['output']>;
  testimonial_quote?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyTestimonial_CarouselPrimary = {
  __typename: 'HomeBodyTestimonial_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
};

export type HomeBodyThree_Part_Cta = {
  __typename: 'HomeBodyThree_part_cta';
  fields?: Maybe<Array<HomeBodyThree_Part_CtaFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyThree_Part_CtaPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyThree_Part_CtaFields = {
  __typename: 'HomeBodyThree_part_ctaFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type HomeBodyThree_Part_CtaPrimary = {
  __typename: 'HomeBodyThree_part_ctaPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_1_audience?: Maybe<_Linkable>;
  segment_cta_2_audience?: Maybe<_Linkable>;
};

export type HomeBodyWidget_Grid = {
  __typename: 'HomeBodyWidget_grid';
  fields?: Maybe<Array<HomeBodyWidget_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<HomeBodyWidget_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HomeBodyWidget_GridFields = {
  __typename: 'HomeBodyWidget_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_segment_cta_audience?: Maybe<_Linkable>;
};

export type HomeBodyWidget_GridPrimary = {
  __typename: 'HomeBodyWidget_gridPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type HomeConnectionConnection = {
  __typename: 'HomeConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomeConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type HomeConnectionEdge = {
  __typename: 'HomeConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Home;
};

export type HomeHero_Metrics = {
  __typename: 'HomeHero_metrics';
  metric_label?: Maybe<Scalars['String']['output']>;
  metric_value?: Maybe<Scalars['Json']['output']>;
};

export type HomeHero_Rotator = {
  __typename: 'HomeHero_rotator';
  hero_rotator_text?: Maybe<Scalars['Json']['output']>;
};

export type HomeHero_Slider = {
  __typename: 'HomeHero_slider';
  hero_slide_cta_link?: Maybe<_Linkable>;
  hero_slide_desktop?: Maybe<Scalars['Json']['output']>;
  hero_slide_mobile?: Maybe<Scalars['Json']['output']>;
};

export type HomeHome_Hero_Cards = {
  __typename: 'HomeHome_hero_cards';
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_link?: Maybe<_Linkable>;
  cta_segment_audience?: Maybe<_Linkable>;
  description?: Maybe<Scalars['Json']['output']>;
  image?: Maybe<Scalars['Json']['output']>;
  title?: Maybe<Scalars['Json']['output']>;
};

export type Industry = _Document & _Linkable & {
  __typename: 'Industry';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<IndustryBody>>;
  hero?: Maybe<Array<IndustryHero>>;
  industry_icon?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Array<IndustryKeywords>>;
  page_audience?: Maybe<_Linkable>;
  seo_title?: Maybe<Scalars['Json']['output']>;
  title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBody = IndustryBody5050 | IndustryBodyCase_Study_Banner | IndustryBodyCase_Study_Carousel | IndustryBodyComparison_Cards | IndustryBodyContent_Carousel | IndustryBodyCta_Banner | IndustryBodyEmbed_Code_Snippet | IndustryBodyFaq | IndustryBodyFeature_Grid | IndustryBodyFull_Width_Image | IndustryBodyFull_Width_Video | IndustryBodyGradient_Image_Tabs | IndustryBodyImage_Intro_Features | IndustryBodyLogo_Party | IndustryBodyStandalone_Heading | IndustryBodyTestimonial_Carousel | IndustryBodyThree_Part_Cta | IndustryBodyWidget_Grid;

export type IndustryBody5050 = {
  __typename: 'IndustryBody5050';
  fields?: Maybe<Array<IndustryBody5050Fields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBody5050Primary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBody5050Fields = {
  __typename: 'IndustryBody5050Fields';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBody5050Primary = {
  __typename: 'IndustryBody5050Primary';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyCase_Study_Banner = {
  __typename: 'IndustryBodyCase_study_banner';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyCase_Study_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyCase_Study_BannerPrimary = {
  __typename: 'IndustryBodyCase_study_bannerPrimary';
  customer?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type IndustryBodyCase_Study_Carousel = {
  __typename: 'IndustryBodyCase_study_carousel';
  fields?: Maybe<Array<IndustryBodyCase_Study_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyCase_Study_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyCase_Study_CarouselFields = {
  __typename: 'IndustryBodyCase_study_carouselFields';
  customer?: Maybe<_Linkable>;
};

export type IndustryBodyCase_Study_CarouselPrimary = {
  __typename: 'IndustryBodyCase_study_carouselPrimary';
  section_industry?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyComparison_Cards = {
  __typename: 'IndustryBodyComparison_cards';
  fields?: Maybe<Array<IndustryBodyComparison_CardsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyComparison_CardsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyComparison_CardsFields = {
  __typename: 'IndustryBodyComparison_cardsFields';
  card_body?: Maybe<Scalars['Json']['output']>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_segment_cta_1_audience?: Maybe<_Linkable>;
  section_segment_cta_1_intent?: Maybe<Scalars['String']['output']>;
  section_segment_cta_2_audience?: Maybe<_Linkable>;
  section_segment_cta_2_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyComparison_CardsPrimary = {
  __typename: 'IndustryBodyComparison_cardsPrimary';
  bullet_icon?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyContent_Carousel = {
  __typename: 'IndustryBodyContent_carousel';
  fields?: Maybe<Array<IndustryBodyContent_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyContent_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyContent_CarouselFields = {
  __typename: 'IndustryBodyContent_carouselFields';
  section_card_description?: Maybe<Scalars['Json']['output']>;
  section_card_image?: Maybe<Scalars['Json']['output']>;
  section_card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyContent_CarouselPrimary = {
  __typename: 'IndustryBodyContent_carouselPrimary';
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyCta_Banner = {
  __typename: 'IndustryBodyCta_banner';
  fields?: Maybe<Array<IndustryBodyCta_BannerFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyCta_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyCta_BannerFields = {
  __typename: 'IndustryBodyCta_bannerFields';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyCta_BannerPrimary = {
  __typename: 'IndustryBodyCta_bannerPrimary';
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyEmbed_Code_Snippet = {
  __typename: 'IndustryBodyEmbed_code_snippet';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyEmbed_Code_SnippetPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyEmbed_Code_SnippetPrimary = {
  __typename: 'IndustryBodyEmbed_code_snippetPrimary';
  section_code?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyFaq = {
  __typename: 'IndustryBodyFaq';
  fields?: Maybe<Array<IndustryBodyFaqFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyFaqPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyFaqFields = {
  __typename: 'IndustryBodyFaqFields';
  answer?: Maybe<Scalars['Json']['output']>;
  question?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyFaqPrimary = {
  __typename: 'IndustryBodyFaqPrimary';
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyFeature_Grid = {
  __typename: 'IndustryBodyFeature_grid';
  fields?: Maybe<Array<IndustryBodyFeature_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyFeature_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyFeature_GridFields = {
  __typename: 'IndustryBodyFeature_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyFeature_GridPrimary = {
  __typename: 'IndustryBodyFeature_gridPrimary';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['Boolean']['output']>;
};

export type IndustryBodyFull_Width_Image = {
  __typename: 'IndustryBodyFull_width_image';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyFull_Width_ImagePrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyFull_Width_ImagePrimary = {
  __typename: 'IndustryBodyFull_width_imagePrimary';
  dark_text?: Maybe<Scalars['Boolean']['output']>;
  overlay_position?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_height?: Maybe<Scalars['Float']['output']>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyFull_Width_Video = {
  __typename: 'IndustryBodyFull_width_video';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyFull_Width_VideoPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyFull_Width_VideoPrimary = {
  __typename: 'IndustryBodyFull_width_videoPrimary';
  embed?: Maybe<Scalars['Json']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyGradient_Image_Tabs = {
  __typename: 'IndustryBodyGradient_image_tabs';
  fields?: Maybe<Array<IndustryBodyGradient_Image_TabsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyGradient_Image_TabsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyGradient_Image_TabsFields = {
  __typename: 'IndustryBodyGradient_image_tabsFields';
  section_tab_description?: Maybe<Scalars['Json']['output']>;
  section_tab_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyGradient_Image_TabsPrimary = {
  __typename: 'IndustryBodyGradient_image_tabsPrimary';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyImage_Intro_Features = {
  __typename: 'IndustryBodyImage_intro_features';
  fields?: Maybe<Array<IndustryBodyImage_Intro_FeaturesFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyImage_Intro_FeaturesPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyImage_Intro_FeaturesFields = {
  __typename: 'IndustryBodyImage_intro_featuresFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyImage_Intro_FeaturesPrimary = {
  __typename: 'IndustryBodyImage_intro_featuresPrimary';
  section_description?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyLogo_Party = {
  __typename: 'IndustryBodyLogo_party';
  fields?: Maybe<Array<IndustryBodyLogo_PartyFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyLogo_PartyPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyLogo_PartyFields = {
  __typename: 'IndustryBodyLogo_partyFields';
  customer?: Maybe<_Linkable>;
};

export type IndustryBodyLogo_PartyPrimary = {
  __typename: 'IndustryBodyLogo_partyPrimary';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyStandalone_Heading = {
  __typename: 'IndustryBodyStandalone_heading';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyStandalone_HeadingPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyStandalone_HeadingPrimary = {
  __typename: 'IndustryBodyStandalone_headingPrimary';
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  title_theme?: Maybe<_Linkable>;
};

export type IndustryBodyTestimonial_Carousel = {
  __typename: 'IndustryBodyTestimonial_carousel';
  fields?: Maybe<Array<IndustryBodyTestimonial_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyTestimonial_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyTestimonial_CarouselFields = {
  __typename: 'IndustryBodyTestimonial_carouselFields';
  testimonial_author?: Maybe<Scalars['Json']['output']>;
  testimonial_company?: Maybe<Scalars['String']['output']>;
  testimonial_image?: Maybe<Scalars['Json']['output']>;
  testimonial_job_title?: Maybe<Scalars['String']['output']>;
  testimonial_quote?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyTestimonial_CarouselPrimary = {
  __typename: 'IndustryBodyTestimonial_carouselPrimary';
  section_theme?: Maybe<_Linkable>;
};

export type IndustryBodyThree_Part_Cta = {
  __typename: 'IndustryBodyThree_part_cta';
  fields?: Maybe<Array<IndustryBodyThree_Part_CtaFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyThree_Part_CtaPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyThree_Part_CtaFields = {
  __typename: 'IndustryBodyThree_part_ctaFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type IndustryBodyThree_Part_CtaPrimary = {
  __typename: 'IndustryBodyThree_part_ctaPrimary';
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_icon_theme?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_1_audience?: Maybe<_Linkable>;
  segment_cta_1_intent?: Maybe<Scalars['String']['output']>;
  segment_cta_2_audience?: Maybe<_Linkable>;
  segment_cta_2_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyWidget_Grid = {
  __typename: 'IndustryBodyWidget_grid';
  fields?: Maybe<Array<IndustryBodyWidget_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryBodyWidget_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyWidget_GridFields = {
  __typename: 'IndustryBodyWidget_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_segment_cta_audience?: Maybe<_Linkable>;
  section_segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryBodyWidget_GridPrimary = {
  __typename: 'IndustryBodyWidget_gridPrimary';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  segment_cta_intent?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type IndustryConnectionConnection = {
  __typename: 'IndustryConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IndustryConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type IndustryConnectionEdge = {
  __typename: 'IndustryConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Industry;
};

export type IndustryHero = IndustryHeroFeature_Hero | IndustryHeroStandard_Hero;

export type IndustryHeroFeature_Hero = {
  __typename: 'IndustryHeroFeature_hero';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryHeroFeature_HeroPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryHeroFeature_HeroPrimary = {
  __typename: 'IndustryHeroFeature_heroPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_image?: Maybe<Scalars['Json']['output']>;
  hero_primary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_primary_cta_url?: Maybe<_Linkable>;
  hero_secondary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_secondary_cta_url?: Maybe<_Linkable>;
  hero_theme?: Maybe<_Linkable>;
  segment_primary_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_primary_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_primary_cta_audience?: Maybe<_Linkable>;
  segment_primary_cta_intent?: Maybe<Scalars['String']['output']>;
  segment_secondary_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_secondary_campaign_name?: Maybe<Scalars['String']['output']>;
  segment_secondary_cta_audience?: Maybe<_Linkable>;
  segment_secondary_cta_intent?: Maybe<Scalars['String']['output']>;
};

export type IndustryHeroStandard_Hero = {
  __typename: 'IndustryHeroStandard_hero';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<IndustryHeroStandard_HeroPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IndustryHeroStandard_HeroPrimary = {
  __typename: 'IndustryHeroStandard_heroPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_background?: Maybe<Scalars['Json']['output']>;
  hero_box_image?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_theme?: Maybe<_Linkable>;
};

export type IndustryKeywords = {
  __typename: 'IndustryKeywords';
  keyword?: Maybe<Scalars['String']['output']>;
};

export type Meta = {
  __typename: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']['output']>;
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']['output']>;
};

export type Navigation = _Document & _Linkable & {
  __typename: 'Navigation';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<NavigationBody>>;
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_link?: Maybe<_Linkable>;
  logo?: Maybe<Scalars['Json']['output']>;
};

export type NavigationBody = NavigationBodyNavigation_Dropdown | NavigationBodyNavigation_Link | NavigationBodySearch_Dropdown;

export type NavigationBodyNavigation_Dropdown = {
  __typename: 'NavigationBodyNavigation_dropdown';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<NavigationBodyNavigation_DropdownPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type NavigationBodyNavigation_DropdownPrimary = {
  __typename: 'NavigationBodyNavigation_dropdownPrimary';
  dropdown_label?: Maybe<Scalars['String']['output']>;
  navigation_dropdown?: Maybe<_Linkable>;
};

export type NavigationBodyNavigation_Link = {
  __typename: 'NavigationBodyNavigation_link';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<NavigationBodyNavigation_LinkPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type NavigationBodyNavigation_LinkPrimary = {
  __typename: 'NavigationBodyNavigation_linkPrimary';
  link?: Maybe<_Linkable>;
  link_label?: Maybe<Scalars['String']['output']>;
};

export type NavigationBodySearch_Dropdown = {
  __typename: 'NavigationBodySearch_dropdown';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type NavigationConnectionConnection = {
  __typename: 'NavigationConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NavigationConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type NavigationConnectionEdge = {
  __typename: 'NavigationConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

export type Navigation_Dropdown = _Document & _Linkable & {
  __typename: 'Navigation_dropdown';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<Navigation_DropdownBody>>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_link?: Maybe<_Linkable>;
  card_link_label?: Maybe<Scalars['String']['output']>;
  card_theme?: Maybe<Scalars['String']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
};

export type Navigation_DropdownBody = Navigation_DropdownBodyColumn_Links | Navigation_DropdownBodyNested_Column_Links | Navigation_DropdownBodySearch;

export type Navigation_DropdownBodyColumn_Links = {
  __typename: 'Navigation_dropdownBodyColumn_links';
  fields?: Maybe<Array<Navigation_DropdownBodyColumn_LinksFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Navigation_DropdownBodyColumn_LinksPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Navigation_DropdownBodyColumn_LinksFields = {
  __typename: 'Navigation_dropdownBodyColumn_linksFields';
  link?: Maybe<_Linkable>;
  link_icon?: Maybe<Scalars['String']['output']>;
  link_label?: Maybe<Scalars['String']['output']>;
};

export type Navigation_DropdownBodyColumn_LinksPrimary = {
  __typename: 'Navigation_dropdownBodyColumn_linksPrimary';
  border?: Maybe<Scalars['Boolean']['output']>;
  column_label?: Maybe<Scalars['String']['output']>;
  columns_span?: Maybe<Scalars['String']['output']>;
};

export type Navigation_DropdownBodyNested_Column_Links = {
  __typename: 'Navigation_dropdownBodyNested_column_links';
  fields?: Maybe<Array<Navigation_DropdownBodyNested_Column_LinksFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Navigation_DropdownBodyNested_Column_LinksPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Navigation_DropdownBodyNested_Column_LinksFields = {
  __typename: 'Navigation_dropdownBodyNested_column_linksFields';
  nested_link?: Maybe<_Linkable>;
  nested_link_label?: Maybe<Scalars['String']['output']>;
};

export type Navigation_DropdownBodyNested_Column_LinksPrimary = {
  __typename: 'Navigation_dropdownBodyNested_column_linksPrimary';
  main_link?: Maybe<_Linkable>;
  main_link_description?: Maybe<Scalars['String']['output']>;
  main_link_label?: Maybe<Scalars['String']['output']>;
};

export type Navigation_DropdownBodySearch = {
  __typename: 'Navigation_dropdownBodySearch';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type Navigation_DropdownConnectionConnection = {
  __typename: 'Navigation_dropdownConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Navigation_DropdownConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type Navigation_DropdownConnectionEdge = {
  __typename: 'Navigation_dropdownConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation_Dropdown;
};

export type Near = {
  dist: Scalars['Int']['input'];
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type News = _Document & _Linkable & {
  __typename: 'News';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  award?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['Json']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  hero_image?: Maybe<Scalars['Json']['output']>;
  intro?: Maybe<Scalars['Json']['output']>;
  link?: Maybe<_Linkable>;
  logo?: Maybe<Scalars['Json']['output']>;
  news_item?: Maybe<Scalars['Boolean']['output']>;
  press_release?: Maybe<Scalars['Boolean']['output']>;
  quote?: Maybe<Scalars['Json']['output']>;
  title?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type NewsConnectionConnection = {
  __typename: 'NewsConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NewsConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type NewsConnectionEdge = {
  __typename: 'NewsConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: News;
};

export type Open_Source_Member = _Document & _Linkable & {
  __typename: 'Open_source_member';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  app_category?: Maybe<Scalars['String']['output']>;
  data_centers?: Maybe<Array<Open_Source_MemberData_Centers>>;
  description?: Maybe<Scalars['Json']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['Json']['output']>;
  name?: Maybe<Scalars['Json']['output']>;
  website?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type Open_Source_MemberConnectionConnection = {
  __typename: 'Open_source_memberConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Open_Source_MemberConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type Open_Source_MemberConnectionEdge = {
  __typename: 'Open_source_memberConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Open_Source_Member;
};

export type Open_Source_MemberData_Centers = {
  __typename: 'Open_source_memberData_centers';
  data_center?: Maybe<_Linkable>;
};

export type Page = _Document & _Linkable & {
  __typename: 'Page';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<PageBody>>;
  hero?: Maybe<Array<PageHero>>;
  keywords?: Maybe<Array<PageKeywords>>;
  og_image_override?: Maybe<Scalars['Json']['output']>;
  page_audience?: Maybe<_Linkable>;
  seo_description?: Maybe<Scalars['Json']['output']>;
  seo_title?: Maybe<Scalars['Json']['output']>;
  title?: Maybe<Scalars['Json']['output']>;
};

export type PageBody = PageBody5050 | PageBody5050_Form | PageBodyCase_Study_Banner | PageBodyCase_Study_Carousel | PageBodyComparison_Cards | PageBodyContent_Carousel | PageBodyCta_Banner | PageBodyEmbed_Code_Snippet | PageBodyEvents_Grid | PageBodyFaq | PageBodyFeature_Grid | PageBodyFull_Width_Form | PageBodyFull_Width_Image | PageBodyFull_Width_Video | PageBodyGradient_Image_Tabs | PageBodyImage_Intro_Features | PageBodyLogo_Party | PageBodyOpen_Source_Members_Grid | PageBodyPricing_Cards | PageBodyRecent_Blogs | PageBodyStandalone_Heading | PageBodyTestimonial_Carousel | PageBodyThree_Part_Cta | PageBodyWidget_Grid;

export type PageBody5050 = {
  __typename: 'PageBody5050';
  fields?: Maybe<Array<PageBody5050Fields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBody5050Primary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBody5050Fields = {
  __typename: 'PageBody5050Fields';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBody5050Primary = {
  __typename: 'PageBody5050Primary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  image_link?: Maybe<_Linkable>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBody5050_Form = {
  __typename: 'PageBody5050_form';
  fields?: Maybe<Array<PageBody5050_FormFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBody5050_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBody5050_FormFields = {
  __typename: 'PageBody5050_formFields';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBody5050_FormPrimary = {
  __typename: 'PageBody5050_formPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_form?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyCase_Study_Banner = {
  __typename: 'PageBodyCase_study_banner';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyCase_Study_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyCase_Study_BannerPrimary = {
  __typename: 'PageBodyCase_study_bannerPrimary';
  customer?: Maybe<_Linkable>;
  section_foreground_theme?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type PageBodyCase_Study_Carousel = {
  __typename: 'PageBodyCase_study_carousel';
  fields?: Maybe<Array<PageBodyCase_Study_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyCase_Study_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyCase_Study_CarouselFields = {
  __typename: 'PageBodyCase_study_carouselFields';
  customer?: Maybe<_Linkable>;
};

export type PageBodyCase_Study_CarouselPrimary = {
  __typename: 'PageBodyCase_study_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_industry?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyComparison_Cards = {
  __typename: 'PageBodyComparison_cards';
  fields?: Maybe<Array<PageBodyComparison_CardsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyComparison_CardsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyComparison_CardsFields = {
  __typename: 'PageBodyComparison_cardsFields';
  card_body?: Maybe<Scalars['Json']['output']>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_segment_cta_1_audience?: Maybe<_Linkable>;
  section_segment_cta_2_audience?: Maybe<_Linkable>;
};

export type PageBodyComparison_CardsPrimary = {
  __typename: 'PageBodyComparison_cardsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  bullet_icon?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
  with_bullet_icon?: Maybe<Scalars['Boolean']['output']>;
};

export type PageBodyContent_Carousel = {
  __typename: 'PageBodyContent_carousel';
  fields?: Maybe<Array<PageBodyContent_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyContent_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyContent_CarouselFields = {
  __typename: 'PageBodyContent_carouselFields';
  section_card_description?: Maybe<Scalars['Json']['output']>;
  section_card_image?: Maybe<Scalars['Json']['output']>;
  section_card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyContent_CarouselPrimary = {
  __typename: 'PageBodyContent_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyCta_Banner = {
  __typename: 'PageBodyCta_banner';
  fields?: Maybe<Array<PageBodyCta_BannerFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyCta_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyCta_BannerFields = {
  __typename: 'PageBodyCta_bannerFields';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyCta_BannerPrimary = {
  __typename: 'PageBodyCta_bannerPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
};

export type PageBodyEmbed_Code_Snippet = {
  __typename: 'PageBodyEmbed_code_snippet';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyEmbed_Code_SnippetPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyEmbed_Code_SnippetPrimary = {
  __typename: 'PageBodyEmbed_code_snippetPrimary';
  section_code?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyEvents_Grid = {
  __typename: 'PageBodyEvents_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyFaq = {
  __typename: 'PageBodyFaq';
  fields?: Maybe<Array<PageBodyFaqFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyFaqPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyFaqFields = {
  __typename: 'PageBodyFaqFields';
  answer?: Maybe<Scalars['Json']['output']>;
  question?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyFaqPrimary = {
  __typename: 'PageBodyFaqPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyFeature_Grid = {
  __typename: 'PageBodyFeature_grid';
  fields?: Maybe<Array<PageBodyFeature_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyFeature_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyFeature_GridFields = {
  __typename: 'PageBodyFeature_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyFeature_GridPrimary = {
  __typename: 'PageBodyFeature_gridPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  style?: Maybe<Scalars['Boolean']['output']>;
};

export type PageBodyFull_Width_Form = {
  __typename: 'PageBodyFull_width_form';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyFull_Width_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyFull_Width_FormPrimary = {
  __typename: 'PageBodyFull_width_formPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  linked_form?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type PageBodyFull_Width_Image = {
  __typename: 'PageBodyFull_width_image';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyFull_Width_ImagePrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyFull_Width_ImagePrimary = {
  __typename: 'PageBodyFull_width_imagePrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyFull_Width_Video = {
  __typename: 'PageBodyFull_width_video';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyFull_Width_VideoPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyFull_Width_VideoPrimary = {
  __typename: 'PageBodyFull_width_videoPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  embed?: Maybe<Scalars['Json']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyGradient_Image_Tabs = {
  __typename: 'PageBodyGradient_image_tabs';
  fields?: Maybe<Array<PageBodyGradient_Image_TabsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyGradient_Image_TabsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyGradient_Image_TabsFields = {
  __typename: 'PageBodyGradient_image_tabsFields';
  section_tab_description?: Maybe<Scalars['Json']['output']>;
  section_tab_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyGradient_Image_TabsPrimary = {
  __typename: 'PageBodyGradient_image_tabsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyImage_Intro_Features = {
  __typename: 'PageBodyImage_intro_features';
  fields?: Maybe<Array<PageBodyImage_Intro_FeaturesFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyImage_Intro_FeaturesPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyImage_Intro_FeaturesFields = {
  __typename: 'PageBodyImage_intro_featuresFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyImage_Intro_FeaturesPrimary = {
  __typename: 'PageBodyImage_intro_featuresPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyLogo_Party = {
  __typename: 'PageBodyLogo_party';
  fields?: Maybe<Array<PageBodyLogo_PartyFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyLogo_PartyPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyLogo_PartyFields = {
  __typename: 'PageBodyLogo_partyFields';
  logo?: Maybe<Scalars['Json']['output']>;
  logo_link?: Maybe<_Linkable>;
};

export type PageBodyLogo_PartyPrimary = {
  __typename: 'PageBodyLogo_partyPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyOpen_Source_Members_Grid = {
  __typename: 'PageBodyOpen_source_members_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyPricing_Cards = {
  __typename: 'PageBodyPricing_cards';
  fields?: Maybe<Array<PageBodyPricing_CardsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyPricing_CardsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyPricing_CardsFields = {
  __typename: 'PageBodyPricing_cardsFields';
  card_annual_price?: Maybe<Scalars['Json']['output']>;
  card_body?: Maybe<Scalars['Json']['output']>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_monthly_price?: Maybe<Scalars['Json']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_segment_cta_1_audience?: Maybe<_Linkable>;
  section_segment_cta_2_audience?: Maybe<_Linkable>;
};

export type PageBodyPricing_CardsPrimary = {
  __typename: 'PageBodyPricing_cardsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  bullet_icon?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
};

export type PageBodyRecent_Blogs = {
  __typename: 'PageBodyRecent_blogs';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyRecent_BlogsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyRecent_BlogsPrimary = {
  __typename: 'PageBodyRecent_blogsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type PageBodyStandalone_Heading = {
  __typename: 'PageBodyStandalone_heading';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyStandalone_HeadingPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyStandalone_HeadingPrimary = {
  __typename: 'PageBodyStandalone_headingPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  section_title_max_width?: Maybe<Scalars['Float']['output']>;
  title_theme?: Maybe<_Linkable>;
};

export type PageBodyTestimonial_Carousel = {
  __typename: 'PageBodyTestimonial_carousel';
  fields?: Maybe<Array<PageBodyTestimonial_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyTestimonial_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyTestimonial_CarouselFields = {
  __typename: 'PageBodyTestimonial_carouselFields';
  testimonial_author?: Maybe<Scalars['Json']['output']>;
  testimonial_company?: Maybe<Scalars['String']['output']>;
  testimonial_image?: Maybe<Scalars['Json']['output']>;
  testimonial_job_title?: Maybe<Scalars['String']['output']>;
  testimonial_quote?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyTestimonial_CarouselPrimary = {
  __typename: 'PageBodyTestimonial_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
};

export type PageBodyThree_Part_Cta = {
  __typename: 'PageBodyThree_part_cta';
  fields?: Maybe<Array<PageBodyThree_Part_CtaFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyThree_Part_CtaPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyThree_Part_CtaFields = {
  __typename: 'PageBodyThree_part_ctaFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PageBodyThree_Part_CtaPrimary = {
  __typename: 'PageBodyThree_part_ctaPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_1_audience?: Maybe<_Linkable>;
  segment_cta_2_audience?: Maybe<_Linkable>;
};

export type PageBodyWidget_Grid = {
  __typename: 'PageBodyWidget_grid';
  fields?: Maybe<Array<PageBodyWidget_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageBodyWidget_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageBodyWidget_GridFields = {
  __typename: 'PageBodyWidget_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_segment_cta_audience?: Maybe<_Linkable>;
};

export type PageBodyWidget_GridPrimary = {
  __typename: 'PageBodyWidget_gridPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type PageConnectionConnection = {
  __typename: 'PageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type PageConnectionEdge = {
  __typename: 'PageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

export type PageHero = PageHeroFeature_Hero | PageHeroFeature_Hero_Form | PageHeroStandard_Hero;

export type PageHeroFeature_Hero = {
  __typename: 'PageHeroFeature_hero';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageHeroFeature_HeroPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageHeroFeature_HeroPrimary = {
  __typename: 'PageHeroFeature_heroPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_description_max_width?: Maybe<Scalars['Float']['output']>;
  hero_image?: Maybe<Scalars['Json']['output']>;
  hero_primary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_primary_cta_url?: Maybe<_Linkable>;
  hero_secondary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_secondary_cta_url?: Maybe<_Linkable>;
  hero_theme?: Maybe<_Linkable>;
  segment_primary_cta_audience?: Maybe<_Linkable>;
  segment_secondary_cta_audience?: Maybe<_Linkable>;
};

export type PageHeroFeature_Hero_Form = {
  __typename: 'PageHeroFeature_hero_form';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageHeroFeature_Hero_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageHeroFeature_Hero_FormPrimary = {
  __typename: 'PageHeroFeature_hero_formPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_description_max_width?: Maybe<Scalars['Float']['output']>;
  hero_form?: Maybe<_Linkable>;
  hero_form_description?: Maybe<Scalars['Json']['output']>;
  hero_form_title?: Maybe<Scalars['Json']['output']>;
  hero_primary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_primary_cta_url?: Maybe<_Linkable>;
  hero_secondary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_secondary_cta_url?: Maybe<_Linkable>;
  hero_theme?: Maybe<_Linkable>;
  segment_primary_cta_audience?: Maybe<_Linkable>;
  segment_secondary_cta_audience?: Maybe<_Linkable>;
};

export type PageHeroStandard_Hero = {
  __typename: 'PageHeroStandard_hero';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PageHeroStandard_HeroPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PageHeroStandard_HeroPrimary = {
  __typename: 'PageHeroStandard_heroPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_background?: Maybe<Scalars['Json']['output']>;
  hero_box_image?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_description_max_width?: Maybe<Scalars['Float']['output']>;
  hero_theme?: Maybe<_Linkable>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageKeywords = {
  __typename: 'PageKeywords';
  keyword?: Maybe<Scalars['String']['output']>;
};

export type Person = _Document & _Linkable & {
  __typename: 'Person';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  bio?: Maybe<Scalars['Json']['output']>;
  blog_author?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['Json']['output']>;
  headshot?: Maybe<Scalars['Json']['output']>;
  last_name?: Maybe<Scalars['Json']['output']>;
  leadership_position?: Maybe<Scalars['Boolean']['output']>;
  position?: Maybe<Scalars['Json']['output']>;
  social?: Maybe<Array<PersonSocial>>;
};

/** A connection to a list of items. */
export type PersonConnectionConnection = {
  __typename: 'PersonConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type PersonConnectionEdge = {
  __typename: 'PersonConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Person;
};

export type PersonSocial = {
  __typename: 'PersonSocial';
  public_status?: Maybe<Scalars['Boolean']['output']>;
  social_icon?: Maybe<Scalars['String']['output']>;
  social_link?: Maybe<_Linkable>;
  social_network?: Maybe<Scalars['String']['output']>;
};

export type Portal_Discover = _Document & _Linkable & {
  __typename: 'Portal_discover';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  cta_box_description?: Maybe<Scalars['Json']['output']>;
  cta_label?: Maybe<Scalars['String']['output']>;
  cta_link_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['Json']['output']>;
  feature_grid?: Maybe<Array<Portal_DiscoverFeature_Grid>>;
  page_icon?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<_Linkable>;
  title?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type Portal_DiscoverConnectionConnection = {
  __typename: 'Portal_discoverConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Portal_DiscoverConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type Portal_DiscoverConnectionEdge = {
  __typename: 'Portal_discoverConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Portal_Discover;
};

export type Portal_DiscoverFeature_Grid = {
  __typename: 'Portal_discoverFeature_grid';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_theme?: Maybe<_Linkable>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type Pricing = _Document & _Linkable & {
  __typename: 'Pricing';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  body?: Maybe<Array<PricingBody>>;
  hero?: Maybe<Array<PricingHero>>;
  keywords?: Maybe<Array<PricingKeywords>>;
  og_image_override?: Maybe<Scalars['Json']['output']>;
  page_audience?: Maybe<_Linkable>;
  seo_description?: Maybe<Scalars['Json']['output']>;
  seo_title?: Maybe<Scalars['Json']['output']>;
  title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBody = PricingBody5050 | PricingBody5050_Form | PricingBodyCase_Study_Banner | PricingBodyCase_Study_Carousel | PricingBodyComparison_Cards | PricingBodyContent_Carousel | PricingBodyCta_Banner | PricingBodyEmbed_Code_Snippet | PricingBodyEvents_Grid | PricingBodyFaq | PricingBodyFeature_Grid | PricingBodyFull_Width_Form | PricingBodyFull_Width_Image | PricingBodyFull_Width_Video | PricingBodyGradient_Image_Tabs | PricingBodyImage_Intro_Features | PricingBodyLogo_Party | PricingBodyOpen_Source_Members_Grid | PricingBodyPricing_Calculator | PricingBodyPricing_Cards | PricingBodyRecent_Blogs | PricingBodyStandalone_Heading | PricingBodyTestimonial_Carousel | PricingBodyThree_Part_Cta | PricingBodyWidget_Grid;

export type PricingBody5050 = {
  __typename: 'PricingBody5050';
  fields?: Maybe<Array<PricingBody5050Fields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBody5050Primary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBody5050Fields = {
  __typename: 'PricingBody5050Fields';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBody5050Primary = {
  __typename: 'PricingBody5050Primary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  image_link?: Maybe<_Linkable>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBody5050_Form = {
  __typename: 'PricingBody5050_form';
  fields?: Maybe<Array<PricingBody5050_FormFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBody5050_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBody5050_FormFields = {
  __typename: 'PricingBody5050_formFields';
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBody5050_FormPrimary = {
  __typename: 'PricingBody5050_formPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_form?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyCase_Study_Banner = {
  __typename: 'PricingBodyCase_study_banner';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyCase_Study_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyCase_Study_BannerPrimary = {
  __typename: 'PricingBodyCase_study_bannerPrimary';
  customer?: Maybe<_Linkable>;
  section_foreground_theme?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type PricingBodyCase_Study_Carousel = {
  __typename: 'PricingBodyCase_study_carousel';
  fields?: Maybe<Array<PricingBodyCase_Study_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyCase_Study_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyCase_Study_CarouselFields = {
  __typename: 'PricingBodyCase_study_carouselFields';
  customer?: Maybe<_Linkable>;
};

export type PricingBodyCase_Study_CarouselPrimary = {
  __typename: 'PricingBodyCase_study_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_industry?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyComparison_Cards = {
  __typename: 'PricingBodyComparison_cards';
  fields?: Maybe<Array<PricingBodyComparison_CardsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyComparison_CardsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyComparison_CardsFields = {
  __typename: 'PricingBodyComparison_cardsFields';
  card_body?: Maybe<Scalars['Json']['output']>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_segment_cta_1_audience?: Maybe<_Linkable>;
  section_segment_cta_2_audience?: Maybe<_Linkable>;
};

export type PricingBodyComparison_CardsPrimary = {
  __typename: 'PricingBodyComparison_cardsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  bullet_icon?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
  with_bullet_icon?: Maybe<Scalars['Boolean']['output']>;
};

export type PricingBodyContent_Carousel = {
  __typename: 'PricingBodyContent_carousel';
  fields?: Maybe<Array<PricingBodyContent_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyContent_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyContent_CarouselFields = {
  __typename: 'PricingBodyContent_carouselFields';
  section_card_description?: Maybe<Scalars['Json']['output']>;
  section_card_image?: Maybe<Scalars['Json']['output']>;
  section_card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyContent_CarouselPrimary = {
  __typename: 'PricingBodyContent_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyCta_Banner = {
  __typename: 'PricingBodyCta_banner';
  fields?: Maybe<Array<PricingBodyCta_BannerFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyCta_BannerPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyCta_BannerFields = {
  __typename: 'PricingBodyCta_bannerFields';
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyCta_BannerPrimary = {
  __typename: 'PricingBodyCta_bannerPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_campaign_id?: Maybe<Scalars['String']['output']>;
  segment_campaign_name?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyEmbed_Code_Snippet = {
  __typename: 'PricingBodyEmbed_code_snippet';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyEmbed_Code_SnippetPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyEmbed_Code_SnippetPrimary = {
  __typename: 'PricingBodyEmbed_code_snippetPrimary';
  section_code?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyEvents_Grid = {
  __typename: 'PricingBodyEvents_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyFaq = {
  __typename: 'PricingBodyFaq';
  fields?: Maybe<Array<PricingBodyFaqFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyFaqPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyFaqFields = {
  __typename: 'PricingBodyFaqFields';
  answer?: Maybe<Scalars['Json']['output']>;
  question?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyFaqPrimary = {
  __typename: 'PricingBodyFaqPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyFeature_Grid = {
  __typename: 'PricingBodyFeature_grid';
  fields?: Maybe<Array<PricingBodyFeature_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyFeature_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyFeature_GridFields = {
  __typename: 'PricingBodyFeature_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyFeature_GridPrimary = {
  __typename: 'PricingBodyFeature_gridPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
  style?: Maybe<Scalars['Boolean']['output']>;
};

export type PricingBodyFull_Width_Form = {
  __typename: 'PricingBodyFull_width_form';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyFull_Width_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyFull_Width_FormPrimary = {
  __typename: 'PricingBodyFull_width_formPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  linked_form?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type PricingBodyFull_Width_Image = {
  __typename: 'PricingBodyFull_width_image';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyFull_Width_ImagePrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyFull_Width_ImagePrimary = {
  __typename: 'PricingBodyFull_width_imagePrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyFull_Width_Video = {
  __typename: 'PricingBodyFull_width_video';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyFull_Width_VideoPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyFull_Width_VideoPrimary = {
  __typename: 'PricingBodyFull_width_videoPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  embed?: Maybe<Scalars['Json']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyGradient_Image_Tabs = {
  __typename: 'PricingBodyGradient_image_tabs';
  fields?: Maybe<Array<PricingBodyGradient_Image_TabsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyGradient_Image_TabsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyGradient_Image_TabsFields = {
  __typename: 'PricingBodyGradient_image_tabsFields';
  section_tab_description?: Maybe<Scalars['Json']['output']>;
  section_tab_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyGradient_Image_TabsPrimary = {
  __typename: 'PricingBodyGradient_image_tabsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyImage_Intro_Features = {
  __typename: 'PricingBodyImage_intro_features';
  fields?: Maybe<Array<PricingBodyImage_Intro_FeaturesFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyImage_Intro_FeaturesPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyImage_Intro_FeaturesFields = {
  __typename: 'PricingBodyImage_intro_featuresFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyImage_Intro_FeaturesPrimary = {
  __typename: 'PricingBodyImage_intro_featuresPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyLogo_Party = {
  __typename: 'PricingBodyLogo_party';
  fields?: Maybe<Array<PricingBodyLogo_PartyFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyLogo_PartyPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyLogo_PartyFields = {
  __typename: 'PricingBodyLogo_partyFields';
  logo?: Maybe<Scalars['Json']['output']>;
  logo_link?: Maybe<_Linkable>;
};

export type PricingBodyLogo_PartyPrimary = {
  __typename: 'PricingBodyLogo_partyPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyOpen_Source_Members_Grid = {
  __typename: 'PricingBodyOpen_source_members_grid';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyPricing_Calculator = {
  __typename: 'PricingBodyPricing_calculator';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyPricing_Cards = {
  __typename: 'PricingBodyPricing_cards';
  fields?: Maybe<Array<PricingBodyPricing_CardsFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyPricing_CardsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyPricing_CardsFields = {
  __typename: 'PricingBodyPricing_cardsFields';
  card_annual_price?: Maybe<Scalars['Json']['output']>;
  card_body?: Maybe<Scalars['Json']['output']>;
  card_description?: Maybe<Scalars['Json']['output']>;
  card_monthly_price?: Maybe<Scalars['Json']['output']>;
  card_title?: Maybe<Scalars['Json']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_segment_cta_1_audience?: Maybe<_Linkable>;
  section_segment_cta_2_audience?: Maybe<_Linkable>;
};

export type PricingBodyPricing_CardsPrimary = {
  __typename: 'PricingBodyPricing_cardsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  bullet_icon?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
};

export type PricingBodyRecent_Blogs = {
  __typename: 'PricingBodyRecent_blogs';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyRecent_BlogsPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyRecent_BlogsPrimary = {
  __typename: 'PricingBodyRecent_blogsPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<_Linkable>;
  section_theme?: Maybe<_Linkable>;
};

export type PricingBodyStandalone_Heading = {
  __typename: 'PricingBodyStandalone_heading';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyStandalone_HeadingPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyStandalone_HeadingPrimary = {
  __typename: 'PricingBodyStandalone_headingPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  section_title_max_width?: Maybe<Scalars['Float']['output']>;
  title_theme?: Maybe<_Linkable>;
};

export type PricingBodyTestimonial_Carousel = {
  __typename: 'PricingBodyTestimonial_carousel';
  fields?: Maybe<Array<PricingBodyTestimonial_CarouselFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyTestimonial_CarouselPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyTestimonial_CarouselFields = {
  __typename: 'PricingBodyTestimonial_carouselFields';
  testimonial_author?: Maybe<Scalars['Json']['output']>;
  testimonial_company?: Maybe<Scalars['String']['output']>;
  testimonial_image?: Maybe<Scalars['Json']['output']>;
  testimonial_job_title?: Maybe<Scalars['String']['output']>;
  testimonial_quote?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyTestimonial_CarouselPrimary = {
  __typename: 'PricingBodyTestimonial_carouselPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_theme?: Maybe<_Linkable>;
};

export type PricingBodyThree_Part_Cta = {
  __typename: 'PricingBodyThree_part_cta';
  fields?: Maybe<Array<PricingBodyThree_Part_CtaFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyThree_Part_CtaPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyThree_Part_CtaFields = {
  __typename: 'PricingBodyThree_part_ctaFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_icon?: Maybe<Scalars['String']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
};

export type PricingBodyThree_Part_CtaPrimary = {
  __typename: 'PricingBodyThree_part_ctaPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_label?: Maybe<Scalars['String']['output']>;
  section_cta_1_type?: Maybe<Scalars['String']['output']>;
  section_cta_1_url?: Maybe<_Linkable>;
  section_cta_2_label?: Maybe<Scalars['String']['output']>;
  section_cta_2_type?: Maybe<Scalars['String']['output']>;
  section_cta_2_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_1_audience?: Maybe<_Linkable>;
  segment_cta_2_audience?: Maybe<_Linkable>;
};

export type PricingBodyWidget_Grid = {
  __typename: 'PricingBodyWidget_grid';
  fields?: Maybe<Array<PricingBodyWidget_GridFields>>;
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingBodyWidget_GridPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingBodyWidget_GridFields = {
  __typename: 'PricingBodyWidget_gridFields';
  section_feature_cta_label?: Maybe<Scalars['String']['output']>;
  section_feature_cta_type?: Maybe<Scalars['String']['output']>;
  section_feature_cta_url?: Maybe<_Linkable>;
  section_feature_description?: Maybe<Scalars['Json']['output']>;
  section_feature_title?: Maybe<Scalars['Json']['output']>;
  section_image?: Maybe<Scalars['Json']['output']>;
  section_image_max_height?: Maybe<Scalars['Float']['output']>;
  section_segment_cta_audience?: Maybe<_Linkable>;
};

export type PricingBodyWidget_GridPrimary = {
  __typename: 'PricingBodyWidget_gridPrimary';
  anchor_link_label?: Maybe<Scalars['String']['output']>;
  section_cta_label?: Maybe<Scalars['String']['output']>;
  section_cta_type?: Maybe<Scalars['String']['output']>;
  section_cta_url?: Maybe<_Linkable>;
  section_description?: Maybe<Scalars['Json']['output']>;
  section_description_max_width?: Maybe<Scalars['Float']['output']>;
  section_theme?: Maybe<_Linkable>;
  section_title?: Maybe<Scalars['Json']['output']>;
  segment_cta_audience?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type PricingConnectionConnection = {
  __typename: 'PricingConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PricingConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type PricingConnectionEdge = {
  __typename: 'PricingConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Pricing;
};

export type PricingHero = PricingHeroFeature_Hero | PricingHeroFeature_Hero_Form | PricingHeroStandard_Hero;

export type PricingHeroFeature_Hero = {
  __typename: 'PricingHeroFeature_hero';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingHeroFeature_HeroPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingHeroFeature_HeroPrimary = {
  __typename: 'PricingHeroFeature_heroPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_description_max_width?: Maybe<Scalars['Float']['output']>;
  hero_image?: Maybe<Scalars['Json']['output']>;
  hero_primary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_primary_cta_url?: Maybe<_Linkable>;
  hero_secondary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_secondary_cta_url?: Maybe<_Linkable>;
  hero_theme?: Maybe<_Linkable>;
  segment_primary_cta_audience?: Maybe<_Linkable>;
  segment_secondary_cta_audience?: Maybe<_Linkable>;
};

export type PricingHeroFeature_Hero_Form = {
  __typename: 'PricingHeroFeature_hero_form';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingHeroFeature_Hero_FormPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingHeroFeature_Hero_FormPrimary = {
  __typename: 'PricingHeroFeature_hero_formPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_description_max_width?: Maybe<Scalars['Float']['output']>;
  hero_form?: Maybe<_Linkable>;
  hero_form_description?: Maybe<Scalars['Json']['output']>;
  hero_form_title?: Maybe<Scalars['Json']['output']>;
  hero_primary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_primary_cta_url?: Maybe<_Linkable>;
  hero_secondary_cta_label?: Maybe<Scalars['String']['output']>;
  hero_secondary_cta_url?: Maybe<_Linkable>;
  hero_theme?: Maybe<_Linkable>;
  segment_primary_cta_audience?: Maybe<_Linkable>;
  segment_secondary_cta_audience?: Maybe<_Linkable>;
};

export type PricingHeroStandard_Hero = {
  __typename: 'PricingHeroStandard_hero';
  label?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<PricingHeroStandard_HeroPrimary>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PricingHeroStandard_HeroPrimary = {
  __typename: 'PricingHeroStandard_heroPrimary';
  headline?: Maybe<Scalars['Json']['output']>;
  hero_background?: Maybe<Scalars['Json']['output']>;
  hero_box_image?: Maybe<Scalars['Json']['output']>;
  hero_description?: Maybe<Scalars['Json']['output']>;
  hero_description_max_width?: Maybe<Scalars['Float']['output']>;
  hero_theme?: Maybe<_Linkable>;
};

export type PricingKeywords = {
  __typename: 'PricingKeywords';
  keyword?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename: 'Query';
  _allDocuments: _DocumentConnection;
  allAudiences: AudienceConnectionConnection;
  allBlog_posts: Blog_PostConnectionConnection;
  allBlogs: BlogConnectionConnection;
  allCategorys: CategoryConnectionConnection;
  allCustomers: CustomerConnectionConnection;
  allData_centers: Data_CenterConnectionConnection;
  allDynamic_pages: Dynamic_PageConnectionConnection;
  allEvent_types: Event_TypeConnectionConnection;
  allEvents: EventConnectionConnection;
  allForms: FormConnectionConnection;
  allGlobals: GlobalConnectionConnection;
  allHomes: HomeConnectionConnection;
  allIndustrys: IndustryConnectionConnection;
  allNavigation_dropdowns: Navigation_DropdownConnectionConnection;
  allNavigations: NavigationConnectionConnection;
  allNewss: NewsConnectionConnection;
  allOpen_source_members: Open_Source_MemberConnectionConnection;
  allPages: PageConnectionConnection;
  allPersons: PersonConnectionConnection;
  allPortal_discovers: Portal_DiscoverConnectionConnection;
  allPricings: PricingConnectionConnection;
  allTeams: TeamConnectionConnection;
  allThemes: ThemeConnectionConnection;
  audience?: Maybe<Audience>;
  blog?: Maybe<Blog>;
  blog_post?: Maybe<Blog_Post>;
  category?: Maybe<Category>;
  customer?: Maybe<Customer>;
  dynamic_page?: Maybe<Dynamic_Page>;
  event?: Maybe<Event>;
  event_type?: Maybe<Event_Type>;
  form?: Maybe<Form>;
  industry?: Maybe<Industry>;
  news?: Maybe<News>;
  open_source_member?: Maybe<Open_Source_Member>;
  page?: Maybe<Page>;
  person?: Maybe<Person>;
  portal_discover?: Maybe<Portal_Discover>;
  team?: Maybe<Team>;
  theme?: Maybe<Theme>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllAudiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortAudiencey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllBlog_PostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortBlog_Posty>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereBlog_Post>;
};


export type QueryAllBlogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortBlogy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllCategorysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortCategoryy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereCategory>;
};


export type QueryAllCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortCustomery>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereCustomer>;
};


export type QueryAllData_CentersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortData_Centery>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereData_Center>;
};


export type QueryAllDynamic_PagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDynamic_Pagey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereDynamic_Page>;
};


export type QueryAllEvent_TypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortEvent_Typey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereEvent_Type>;
};


export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortEventy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereEvent>;
};


export type QueryAllFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortFormy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereForm>;
};


export type QueryAllGlobalsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortGlobaly>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereGlobal>;
};


export type QueryAllHomesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortHomey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereHome>;
};


export type QueryAllIndustrysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortIndustryy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereIndustry>;
};


export type QueryAllNavigation_DropdownsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortNavigation_Dropdowny>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereNavigation_Dropdown>;
};


export type QueryAllNavigationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortNavigationy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereNavigation>;
};


export type QueryAllNewssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortNewsy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereNews>;
};


export type QueryAllOpen_Source_MembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortOpen_Source_Membery>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereOpen_Source_Member>;
};


export type QueryAllPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPagey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WherePage>;
};


export type QueryAllPersonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPersony>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WherePerson>;
};


export type QueryAllPortal_DiscoversArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPortal_Discovery>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WherePortal_Discover>;
};


export type QueryAllPricingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPricingy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WherePricing>;
};


export type QueryAllTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortTeamy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereTeam>;
};


export type QueryAllThemesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortThemey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereTheme>;
};


export type QueryAudienceArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryBlogArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryBlog_PostArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryCategoryArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryCustomerArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryDynamic_PageArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryEventArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryEvent_TypeArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryFormArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryIndustryArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryNewsArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryOpen_Source_MemberArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryPageArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryPersonArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryPortal_DiscoverArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryTeamArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryThemeArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type RelatedDocument = {
  __typename: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']['output']>;
};

export enum SortAudiencey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortBlog_Posty {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortBlogy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortCategoryy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortCustomery {
  BannerCopyAsc = 'banner_copy_ASC',
  BannerCopyDesc = 'banner_copy_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  CardQuoteAsc = 'card_quote_ASC',
  CardQuoteDesc = 'card_quote_DESC',
  CompanyNameAsc = 'company_name_ASC',
  CompanyNameDesc = 'company_name_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImpactAsc = 'impact_ASC',
  ImpactDesc = 'impact_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  LogoHeightBasisAsc = 'logo_height_basis_ASC',
  LogoHeightBasisDesc = 'logo_height_basis_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  QuoteNameAsc = 'quote_name_ASC',
  QuoteNameDesc = 'quote_name_DESC',
  QuoteTitleAsc = 'quote_title_ASC',
  QuoteTitleDesc = 'quote_title_DESC',
  SidebarQuoteAsc = 'sidebar_quote_ASC',
  SidebarQuoteDesc = 'sidebar_quote_DESC',
  SituationAsc = 'situation_ASC',
  SituationDesc = 'situation_DESC',
  SolutionAsc = 'solution_ASC',
  SolutionDesc = 'solution_DESC'
}

export enum SortData_Centery {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortDynamic_Pagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortEvent_Typey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortEventy {
  CtaLabelAsc = 'cta_label_ASC',
  CtaLabelDesc = 'cta_label_DESC',
  EndDateAsc = 'end_date_ASC',
  EndDateDesc = 'end_date_DESC',
  EventRegionAsc = 'event_region_ASC',
  EventRegionDesc = 'event_region_DESC',
  LocationLabelAsc = 'location_label_ASC',
  LocationLabelDesc = 'location_label_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SpeakerNameAsc = 'speaker_name_ASC',
  SpeakerNameDesc = 'speaker_name_DESC',
  StartDateAsc = 'start_date_ASC',
  StartDateDesc = 'start_date_DESC',
  StartTimeAsc = 'start_time_ASC',
  StartTimeDesc = 'start_time_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC'
}

export enum SortFormy {
  FormNameAsc = 'form_name_ASC',
  FormNameDesc = 'form_name_DESC',
  FormTypeAsc = 'form_type_ASC',
  FormTypeDesc = 'form_type_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortGlobaly {
  GlobalBannerTextAsc = 'global_banner_text_ASC',
  GlobalBannerTextDesc = 'global_banner_text_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SiteNameAsc = 'site_name_ASC',
  SiteNameDesc = 'site_name_DESC'
}

export enum SortHomey {
  HeroDescriptionAsc = 'hero_description_ASC',
  HeroDescriptionDesc = 'hero_description_DESC',
  HeroDescriptionMaxWidthAsc = 'hero_description_max_width_ASC',
  HeroDescriptionMaxWidthDesc = 'hero_description_max_width_DESC',
  HeroTitleAsc = 'hero_title_ASC',
  HeroTitleDesc = 'hero_title_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  PrimaryCtaLabelAsc = 'primary_cta_label_ASC',
  PrimaryCtaLabelDesc = 'primary_cta_label_DESC',
  SecondaryCtaLabelAsc = 'secondary_cta_label_ASC',
  SecondaryCtaLabelDesc = 'secondary_cta_label_DESC'
}

export enum SortIndustryy {
  IndustryIconAsc = 'industry_icon_ASC',
  IndustryIconDesc = 'industry_icon_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortNavigation_Dropdowny {
  CardDescriptionAsc = 'card_description_ASC',
  CardDescriptionDesc = 'card_description_DESC',
  CardLinkLabelAsc = 'card_link_label_ASC',
  CardLinkLabelDesc = 'card_link_label_DESC',
  CardThemeAsc = 'card_theme_ASC',
  CardThemeDesc = 'card_theme_DESC',
  CardTitleAsc = 'card_title_ASC',
  CardTitleDesc = 'card_title_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortNavigationy {
  CtaLabelAsc = 'cta_label_ASC',
  CtaLabelDesc = 'cta_label_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortNewsy {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortOpen_Source_Membery {
  AppCategoryAsc = 'app_category_ASC',
  AppCategoryDesc = 'app_category_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortPagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPersony {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  FirstNameAsc = 'first_name_ASC',
  FirstNameDesc = 'first_name_DESC',
  LastNameAsc = 'last_name_ASC',
  LastNameDesc = 'last_name_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC'
}

export enum SortPortal_Discovery {
  CtaBoxDescriptionAsc = 'cta_box_description_ASC',
  CtaBoxDescriptionDesc = 'cta_box_description_DESC',
  CtaLabelAsc = 'cta_label_ASC',
  CtaLabelDesc = 'cta_label_DESC',
  CtaLinkUrlAsc = 'cta_link_url_ASC',
  CtaLinkUrlDesc = 'cta_link_url_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  PageIconAsc = 'page_icon_ASC',
  PageIconDesc = 'page_icon_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPricingy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortTeamy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortThemey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Team = _Document & _Linkable & {
  __typename: 'Team';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  team_members?: Maybe<Array<TeamTeam_Members>>;
};

/** A connection to a list of items. */
export type TeamConnectionConnection = {
  __typename: 'TeamConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type TeamConnectionEdge = {
  __typename: 'TeamConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Team;
};

export type TeamTeam_Members = {
  __typename: 'TeamTeam_members';
  team_member?: Maybe<_Linkable>;
};

export type Theme = _Document & _Linkable & {
  __typename: 'Theme';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  title?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type ThemeConnectionConnection = {
  __typename: 'ThemeConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ThemeConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type ThemeConnectionEdge = {
  __typename: 'ThemeConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Theme;
};

export type WhereBlog_Post = {
  /** audience */
  audience?: InputMaybe<Scalars['String']['input']>;
  /** author */
  author?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<WhereBlog_PostCategories>;
  /** date */
  date?: InputMaybe<Scalars['Date']['input']>;
  /** date */
  date_after?: InputMaybe<Scalars['Date']['input']>;
  /** date */
  date_before?: InputMaybe<Scalars['Date']['input']>;
  related_links?: InputMaybe<WhereBlog_PostRelated_Links>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** summary */
  summary_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereBlog_PostCategories = {
  /** category */
  category?: InputMaybe<Scalars['String']['input']>;
};

export type WhereBlog_PostRelated_Links = {
  /** related_link */
  related_link?: InputMaybe<Scalars['String']['input']>;
  /** related_link_label */
  related_link_label_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereCategory = {
  /** name */
  name_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereCustomer = {
  /** banner_copy */
  banner_copy_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** body */
  body_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** card_quote */
  card_quote_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** case_study_pdf */
  case_study_pdf?: InputMaybe<Scalars['String']['input']>;
  /** company_name */
  company_name_fulltext?: InputMaybe<Scalars['String']['input']>;
  has_case_study?: InputMaybe<Scalars['Boolean']['input']>;
  /** headline */
  headline_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** impact */
  impact_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** industry */
  industry?: InputMaybe<Scalars['String']['input']>;
  /** intro */
  intro_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** logo_height_basis */
  logo_height_basis?: InputMaybe<Scalars['Float']['input']>;
  /** logo_height_basis */
  logo_height_basis_gt?: InputMaybe<Scalars['Float']['input']>;
  /** logo_height_basis */
  logo_height_basis_lt?: InputMaybe<Scalars['Float']['input']>;
  /** logo_height_basis */
  logo_height_basis_range?: InputMaybe<Array<Scalars['Float']['input']>>;
  products?: InputMaybe<WhereCustomerProducts>;
  /** quote_name */
  quote_name_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** quote_title */
  quote_title_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** sidebar_quote */
  sidebar_quote_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** situation */
  situation_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** solution */
  solution_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** website */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type WhereCustomerProducts = {
  /** product */
  product?: InputMaybe<Scalars['String']['input']>;
};

export type WhereData_Center = {
  /** address */
  address_fulltext?: InputMaybe<Scalars['String']['input']>;
  location_near?: InputMaybe<Near>;
  /** name */
  name_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** status_page */
  status_page?: InputMaybe<Scalars['String']['input']>;
};

export type WhereDynamic_Page = {
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereEvent = {
  cta_label?: InputMaybe<Scalars['String']['input']>;
  cta_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** end_date */
  end_date?: InputMaybe<Scalars['Date']['input']>;
  /** end_date */
  end_date_after?: InputMaybe<Scalars['Date']['input']>;
  /** end_date */
  end_date_before?: InputMaybe<Scalars['Date']['input']>;
  event_region?: InputMaybe<Scalars['String']['input']>;
  event_region_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** event_type */
  event_type?: InputMaybe<Scalars['String']['input']>;
  /** link */
  link?: InputMaybe<Scalars['String']['input']>;
  location_label?: InputMaybe<Scalars['String']['input']>;
  location_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  location_near?: InputMaybe<Near>;
  /** name */
  name_fulltext?: InputMaybe<Scalars['String']['input']>;
  speaker_name?: InputMaybe<Scalars['String']['input']>;
  speaker_name_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** start_date */
  start_date?: InputMaybe<Scalars['Date']['input']>;
  /** start_date */
  start_date_after?: InputMaybe<Scalars['Date']['input']>;
  /** start_date */
  start_date_before?: InputMaybe<Scalars['Date']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
  start_time_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** summary */
  summary_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereEvent_Type = {
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereForm = {
  /** endpoint */
  endpoint?: InputMaybe<Scalars['String']['input']>;
  /** form_audience */
  form_audience?: InputMaybe<Scalars['String']['input']>;
  /** form_name */
  form_name_fulltext?: InputMaybe<Scalars['String']['input']>;
  form_type?: InputMaybe<Scalars['String']['input']>;
  form_type_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereGlobal = {
  footer_macstadium?: InputMaybe<WhereGlobalFooter_Macstadium>;
  footer_products?: InputMaybe<WhereGlobalFooter_Products>;
  footer_support?: InputMaybe<WhereGlobalFooter_Support>;
  /** global_banner_link */
  global_banner_link?: InputMaybe<Scalars['String']['input']>;
  /** global_banner_text */
  global_banner_text_fulltext?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<WhereGlobalLocations>;
  /** site_name */
  site_name_fulltext?: InputMaybe<Scalars['String']['input']>;
  social_media?: InputMaybe<WhereGlobalSocial_Media>;
};

export type WhereGlobalFooter_Macstadium = {
  /** link */
  link?: InputMaybe<Scalars['String']['input']>;
  title_override?: InputMaybe<Scalars['String']['input']>;
  title_override_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereGlobalFooter_Products = {
  /** link */
  link?: InputMaybe<Scalars['String']['input']>;
  title_override?: InputMaybe<Scalars['String']['input']>;
  title_override_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereGlobalFooter_Support = {
  /** link */
  link?: InputMaybe<Scalars['String']['input']>;
  title_override?: InputMaybe<Scalars['String']['input']>;
  title_override_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereGlobalLocations = {
  hq?: InputMaybe<Scalars['Boolean']['input']>;
  /** location */
  location?: InputMaybe<Scalars['String']['input']>;
  title_override?: InputMaybe<Scalars['String']['input']>;
  title_override_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereGlobalSocial_Media = {
  show_on_website?: InputMaybe<Scalars['Boolean']['input']>;
  social_media_icon?: InputMaybe<Scalars['String']['input']>;
  social_media_icon_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** social_media_link */
  social_media_link?: InputMaybe<Scalars['String']['input']>;
  social_media_name?: InputMaybe<Scalars['String']['input']>;
  social_media_name_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereHome = {
  /** hero_description */
  hero_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** hero_description_max_width */
  hero_description_max_width?: InputMaybe<Scalars['Float']['input']>;
  /** hero_description_max_width */
  hero_description_max_width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** hero_description_max_width */
  hero_description_max_width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** hero_description_max_width */
  hero_description_max_width_range?: InputMaybe<Array<Scalars['Float']['input']>>;
  hero_metrics?: InputMaybe<WhereHomeHero_Metrics>;
  hero_rotator?: InputMaybe<WhereHomeHero_Rotator>;
  hero_slider?: InputMaybe<WhereHomeHero_Slider>;
  /** hero_title */
  hero_title_fulltext?: InputMaybe<Scalars['String']['input']>;
  home_hero_cards?: InputMaybe<WhereHomeHome_Hero_Cards>;
  primary_cta_label?: InputMaybe<Scalars['String']['input']>;
  primary_cta_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** primary_cta_link */
  primary_cta_link?: InputMaybe<Scalars['String']['input']>;
  /** primary_cta_segment_audience */
  primary_cta_segment_audience?: InputMaybe<Scalars['String']['input']>;
  secondary_cta_label?: InputMaybe<Scalars['String']['input']>;
  secondary_cta_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** secondary_cta_link */
  secondary_cta_link?: InputMaybe<Scalars['String']['input']>;
  /** secondary_cta_segment_audience */
  secondary_cta_segment_audience?: InputMaybe<Scalars['String']['input']>;
};

export type WhereHomeHero_Metrics = {
  metric_label?: InputMaybe<Scalars['String']['input']>;
  metric_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** metric_value */
  metric_value_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereHomeHero_Rotator = {
  /** hero_rotator_text */
  hero_rotator_text_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereHomeHero_Slider = {
  /** hero_slide_cta_link */
  hero_slide_cta_link?: InputMaybe<Scalars['String']['input']>;
};

export type WhereHomeHome_Hero_Cards = {
  cta_label?: InputMaybe<Scalars['String']['input']>;
  cta_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** cta_link */
  cta_link?: InputMaybe<Scalars['String']['input']>;
  /** cta_segment_audience */
  cta_segment_audience?: InputMaybe<Scalars['String']['input']>;
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereIndustry = {
  industry_icon?: InputMaybe<Scalars['String']['input']>;
  industry_icon_fulltext?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<WhereIndustryKeywords>;
  /** page_audience */
  page_audience?: InputMaybe<Scalars['String']['input']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereIndustryKeywords = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  keyword_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereNavigation = {
  cta_label?: InputMaybe<Scalars['String']['input']>;
  cta_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** cta_link */
  cta_link?: InputMaybe<Scalars['String']['input']>;
};

export type WhereNavigation_Dropdown = {
  /** card_description */
  card_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** card_link */
  card_link?: InputMaybe<Scalars['String']['input']>;
  card_link_label?: InputMaybe<Scalars['String']['input']>;
  card_link_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  card_theme?: InputMaybe<Scalars['String']['input']>;
  card_theme_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** card_title */
  card_title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereNews = {
  award?: InputMaybe<Scalars['Boolean']['input']>;
  /** body */
  body_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** date */
  date?: InputMaybe<Scalars['Date']['input']>;
  /** date */
  date_after?: InputMaybe<Scalars['Date']['input']>;
  /** date */
  date_before?: InputMaybe<Scalars['Date']['input']>;
  /** intro */
  intro_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** link */
  link?: InputMaybe<Scalars['String']['input']>;
  news_item?: InputMaybe<Scalars['Boolean']['input']>;
  press_release?: InputMaybe<Scalars['Boolean']['input']>;
  /** quote */
  quote_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereOpen_Source_Member = {
  app_category?: InputMaybe<Scalars['String']['input']>;
  app_category_fulltext?: InputMaybe<Scalars['String']['input']>;
  data_centers?: InputMaybe<WhereOpen_Source_MemberData_Centers>;
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  /** name */
  name_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** website */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type WhereOpen_Source_MemberData_Centers = {
  /** data_center */
  data_center?: InputMaybe<Scalars['String']['input']>;
};

export type WherePage = {
  keywords?: InputMaybe<WherePageKeywords>;
  /** page_audience */
  page_audience?: InputMaybe<Scalars['String']['input']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WherePageKeywords = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  keyword_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WherePerson = {
  /** bio */
  bio_fulltext?: InputMaybe<Scalars['String']['input']>;
  blog_author?: InputMaybe<Scalars['Boolean']['input']>;
  /** first_name */
  first_name_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** last_name */
  last_name_fulltext?: InputMaybe<Scalars['String']['input']>;
  leadership_position?: InputMaybe<Scalars['Boolean']['input']>;
  /** position */
  position_fulltext?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<WherePersonSocial>;
};

export type WherePersonSocial = {
  public_status?: InputMaybe<Scalars['Boolean']['input']>;
  social_icon?: InputMaybe<Scalars['String']['input']>;
  social_icon_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** social_link */
  social_link?: InputMaybe<Scalars['String']['input']>;
  social_network?: InputMaybe<Scalars['String']['input']>;
  social_network_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WherePortal_Discover = {
  /** cta_box_description */
  cta_box_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  cta_label?: InputMaybe<Scalars['String']['input']>;
  cta_label_fulltext?: InputMaybe<Scalars['String']['input']>;
  cta_link_url?: InputMaybe<Scalars['String']['input']>;
  cta_link_url_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']['input']>;
  feature_grid?: InputMaybe<WherePortal_DiscoverFeature_Grid>;
  page_icon?: InputMaybe<Scalars['String']['input']>;
  page_icon_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** theme */
  theme?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WherePortal_DiscoverFeature_Grid = {
  /** section_feature_description */
  section_feature_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  section_feature_icon?: InputMaybe<Scalars['String']['input']>;
  section_feature_icon_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** section_feature_theme */
  section_feature_theme?: InputMaybe<Scalars['String']['input']>;
  /** section_feature_title */
  section_feature_title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WherePricing = {
  keywords?: InputMaybe<WherePricingKeywords>;
  /** page_audience */
  page_audience?: InputMaybe<Scalars['String']['input']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WherePricingKeywords = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  keyword_fulltext?: InputMaybe<Scalars['String']['input']>;
};

export type WhereTeam = {
  team_members?: InputMaybe<WhereTeamTeam_Members>;
};

export type WhereTeamTeam_Members = {
  /** team_member */
  team_member?: InputMaybe<Scalars['String']['input']>;
};

export type WhereTheme = {
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']['input']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename: '_FileLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename: '_ImageLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']['output']>;
};

export type Similar = {
  documentId: Scalars['String']['input'];
  max: Scalars['Int']['input'];
};

export const BlogFeedInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_postConnectionConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_image"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogFeedInfoFragment, unknown>;
export const BlogPostInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"headshot"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_image"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo_title"}},{"kind":"Field","name":{"kind":"Name","value":"seo_description"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_postBodyRich_text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"related_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"related_link_label"}},{"kind":"Field","name":{"kind":"Name","value":"related_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_image"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogPostInfoFragment, unknown>;
export const BlogFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortBlog_posty"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WhereBlog_post"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allBlog_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogFeedInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogFeedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_postConnectionConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_image"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogFeedQuery, BlogFeedQueryVariables>;
export const BlogPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog_post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPostInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"headshot"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_image"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo_title"}},{"kind":"Field","name":{"kind":"Name","value":"seo_description"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_postBodyRich_text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"related_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"related_link_label"}},{"kind":"Field","name":{"kind":"Name","value":"related_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail_image"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogPostQuery, BlogPostQueryVariables>;
export type BlogFeedInfoFragment = { __typename: 'Blog_postConnectionConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges?: Array<{ __typename: 'Blog_postConnectionEdge', cursor: string, node: { __typename: 'Blog_post', title?: JSON | null, date?: string | null, hero_image?: JSON | null, thumbnail_image?: JSON | null, summary?: JSON | null, categories?: Array<{ __typename: 'Blog_postCategories', category?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post' } | { __typename: 'Category', name?: JSON | null, _meta: { __typename: 'Meta', id: string } } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person' } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null, _meta: { __typename: 'Meta', uid?: string | null, tags: Array<string>, id: string, lastPublicationDate?: string | null } } } | null> | null };

export type BlogFeedQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SortBlog_Posty>;
  where?: InputMaybe<WhereBlog_Post>;
}>;


export type BlogFeedQuery = { __typename: 'Query', allBlog_posts: { __typename: 'Blog_postConnectionConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges?: Array<{ __typename: 'Blog_postConnectionEdge', cursor: string, node: { __typename: 'Blog_post', title?: JSON | null, date?: string | null, hero_image?: JSON | null, thumbnail_image?: JSON | null, summary?: JSON | null, categories?: Array<{ __typename: 'Blog_postCategories', category?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post' } | { __typename: 'Category', name?: JSON | null, _meta: { __typename: 'Meta', id: string } } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person' } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null, _meta: { __typename: 'Meta', uid?: string | null, tags: Array<string>, id: string, lastPublicationDate?: string | null } } } | null> | null } };

export type BlogPostInfoFragment = { __typename: 'Blog_post', title?: JSON | null, date?: string | null, summary?: JSON | null, hero_image?: JSON | null, thumbnail_image?: JSON | null, seo_title?: JSON | null, seo_description?: JSON | null, author?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post' } | { __typename: 'Category' } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person', first_name?: JSON | null, last_name?: JSON | null, position?: JSON | null, headshot?: JSON | null, _meta: { __typename: 'Meta', id: string, uid?: string | null } } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, categories?: Array<{ __typename: 'Blog_postCategories', category?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post' } | { __typename: 'Category', name?: JSON | null, _meta: { __typename: 'Meta', id: string, uid?: string | null } } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person' } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null, body?: Array<{ __typename: 'Blog_postBodyRich_text', primary?: { __typename: 'Blog_postBodyRich_textPrimary', body?: JSON | null } | null } | { __typename: 'Blog_postBodyTable' }> | null, _meta: { __typename: 'Meta', uid?: string | null, tags: Array<string>, id: string, firstPublicationDate?: string | null, lastPublicationDate?: string | null }, related_links?: Array<{ __typename: 'Blog_postRelated_links', related_link_label?: JSON | null, related_link?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post', title?: JSON | null, thumbnail_image?: JSON | null, summary?: JSON | null, _meta: { __typename: 'Meta', uid?: string | null, id: string } } | { __typename: 'Category' } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person' } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink', url: string } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null };

export type BlogPostQueryVariables = Exact<{
  slug: Scalars['String'];
  lang: Scalars['String'];
}>;


export type BlogPostQuery = { __typename: 'Query', blog_post?: { __typename: 'Blog_post', title?: JSON | null, date?: string | null, summary?: JSON | null, hero_image?: JSON | null, thumbnail_image?: JSON | null, seo_title?: JSON | null, seo_description?: JSON | null, author?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post' } | { __typename: 'Category' } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person', first_name?: JSON | null, last_name?: JSON | null, position?: JSON | null, headshot?: JSON | null, _meta: { __typename: 'Meta', id: string, uid?: string | null } } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, categories?: Array<{ __typename: 'Blog_postCategories', category?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post' } | { __typename: 'Category', name?: JSON | null, _meta: { __typename: 'Meta', id: string, uid?: string | null } } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person' } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null, body?: Array<{ __typename: 'Blog_postBodyRich_text', primary?: { __typename: 'Blog_postBodyRich_textPrimary', body?: JSON | null } | null } | { __typename: 'Blog_postBodyTable' }> | null, _meta: { __typename: 'Meta', uid?: string | null, tags: Array<string>, id: string, firstPublicationDate?: string | null, lastPublicationDate?: string | null }, related_links?: Array<{ __typename: 'Blog_postRelated_links', related_link_label?: JSON | null, related_link?: { __typename: 'Audience' } | { __typename: 'Blog' } | { __typename: 'Blog_post', title?: JSON | null, thumbnail_image?: JSON | null, summary?: JSON | null, _meta: { __typename: 'Meta', uid?: string | null, id: string } } | { __typename: 'Category' } | { __typename: 'Customer' } | { __typename: 'Data_center' } | { __typename: 'Dynamic_page' } | { __typename: 'Event' } | { __typename: 'Event_type' } | { __typename: 'Form' } | { __typename: 'Global' } | { __typename: 'Home' } | { __typename: 'Industry' } | { __typename: 'Navigation' } | { __typename: 'Navigation_dropdown' } | { __typename: 'News' } | { __typename: 'Open_source_member' } | { __typename: 'Page' } | { __typename: 'Person' } | { __typename: 'Portal_discover' } | { __typename: 'Pricing' } | { __typename: 'Team' } | { __typename: 'Theme' } | { __typename: '_ExternalLink', url: string } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null } | null };
