/**
 * Created by 殿麒 on 2016/7/6.
 */

var HeaderBackLink = React.createClass({

    render:function(){

        return (<a href={this.props.backUrl} className="po backBtn cfff">返回</a>);

    }

});

var HeaderTitle = React.createClass({

    render:function(){

        return (<p className="list f16 tc cfff">{this.props.title}</p>);

    }

});

var Header = React.createClass({

    render:function(){

        return(

            <div className="list f14 black ">

                <HeaderBackLink backUrl="xxx" />

                <HeaderTitle title="私家茶庄" />

            </div>

        );

    }

});

ReactDOM.render(

    <Header />,

    document.getElementById('example')

);
