$(function(){

//潮流模块图片放大和缩小
    var chaoOne=$('.chao-one');
    for (var i = 0; i < chaoOne.length; i++) {
        dong(chaoOne[i]);
    };
    function dong(chaoOne){
    var ap=$('a',chaoOne);
    for (var i = 0; i < ap.length; i++) {
        ap[i].onmouseover=function(){
            var dongtu=$('img',this)[0];
            animate(dongtu,{width:160},100)
        }
        ap[i].onmouseout=function(){
            var dongtu=$('img',this)[0];
            animate(dongtu,{width:140},100)
        }
        
    };
    }   

//亲子模块图片向左移动一定的距离
    var qinzi=$('.qinzi');
    for (var i = 0; i < qinzi.length; i++) {
        yidong(qinzi[i])
    };

    
    function yidong(qinzi){
    var xiaZhong=$('.xia-zhong',qinzi)[0];
    var xiaTU=$('.xia-tu',xiaZhong);
    // console.log(xiaTU)
    // alert(1)
    for (var a = 0; a < xiaTU.length; a++) {
        xiaTU[a].onmouseover=function(){
            var img=$('img',this)[0];
            animate(img,{marginRight:20},300)
        }
        xiaTU[a].onmouseout=function(){
            var img=$('img',this)[0]
            animate(img,{marginRight:0},300)
        }
    };
    var xiaR=$('.xia-right',qinzi)[0];
    var xiaRtu=$('.xia-rtu',qinzi);
    for (var i = 0; i < xiaRtu.length; i++) {
        xiaRtu[i].onmouseover=function(){
            var img=$('img',this)[0];
            animate(img,{marginRight:20},300)
        }
        xiaRtu[i].onmouseout=function(){
            var img=$('img',this)[0];
            animate(img,{marginRight:0},300)
        }
    };
    

    var xia=$('.xia',qinzi)[0];
    console.log(xia)
    var imgGu=$('.img-gu',xia)[0];
    var lama=$('.lama',imgGu);
    lama[0].style.display='block';
    var ziyi=0;
    var z=setInterval(zidong,2000)
    function zidong(){
        ziyi++;
        if(ziyi==lama.length){ziyi=0}
        for (var i = 0; i < lama.length; i++) {
            lama[i].style.display="none";
        };
        lama[ziyi].style.display="block";
    }
    imgGu.onmouseover=function(){
        clearInterval(z);
        lama[ziyi].style.fontSize="#a50000"
    }
    imgGu.onmouseout=function(){
        z=setInterval(zidong,2000)
    }


    }
//亲子模块图片向左移动一定的距离

//热门品牌图片加上隐藏框
    var list=$('.list')[0];
    var listBox=$('.list-box',list)[0];
    var cang=$('li',listBox)
    // console.log(cang)
    for (var i = 0; i < cang.length; i++) {
        yincang(cang[i])
    };
    function yincang(cang){
        var ditu=$('.ditu',cang)[0];
        var dituBox=ditu.parentNode;
        var yin=$('.yincang',dituBox)[0];
        var zhe=$('.zhe',yin)[0];
        var you=$('.you',yin)[0];
        yin.style.display='none';
        dituBox.onmouseover=function(){
            yin.style.display='block';
        }
         dituBox.onmouseout=function(){
            yin.style.display='none';
        }
    }


//banner隐藏框
// function  yincangkuang(){
    // var banner=$('.banner')[0];
    // var bannerLeft=$('.banner-left',banner)[0];
    // var list=$('li',$('ul',bannerLeft)[0]);
    // var bannerYin=$('.banner-yin',banner)[0];
    // var yinlist=$('li',bannerYin);
    // var inde=0;
    // var nexts=0;
    // for (var w = 0; w < list.length; w++) {
    //     yinlist[w].style.display='none';
    //     list[w].ss=w;
    //     list[w].onmouseover=function(){
    //         yinlist[this.ss].style.display='block';
    //         yinlist[this.ss].onmouseout=function(){
    //         this.style.display='none';
    //     }
    //     }
    //     list[w].onmouseout=function(){
            
    //     }
        

    // };
    

    // }
    // yincangkuang()



//楼层
var floors=$('.floor');
var ceLeft=$('.ce-left')[0];
var ac=$('a',ceLeft);
var tops=[];
for (var i = 0; i < floors.length; i++) {
    tops.push(floors[i].offsetTop);
};
        window.onscroll=function(){
            var gunh=document.body.scrollTop||document.documentElement.scrollTop;//获取滚动条高度
            for (var i = 0; i < tops.length; i++) {//对tops值与滚动条值进行判断，应先遍历tops值
                if(tops[i]<gunh+200){//进行判断
                    for (var j = 0; j < ac.length; j++) {
                        ac[j].style.backgroundColor='';//将所有导航框颜色设为空
                    };
                    ac[i].style.backgroundColor='green';//当前导航框设为绿色
                }
            };
        }
        window.onscroll();

        for (var i = 0; i < ac.length; i++) {
            ac[i].index=i;//保留下标
            ac[i].onclick=function(){
                 // document.documentElement.scrollTop=tops[this.index];
                 // document.body.scrollTop=tops[this.index];     
                 animate(document.body,{scrollTop:tops[this.index]},500);
                 //将document.body.scrollTop值改为需要的展示的版块top值
                 animate(document.documentElement,{scrollTop:tops[this.index]},500)  
            }
        };
       // var gunh=document.body.scrollTop||document.documentElement.scrollTop;
       // var dh=document.documentElement.clientHeight;
       // if(gunh>dh){
       //     ceLeft.style.display="block";
       // }else{
       //     ceLeft.style.display="none";
       // }

// 加载图片
    var body=$('body')[0];
    var jiazai=$('.jiazai');
    var ch=document.documentElement.clientHeight;//浏览器高度
    var ih=[];//top值数组
    var flags=[];//设置一个开关组
    for (var o = 0; o < jiazai.length; o++) {
        ih.push(jiazai[o].offsetTop);//获取每个imgbox的 top值，将其添加进数组
        flags.push(true);//当进入页面后开关打开
    };

    var flag=true;

    on(window,'scroll',mmmmm)
    function mmmmm(){//滚动条触发事件
        var scrt=document.body.scrollTop||document.documentElement.scrollTop;//获取滚动条高度

        for (var p = 0; p < ih.length; p++) {//遍历top值数组
            if((scrt+ch)>=ih[p]&&flags[p]){//将每个imgbox的top值与滚动条高度进行比较,并判断开关是否打开,开关打开则继续加载图片
               flags[p]=false;//开关关闭则图片不再进行加载
             var img=jiazai[p].getElementsByTagName('img');//获取图片标签
                 for (var t = 0; t < img.length; t++) {
                    img[t].src=img[t].getAttribute('asrc')//将图片地址获取到
                 };
             };
        }
    }


//隐藏搜索框
    on(window,'scroll',nnnnn)

    function nnnnn(){
        var ys=$('.ys')[0];
    var fl=true;
        var stop=document.documentElement.scrollTop||document.body.scrollTop;
        if(stop>600){
            if(fl){//若开关打开，则将隐藏框显示出来
                fl=false;//进入后将开关关闭，只进行一次显示
                animate(ys,{top:0},200)
            }
            
        }else{
            if(fl){//如果开关关闭则将隐藏框隐藏
                fl=true;//并将开关打开，方便下次的使用。
                animate(ys,{top:-50},200)
                
            }
            
        }
    }





    function  yincangkuang(){
    var banner=$('.banner')[0];
    var bannerLeft=$('.banner-left',banner)[0];
    var list=$('li',$('ul',bannerLeft)[0]);
    var bannerYin=$('.banner-yin',banner)[0];
    var yinlist=$('li',bannerYin);
    // var inde=0;
    // var nexts=0;
    for (var w = 0; w < list.length; w++) {
        // nexts++;
        yinlist[w].style.display='none';
        // yinlist[nexts].style.display='block';
        list[w].ss=w;
        list[w].onmouseover=function(){
            yinlist[this.ss].style.display='block';
            yinlist[this.ss].onmouseover=function(){
            this.style.display='block';
        }
            yinlist[this.ss].onmouseout=function(){
            this.style.display='none';
        }
        
        }
        list[w].onmouseout=function(){
             yinlist[this.ss].style.display='none';   
        }
        
        

    };
    }
    yincangkuang()

})
    


on(window,'load',ccccc)
function ccccc(){
    //banner轮播
    var image=$('.image')[0];
    var imageBox=image.parentNode;
    var imgBox=$('.img-box',image)[0];
    var as=$('a',imgBox);
    var anniu=$('.anniu',image)[0];
    // alert(1)
    // console.log(anniu)
    var btn=$('li',anniu)

    console.log(btn)
    var index=0;
    var next=0;
    var iw=parseInt(getstyle(as[0],'width'))
    // alert(iw)
    as[0].style.left=0;
    var t=setInterval(move,2000)
    function move(){
        next++;
        if(next==as.length){next=0}
        as[next].style.left=iw+'px';
        btn[index].className='';
        btn[next].className='niu';
        animate(as[index],{left:-iw},500);
        animate(as[next],{left:0},500);
        index=next;
    }
    imageBox.onmouseover=function(){
        clearInterval(t);
    }
    imageBox.onmouseout=function(){
        t=setInterval(move,2000)
    }
    

    for (var m = 0; m < btn.length; m++) {
        btn[m].index=m;
        btn[m].onmouseover=function(){
             next=this.index;
            if(index==this.index){return;}
            as[this.index].style.left=iw+'px';
            animate(as[index],{left:-iw},500);
            animate(as[this.index],{left:0},500);
            btn[index].className='';
            btn[this.index].className='niu';
            index=next;
            // index=this.index;
        }
    };
}


// 固定导航
on(window,'load',function(){
    var topoo=$('.top_float')[0];
    var zichan=$('.zichan',topoo);
    var wode=$('.wode')[0];
    var quan=$('li',wode);
    for (var j = 0; j < quan.length; j++) {
        quan[j].style.display='none'
    };
    for (var w = 0; w < zichan.length; w++) {
        zichan[w].oo=w
        zichan[w].onmouseover=function(){
            for (var i = 0; i < quan.length; i++) {
                quan[i].style.display='none'
            };
            
            quan[this.oo].style.display="block";
            animate(quan[this.oo],{left:10},500)
        }
        zichan[w].onmouseout=function(){
            quan[this.oo].style.display='none';
            animate(quan[this.oo],{left:0},500)
        }
    };


    var heidao=$('.top_float')[0];
    var hh=document.documentElement.clientHeight;
    console.log(hh)
    heidao.style.height=hh+'px';
})
on(window,'load',function(){
    var dao=$('.dao');
    var daob=$('.daob');
    for (var i = 0; i < dao.length; i++) {
        dao[i].aa=i;
        dao[i].onmouseover=function(){
            for (var i = 0; i < daob.length; i++) {
                daob[this.aa].style.display='block';
                daob[this.aa].onmouseover=function(){
                    this.style.display='block';
                }
                daob[this.aa].onmouseout=function(){
                    this.style.display='none'
                }
                
            };
            daob[this.aa].style.display='block';
        }
        dao[i].onmouseout=function(){
            daob[this.aa].style.display='none';
        }
    };
})