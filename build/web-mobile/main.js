if(window.boot=function(){function x(){var a=document.getElementById("splash"),b=a.querySelector(".progress-bar span");cc.loader.onProgress=function(a,c){var e=100*a/c;b&&(b.style.width=e.toFixed(2)+"%")},a.style.display="block",b.style.width="0%",cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH,function(){a.style.display="none"})}var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,z,A,B,a=window._CCSettings;if(window._CCSettings=void 0,!a.debug){b=a.uuids,c=a.rawAssets,d=a.assetTypes,e=a.rawAssets={};for(f in c){g=c[f],h=e[f]={};for(i in g)j=g[i],k=j[1],"number"==typeof k&&(j[1]=d[k]),h[b[i]||i]=j}for(l=a.scenes,m=0;m<l.length;++m)n=l[m],"number"==typeof n.uuid&&(n.uuid=b[n.uuid]);o=a.packedAssets;for(p in o)for(q=o[p],r=0;r<q.length;++r)"number"==typeof q[r]&&(q[r]=b[q[r]]);s=a.subpackages;for(t in s)if(u=s[t].uuids)for(v=0,w=u.length;w>v;v++)"number"==typeof u[v]&&(u[v]=b[u[v]])}y=function(){function b(a){cc.director.loadScene(a,function(c){var d,e;c?CC_BUILD&&setTimeout(function(){b(a)},1e3):(cc.sys.isBrowser&&(d=document.getElementById("GameCanvas"),d.style.visibility="",e=document.getElementById("GameDiv"),e&&(e.style.backgroundImage="")),cc.loader.onProgress=null,console.log("Success to load scene: "+a))})}cc.loader.downloader._subpackages=a.subpackages,cc.view.enableRetina(!0),cc.view.resizeWithBrowserSize(!0),cc.sys.isBrowser&&x(),cc.sys.isMobile&&("landscape"===a.orientation?cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE):"portrait"===a.orientation&&cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT),cc.view.enableAutoFullScreen([cc.sys.BROWSER_TYPE_BAIDU,cc.sys.BROWSER_TYPE_WECHAT,cc.sys.BROWSER_TYPE_MOBILE_QQ,cc.sys.BROWSER_TYPE_MIUI].indexOf(cc.sys.browserType)<0)),cc.sys.isBrowser&&cc.sys.os===cc.sys.OS_ANDROID&&(cc.macro.DOWNLOAD_MAX_CONCURRENT=2);var c=a.launchScene;b(c)},z=a.jsList,A=a.debug?"src/project.dev.js":"src/project.js",z?(z=z.map(function(a){return"src/"+a}),z.push(A)):z=[A],B={id:"GameCanvas",scenes:a.scenes,debugMode:a.debug?cc.debug.DebugMode.INFO:cc.debug.DebugMode.ERROR,showFPS:a.debug,frameRate:60,jsList:z,groupList:a.groupList,collisionMatrix:a.collisionMatrix},cc.AssetLibrary.init({libraryPath:"res/import",rawAssetsBase:"res/raw-",rawAssets:a.rawAssets,packedAssets:a.packedAssets,md5AssetsMap:a.md5AssetsMap,subpackages:a.subpackages}),cc.game.run(B,y)},window.jsb){var isRuntime="function"==typeof loadRuntime;isRuntime?(require("src/settings.js"),require("src/cocos2d-runtime.js"),require("jsb-adapter/engine/index.js")):(require("src/settings.js"),require("src/cocos2d-jsb.js"),require("jsb-adapter/jsb-engine.js")),cc.macro.CLEANUP_IMAGE_CACHE=!0,window.boot()}