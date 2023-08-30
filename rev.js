let no = 123
let temp = 0
let rev = 0

while(no!=0)
{
    temp = no % 10
    rev = (rev*10) + temp 
    no = math.floor(no/10)
}
console.log(rev)
