

 bike_themed_object 
====================



<img src='https://mapcomplete.osm.be/./assets/layers/bike_themed_object/other_services.svg' height="100px"> 

A layer with bike-themed objects but who don't match any other layer






  - This layer is shown at zoomlevel **13** and higher




#### Themes using this layer 





  - [cyclofix](https://mapcomplete.osm.be/cyclofix)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:theme' target='_blank'>theme</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:theme%3Dbicycle' target='_blank'>bicycle</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:theme' target='_blank'>theme</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:theme%3Dcycling' target='_blank'>cycling</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:sport' target='_blank'>sport</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:sport%3Dcycling' target='_blank'>cycling</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:association' target='_blank'>association</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:association%3Dcycling' target='_blank'>cycling</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:association' target='_blank'>association</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:association%3Dbicycle' target='_blank'>bicycle</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:ngo' target='_blank'>ngo</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ngo%3Dcycling' target='_blank'>cycling</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:ngo' target='_blank'>ngo</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:ngo%3Dbicycle' target='_blank'>bicycle</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:club' target='_blank'>club</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:club%3Dbicycle' target='_blank'>bicycle</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:club' target='_blank'>club</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:club%3Dcycling' target='_blank'>cycling</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22association%22%3D%22cycling%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22association%22%3D%22bicycle%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22club%22%3D%22bicycle%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22club%22%3D%22cycling%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22ngo%22%3D%22cycling%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22ngo%22%3D%22bicycle%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22sport%22%3D%22cycling%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22theme%22%3D%22bicycle%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22theme%22%3D%22cycling%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/description#values) [description](https://wiki.openstreetmap.org/wiki/Key:description) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### description 



The question is  *Is there still something relevant you couldn't give in the previous questions? Add it here.<br/><span style='font-size: small'>Don't repeat already stated facts</span>*

This rendering asks information about the property  [description](https://wiki.openstreetmap.org/wiki/Key:description) 

This is rendered with  `{description}`





### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer




### email 



The question is  *What is the email address of {title()}?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) 

This is rendered with  `<a href='mailto:{email}' target='_blank'>{email}</a>`





  - *<a href='mailto:{contact:email}' target='_blank'>{contact:email}</a>*  corresponds with  `contact:email~.+`
  - This option cannot be chosen as answer




### phone 



The question is  *What is the phone number of {title()}?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) 

This is rendered with  `<a href='tel:{phone}'>{phone}</a>`





  - *<a href='tel:{contact:phone}'>{contact:phone}</a>*  corresponds with  `contact:phone~.+`
  - This option cannot be chosen as answer




### opening_hours 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`

 

This document is autogenerated from [assets/layers/bike_themed_object/bike_themed_object.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/bike_themed_object/bike_themed_object.json)