/**
 * Created by 殿麒 on 2016/7/11.
 */


/*
*   结构
*   -shoppingCart
*       -shopItem
*           -productItem
* */

var ShopItem = React.createClass({

    render:function(){

        return (

            <ul>
                <li>
                    my name is a shopItem!
                </li>
            </ul>

        )

    }

});

var ShoppingCart = React.createClass({

    getInitialState:function(){

        return {}

    },

    componentDidMount:function(){

        $.get(this.props.source,function(data){

            this.setStart(data);

        }.bind(this));

    },

    render:function(){

        return(

            <div>

                <input type="checkbox" />

                <span>总价：</span>

                <span>0</span>
                
            </div>

        );

    }

});



ReactDOM.render(

    <ShoppingCart source="data/shoppingCartData.json" />,

    document.getElementById('example')

);


