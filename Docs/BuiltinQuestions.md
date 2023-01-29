

 Builtin questions 
===================



The following items can be easily reused in your layers

## Table of contents

1. [Builtin questions](#builtin-questions)
    + [questions](#questions)
    + [images](#images)
    + [mapillary](#mapillary)
    + [export_as_gpx](#export_as_gpx)
    + [export_as_geojson](#export_as_geojson)
    + [wikipedia](#wikipedia)
    + [reviews](#reviews)
    + [minimap](#minimap)
    + [phone](#phone)
    + [osmlink](#osmlink)
    + [wikipedialink](#wikipedialink)
    + [email](#email)
    + [website](#website)
    + [wheelchair-access](#wheelchair-access)
    + [dog-access](#dog-access)
    + [description](#description)
    + [opening_hours](#opening_hours)
    + [opening_hours_24_7](#opening_hours_24_7)
    + [opening_hours_by_appointment](#opening_hours_by_appointment)
    + [service:electricity](#serviceelectricity)
    + [payment-options](#payment-options)
    + [payment-options-split](#payment-options-split)
    + [payment-options-advanced](#payment-options-advanced)
    + [denominations-coins](#denominations-coins)
    + [last_edit](#last_edit)
    + [all_tags](#all_tags)
    + [multilevels](#multilevels)
    + [level](#level)
    + [smoking](#smoking)
    + [induction-loop](#induction-loop)
    + [internet](#internet)
    + [internet-fee](#internet-fee)
    + [internet-ssid](#internet-ssid)
    + [default](#default)
    + [defaults](#defaults)
    + [isOpen](#isopen)
    + [phonelink](#phonelink)
    + [emaillink](#emaillink)
    + [smokingicon](#smokingicon)
    + [sharelink](#sharelink)





### questions 



*Read-only tagrendering*



### images 



{image_carousel()}{image_upload()}{nearby_images(expandable)}

*Read-only tagrendering*



### mapillary 



{mapillary()}

*Read-only tagrendering*



### export_as_gpx 



{export_as_gpx()}

*Read-only tagrendering*



### export_as_geojson 



{export_as_geojson()}

*Read-only tagrendering*



### wikipedia 



{wikipedia():max-height:25rem}

What is the corresponding Wikidata entity?



  - {wikipedia():max-height:25rem}
  - No Wikipedia page has been linked yet




### reviews 



{reviews()}

*Read-only tagrendering*



### minimap 



{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}

*Read-only tagrendering*



### phone 



<a href='tel:{phone}'>{phone}</a>

What is the phone number of {title()}?



  - <a href='tel:{contact:phone}'>{contact:phone}</a>




### osmlink 



<a href='https://openstreetmap.org/{id}' target='_blank'><img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/></a>

*Read-only tagrendering*



  - 
  - <a href='{_backend}/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>




### wikipedialink 



<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>

*Read-only tagrendering*



  - <a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'><img src='./assets/svg/wikidata.svg' alt='WD'/></a>




### email 



<a href='mailto:{email}' target='_blank'>{email}</a>

What is the email address of {title()}?



  - <a href='mailto:{contact:email}' target='_blank'>{contact:email}</a>




### website 



<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>

What is the website of {title()}?



  - <a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>




### wheelchair-access 



Is this place accessible with a wheelchair?



  - This place is specially adapted for wheelchair users
  - This place is easily reachable with a wheelchair
  - It is possible to reach this place in a wheelchair, but it is not easy
  - This place is not reachable with a wheelchair




### dog-access 



Are dogs allowed in this business?



  - Dogs are allowed
  - Dogs are <b>not</b> allowed
  - Dogs are allowed, but they have to be leashed
  - Dogs are allowed and can run around freely




### description 



{description}

Is there still something relevant you couldn't give in the previous questions? Add it here.<br/><span style='font-size: small'>Don't repeat already stated facts</span>



### opening_hours 



<h3>Opening hours</h3>{opening_hours_table(opening_hours)}

What are the opening hours of {title()}?



### opening_hours_24_7 



<h3>Opening hours</h3>{opening_hours_table(opening_hours)}

What are the opening hours of {title()}?



  - 24/7 opened (including holidays)




### opening_hours_by_appointment 



<h3>Opening hours</h3>{opening_hours_table(opening_hours)}

What are the opening hours of {title()}?



  - Only by appointment
  - Only by appointment




### service:electricity 



Does this amenity have electrical outlets, available to customers when they are inside?



  - There are plenty of domestic sockets available to customers seated indoors, where they can charge their electronics
  - There are a few domestic sockets available to customers seated indoors, where they can charge their electronics
  - There are no sockets available indoors to customers, but charging might be possible if the staff is asked
  - There are a no domestic sockets available to customers seated indoors




### payment-options 



Which methods of payment are accepted here?



  - Cash is accepted here
  - Payment cards are accepted here




### payment-options-split 



Which methods of payment are accepted here?



  - Cash is accepted here
  - Payment cards are accepted here
  - Coins are accepted here
  - Bank notes are accepted here
  - Debit cards are accepted here
  - Credit cards are accepted here




### payment-options-advanced 



Which methods of payment are accepted here?



  - Cash is accepted here
  - Payment cards are accepted here
  - Payment is done using a dedicated app
  - Payment is done using a membership card




### denominations-coins 



What coins can you use to pay here?



  - 1 cent coins are accepted
  - 2 cent coins are accepted
  - 5 cent coins are accepted
  - 10 cent coins are accepted
  - 20 cent coins are accepted
  - 50 cent coins are accepted
  - 1 euro coins are accepted
  - 2 euro coins are accepted




### last_edit 



<div class='subtle' style='font-size: small; margin-top: 2em; margin-bottom: 0.5em;'><a href='https://www.openStreetMap.org/changeset/{_last_edit:changeset}' target='_blank'>Last edited on {_last_edit:timestamp}</a> by <a href='https://www.openStreetMap.org/user/{_last_edit:contributor}' target='_blank'>{_last_edit:contributor}</a></div>

*Read-only tagrendering*



### all_tags 



{all_tags()}

*Read-only tagrendering*



### multilevels 



This elevator goes to floors {level}

What levels does this elevator go to?



  - Located underground
  - Located on the ground floor
  - Located on the ground floor
  - Located on the first floor
  - Located on the first basement level




### level 



Located on the {level}th floor

On what level is this feature located?



  - Located underground
  - Located on the ground floor
  - Located on the ground floor
  - Located on the first floor
  - Located on the first basement level




### smoking 



Is smoking allowed at {title()}?



  - Smoking is <b>allowed</b>
  - Smoking is <b>not allowed</b>
  - Smoking is <b>allowed outside</b>.




### induction-loop 



Does this place have an audio induction loop for people with reduced hearing?



  - This place has an audio induction loop
  - This place <b>does not</b> have an audio induction loop




### internet 



Does this place offer internet access?



  - This place offers wireless internet access
  - This place <b>does not</b> offer internet access
  - This place offers internet access
  - This place offers internet access via a terminal or computer
  - This place offers wired internet access




### internet-fee 



Is there a fee for internet access?



  - There is a fee for the internet access at this place
  - Internet access is free at this place
  - Internet access is free at this place, for customers only




### internet-ssid 



The network name is <b>{internet_access:ssid}</b>

What is the network name for the wireless internet access?



  - Telekom




### default 



*Read-only tagrendering*



### defaults 



*Read-only tagrendering*



### isOpen 



*Read-only tagrendering*



  - clock:#0f0;ring:#0f0
  - circle:#f00;clock:#fff
  - clock:#ff0;ring:#ff0
  - circle:#f0f;clock:#fff




### phonelink 



<a href='tel:{phone}'><img textmode='📞' alt='phone' src='./assets/tagRenderings/phone.svg'/></a>

*Read-only tagrendering*



### emaillink 



<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/tagRenderings/send_email.svg'/></a>

*Read-only tagrendering*



### smokingicon 



*Read-only tagrendering*



  - <img textmode='🚭️' alt='no-smoking' src='./assets/tagRenderings/no_smoking.svg'/>
  - <img textmode='🚬️' alt='smoking-allowed' src='./assets/tagRenderings/smoking.svg'/>




### sharelink 



{share_link()}

*Read-only tagrendering* 

This document is autogenerated from [Customizations/SharedTagRenderings.ts](https://github.com/pietervdvn/MapComplete/blob/develop/Customizations/SharedTagRenderings.ts), [assets/tagRenderings/questions.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/tagRenderings/questions.json)