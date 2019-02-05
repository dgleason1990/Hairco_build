import React, { Component } from 'react';
import { Doughnut,Bar  } from 'react-chartjs-2';
import ChartDisplay from './ChartDisplay'

export default class StylistDashboard extends Component {
    state={
        loading: true,
        auth: false,
        data: '',
        goals:{
            monthlyGoal: 100,
            sales: 10
        },
        chartData:{
            labels: ["Remaining Monthly Goal","Amount Sold"],
            datasets: [{
                data: [100-10, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        }
    }

   componentDidMount(){
       console.log(this.state)
       let  url = 'https://hairco.herokuapp.com'
        if(localStorage.token !== undefined && localStorage.token !== null){
            //Add token to request header
            fetch(url + '/dashboard',{headers:{'authorization':localStorage.token}})
            .then((res) => { 
                if(res.status === 200){
                    this.setState({
                        loading:false,
                        auth:true
                    })}
                res.json()
                .then(data=>{this.setState({
                    data: data
                    })
                })
            })
            .catch((err) => {
                //send user back to login page if token is invalid
                window.location.href = url+'/login';
            })
        }
        else{
            window.location.href = url+'/login';
        }
      }

      monthlyChange = (e)=>{
          this.setState({
              goals:{
                monthlyGoal: Number(e.target.value),
                sales: this.state.goals.sales
              }
              
          })
          console.log(this.state)
      }

    submitMonthly = (e) =>{
        e.preventDefault();
        let init = { 
            method:'POST',
            body:JSON.stringify(this.state.monthlyGoal),
            headers:{
                "content-type": "application/json"}
                }
        this.setState({
            chartData:{
                labels: {...this.state.chartData.labels},
                datasets: [{
                    data: [this.state.goals.monthlyGoal,this.state.goals.sales],
                    backgroundColor: [...this.state.chartData.datasets[0].backgroundColor],
                    borderColor: [...this.state.chartData.datasets[0].borderColor],
                    borderWidth: 1
                }]
            }
        })
        // fetch('/goals', init)
        // .then(res=>console.log(res))
      }

      saleChange=(e)=>{
          this.setState({
              goals:{
                monthlyGoal: this.state.goals.monthlyGoal,
                sales: Number(e.target.value)
                }
          })
      }

      submitSale = (e) =>{
          e.preventDefault();
          console.log(this.state)
          let init = {
            method: 'POST',
            body: JSON.stringify(this.state.sales),
            headers:{
                'content-type':'application/json'
                }
            }
            this.setState({
                chartData:{
                    labels: {...this.state.chartData.labels},
                    datasets: [{
                        data: [this.state.goals.monthlyGoal,this.state.goals.sales],
                        backgroundColor: [...this.state.chartData.datasets[0].backgroundColor],
                        borderColor: [...this.state.chartData.datasets[0].borderColor],
                        borderWidth: 1
                    }]
                }
            })
            console.log(this.state)
            // fetch('/sales', init)
            // .then(res => console.log(res))
      }

  render() {
    return (
      <div className='dashboard'>
        <h1> Welcome to your dashboard {this.state.data.name} </h1>
        <img src={this.state.data.img} alt='Profile Picture'/>
        <h2> Your current rating is: {this.state.data.rating} </h2>
        <div> 
            <h2> Set your monthly goals. </h2>
            <h3> How much do you aim to make? </h3>
            <form>
                Monthly goal: <input type='number' onChange={ this.monthlyChange }/>
                <button onClick={this.submitMonthly}> Submit </button>
            </form>
        </div>
        <div>
            <h2> Track your sales.</h2>
            <h2> Enter sales </h2>
            <form>
                Sale: <input type='number' onChange={ this.saleChange }/>
                <button onClick={this.submitSale}> Submit </button>
            </form>
        </div>
        <div>
            <h2> Goal </h2>
            {/* {goalCalc(this.state.goals)} completed */}
        </div>
        <div>
            <ChartDisplay chartData={this.state.chartData}/>
        </div>
      </div>
    )
  }
}
