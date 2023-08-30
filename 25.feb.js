employees =[
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:1,
        salary:10000,
        gender:"Male"
    },
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:1,
        salary:10000,
        gender:"Male"
    },
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:1,
        salary:10000,
        gender:"Male"
    }
]

console.log(employees.filter((emp)=>{
    return emp.isMarrie == true &&  emp.child != 0
}))

console.log(employees.filter((emp)=>
{
    return emp.isMarrie == true &&  emp.child != 0 && emp.salary > 10000
}))

console.log(employees.filter((emp)=>{
    return emp.gender == "Male" && emp.isMarrie == true
}))

console.log(employees.filter((emp)=>{
    return emp.gender == "Male" && emp.childv==0
}))









// https://us02web.zoom.us/rec/share/n5BuipkzydeY-fikBEnzS_dwb1pRKX8OAMOHcADWtZukzBc6GFLM4K0dboefQGFs.juXYz3Q2RQIo-dDx?startTime=1676119449000
// Passcode: ^S#.Pc44

