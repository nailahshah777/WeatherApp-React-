import React ,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import axios from 'axios';
class TempApp extends Component{
    constructor(props)
    {
        super(props)
        this.state={
        inputis:'',
    datais:'',
        location:'Location',
        temp:'Temp',
        desc:'cloudy|Sunny|Rainy|Fog',
        sunrise:'sunrise',
        sunset:'sunset',
        isLoaded:false}
        this.ref1=React.createRef();
this.ref2=React.createRef();
this.ref3=React.createRef();
    }
    getData=(e)=>{
        
        
    this.setState({inputis:e.target.value})
       console.log(e.target.value);
       this.caller()
    }
    
    caller=()=>{
        setTimeout(()=>{
            let city=this.state.inputis
    
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=47b2d007fc0320cf814ce07565c532a7`
            console.log(url)
            axios.get(url).then((res)=>{
                console.log(res.data);
    
                this.setState({location:res.data.name,
                desc:res.data.weather[0].main,
                temp:parseInt(res.data.main.temp-272.15),
                
                    isLoaded:true})
    
            })
            
        },2000)
        }
    
    render()
    {
        return(
            
      <div className="main">
        <div className='container'>
        <div className="row divInput">
         <input type="search" name="text" size="25" placeholder="location..." onChange={this.getData}/>   
        </div>
        <div className='row info'>
        <h3 className='location' ref={this.ref1}>
        <i className="fas fa-street-view"></i>
        {this.state.location}
        </h3>
        <h2 className="temp" ref={this.ref2}>
        {this.state.desc}
         </h2>
        
        <h2 className='tempmin' ref={this.ref3}>
         {this.state.temp} deg Celcius
       

        
        </h2>
        </div>
        </div>
    
        
        

    
        <div className='wave'></div> 
        </div>

        
    )}
        
        }
export default TempApp;