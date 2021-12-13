(this["webpackJsonpshopping-cart-react"]=this["webpackJsonpshopping-cart-react"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),s=n.n(r),o=n(3),i=n(9),j=n(2),l=n(5),h=n(6),u=n(8),d=n(7),b=(n(17),n.p+"static/media/showcase.a58fc8c4.png"),p=n(1),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"homepage",children:Object(p.jsx)("div",{className:"mainContainer",children:Object(p.jsx)(m,{})})})}}]),n}(a.a.Component);function m(e){return Object(p.jsxs)("div",{className:"mainSeller",children:[Object(p.jsx)("h3",{children:"Purchase Some Of The Worlds Most Rare Pokemons!"}),Object(p.jsx)("img",{src:b,alt:"showcase"}),Object(p.jsx)("p",{children:"Our pokemons are treated humanely, caught in the wild and kept in open areas free to roam and provided with the best medical care known to man."}),Object(p.jsx)("div",{className:"shopCollection",children:Object(p.jsx)(i.b,{to:"/shop",children:Object(p.jsx)("p",{children:"Shop Our Collection Now"})})})]})}var f=O;n(19);function x(e){return Object(p.jsxs)("div",{className:"pokemon",children:[Object(p.jsx)("p",{children:e.name.toUpperCase()}),Object(p.jsx)("img",{src:e.imageSource,alt:"pokemon"}),Object(p.jsxs)("p",{className:"price",children:["$",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(p.jsxs)("div",{className:"attacks",children:[Object(p.jsx)("label",{htmlFor:"cars",children:"View All Moves:"}),Object(p.jsx)("select",{children:e.attacks.map((function(e,t){return Object(p.jsx)("option",{children:e},t)}))})]}),Object(p.jsx)("button",{onClick:e.onClick,className:"addToCart",children:"Add To Cart"})]})}var v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={pokemons:[]},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=function(t){var n="https://pokeapi.co/api/v2/pokemon/"+e.props.pokemonInventory[t];fetch(n).then((function(e){return e.json()})).then((function(n){e.generatePokemon(n,t)}))},n=0;n<this.props.pokemonInventory.length;n++)t(n)}},{key:"generatePokemon",value:function(e,t){var n=this,c=this.generateMoves(e.moves.length,e.moves),a=Object(p.jsx)(x,{imageSource:e.sprites.other["official-artwork"].front_default,name:e.name,attacks:c,price:this.props.prices[t],onClick:function(){return n.props.handleModifyCart(e.name,"+")}},e.id),r=this.state.pokemons;r.push(a),this.setState({pokemons:r})}},{key:"generateMoves",value:function(e,t){for(var n=[],c=0;c<25;c++){var a=Math.floor(Math.random()*e);n.push(t[a].move.name)}return n}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"Shop",children:Object(p.jsx)("div",{className:"mainContainerShop",children:this.state.pokemons})})}}]),n}(a.a.Component),k=(n(20),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"cart",children:Object(p.jsx)("div",{className:"checkoutContainer",children:Object(p.jsx)(C,{totalPrice:this.props.totalPrice,cartContents:this.props.cartContents,handleModifyCart:this.props.handleModifyCart})})})}}]),n}(a.a.Component));function C(e){return Object(p.jsxs)("div",{className:"checkoutBox",children:[Object(p.jsx)("h1",{children:"My Cart"}),Object(p.jsx)("div",{className:"toPurchaseContainer",children:Object(p.jsx)("ol",{children:e.cartContents.map((function(t,n){return Object(p.jsxs)("li",{children:[t,":",Object(p.jsx)("button",{onClick:function(){return e.handleModifyCart(t.substring(0,t.indexOf(" ")),"-")},children:"-"}),Object(p.jsx)("button",{onClick:function(){return e.handleModifyCart(t.substring(0,t.indexOf(" ")),"+")},children:"+"})]},n)}))})}),Object(p.jsxs)("h2",{children:["Total Price $",e.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(p.jsx)("button",{className:"purchaseButton",onClick:function(){return alert("Thank You For Your Purchase")},children:"Purchase"})]})}var g=k,y=(n(21),n.p+"static/media/title.289b78f1.png"),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)("img",{className:"titleImage",src:y,alt:"tito"}),Object(p.jsxs)("ul",{className:"navbar-links",children:[Object(p.jsx)(i.b,{to:"/",children:Object(p.jsx)("li",{children:"Home"})}),Object(p.jsx)(i.b,{to:"/shop",children:Object(p.jsx)("li",{children:"Shop"})}),Object(p.jsx)(i.b,{to:"/cart",children:Object(p.jsxs)("li",{children:["Cart (",this.props.totalItems,")"]})})]})]})}}]),n}(a.a.Component),S=N;var M=function(){var e=Object(c.useState)(["pikachu","charizard","zapdos","mewtwo","lugia","kyogre","raikou","umbreon","rayquaza","gengar"]),t=Object(o.a)(e,1)[0],n=Object(c.useState)([499999,699999,1e6,15e5,1e6,1e6,1e6,1e6,1e6,199]),a=Object(o.a)(n,1)[0],r=Object(c.useState)(Array(10).fill(0)),s=Object(o.a)(r,2),l=s[0],h=s[1],u=Object(c.useState)(l.reduce((function(e,t){return e+t}),0)),d=Object(o.a)(u,2),b=d[0],O=d[1],m=Object(c.useState)(0),x=Object(o.a)(m,2),k=x[0],C=x[1],y=Object(c.useState)([]),N=Object(o.a)(y,2),M=N[0],w=N[1];function P(e,n){var c=t.indexOf(e),r=l[c];if("+"===n){r+=1;var s=l;s[c]=r,h(s)}else if("-"===n&&r>0){r-=1;var o=l;o[c]=r,h(o)}O(l.reduce((function(e,t){return e+t}),0)),function(){for(var e=0,t=0;t<l.length;t++)l[t]>0&&(e+=l[t]*a[t]);C(e)}(),function(){for(var e=[],n=0;n<l.length;n++)l[n]>0&&e.push(t[n]+" x"+l[n]+" ($"+a[n]+" each)");w(e)}()}return Object(p.jsxs)(i.a,{children:[Object(p.jsx)(S,{totalItems:b}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",element:Object(p.jsx)(f,{})}),Object(p.jsx)(j.a,{path:"/shop",element:Object(p.jsx)(v,{pokemonInventory:t,prices:a,cart:l,handleModifyCart:P})}),Object(p.jsx)(j.a,{path:"/cart",element:Object(p.jsx)(g,{pokemonInventory:t,prices:a,cart:l,handleModifyCart:P,totalPrice:k,cartContents:M})})]})]})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4b40807a.chunk.js.map