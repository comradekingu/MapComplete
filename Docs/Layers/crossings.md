

 crossings 
===========



<img src='https://mapcomplete.osm.be/./assets/layers/crossings/pedestrian_crossing.svg' height="100px"> 

Crossings for pedestrians and cyclists






  - This layer is shown at zoomlevel **17** and higher
  - This layer will automatically load  [cycleways_and_roads](./cycleways_and_roads.md)  into the layout as it depends on it:  a preset snaps to this layer (presets[0])
  - This layer will automatically load  [cycleways_and_roads](./cycleways_and_roads.md)  into the layout as it depends on it:  a preset snaps to this layer (presets[1])




#### Themes using this layer 





  - [blind_osm](https://mapcomplete.osm.be/blind_osm)
  - [cycle_infra](https://mapcomplete.osm.be/cycle_infra)
  - [kerbs_and_crossings](https://mapcomplete.osm.be/kerbs_and_crossings)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dtraffic_signals' target='_blank'>traffic_signals</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dcrossing' target='_blank'>crossing</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22highway%22%3D%22traffic_signals%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22crossing%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/crossing#values) [crossing](https://wiki.openstreetmap.org/wiki/Key:crossing) | Multiple choice | [uncontrolled](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled) [traffic_signals](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Dtraffic_signals) [unmarked](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Dunmarked)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/crossing_ref#values) [crossing_ref](https://wiki.openstreetmap.org/wiki/Key:crossing_ref) | Multiple choice | [zebra](https://wiki.openstreetmap.org/wiki/Tag:crossing_ref%3Dzebra) [](https://wiki.openstreetmap.org/wiki/Tag:crossing_ref%3D)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/bicycle#values) [bicycle](https://wiki.openstreetmap.org/wiki/Key:bicycle) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:bicycle%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:bicycle%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/crossing:island#values) [crossing:island](https://wiki.openstreetmap.org/wiki/Key:crossing:island) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:crossing:island%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:crossing:island%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/tactile_paving#values) [tactile_paving](https://wiki.openstreetmap.org/wiki/Key:tactile_paving) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:tactile_paving%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:tactile_paving%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/button_operated#values) [button_operated](https://wiki.openstreetmap.org/wiki/Key:button_operated) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:button_operated%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:button_operated%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/traffic_signals:sound#values) [traffic_signals:sound](https://wiki.openstreetmap.org/wiki/Key:traffic_signals:sound) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:sound%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:sound%3Dno) [locate](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:sound%3Dlocate) [walk](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:sound%3Dwalk)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/traffic_signals:vibration#values) [traffic_signals:vibration](https://wiki.openstreetmap.org/wiki/Key:traffic_signals:vibration) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:vibration%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:vibration%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/traffic_signals:arrow#values) [traffic_signals:arrow](https://wiki.openstreetmap.org/wiki/Key:traffic_signals:arrow) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:arrow%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:arrow%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/traffic_signals:minimap#values) [traffic_signals:minimap](https://wiki.openstreetmap.org/wiki/Key:traffic_signals:minimap) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:minimap%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:traffic_signals:minimap%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/red_turn:right:bicycle#values) [red_turn:right:bicycle](https://wiki.openstreetmap.org/wiki/Key:red_turn:right:bicycle) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:red_turn:right:bicycle%3Dyes) [yes](https://wiki.openstreetmap.org/wiki/Tag:red_turn:right:bicycle%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:red_turn:right:bicycle%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/red_turn:straight:bicycle#values) [red_turn:straight:bicycle](https://wiki.openstreetmap.org/wiki/Key:red_turn:straight:bicycle) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:red_turn:straight:bicycle%3Dyes) [yes](https://wiki.openstreetmap.org/wiki/Tag:red_turn:straight:bicycle%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:red_turn:straight:bicycle%3Dno)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### crossing-type 



The question is  *What kind of crossing is this?*





  - *Crossing, without traffic lights*  corresponds with  `crossing=uncontrolled`
  - *Crossing with traffic signals*  corresponds with  `crossing=traffic_signals`
  - *Zebra crossing*  corresponds with  `crossing=zebra`
  - This option cannot be chosen as answer
  - *Crossing without crossing markings*  corresponds with  `crossing=unmarked`


This tagrendering is only visible in the popup if the following condition is met: `highway=crossing`



### crossing-is-zebra 



The question is  *Is this is a zebra crossing?*





  - *This is a zebra crossing*  corresponds with  `crossing_ref=zebra`
  - *This is not a zebra crossing*  corresponds with  ``


This tagrendering is only visible in the popup if the following condition is met: `crossing=uncontrolled`



### crossing-bicycle-allowed 



The question is  *Is this crossing also for bicycles?*





  - *A cyclist can use this crossing*  corresponds with  `bicycle=yes`
  - *A cyclist can not use this crossing*  corresponds with  `bicycle=no`


This tagrendering is only visible in the popup if the following condition is met: `highway=crossing`



### crossing-has-island 



The question is  *Does this crossing have an island in the middle?*





  - *This crossing has an island in the middle*  corresponds with  `crossing:island=yes`
  - *This crossing does not have an island in the middle*  corresponds with  `crossing:island=no`


This tagrendering is only visible in the popup if the following condition is met: `highway=crossing`



### crossing-tactile 



The question is  *Does this crossing have tactile paving?*





  - *This crossing has tactile paving*  corresponds with  `tactile_paving=yes`
  - *This crossing does not have tactile paving*  corresponds with  `tactile_paving=no`
  - *This crossing has tactile paving, but is not correct*  corresponds with  `tactile_paving=incorrect`
  - This option cannot be chosen as answer


This tagrendering is only visible in the popup if the following condition is met: `highway=crossing`



### crossing-button 



The question is  *Does this traffic light have a button to request green light?*





  - *This traffic light has a button to request green light*  corresponds with  `button_operated=yes`
  - *This traffic light does not have a button to request green light*  corresponds with  `button_operated=no`


This tagrendering is only visible in the popup if the following condition is met: `highway=traffic_signals|crossing=traffic_signals`



### crossing-sound 



The question is  *Does this traffic light have sound signals to aid crossing?*





  - *This traffic light has sound signals to help crossing, both for finding the crossing and for crossing.*  corresponds with  `traffic_signals:sound=yes`
  - *This traffic light does not have sound signals to help crossing.*  corresponds with  `traffic_signals:sound=no`
  - *This traffic light has a sound signal to help locate the pole, but no signal to sign that it is safe to cross.*  corresponds with  `traffic_signals:sound=locate`
  - *This traffic light has a sound signal to sign that it is safe to cross, but no signal to help locate the pole.*  corresponds with  `traffic_signals:sound=walk`


This tagrendering is only visible in the popup if the following condition is met: `crossing=traffic_signals`



### crossing-vibration 



The question is  *Does this traffic light have vibration signals to aid crossing? (usually located at the bottom of the crossing button)*





  - *The button for this traffic light has a vibration signal to indicate that it is safe to cross.*  corresponds with  `traffic_signals:vibration=yes`
  - *The button for this traffic light does not have a vibration signal to indicate that it is safe to cross.*  corresponds with  `traffic_signals:vibration=no`


This tagrendering is only visible in the popup if the following condition is met: `crossing=traffic_signals&button_operated=yes`



### crossing-arrow 



The question is  *Does this traffic light have an arrow pointing in the direction of crossing?*





  - *This traffic light has an arrow pointing in the direction of crossing.*  corresponds with  `traffic_signals:arrow=yes`
  - *This traffic light does <b>not</b> have an arrow pointing in the direction of crossing.*  corresponds with  `traffic_signals:arrow=no`


This tagrendering is only visible in the popup if the following condition is met: `crossing=traffic_signals`



### crossing-minimap 



The question is  *Does this traffic light have a tactile map showing the layout of the crossing?*





  - *This traffic light has a tactile map showing the layout of the crossing.*  corresponds with  `traffic_signals:minimap=yes`
  - *This traffic light does <b>not</b> have a tactile map showing the layout of the crossing.*  corresponds with  `traffic_signals:minimap=no`


This tagrendering is only visible in the popup if the following condition is met: `crossing=traffic_signals`



### crossing-right-turn-through-red 



The question is  *Can a cyclist turn right when the light is red?*





  - *A cyclist can turn right if the light is red*  corresponds with  `red_turn:right:bicycle=yes`
  - *A cyclist can turn right if the light is red*  corresponds with  `red_turn:right:bicycle=yes`
  - *A cyclist can not turn right if the light is red*  corresponds with  `red_turn:right:bicycle=no`


This tagrendering is only visible in the popup if the following condition is met: `highway=traffic_signals`



### crossing-continue-through-red 



The question is  *Can a cyclist go straight on when the light is red?*





  - *A cyclist can go straight on if the light is red*  corresponds with  `red_turn:straight:bicycle=yes`
  - *A cyclist can go straight on if the light is red*  corresponds with  `red_turn:straight:bicycle=yes`
  - *A cyclist can not go straight on if the light is red*  corresponds with  `red_turn:straight:bicycle=no`


This tagrendering is only visible in the popup if the following condition is met: `highway=traffic_signals`



#### Filters 





id | question | osmTags
---- | ---------- | ---------
tactile_paving_advanced.0 | With or without tactile paving (default) | 
tactile_paving_advanced.1 | With tactile paving | tactile_paving=yes
tactile_paving_advanced.2 | Without tactile paving | tactile_paving=no
tactile_paving_advanced.3 | No information about tactile paving | 
 

This document is autogenerated from [assets/layers/crossings/crossings.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/crossings/crossings.json)