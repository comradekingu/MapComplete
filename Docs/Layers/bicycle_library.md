

 bicycle_library 
=================



<img src='https://mapcomplete.osm.be/pin:#22ff55;./assets/layers/bicycle_library/bicycle_library.svg' height="100px"> 

A facility where bicycles can be lent for longer period of times






  - This layer is shown at zoomlevel **8** and higher




#### Themes using this layer 





  - [bicyclelib](https://mapcomplete.osm.be/bicyclelib)
  - [cyclofix](https://mapcomplete.osm.be/cyclofix)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbicycle_library' target='_blank'>bicycle_library</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22bicycle_library%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/charge#values) [charge](https://wiki.openstreetmap.org/wiki/Key:charge) | [string](../SpecialInputElements.md#string) | [](https://wiki.openstreetmap.org/wiki/Tag:charge%3D) [€20warranty + €20/year](https://wiki.openstreetmap.org/wiki/Tag:charge%3D€20warranty + €20/year)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/bicycle_library:for#values) [bicycle_library:for](https://wiki.openstreetmap.org/wiki/Key:bicycle_library:for) | Multiple choice | [child](https://wiki.openstreetmap.org/wiki/Tag:bicycle_library:for%3Dchild) [adult](https://wiki.openstreetmap.org/wiki/Tag:bicycle_library:for%3Dadult) [disabled](https://wiki.openstreetmap.org/wiki/Tag:bicycle_library:for%3Ddisabled)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/description#values) [description](https://wiki.openstreetmap.org/wiki/Key:description) | [string](../SpecialInputElements.md#string) | 




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### bicycle_library-name 



The question is  *What is the name of this bicycle library?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This bicycle library is called {name}`





### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer




### phone 



The question is  *What is the phone number of {title()}?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) 

This is rendered with  `<a href='tel:{phone}'>{phone}</a>`





  - *<a href='tel:{contact:phone}'>{contact:phone}</a>*  corresponds with  `contact:phone~.+`
  - This option cannot be chosen as answer




### email 



The question is  *What is the email address of {title()}?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) 

This is rendered with  `<a href='mailto:{email}' target='_blank'>{email}</a>`





  - *<a href='mailto:{contact:email}' target='_blank'>{contact:email}</a>*  corresponds with  `contact:email~.+`
  - This option cannot be chosen as answer




### opening_hours 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





### bicycle_library-charge 



The question is  *How much does lending a bicycle cost?*

This rendering asks information about the property  [charge](https://wiki.openstreetmap.org/wiki/Key:charge) 

This is rendered with  `Lending a bicycle costs {charge}`





  - *Lending a bicycle is free*  corresponds with  `fee=no`
  - *Lending a bicycle costs €20/year and €20 warranty*  corresponds with  `fee=yes&charge=€20warranty + €20/year`




### bicycle-library-target-group 



The question is  *Who can loan bicycles here?*





  - *Bikes for children available*  corresponds with  `bicycle_library:for=child`
  - *Bikes for adult available*  corresponds with  `bicycle_library:for=adult`
  - *Bikes for disabled persons available*  corresponds with  `bicycle_library:for=disabled`




### description 



The question is  *Is there still something relevant you couldn't give in the previous questions? Add it here.<br/><span style='font-size: small'>Don't repeat already stated facts</span>*

This rendering asks information about the property  [description](https://wiki.openstreetmap.org/wiki/Key:description) 

This is rendered with  `{description}`

 

This document is autogenerated from [assets/layers/bicycle_library/bicycle_library.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/bicycle_library/bicycle_library.json)