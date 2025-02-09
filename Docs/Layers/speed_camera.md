

 speed_camera 
==============



<img src='https://mapcomplete.osm.be/square:white;./assets/layers/speed_camera/speed_camera.svg' height="100px"> 

Layer showing speed cameras






  - This layer is shown at zoomlevel **12** and higher
  - This layer will automatically load  [maxspeed](./maxspeed.md)  into the layout as it depends on it:  a preset snaps to this layer (presets[0])




#### Themes using this layer 





  - [maxspeed](https://mapcomplete.osm.be/maxspeed)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera' target='_blank'>speed_camera</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22highway%22%3D%22speed_camera%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/maxspeed#values) [maxspeed](https://wiki.openstreetmap.org/wiki/Key:maxspeed) | [pnat](../SpecialInputElements.md#pnat) | 




### maxspeed 



The question is  *What is the maximum speed allowed at this speed camera?*

This rendering asks information about the property  [maxspeed](https://wiki.openstreetmap.org/wiki/Key:maxspeed) 

This is rendered with  `The maximum speed allowed is {canonical(maxspeed)}`





### ref 



This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `ref~.+` 

This document is autogenerated from [assets/layers/speed_camera/speed_camera.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/speed_camera/speed_camera.json)