/**
 * Created by 殿麒 on 2016/7/6.
 */
var header = [{pic:'',text:'返回'}];

var Header = React.createClass({displayName: "Header",

    render:function(){

        return (

            React.createElement("div", {class: "header"}, "汇贝HEADER")

        );

    }

});