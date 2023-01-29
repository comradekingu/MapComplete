

 atm 
=====



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/atm/atm.svg' height="100px"> 

ATMs to withdraw money






  - This layer is shown at zoomlevel **13** and higher




#### Themes using this layer 





  - [atm](https://mapcomplete.osm.be/atm)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Datm' target='_blank'>atm</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22atm%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/brand#values) [brand](https://wiki.openstreetmap.org/wiki/Key:brand) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cash_out#values) [cash_out](https://wiki.openstreetmap.org/wiki/Key:cash_out) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:cash_out%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:cash_out%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cash_in#values) [cash_in](https://wiki.openstreetmap.org/wiki/Key:cash_in) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:cash_in%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:cash_in%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/speech_output#values) [speech_output](https://wiki.openstreetmap.org/wiki/Key:speech_output) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:speech_output%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:speech_output%3Dno)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### name 



This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `name~.+`



### brand 



The question is  *What brand is this ATM?*

This rendering asks information about the property  [brand](https://wiki.openstreetmap.org/wiki/Key:brand) 

This is rendered with  `The brand of this ATM is {brand}`





### operator 



The question is  *What company operates this ATM?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `The ATM is operated by {operator}`





### opening_hours 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





### cash_out 



The question is  *Can you withdraw cash from this ATM?*





  - *You can withdraw cash from this ATM*  corresponds with  ``
  - This option cannot be chosen as answer
  - *You can withdraw cash from this ATM*  corresponds with  `cash_out=yes`
  - *You cannot withdraw cash from this ATM*  corresponds with  `cash_out=no`




### cash_in 



The question is  *Can you deposit cash into this ATM?*





  - *You probably cannot deposit cash into this ATM*  corresponds with  ``
  - This option cannot be chosen as answer
  - *You can deposit cash into this ATM*  corresponds with  `cash_in=yes`
  - *You cannot deposit cash into this ATM*  corresponds with  `cash_in=no`




### speech_output 



The question is  *Does this ATM have speech output for visually impaired users?*





  - *This ATM has speech output, usually available through a headphone jack*  corresponds with  `speech_output=yes`
  - *This ATM does not have speech output*  corresponds with  `speech_output=no`




### speech_output_language 



This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `speech_output=yes`



#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Opened now | _isOpen=yes




id | question | osmTags
---- | ---------- | ---------
speech_output.0 | With speech output | speech_output=yes
 

This document is autogenerated from [assets/layers/atm/atm.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/atm/atm.json)