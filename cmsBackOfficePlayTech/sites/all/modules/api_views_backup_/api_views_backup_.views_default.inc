<?php
/**
 * @file
 * api_views_backup_.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function api_views_backup__views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'banners';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Banners';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Banners';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '4';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['exclude'] = TRUE;
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['body']['type'] = 'text_plain';
  /* Field: Content: Banner Image */
  $handler->display->display_options['fields']['field_banner_image']['id'] = 'field_banner_image';
  $handler->display->display_options['fields']['field_banner_image']['table'] = 'field_data_field_banner_image';
  $handler->display->display_options['fields']['field_banner_image']['field'] = 'field_banner_image';
  $handler->display->display_options['fields']['field_banner_image']['label'] = 'banner_image';
  $handler->display->display_options['fields']['field_banner_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_banner_image']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_banner_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_banner_image']['type'] = 'services';
  $handler->display->display_options['fields']['field_banner_image']['settings'] = array(
    'data_element_key' => '',
    'skip_safe' => 0,
    'skip_empty_values' => 0,
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Global: Custom text */
  $handler->display->display_options['fields']['nothing_1']['id'] = 'nothing_1';
  $handler->display->display_options['fields']['nothing_1']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_1']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_1']['label'] = 'image_path';
  $handler->display->display_options['fields']['nothing_1']['alter']['text'] = 'http://cmsplaytech.local/sites/default/files';
  $handler->display->display_options['fields']['nothing_1']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'banner' => 'banner',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'banners';

  /* Display: Services */
  $handler = $view->new_display('services', 'Services', 'services_1');
  $handler->display->display_options['path'] = 'banner';
  $translatables['banners'] = array(
    t('Master'),
    t('Banners'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('banner_image'),
    t('image_path'),
    t('http://cmsplaytech.local/sites/default/files'),
    t('Page'),
    t('Services'),
  );
  $export['banners'] = $view;

  $view = new view();
  $view->name = 'games';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Games';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Games';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Thumbnail Image */
  $handler->display->display_options['fields']['field_games_thumbnail_image']['id'] = 'field_games_thumbnail_image';
  $handler->display->display_options['fields']['field_games_thumbnail_image']['table'] = 'field_data_field_games_thumbnail_image';
  $handler->display->display_options['fields']['field_games_thumbnail_image']['field'] = 'field_games_thumbnail_image';
  $handler->display->display_options['fields']['field_games_thumbnail_image']['label'] = 'thumbnail_image';
  $handler->display->display_options['fields']['field_games_thumbnail_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_games_thumbnail_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_games_thumbnail_image']['type'] = 'services';
  $handler->display->display_options['fields']['field_games_thumbnail_image']['settings'] = array(
    'data_element_key' => '',
    'skip_safe' => 0,
    'skip_empty_values' => 0,
  );
  /* Field: Content: Game Code */
  $handler->display->display_options['fields']['field_games_code']['id'] = 'field_games_code';
  $handler->display->display_options['fields']['field_games_code']['table'] = 'field_data_field_games_code';
  $handler->display->display_options['fields']['field_games_code']['field'] = 'field_games_code';
  $handler->display->display_options['fields']['field_games_code']['label'] = 'game';
  $handler->display->display_options['fields']['field_games_code']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_games_code']['type'] = 'text_plain';
  /* Field: Content: Games Category */
  $handler->display->display_options['fields']['field_games_category']['id'] = 'field_games_category';
  $handler->display->display_options['fields']['field_games_category']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['fields']['field_games_category']['field'] = 'field_games_category';
  $handler->display->display_options['fields']['field_games_category']['label'] = 'game_category';
  $handler->display->display_options['fields']['field_games_category']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_games_category']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Games Country Code */
  $handler->display->display_options['fields']['field_games_country_code']['id'] = 'field_games_country_code';
  $handler->display->display_options['fields']['field_games_country_code']['table'] = 'field_data_field_games_country_code';
  $handler->display->display_options['fields']['field_games_country_code']['field'] = 'field_games_country_code';
  $handler->display->display_options['fields']['field_games_country_code']['label'] = 'language';
  $handler->display->display_options['fields']['field_games_country_code']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_games_country_code']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Link */
  $handler->display->display_options['fields']['field_games_link']['id'] = 'field_games_link';
  $handler->display->display_options['fields']['field_games_link']['table'] = 'field_data_field_games_link';
  $handler->display->display_options['fields']['field_games_link']['field'] = 'field_games_link';
  $handler->display->display_options['fields']['field_games_link']['label'] = '';
  $handler->display->display_options['fields']['field_games_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_games_link']['type'] = 'text_plain';
  /* Field: Content: Demo Link */
  $handler->display->display_options['fields']['field_games_demo_link']['id'] = 'field_games_demo_link';
  $handler->display->display_options['fields']['field_games_demo_link']['table'] = 'field_data_field_games_demo_link';
  $handler->display->display_options['fields']['field_games_demo_link']['field'] = 'field_games_demo_link';
  $handler->display->display_options['fields']['field_games_demo_link']['label'] = '';
  $handler->display->display_options['fields']['field_games_demo_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_games_demo_link']['type'] = 'text_plain';
  /* Field: Global: Custom text */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['label'] = 'image_path';
  $handler->display->display_options['fields']['nothing']['alter']['text'] = 'http://cmsplaytech.local/sites/default/files';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    3 => '3',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'games';

  /* Display: All Games */
  $handler = $view->new_display('services', 'All Games', 'services_1');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  $handler->display->display_options['path'] = 'all_games';

  /* Display: Arcade Games */
  $handler = $view->new_display('services', 'Arcade Games', 'services_2');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    2 => '2',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'arcade';

  /* Display: Live Games */
  $handler = $view->new_display('services', 'Live Games', 'services_3');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'live_games';

  /* Display: Scratch Card */
  $handler = $view->new_display('services', 'Scratch Card', 'services_4');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    10 => '10',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'scratch_cards';

  /* Display: Scratch Games */
  $handler = $view->new_display('services', 'Scratch Games', 'services_5');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    5 => '5',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'scratch_games';

  /* Display: Slot Machine */
  $handler = $view->new_display('services', 'Slot Machine', 'services_6');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    3 => '3',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'slot_machine';

  /* Display: Table and Card Games */
  $handler = $view->new_display('services', 'Table and Card Games', 'services_7');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    9 => '9',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'table_card_games';

  /* Display: Table Games */
  $handler = $view->new_display('services', 'Table Games', 'services_8');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    4 => '4',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'table_games';

  /* Display: Video Poker */
  $handler = $view->new_display('services', 'Video Poker', 'services_9');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'games' => 'games',
  );
  /* Filter criterion: Content: Games Category (field_games_category) */
  $handler->display->display_options['filters']['field_games_category_tid']['id'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['table'] = 'field_data_field_games_category';
  $handler->display->display_options['filters']['field_games_category_tid']['field'] = 'field_games_category_tid';
  $handler->display->display_options['filters']['field_games_category_tid']['value'] = array(
    6 => '6',
  );
  $handler->display->display_options['filters']['field_games_category_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_games_category_tid']['vocabulary'] = 'games_category';
  $handler->display->display_options['path'] = 'video_poker';
  $translatables['games'] = array(
    t('Master'),
    t('Games'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('thumbnail_image'),
    t('game'),
    t('game_category'),
    t('language'),
    t('image_path'),
    t('http://cmsplaytech.local/sites/default/files'),
    t('Page'),
    t('All Games'),
    t('Arcade Games'),
    t('Live Games'),
    t('Scratch Card'),
    t('Scratch Games'),
    t('Slot Machine'),
    t('Table and Card Games'),
    t('Table Games'),
    t('Video Poker'),
  );
  $export['games'] = $view;

  $view = new view();
  $view->name = 'logo';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Logo';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Logo';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Logo */
  $handler->display->display_options['fields']['field_logo']['id'] = 'field_logo';
  $handler->display->display_options['fields']['field_logo']['table'] = 'field_data_field_logo';
  $handler->display->display_options['fields']['field_logo']['field'] = 'field_logo';
  $handler->display->display_options['fields']['field_logo']['label'] = '';
  $handler->display->display_options['fields']['field_logo']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_logo']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_logo']['type'] = 'services';
  $handler->display->display_options['fields']['field_logo']['settings'] = array(
    'data_element_key' => '',
    'skip_safe' => 0,
    'skip_empty_values' => 0,
  );
  /* Field: Global: Custom text */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['label'] = 'image_path';
  $handler->display->display_options['fields']['nothing']['alter']['text'] = 'http://cmsplaytech.local/sites/default/files';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'logo' => 'logo',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'logo';

  /* Display: Services */
  $handler = $view->new_display('services', 'Services', 'services_1');
  $handler->display->display_options['path'] = 'logo';
  $translatables['logo'] = array(
    t('Master'),
    t('Logo'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('image_path'),
    t('http://cmsplaytech.local/sites/default/files'),
    t('Page'),
    t('Services'),
  );
  $export['logo'] = $view;

  $view = new view();
  $view->name = 'menu_';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Menu ';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Menu ';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '9';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Link */
  $handler->display->display_options['fields']['field_menu_link']['id'] = 'field_menu_link';
  $handler->display->display_options['fields']['field_menu_link']['table'] = 'field_data_field_menu_link';
  $handler->display->display_options['fields']['field_menu_link']['field'] = 'field_menu_link';
  $handler->display->display_options['fields']['field_menu_link']['label'] = 'path';
  $handler->display->display_options['fields']['field_menu_link']['type'] = 'text_plain';
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'menu' => 'menu',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'menu';

  /* Display: Services */
  $handler = $view->new_display('services', 'Services', 'services_1');
  $handler->display->display_options['path'] = 'navigation';
  $translatables['menu_'] = array(
    t('Master'),
    t('Menu '),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('path'),
    t('Page'),
    t('Services'),
  );
  $export['menu_'] = $view;

  return $export;
}
