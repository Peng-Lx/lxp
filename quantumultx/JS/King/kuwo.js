/* 
脚本功能：解锁酷我音乐会员歌曲➕听书
脚本作者：king
下载地址：https://apple.co/3Kcejgh
更新时间：20212.1.15
脚本频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
[rewrite_local]
# 解锁酷我音乐会员➕听书
^http://(.+).kuwo.cn(/v2/api/user/info|/a.p|/vip/v2/user/vip) url script-response-body https://raw.githubusercontent.com/PF2022/lxp/new/master/quantumultx/JS/King/kuwo.js
[mitm] 
hostname = *.kuwo.cn
********************************
*/

;var encode_version = 'jsjiami.com.v5', rzggm = '__0xe1166',  __0xe1166=['wqHCmk7DrGI=','wqLCiMKxWMK/','BksRw7LDqA==','NcOywonDpMO4KiY=','w4JaPMOKw5MWThPCn8KQw7ZEVMKMwq3DocO/','wr1cwqXCs8Klw43CnRZTwqAjDQvCtMOyw5rCog==','w7vDsxPDg3zCp3FjAA1yWzDCn8K5SAXCqMK3w4Ymwq8=','H8KPeCg=','wp3CjkDDpkHDpFpbwpFVaTFzwqzDq1DDm8KJKjtiw6xKwrzDmADCjmnDgx1lw5jDk8KpEsOraxfCscKlRXlsw7jDn8OVLMKKUAjCuA==','w4N1w5o=','JsK8TlBdwp7DoMKMWUzCrEfDhWbCpxE=','wpzCvsKgJ8OdX18TO8O+w6jCmBbCkwTDs0vCucOLwobDiS3DqsOBTcKOY8OPNsKDCi3Do8OTwp0bwp7CssKIIMKDWMK4w4wBQMOnwrfDn8KGdsOfaMKVw5duacOeVMKlLsOewpPDgAHDvsKlJ8K1Z8K7wpsdw6fDgWjDj8KzNANQwotJM2LCocKBfMK3McOUa8Kmwrhgw7EWwrDCjsO2w6IGMARIKMO/w5DDgsKjwpLCuVA/w4jCucOBw7s+wrxBWsKOOMOBN3LCtQ7CgcOnGgpvwqPDu8OkwqoUw4smLRfDhMKhw43ClCvDk8K+WsO4b8OCKsKiRsOWwqnDvcOow6nCk8KheA==','VcOsQnXCkW7DkHZyw5gQXn7CiEY9w5bDlcOow5p3w7LCucO4w7/CtMObw5XCpBgPScOtw4lBacO+w5JFcULDnxsFEwzCq1sFI8O4ccOKEHRvAxhzW8OkwqV8esOmw5tSwqoFw4BETsKuLy/DkMOGw5PCoMOVLsO0FBtwCz1bTGgNWcKGw4Agw4QSwrXDjcOOw5N8wqNNwrzCmDcMwprDkW8UAjXDtMKGWCPCmX8aw5oSw49eMwYEQ8OfwpHDs1XDrsKfw5Jaw73DucKLa8OYXzzDucO6V2DCisKSwp/DkkZldSFvw4rCqsKaWMKOGDFew4TCjmvCjTzCmcKww7TDk0HCtVTDk8OZw78KfMKILcKEQsKZUcOcc8Oqwq9KWcKQwp1NwrxJGcKNw4zCtl5ZaQ7Dp8O+wpdCw4Ntwq5pDsOZwpdrw6VmfwVnTcOnwqckworDqz1nwolIw6FSwrk7w759WcKowosxZURmw4nDlhDCsQfDl8O2wo/Cr8OJwpJhwpLCj8OUw67Ckg==','w5dBw68=','woJkJiR1WcO0w5EFw4HCk8OZQBByBSUxK8OFw4knwp8KwpvChcOBwqY+ZRd0cMOiZBTDhMKKdg==','wqEjQQ==','wpVMeg==','wqh0w7fCpcKQA0x2','wrocKQfDsg==','wrASSyDDiw==','A8O0wqQ4woc=','EcK7wpB7Ig==','JE/DoMK1eg==','w6/DucOTw60I','IAjDhCtx','w6sPRWBF','wqvCh2XDhVE=','woFJYMKCw4YO','w6oaWWVQHsOv','wrgDwrV3DhgC','wo1xw7rDhMKu','wqbCrsKrWMK/','w6QHH8Omw5nCgMO5','wq1mwozDvmM=','w6MMC8Ovw57CisOyRRY=','woDCpMK6C8OEQl9PPcKzwr/ClDvDuA==','54qd5pyw5YyL7766esO55L6e5ayl5p255b+b56q877+o6L6p6K+f5pSN5oyN5oqn5Li755iY5bSe5L+B','OsOOwrEowq0='];(function(_0x37c9a8,_0x15031f){var _0xdf7a35=function(_0x2797b6){while(--_0x2797b6){_0x37c9a8['push'](_0x37c9a8['shift']());}};_0xdf7a35(++_0x15031f);}(__0xe1166,0x1f1));var _0x4573=function(_0x2b65e1,_0x54a4eb){_0x2b65e1=_0x2b65e1-0x0;var _0x508bd5=__0xe1166[_0x2b65e1];if(_0x4573['initialized']===undefined){(function(){var _0x55d282=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x473686='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x55d282['atob']||(_0x55d282['atob']=function(_0x3ed41f){var _0x398ae5=String(_0x3ed41f)['replace'](/=+$/,'');for(var _0x495d21=0x0,_0x367fb4,_0x195518,_0x1465a1=0x0,_0x5458b5='';_0x195518=_0x398ae5['charAt'](_0x1465a1++);~_0x195518&&(_0x367fb4=_0x495d21%0x4?_0x367fb4*0x40+_0x195518:_0x195518,_0x495d21++%0x4)?_0x5458b5+=String['fromCharCode'](0xff&_0x367fb4>>(-0x2*_0x495d21&0x6)):0x0){_0x195518=_0x473686['indexOf'](_0x195518);}return _0x5458b5;});}());var _0x36dda8=function(_0x2fb01b,_0x189ef9){var _0x186bb0=[],_0x6dd246=0x0,_0x308382,_0x516a3a='',_0x5a30d2='';_0x2fb01b=atob(_0x2fb01b);for(var _0x388d81=0x0,_0x508aea=_0x2fb01b['length'];_0x388d81<_0x508aea;_0x388d81++){_0x5a30d2+='%'+('00'+_0x2fb01b['charCodeAt'](_0x388d81)['toString'](0x10))['slice'](-0x2);}_0x2fb01b=decodeURIComponent(_0x5a30d2);for(var _0x36b31f=0x0;_0x36b31f<0x100;_0x36b31f++){_0x186bb0[_0x36b31f]=_0x36b31f;}for(_0x36b31f=0x0;_0x36b31f<0x100;_0x36b31f++){_0x6dd246=(_0x6dd246+_0x186bb0[_0x36b31f]+_0x189ef9['charCodeAt'](_0x36b31f%_0x189ef9['length']))%0x100;_0x308382=_0x186bb0[_0x36b31f];_0x186bb0[_0x36b31f]=_0x186bb0[_0x6dd246];_0x186bb0[_0x6dd246]=_0x308382;}_0x36b31f=0x0;_0x6dd246=0x0;for(var _0x1ab485=0x0;_0x1ab485<_0x2fb01b['length'];_0x1ab485++){_0x36b31f=(_0x36b31f+0x1)%0x100;_0x6dd246=(_0x6dd246+_0x186bb0[_0x36b31f])%0x100;_0x308382=_0x186bb0[_0x36b31f];_0x186bb0[_0x36b31f]=_0x186bb0[_0x6dd246];_0x186bb0[_0x6dd246]=_0x308382;_0x516a3a+=String['fromCharCode'](_0x2fb01b['charCodeAt'](_0x1ab485)^_0x186bb0[(_0x186bb0[_0x36b31f]+_0x186bb0[_0x6dd246])%0x100]);}return _0x516a3a;};_0x4573['rc4']=_0x36dda8;_0x4573['data']={};_0x4573['initialized']=!![];}var _0x409556=_0x4573['data'][_0x2b65e1];if(_0x409556===undefined){if(_0x4573['once']===undefined){_0x4573['once']=!![];}_0x508bd5=_0x4573['rc4'](_0x508bd5,_0x54a4eb);_0x4573['data'][_0x2b65e1]=_0x508bd5;}else{_0x508bd5=_0x409556;}return _0x508bd5;};if($request['url'][_0x4573('0x0','9cev')](_0x4573('0x1','c!a7'))!=-0x1){re(_0x4573('0x2','n02n'),_0x4573('0x3','ao]L'));}if($request['url']['indexOf'](_0x4573('0x4','E%*R'))!=-0x1){re(_0x4573('0x5','mBNA'),'playright\x22:1@downright\x22:1@policytype\x22:3');}if($request[_0x4573('0x6','k6^Z')]['indexOf'](_0x4573('0x7','LHCM'))!=-0x1){re(_0x4573('0x8','C5Qp'),_0x4573('0x9','c)Z0'));}function re(){var _0x37411a={'mvxXK':function _0x52a47e(_0x4d5778,_0x5e060f){return _0x4d5778!==_0x5e060f;},'vUCAx':_0x4573('0xa','k6^Z'),'GOVXl':function _0x5f23ca(_0x1ae9ad,_0x375d97,_0x4f16c9){return _0x1ae9ad(_0x375d97,_0x4f16c9);},'ktzFb':'playright\x22:[^,]+@downright\x22:[^,]+@policytype\x22:[^,]+','VEaqd':_0x4573('0xb','zpbX'),'FeDZb':function _0x43db8b(_0x5ac1f7,_0x22c5fe){return _0x5ac1f7<_0x22c5fe;},'ROHVb':_0x4573('0xc','ORFe'),'mTZXH':_0x4573('0xd','H%L!'),'SndQt':function _0x1e0999(_0x268ff4,_0x42173b){return _0x268ff4<_0x42173b;},'xzpHs':function _0x1f360b(_0x4495c1,_0x5943fa){return _0x4495c1(_0x5943fa);}};var _0x4bcba4=$response['body'];if(arguments[0x0][_0x4573('0xe','QBuO')]('@')){if(_0x37411a[_0x4573('0xf','L%B@')](_0x37411a[_0x4573('0x10','p[Fu')],_0x37411a[_0x4573('0x11','@2Am')])){_0x37411a[_0x4573('0x12','UijE')](re,_0x37411a[_0x4573('0x13','!8DG')],_0x37411a[_0x4573('0x14','BA%E')]);}else{var _0x34f458=arguments[0x0][_0x4573('0x15','Uj*i')]('@');var _0x28b861=arguments[0x1][_0x4573('0x16','65%7')]('@');for(i=0x0;_0x37411a[_0x4573('0x17','mBNA')](i,_0x34f458[_0x4573('0x18','c!a7')]);i++){var _0x4a0032=new RegExp(_0x34f458[i],'g');_0x4bcba4=_0x4bcba4[_0x4573('0x19','65%7')](_0x4a0032,_0x28b861[i]);}}}else{if(_0x37411a['ROHVb']!==_0x37411a['mTZXH']){var _0xcc5035=new RegExp(arguments[0x0],'g');_0x4bcba4=_0x4bcba4[_0x4573('0x1a','0KRN')](_0xcc5035,arguments[0x1]);}else{var _0xf578d3=arguments[0x0][_0x4573('0x1b','JPtU')]('@');var _0x1f0b56=arguments[0x1][_0x4573('0x1c','C[h&')]('@');for(i=0x0;_0x37411a['SndQt'](i,_0xf578d3['length']);i++){var _0x5a380d=new RegExp(_0xf578d3[i],'g');_0x4bcba4=_0x4bcba4[_0x4573('0x1d','lOG)')](_0x5a380d,_0x1f0b56[i]);}}}_0x37411a[_0x4573('0x1e','O5!z')]($done,_0x4bcba4);};(function(_0x17a1a9,_0x2f58d0,_0x4f8800){var _0x346b19={'vvYSa':'ert','OoVQR':_0x4573('0x1f','lOG)'),'LxosQ':function _0x48beef(_0xb4d07a,_0x39ce61){return _0xb4d07a===_0x39ce61;},'wVvit':_0x4573('0x20','C5Qp'),'edUQN':function _0x25be73(_0x528bbd,_0x1b6afd){return _0x528bbd+_0x1b6afd;},'pKHUA':_0x4573('0x21','O5!z')};_0x4f8800='al';try{_0x4f8800+=_0x346b19['vvYSa'];_0x2f58d0=encode_version;if(!(typeof _0x2f58d0!==_0x346b19[_0x4573('0x22','@2Am')]&&_0x346b19[_0x4573('0x23','mBNA')](_0x2f58d0,_0x346b19[_0x4573('0x24','C[h&')]))){_0x17a1a9[_0x4f8800](_0x346b19[_0x4573('0x25','TvA^')]('删除',_0x346b19['pKHUA']));}}catch(_0x1bac07){_0x17a1a9[_0x4f8800]('删除版本号，js会定期弹窗');}}(window));;encode_version = 'jsjiami.com.v5';
