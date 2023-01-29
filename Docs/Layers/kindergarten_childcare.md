

 kindergarten_childcare 
========================





Shows kindergartens and preschools. Both are grouped in one layer, as they are regularly confused with each other






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [education](https://mapcomplete.osm.be/education)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dchildcare' target='_blank'>childcare</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dkindergarten' target='_blank'>kindergarten</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:isced:level:2011' target='_blank'>isced:level:2011</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:isced:level:2011%3Dearly_childhood' target='_blank'>early_childhood</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22childcare%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22amenity%22%3D%22kindergarten%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22isced%3Alevel%3A2011%22%3D%22early_childhood%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/amenity#values) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity) | Multiple choice | [kindergarten](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dkindergarten) [childcare](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dchildcare)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity#values) [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) | [pnat](../SpecialInputElements.md#pnat) | 




### childcare-type 



The question is  *What type of facility is this?*





  - *This is a kindergarten (also known as <i>preschool</i>) where small kids receive early education.*  corresponds with  `amenity=kindergarten`
  - *This is a childcare facility, such as a nursery or daycare where small kids are looked after. They do not offer an education and are ofter run as private businesses*  corresponds with  `amenity=childcare`




### name 



The question is  *What is the name of this facility?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This facility is named <b>{name}</b>`





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



The question is  *When is this childcare opened?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`



This tagrendering is only visible in the popup if the following condition is met: `amenity=childcare`



### capacity 



The question is  *How much kids (at most) can be enrolled here?*

This rendering asks information about the property  [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) 

This is rendered with  `This facility has room for {capacity} kids`

 

This document is autogenerated from [assets/layers/kindergarten_childcare/kindergarten_childcare.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/kindergarten_childcare/kindergarten_childcare.json)