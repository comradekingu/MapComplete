

 hotel 
=======



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/hotel/hotel.svg' height="100px"> 

Layer showing all hotels






  - This layer is shown at zoomlevel **13** and higher




#### Themes using this layer 





  - [hotels](https://mapcomplete.osm.be/hotels)
  - [onwheels](https://mapcomplete.osm.be/onwheels)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:tourism' target='_blank'>tourism</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:tourism%3Dhotel' target='_blank'>hotel</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22tourism%22%3D%22hotel%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/wheelchair#values) [wheelchair](https://wiki.openstreetmap.org/wiki/Key:wheelchair) | Multiple choice | [designated](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated) [yes](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dlimited) [no](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/internet_access#values) [internet_access](https://wiki.openstreetmap.org/wiki/Key:internet_access) | Multiple choice | [wlan](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dwlan) [no](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dno) [terminal](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dterminal) [wired](https://wiki.openstreetmap.org/wiki/Tag:internet_access%3Dwired)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/internet_access:fee#values) [internet_access:fee](https://wiki.openstreetmap.org/wiki/Key:internet_access:fee) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:internet_access:fee%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:internet_access:fee%3Dno) [customers](https://wiki.openstreetmap.org/wiki/Tag:internet_access:fee%3Dcustomers)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/internet_access:ssid#values) [internet_access:ssid](https://wiki.openstreetmap.org/wiki/Key:internet_access:ssid) | [string](../SpecialInputElements.md#string) | [Telekom](https://wiki.openstreetmap.org/wiki/Tag:internet_access:ssid%3DTelekom)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### reviews 



Shows the reviews module (including the possibility to leave a review)

This tagrendering has no question and is thus read-only





### name 



The question is  *What is the name of this hotel?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `This hotel is called {name}`





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




### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) 

This is rendered with  `<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>`





  - *<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>*  corresponds with  `contact:website~.+`
  - This option cannot be chosen as answer




### wheelchair-access 



The question is  *Is this place accessible with a wheelchair?*





  - *This place is specially adapted for wheelchair users*  corresponds with  `wheelchair=designated`
  - *This place is easily reachable with a wheelchair*  corresponds with  `wheelchair=yes`
  - *It is possible to reach this place in a wheelchair, but it is not easy*  corresponds with  `wheelchair=limited`
  - *This place is not reachable with a wheelchair*  corresponds with  `wheelchair=no`




### internet 



The question is  *Does this place offer internet access?*





  - *This place offers wireless internet access*  corresponds with  `internet_access=wlan`
  - *This place <b>does not</b> offer internet access*  corresponds with  `internet_access=no`
  - *This place offers internet access*  corresponds with  `internet_access=yes`
  - This option cannot be chosen as answer
  - *This place offers internet access via a terminal or computer*  corresponds with  `internet_access=terminal`
  - *This place offers wired internet access*  corresponds with  `internet_access=wired`




### internet-fee 



The question is  *Is there a fee for internet access?*





  - *There is a fee for the internet access at this place*  corresponds with  `internet_access:fee=yes`
  - *Internet access is free at this place*  corresponds with  `internet_access:fee=no`
  - *Internet access is free at this place, for customers only*  corresponds with  `internet_access:fee=customers`


This tagrendering is only visible in the popup if the following condition is met: `internet_access!=no&internet_access~.+`



### internet-ssid 



The question is  *What is the network name for the wireless internet access?*

This rendering asks information about the property  [internet_access:ssid](https://wiki.openstreetmap.org/wiki/Key:internet_access:ssid) 

This is rendered with  `The network name is <b>{internet_access:ssid}</b>`





  - *Telekom*  corresponds with  `internet_access:ssid=Telekom`


This tagrendering is only visible in the popup if the following condition is met: `internet_access=wlan` 

This document is autogenerated from [assets/layers/hotel/hotel.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/hotel/hotel.json)