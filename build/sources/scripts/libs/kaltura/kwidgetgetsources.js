window.kWidget||(window.kWidget={}),function(t){t.getSources=function(a){var e=new t.api({wid:"_"+a.partnerId,serviceUrl:"https://cdnapisec.kaltura.com"});e.doRequest([{contextDataParams:{referrer:document.URL,objectType:"KalturaEntryContextDataParams",flavorTags:"all"},service:"baseentry",entryId:a.entryId,action:"getContextData"},{service:"baseentry",action:"get",version:"-1",entryId:a.entryId},{service:"caption_captionasset",action:"list","filter:entryIdEqual":a.entryId}],function(t){var o=e.ks,r=[],n=[],s=[],i=location.protocol.substr(0,location.protocol.length-1),p;p="https"==i?"https://cdnapisec.kaltura.com":"http://cdnbakmi.kaltura.com";var d=p+"/p/"+a.partnerId+"/sp/"+a.partnerId+"00/playManifest";for(var l in t[0].flavorAssets){var c=t[0].flavorAssets[l];if(2==c.status){var m={"data-width":c.width,"data-height":c.height,flavorParamsId:c.flavorParamsId,flavorId:c.id,status:c.status},u=d+"/entryId/"+c.entryId;c.tags.indexOf("applembr")==-1?(u+="/flavorId/"+c.id+"/format/url/protocol/https",c.tags.toLowerCase().indexOf("ipad")!=-1&&(m.src=u+"/a.mp4",m.type="video/mp4"),c.tags.toLowerCase().indexOf("iphone")!=-1&&(m.src=u+"/a.mp4",m.type="video/mp4"),487081===c.flavorParamsId&&(m.src=u+"/a.mp4",m.type="video/mp4"),c.fileExt&&("ogg"==c.fileExt.toLowerCase()||"ogv"==c.fileExt.toLowerCase()||c.containerFormat&&"ogg"==c.containerFormat.toLowerCase())&&(m.src=u+"/a.ogg",m.type="video/ogg"),("webm"==c.fileExt||c.tags.indexOf("webm")!=-1||c.containerFormat&&"matroska"==c.containerFormat.toLowerCase()||c.containerFormat&&"webm"==c.containerFormat.toLowerCase())&&(m.src=u+"/a.webm",m.type="video/webm"),"3gp"==c.fileExt&&(m.src=u+"/a.3gp",m.type="video/3gp"),m.src&&s.push(m),c.tags.toLowerCase().indexOf("ipadnew")!=-1&&r.push(c.id),c.tags.toLowerCase().indexOf("iphonenew")!=-1&&n.push(c.id)):(u+="/format/applehttp/protocol/"+i+"/a.m3u8",s.push({type:"application/vnd.apple.mpegurl",src:u}))}}0!=r.length&&s.push({type:"application/vnd.apple.mpegurl",src:d+"/entryId/"+c.entryId+"/flavorIds/"+r.join(",")+"/format/applehttp/protocol/"+i+"/a.m3u8"}),0!=n.length&&s.push({type:"application/vnd.apple.mpegurl",src:d+"/entryId/"+c.entryId+"/flavorIds/"+n.join(",")+"/format/applehttp/protocol/"+i+"/a.m3u8"}),a.callback&&a.callback({status:t[1].status,poster:t[1].thumbnailUrl,duration:t[1].duration,name:t[1].name,entryId:t[1].id,captionId:t[2].totalCount>0?t[2].objects[0].id:null,sources:s})})}}(window.kWidget);