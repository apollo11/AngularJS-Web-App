#!/bin/bash

echo install and enable views module 
drush dl views
drush en views -y

echo install and enable services views
drush dl services_views
drush en services_views -y

echo install and enable media Module
drush dl media
drush en media -y

echo install and enable features
drush dl features
drush en features -y

echo install and enable pathauto
drush dl pathauto
drush en pathauto -y 

echo install and enable services
drush dl services
drush en servieces -y

echo install and enable wysiwyg
drush install wysiwyg
drush en wysiwyg -y

echo install ang enable services menu
drush dl services_menu
drush en services_menu -y

echo install internationalization 
drush dl i18n
drush en i18n -y

echo install Date field
drush dl date
drush en date -y

echo install datepicker
drush dl datepicker
drush en datepicker -y

echo install libraries
drush dl libraries
drush en libraries -y

echo done installing 
drush cc all 

