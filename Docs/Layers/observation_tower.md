

 observation_tower 
===================



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/observation_tower/Tower_observation.svg' height="100px"> 

Towers with a panoramic view






  - This layer is shown at zoomlevel **8** and higher




#### Themes using this layer 





  - [observation_towers](https://mapcomplete.osm.be/observation_towers)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:tower:type' target='_blank'>tower:type</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:tower:type%3Dobservation' target='_blank'>observation</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22tower%3Atype%22%3D%22observation%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/height#values) [height](https://wiki.openstreetmap.org/wiki/Key:height) | [pfloat](../SpecialInputElements.md#pfloat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/access#values) [access](https://wiki.openstreetmap.org/wiki/Key:access) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:access%3Dyes) [guided](https://wiki.openstreetmap.org/wiki/Tag:access%3Dguided)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/charge#values) [charge](https://wiki.openstreetmap.org/wiki/Key:charge) | [string](../SpecialInputElements.md#string) | [](https://wiki.openstreetmap.org/wiki/Tag:charge%3D)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/step_count#values) [step_count](https://wiki.openstreetmap.org/wiki/Key:step_count) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/elevator#values) [elevator](https://wiki.openstreetmap.org/wiki/Key:elevator) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:elevator%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:elevator%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/wheelchair#values) [wheelchair](https://wiki.openstreetmap.org/wiki/Key:wheelchair) | Multiple choice | [designated](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated) [yes](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dlimited) [no](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/wikidata#values) [wikidata](https://wiki.openstreetmap.org/wiki/Key:wikidata) | [wikidata](../SpecialInputElements.md#wikidata) | 




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### name 



The question is  *What is the name of this tower?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This tower is called <b>{name}</b>`





  - *This tower doesn't have a specific name*  corresponds with  `noname=yes`




### Height 



The question is  *What is the height of this tower?*

This rendering asks information about the property  [height](https://wiki.openstreetmap.org/wiki/Key:height) 

This is rendered with  `This tower is {height} high`





### access 



The question is  *Can this tower be visited?*





  - *This tower is publicly accessible*  corresponds with  `access=yes`
  - *This tower can only be visited with a guide*  corresponds with  `access=guided`




### Fee 



The question is  *How much does one have to pay to enter this tower?*

This rendering asks information about the property  [charge](https://wiki.openstreetmap.org/wiki/Key:charge) 

This is rendered with  `Visiting this tower costs <b>{charge}</b>`





  - *Free to visit*  corresponds with  `fee=no`


This tagrendering is only visible in the popup if the following condition is met: `access=yes|access=guided`



### payment-options 



The question is  *Which methods of payment are accepted here?*





  - *Cash is accepted here*  corresponds with  `payment:cash=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dno' target='_blank'>no</a>
  - *Payment cards are accepted here*  corresponds with  `payment:cards=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cards' target='_blank'>payment:cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cards%3Dno' target='_blank'>no</a>


This tagrendering is only visible in the popup if the following condition is met: `fee=yes|charge~.+`



### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer




### step_count 



The question is  *How much individual steps does one have to climb to reach the top of this tower?*

This rendering asks information about the property  [step_count](https://wiki.openstreetmap.org/wiki/Key:step_count) 

This is rendered with  `This tower has {step_count} steps to reach the top`



This tagrendering is only visible in the popup if the following condition is met: `access=yes|access=guided`



### elevator 



The question is  *Does this tower have an elevator?*





  - *This tower has an elevator which takes visitors to the top*  corresponds with  `elevator=yes`
  - *This tower does not have an elevator*  corresponds with  `elevator=no`


This tagrendering is only visible in the popup if the following condition is met: `access=yes|access=guided`



### Operator 



The question is  *Who maintains this tower?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `Maintained by <b>{operator}</b>`





### wheelchair-access 



The question is  *Is this place accessible with a wheelchair?*





  - *This place is specially adapted for wheelchair users*  corresponds with  `wheelchair=designated`
  - *This place is easily reachable with a wheelchair*  corresponds with  `wheelchair=yes`
  - *It is possible to reach this place in a wheelchair, but it is not easy*  corresponds with  `wheelchair=limited`
  - *This place is not reachable with a wheelchair*  corresponds with  `wheelchair=no`


This tagrendering is only visible in the popup if the following condition is met: `elevator=yes&access=yes|access=guided`



### wikipedia 



Shows a wikipedia box with the corresponding wikipedia article; the wikidata-item link can be changed by a contributor

The question is  *What is the corresponding Wikidata entity?*

This rendering asks information about the property  [wikidata](https://wiki.openstreetmap.org/wiki/Key:wikidata) 

This is rendered with  `{wikipedia():max-height:25rem}`





  - *{wikipedia():max-height:25rem}*  corresponds with  `wikipedia~.+`
  - This option cannot be chosen as answer
  - *No Wikipedia page has been linked yet*  corresponds with  ``
  - This option cannot be chosen as answer
 

This document is autogenerated from [assets/layers/observation_tower/observation_tower.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/observation_tower/observation_tower.json)