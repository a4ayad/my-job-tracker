const payload = [{
    title: "UIX 1",
    salary_min: 23430,
    salary_max: 30000
  }, {
      title: "UIX 2",
      salary_min: 1000,
      salary_max: 30349
    }, {
      title: "UIX 3",
      salary_min: 22322,
      salary_max: 303434
    },{
      title: "UIX 3",
      salary_min: 1232,
      salary_max: 303434
    }
  ]
  
  // function(param){
  //   // stuff
  // }
  
  // (param) => {
  
  // }
  
  
  payload.forEach(function(item){
   // console.log(item.title)
  })
  
  payload.forEach((item) => {
    console.log(item.salary_max)
  })
  
  // payload.forEach( item => console.log(item.salary_min) )
  
  const dblSalary = payload.map( function(item){
    return `${item.salary_min * 5}`
  })
  
  // lamda functions
  dblSalary.sort(() => console.log('hello!'))
  
  console.log(dblSalary)
  
  
  // const allUIX3 = payload.filter(item => item.title === 'UIX 3')
  
  // const salariesAbove20k = payload.filter(item => item.salary_min > 20000)
  
  // salariesAbove20k.forEach(i => console.log(i.salary_min))
  // console.log(payload[0].salary_min)
  // console.log(dblSalary)
  
  // console.log(payload.length)
  // console.log(allUIX3.length)
  // console.log(payload)
  // console.log(allUIX3)
  
  
  