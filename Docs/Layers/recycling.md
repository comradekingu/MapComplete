

 recycling 
===========



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/recycling/recycling-14.svg' height="100px"> 

A layer with recycling containers and centres






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [personal](https://mapcomplete.osm.be/personal)
  - [waste](https://mapcomplete.osm.be/waste)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drecycling' target='_blank'>recycling</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22recycling%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/location#values) [location](https://wiki.openstreetmap.org/wiki/Key:location) | Multiple choice | [underground](https://wiki.openstreetmap.org/wiki/Tag:location%3Dunderground) [indoor](https://wiki.openstreetmap.org/wiki/Tag:location%3Dindoor) [](https://wiki.openstreetmap.org/wiki/Tag:location%3D)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | [24/7](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### recycling-type 



The question is  *What type of recycling is this?*





  - *This is a recycling container*  corresponds with  `recycling_type=container`
  - *This is a recycling centre*  corresponds with  `recycling_type=centre`
  - *Waste disposal container for residual waste*  corresponds with  `amenity=waste_disposal`




### recycling-centre-name 



The question is  *What is the name of this recycling centre?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This recycling centre is named <b>{name}</b>`





  - *This recycling centre doesn't have a specific name*  corresponds with  `noname=yes`


This tagrendering is only visible in the popup if the following condition is met: `recycling_type=centre`



### container-location 



The question is  *Where is this container located?*





  - *This is an underground container*  corresponds with  `location=underground`
  - *This container is located indoors*  corresponds with  `location=indoor`
  - *This container is located outdoors*  corresponds with  ``


This tagrendering is only visible in the popup if the following condition is met: `recycling_type=container`



### recycling-accepts 



The question is  *What can be recycled here?*





  - *Batteries can be recycled here*  corresponds with  `recycling:batteries=yes`
  - Unselecting this answer will add 
  - *Beverage cartons can be recycled here*  corresponds with  `recycling:beverage_cartons=yes`
  - Unselecting this answer will add 
  - *Cans can be recycled here*  corresponds with  `recycling:cans=yes`
  - Unselecting this answer will add 
  - *Clothes can be recycled here*  corresponds with  `recycling:clothes=yes`
  - Unselecting this answer will add 
  - *Cooking oil can be recycled here*  corresponds with  `recycling:cooking_oil=yes`
  - Unselecting this answer will add 
  - *Engine oil can be recycled here*  corresponds with  `recycling:engine_oil=yes`
  - Unselecting this answer will add 
  - *Fluorescent tubes can be recycled here*  corresponds with  `recycling:fluorescent_tubes=yes`
  - Unselecting this answer will add 
  - *Green waste can be recycled here*  corresponds with  `recycling:green_waste=yes`
  - Unselecting this answer will add 
  - *Organic waste can be recycled here*  corresponds with  `recycling:organic=yes`
  - This option cannot be chosen as answer
  - Unselecting this answer will add 
  - *Glass bottles can be recycled here*  corresponds with  `recycling:glass_bottles=yes`
  - Unselecting this answer will add 
  - *Glass can be recycled here*  corresponds with  `recycling:glass=yes`
  - Unselecting this answer will add 
  - *Light bulbs can be recycled here*  corresponds with  `recycling:light_bulbs=yes`
  - Unselecting this answer will add 
  - *Newspapers can be recycled here*  corresponds with  `recycling:newspaper=yes`
  - Unselecting this answer will add 
  - *Paper can be recycled here*  corresponds with  `recycling:paper=yes`
  - Unselecting this answer will add 
  - *Plastic bottles can be recycled here*  corresponds with  `recycling:plastic_bottles=yes`
  - Unselecting this answer will add 
  - *Plastic packaging can be recycled here*  corresponds with  `recycling:plastic_packaging=yes`
  - Unselecting this answer will add 
  - *Plastic can be recycled here*  corresponds with  `recycling:plastic=yes`
  - Unselecting this answer will add 
  - *Scrap metal can be recycled here*  corresponds with  `recycling:scrap_metal=yes`
  - Unselecting this answer will add 
  - *Shoes can be recycled here*  corresponds with  `recycling:shoes=yes`
  - Unselecting this answer will add 
  - *Small electrical appliances can be recycled here*  corresponds with  `recycling:small_appliances=yes`
  - Unselecting this answer will add 
  - *Small electrical appliances can be recycled here*  corresponds with  `recycling:small_electrical_appliances=yes`
  - This option cannot be chosen as answer
  - Unselecting this answer will add 
  - *Needles can be recycled here*  corresponds with  `recycling:needles=yes`
  - Unselecting this answer will add 
  - *Residual waste can be recycled here*  corresponds with  `recycling:waste=yes`
  - Unselecting this answer will add 




### operator 



The question is  *What company operates this recycling facility?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `This recycling facility is operated by {operator}`





### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer


This tagrendering is only visible in the popup if the following condition is met: `recycling_type=centre`



### email 



The question is  *What is the email address of {title()}?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) 

This is rendered with  `<a href='mailto:{email}' target='_blank'>{email}</a>`





  - *<a href='mailto:{contact:email}' target='_blank'>{contact:email}</a>*  corresponds with  `contact:email~.+`
  - This option cannot be chosen as answer


This tagrendering is only visible in the popup if the following condition is met: `recycling_type=centre`



### phone 



The question is  *What is the phone number of {title()}?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) 

This is rendered with  `<a href='tel:{phone}'>{phone}</a>`





  - *<a href='tel:{contact:phone}'>{contact:phone}</a>*  corresponds with  `contact:phone~.+`
  - This option cannot be chosen as answer


This tagrendering is only visible in the popup if the following condition is met: `recycling_type=centre`



### opening_hours_24_7 



The question is  *What are the opening hours of this recycling facility?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





  - *24/7 opened (including holidays)*  corresponds with  `opening_hours=24/7`




#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Opened now | _isOpen=yes




id | question | osmTags
---- | ---------- | ---------
recyclingType.0 | All recycling types (default) | 
recyclingType.1 | Recycling of batteries | recycling:batteries=yes
recyclingType.2 | Recycling of beverage cartons | recycling:beverage_cartons=yes
recyclingType.3 | Recycling of cans | recycling:cans=yes
recyclingType.4 | Recycling of clothes | recycling:clothes=yes
recyclingType.5 | Recycling of cooking oil | recycling:cooking_oil=yes
recyclingType.6 | Recycling of engine oil | recycling:engine_oil=yes
recyclingType.7 | Recycling of fluorescent tubes | recycling:fluorescent_tubes=yes
recyclingType.8 | Recycling of green waste | recycling:green_waste=yes\|recycling:organic=yes
recyclingType.9 | Recycling of glass bottles | recycling:glass_bottles=yes
recyclingType.10 | Recycling of glass | recycling:glass=yes
recyclingType.11 | Recycling of light bulbs | recycling:light_bulbs=yes
recyclingType.12 | Recycling of newspapers | recycling:newspaper=yes
recyclingType.13 | Recycling of paper | recycling:paper=yes
recyclingType.14 | Recycling of plastic bottles | recycling:plastic_bottles=yes
recyclingType.15 | Recycling of plastic packaging | recycling:plastic_packaging=yes
recyclingType.16 | Recycling of plastic | recycling:plastic=yes
recyclingType.17 | Recycling of scrap metal | recycling:scrap_metal=yes
recyclingType.18 | Recycling of small electrical appliances | recycling:small_appliances=yes\|recycling:small_electrical_appliances=yes
recyclingType.19 | Recycling of residual waste | recycling:waste=yes
 

This document is autogenerated from [assets/layers/recycling/recycling.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/recycling/recycling.json)