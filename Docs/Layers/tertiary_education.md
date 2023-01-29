

 tertiary_education 
====================



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/school/college.svg' height="100px"> 

Layer with all tertiary education institutes (ISCED:2011 levels 6,7 and 8)






  - This layer is shown at zoomlevel **0** and higher




#### Themes using this layer 





  - [education](https://mapcomplete.osm.be/education)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcollege' target='_blank'>college</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Duniversity' target='_blank'>university</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool' target='_blank'>school</a>&isced:2011:level~^(.*bachelor.*)$|isced:2011:level~^(.*master.*)$


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22college%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22amenity%22%3D%22university%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22amenity%22%3D%22school%22%5D%5B%22isced%3A2011%3Alevel%22~%22%5E(.*bachelor.*)%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22amenity%22%3D%22school%22%5D%5B%22isced%3A2011%3Alevel%22~%22%5E(.*master.*)%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/amenity#values) [amenity](https://wiki.openstreetmap.org/wiki/Key:amenity) | Multiple choice | [college](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcollege) [university](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Duniversity)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/isced:2011:level#values) [isced:2011:level](https://wiki.openstreetmap.org/wiki/Key:isced:2011:level) | Multiple choice | [bachelor](https://wiki.openstreetmap.org/wiki/Tag:isced:2011:level%3Dbachelor) [master](https://wiki.openstreetmap.org/wiki/Tag:isced:2011:level%3Dmaster) [doctorate](https://wiki.openstreetmap.org/wiki/Tag:isced:2011:level%3Ddoctorate)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity#values) [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/school:gender#values) [school:gender](https://wiki.openstreetmap.org/wiki/Key:school:gender) | Multiple choice | [mixed](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dmixed) [separated](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dseparated) [male](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dmale) [female](https://wiki.openstreetmap.org/wiki/Tag:school:gender%3Dfemale)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 




### institution-kind 



The question is  *What kind of institution is this?*





  - *This is an institution of post-secondary, non-tertiary education. One has to have completed secondary education to enroll here, but no bachelor (or higher) degrees are awarded here*  corresponds with  `amenity=college`
  - *This is a university, an institution of tertiary education where bachelor degrees or higher are awarded.*  corresponds with  `amenity=university`




### isced 



The question is  *What level of education is given here?*





  - *Bachelor degrees are awarded here*  corresponds with  `isced:2011:level=bachelor`
  - *Master degrees are awarded here*  corresponds with  `isced:2011:level=master`
  - *Doctorate degrees are awarded here*  corresponds with  `isced:2011:level=doctorate`


This tagrendering is only visible in the popup if the following condition is met: `amenity=university`



### capacity 



The question is  *How much students can at most enroll in this school?*

This rendering asks information about the property  [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) 

This is rendered with  `This school can enroll at most {capacity} students`





### gender 



The question is  *Which genders can enroll at this school?*





  - *Both boys and girls can enroll here and have classes together*  corresponds with  `school:gender=mixed`
  - *Both boys and girls can enroll here but they are separated (e.g. they have lessons in different classrooms or at different times)*  corresponds with  `school:gender=separated`
  - *This is a boys only-school*  corresponds with  `school:gender=male`
  - *This is a girls-only school*  corresponds with  `school:gender=female`




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
 

This document is autogenerated from [assets/layers/tertiary_education/tertiary_education.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/tertiary_education/tertiary_education.json)