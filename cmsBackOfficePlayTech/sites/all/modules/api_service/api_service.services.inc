<?php
/**
 * @file
 * api_service.services.inc
 */

/**
 * Implements hook_default_services_endpoint().
 */
function api_service_default_services_endpoint() {
  $export = array();

  $endpoint = new stdClass();
  $endpoint->disabled = FALSE; /* Edit this to true to make a default endpoint disabled initially */
  $endpoint->api_version = 3;
  $endpoint->name = 'admin';
  $endpoint->server = 'rest_server';
  $endpoint->path = 'api/v1';
  $endpoint->authentication = array();
  $endpoint->server_settings = array(
    'formatters' => array(
      'json' => TRUE,
      'bencode' => FALSE,
      'jsonp' => FALSE,
      'php' => FALSE,
      'xml' => FALSE,
    ),
    'parsers' => array(
      'application/json' => TRUE,
      'application/vnd.php.serialized' => FALSE,
      'application/x-www-form-urlencoded' => FALSE,
      'application/xml' => FALSE,
      'multipart/form-data' => FALSE,
      'text/xml' => FALSE,
    ),
  );
  $endpoint->resources = array(
    'arcade' => array(
      'alias' => 'arcade_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'banner' => array(
      'alias' => 'banners',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'all_games' => array(
      'alias' => 'games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'live_games' => array(
      'alias' => 'live_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'logo' => array(
      'alias' => 'logo',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'navigation' => array(
      'alias' => 'menu',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'scratch_cards' => array(
      'alias' => 'scratch_card_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'scratch_games' => array(
      'alias' => 'scratch_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'slot_machine' => array(
      'alias' => 'slot_machine_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'table_card_games' => array(
      'alias' => 'table_card_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'table_games' => array(
      'alias' => 'table_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
    'taxonomy_vocabulary' => array(
      'alias' => 'taxonomy',
    ),
    'video_poker' => array(
      'alias' => 'video_poker_games',
      'operations' => array(
        'index' => array(
          'enabled' => '1',
        ),
      ),
    ),
  );
  $endpoint->debug = 1;
  $export['admin'] = $endpoint;

  return $export;
}
