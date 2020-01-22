import logo from './logo.svg';
import './App.css';
import React, { Component, Children } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPlusCircle,faMinusCircle,faPizzaSlice, faUser, faChild} from '@fortawesome/free-solid-svg-icons'
library.add(
   faNewspaper,
   faPlusCircle,
   faMinusCircle,
   faPizzaSlice,
   faUser,
   faChild
);

export default class App extends Component {
  constructor(props) {
    super(props);
          this.state = {
            small:0,
            medium:1,
            large:0,
            children:0,
            adults:1,
          } 
}



handleIncrement=(e)=>{
  let children = this.state.children
  let small = this.state.small
  let medium = this.state.medium
  let large = this.state.large
  if(e.target.id=="small"){
    let children = this.state.children
    let small = this.state.small
    let medium = this.state.medium
    if((small+1)%2 == 0){
        medium = medium + (small+1)/2
        small  = 0
        if(medium%2 == 0 && small*150 + medium*200 + large*300 - 50 >= 200){
          large = large + medium/2
          medium = 0
          children ++
          this.setState({small:small,medium:medium,large:large,children:children})
        }
        else if(!(small*150 + medium*200 + large*300 + 50 > 1000)){
          large = large + (medium - 1)/2
          medium = 1
          children ++
          this.setState({small:small,medium:medium,large:large,children:children})
        }
      
    }
    else{
      if(!(small*150 + medium*200+ large*300 + 150 > 1000)){
          small ++
          children ++
          this.setState({small:small,children:children})
        }
      }
  }
  else if(e.target.id=="medium" ){
    let adults = this.state.adults
    let medium = this.state.medium
    let large = this.state.large
    if(medium%2===0){
      if(!(small*150 + medium*200+ large*300 + 200 > 1000)){
        medium = medium + 1
        adults ++
        this.setState({medium:medium,adults:adults})
        }
    }
    else{
      if(!(small*150 + medium*200 + large*300 + 100 > 1000)){
        medium = medium - 1
        large ++
        adults ++
        this.setState({medium:medium,large:large,adults:adults})
        }
    }
  }
  else if(e.target.id=="large" && !(small*150 + medium*200+ large*300 + 300 > 1000)){
    let large = this.state.large
    let adult = this.state.adults
    adult = adult + 2
    large ++
    this.setState({large:large,adults:adult})
  }
  else if(e.target.id=="children" ){
    let children = this.state.children
    let small = this.state.small
    let medium = this.state.medium
    if((small+1)%2 == 0){
        medium = medium + (small+1)/2
        small  = 0
        if(medium%2 == 0 && (small*150 + medium*200 + large*300 - 50 >= 200)){
          large = large + medium/2
          medium = 0
          children ++
          this.setState({small:small,medium:medium,large:large,children:children})
        }
        else if(!(small*150 + medium*200 + large*300 + 50 > 1000 )){
          large = large + (medium - 1)/2
          medium = 1
          children ++
          this.setState({small:small,medium:medium,large:large,children:children})
        }
      
    }
    else{
      if(!(small*150 + medium*200+ large*300 + 150 > 1000)){
          small ++
          children ++
          this.setState({small:small,children:children})
        }
      }
    }
  else if(e.target.id=="adult" ){
    let adults = this.state.adults
    let medium = this.state.medium
    let large = this.state.large
    if(medium%2===0){
      if(!(small*150 + medium*200+ large*300 + 200 > 1000)){
        medium = medium + 1
        adults ++
        this.setState({medium:medium,adults:adults})
        }
    }
    else{
      if(!(small*150 + medium*200 + large*300 + 100 > 1000)){
          medium = medium - 1
          large ++
          adults ++
          this.setState({medium:medium,large:large,adults:adults})

        }
    }
  }
}
handleDecreament=(e)=>{
if(e.target.id=="small"){
  let small = this.state.small
  let medium = this.state.medium
  let large = this.state.large
  let children = this.state.children
  if(children>0){
    if(small==1 && (small*150 + medium*200 + large*300 - 150 >= 200)){
      small = 0
      children = children - 1
      this.setState({small:small,children:children})
    }
  }

}
else if(e.target.id=="medium"){
    let adults = this.state.adults
    let large = this.state.large
    let small = this.state.small
    let medium = this.state.medium
    let children = this.state.children
     if(medium ==1 && (small*150 + medium*200 + large*300 - 200 >= 200)){
      medium = 0
      if(adults>1){
        adults = adults -1 
        this.setState({medium:medium,adults:adults})
      }
      else if(children>=2){
        children = children - 2
        this.setState({children:children,medium:medium})
      }

    }
  
}
else if(e.target.id=="large"){
  let large = this.state.large
  let medium = this.state.medium
  let adults = this.state.adults
  let children = this.state.children
  if(large>0){
    if(adults>2){
        large = large - 1
        medium ++
        adults = adults - 2
        this.setState({large:large,medium:medium,adults:adults})
    }
    else if(adults<=2){
      large = large - 1
      if(adults==2 && children>=2){
        adults = adults -1
        children = children - 2
        this.setState({adults:adults,children:children,large:large})
      }
      else if(adults ==1){
        if(children>=4){
          children = children - 4
          this.setState({children:children,large:large})
        }
      }
    }
  }
}
else if(e.target.id=="children"){
  let small = this.state.small
  let medium = this.state.medium
  let large = this.state.large
  let children = this.state.children
  if(children>0){
    if(small==1){
      small = 0
      children = children - 1
      this.setState({small:small,children:children})
    }
    else if(small==0){
      if(medium==1){
        children = children - 1
        medium = 0
        small ++
        this.setState({medium:medium,small:small,children:children})
      }
      else if(medium==0){
          if(large > 0){
            large = large - 1
            medium ++
            small ++
            children = children - 1
            this.setState({large:large,medium:medium,small:small,children:children})
          }
      }
    }
  }
}
else if(e.target.id=="adult"){
  let adults = this.state.adults
  if(adults>1){
    let medium = this.state.medium
    let large = this.state.large
    if(medium==0){
      let adults = this.state.adults
      large = large - 1
      medium ++
      adults = adults - 1
      this.setState({large:large,medium:medium,adults:adults})
    }
    else if(medium ==1){
      medium = 0
      adults = adults -1 
      this.setState({medium:medium,adults:adults})
    }
  }

}

}
  render() {
    return (
      <div className="App">
        <div className="top-title">
        ORDER <div className="top-bold">PIZZA</div>
        </div>
      <div className="pizza-counter-wrapper">
          <div className="pizza-counter">
            <div>
            </div>
            <div className="buttons-segment">
                  <div className="small">
                  <div className="sm">
                  <FontAwesomeIcon icon={faPizzaSlice} size='1x'/>
                  </div>
                    <div className="svg">
                    SMALL
                    </div>
                    <div className="btn">
                    <FontAwesomeIcon className = {this.state.small ==0 || this.state.small*150 + this.state.medium*200 + this.state.large*300 < 350 ? "disable" : "dec"} icon={faMinusCircle} id="small" onClick={(e)=>this.handleDecreament(e)} size='1x'/>
                      <p className="count">{this.state.small}</p>
                    <FontAwesomeIcon className ={(this.state.small*150 + this.state.medium*200+ this.state.large*300 >=900) ? "disable" : "inc"} icon={faPlusCircle} id="small" onClick={(e)=>this.handleIncrement(e)} size='1x'/>
                    </div>
                  </div>
                  <div className="medium">
                    <div className="md">
                    <FontAwesomeIcon icon={faPizzaSlice}  size='1x'/>
                    </div>
                  <div className="svg">
                  MEDIUM
                    </div>
                    <div className="btn">
                    <FontAwesomeIcon className = { (this.state.small*150 + this.state.medium*200 + this.state.large*300 < 400 || this.state.medium==0) ? "disable" : "dec"}  icon={faMinusCircle} id="medium" onClick={(e)=>this.handleDecreament(e)} size='1x'/>
                    <p className="count">{this.state.medium}</p>
                    <FontAwesomeIcon className = {(this.state.small*150 + this.state.medium*200+ this.state.large*300 >=900) ? "disable" : "inc"} icon={faPlusCircle} id="medium" onClick={(e)=>this.handleIncrement(e)}  size='1x'/>
                    </div>
                  </div>
                  <div className="large">
                  <div className="lg">
                  <FontAwesomeIcon icon={faPizzaSlice}  size='1x'/>
                  </div>
                  <div className="svg">
                    LARGE
                    </div>
                    <div className="btn">
                    <FontAwesomeIcon className={ (this.state.small*150 + this.state.medium*200 + this.state.large*300 < 500 || this.state.large ==0) ? "disable" : "dec"} icon={faMinusCircle} id="large" onClick={(e)=>this.handleDecreament(e)} size='1x'/>
                      <p className="count">{this.state.large}</p>
                    <FontAwesomeIcon className={(this.state.small*150 + this.state.medium*200+ this.state.large*300 >=800) ? "disable" : "inc"} icon={faPlusCircle} id="large" onClick={(e)=>this.handleIncrement(e)} size='1x'/>
                    </div>
                  </div>
            </div>
          </div>
          <div className="adults">
            <div className="svg">
            <FontAwesomeIcon icon={faUser} size='1x'/>
            <span>ADULTS</span>
            </div>
            <div className="btn">
            <FontAwesomeIcon className={this.state.adults==1 || this.state.small*150 + this.state.medium*200 + this.state.large*300 <400 ? "disable":"dec"} icon={faMinusCircle} id="adult" onClick={(e)=>this.handleDecreament(e)} size='1x'/>
            <p className="count">{this.state.adults}</p>
            <FontAwesomeIcon className={(this.state.small*150 + this.state.medium*200+ this.state.large*300 >=900) ? "disable" : "inc"} icon={faPlusCircle} id="adult" onClick={(e)=>this.handleIncrement(e)}  size='1x'/>
            </div>
          </div>
          <div className="children">
            <div className="svg">
            <FontAwesomeIcon icon={faChild}  size='1x'/>
            <span>CHILDREN</span>
            </div>
            <div className="btn">
            <FontAwesomeIcon className="dec" icon={faMinusCircle} id="children" onClick={(e)=>this.handleDecreament(e)} size='1x'/>
            <p className="count">{this.state.children}</p>
            <FontAwesomeIcon className={(this.state.small*150 + this.state.medium*200+ this.state.large*300 >950 || this.state.children ==10) ? "disable" : "inc"} icon={faPlusCircle} id="children" onClick={(e)=>this.handleIncrement(e)}  size='1x'/>
            </div>
          </div>
      </div>
      <div className="bottom-title">
        <div className="order">ORDER <div className="bold">TOTAL</div></div>
    <div>{this.state.small*150+this.state.medium*200+this.state.large*300}</div>
        </div>
    </div>
    )
  }
}


