/**
 * Created by 殿麒 on 2016/7/6.
 */
var header = [{pic:'images/header-back.png',text:'返回'},{text:'私家茶庄'}];

var Header = React.createClass({displayName: "Header",

    render:function(){

        return (

            React.createElement("div", {class: "header"}, "汇贝HEADER")

        );

    }

});