/**
 * Created by 殿麒 on 2016/7/6.
 */


var Select = React.createClass({

    getInitialState:function(){
        return {options:["A","B"]};
    },
    onChange:function(event){
        var opts = event.target.options;
        for (var i = 0; i < opts.length; i++)
            console.log(opts[i].selected);
        opts.forEach((item)=>console.log(item));

    },
    render:function(){

        return (
            <select multiple="true" value={this.state.options} onChange={this.onChange}>
                <option value="dfs">dfs</option>
                <option value="dfp">dfp</option>
                <option value="nm">nm</option>
            </select>
        );

    }

});

ReactDOM.render(
    <Select/>,
    document.getElementById('example')
);