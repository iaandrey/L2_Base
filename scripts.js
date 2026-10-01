1. function hasTwoCubeSums(n) {
  let count = 0;
  let limit = Math.cbrt(n);

  for (let a = 1; a <= limit; a++) {
    for (let b = a; b <= limit; b++) {
      if (a**3 + b**3 === n) {
        count++;
      }
    }
  }

  return count >= 2;
}

2. function ipv4Parser(ip, subnet) {
  const ipParts = ip.split('.').map(Number);
  const subnetParts = subnet.split('.').map(Number);
  
  let networkParts = [];
  let hostParts = [];
  
  for (let i = 0; i < 4; i++) {
    const net = ipParts[i] & subnetParts[i];
    networkParts.push(net);
    
    const host = ipParts[i] - net;
    hostParts.push(host);
  }
  
  return [networkParts.join('.'), hostParts.join('.')];
}

3. function whatCentury(year)
{
  let century = Math.ceil(Number(year)/100);
  let cStr = century.toString();
  if(cStr.endsWith('11')|| cStr.endsWith('12')||cStr.endsWith('13')){
    return century + 'th';
    
  }
if (cStr.endsWith('1')) return century + 'st';
  if (cStr.endsWith('2')) return century + 'nd';
  if (cStr.endsWith('3')) return century + 'rd';
  return century+ 'th';
}

4. function findMissing(list) {  
 let step1=list[1]-list[0]; 
  let step2=list[2]-list[1]; 
  let step3=list[list.length-1]-list[list.length-2]; 
  let step = (step1 === step2 || step1 === step3) ? step1 : step2;
  for(let i=0;i<list.length -1; i++){
    if(list[i+1] - list[i]!==step){
      return list[i]+step;
    }
  }
}

5. function primeFactors(n) {
  let result = '';
  
  for (let i = 2; i <= n; i++) {
    let count = 0;
    
    while (n % i === 0) {
      count++;
      n /= i;
    }
    
    if (count > 0) {
      result += (count === 1) ? `(${i})` : `(${i}**${count})`;
    }
  }
  
  return result;
}

6. function toWeirdCase(string){
  //TODO
  let result='';
  let index=0;
  for(let i=0;i<string.length;i++){
    let char=string[i];
    if (char===' '){
      result+=' ';
      index=0;
    }
    else{
      result+=(index%2===0)? char.toUpperCase(): char.toLowerCase();
      index++;
    }
  }
  return result;
}

7. function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    let w = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    result.push(w);
  }
  return result;
}

8. function expandedForm(num) {
 let str=String(num);
  let result=[];
  for(let i=0; i<str.length;i++){
    let digit =str[i];
    if (digit!=='0'){
      let zeros='0'.repeat(str.length- i-1);
      result.push(digit+zeros);
    }
  }
  return result.join(' + ');
}

9. function solution(str){
  let result = [];
  
  if (str.length % 2 !== 0) {
    str += '_';
  }
  
  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i] + str[i + 1]);
  }
  
  return result;
}

10. function bingo(ticket, win){
let miniWins=0;
  for(let i = 0;i<ticket.length;i++){
    let str=ticket[i][0];
    let num=ticket[i][1];
    for(let j=0;j<str.length;j++){
      if(str.charCodeAt(j)===num){
        miniWins++;
        break;
      }
    }
  }
  return miniWins>=win?"Winner!":"Loser!";
}

11. function longest(arr, n) {
let sorted=arr.map((str,index)=>({str, index}))
.sort((a,b)=>{
  if(b.str.length!==a.str.length){
    return b.str.length-a.str.length;
  }
  return a.index - b.index;
});
  return sorted[n-1].str;
}

12. function domainName(url){
  url = url.replace('https://', '').replace('http://', '').replace('www.', '');
  return url.split('.')[0];
}

13. function hexStringToRGB(hexString) {
  let hex=hexString.replace('#','');
  let r=parseInt(hex.substring(0,2),16);
  let g=parseInt(hex.substring(2,4),16);
  let b=parseInt(hex.substring(4,6),16);
  
  return{r:r, g: g, b: b}
}

14. function isCircleSorted( arr ){
let drops=0;
  for(let i=0; i<arr.length;i++){
    if(arr[i]>arr[(i+1)%arr.length]){
      drops++;
    }
  }
  return drops<=1;
}

15. function howManyTimes(time1, time2) {
  let start = Date.parse(time1.replace(' ', 'T') + 'Z');
  let end = Date.parse(time2.replace(' ', 'T') + 'Z');
  let totalStrikes = 0;
  let current = new Date(start);
  current.setUTCMinutes(0, 0, 0);
  let currentTime = current.getTime();
   if (currentTime > start) {
    currentTime -= 60 * 60 * 1000;
  }
  
  while (currentTime <= end) {
    let date = new Date(currentTime);
    let minutes = date.getUTCMinutes();
    let hours = date.getUTCHours();
    
    let strikesAtThisMoment = 0;
    if (minutes === 0) {
      let h12 = hours % 12;
      strikesAtThisMoment = (h12 === 0 ? 12 : h12);
    } else if (minutes === 30) {
      strikesAtThisMoment = 1;
    }
    
    for (let s = 0; s < strikesAtThisMoment; s++) {
      let strikeTime = currentTime + (s * 1000);
      if (strikeTime >= start && strikeTime < end) {
        totalStrikes++;
      }
    }
    
    currentTime += 30 * 60 * 1000;
  }
  
  return totalStrikes;
}

16. Array.prototype.square  = function() { return this.map(n => n ** 2); };
Array.prototype.cube    = function() { return this.map(n => n ** 3); };
Array.prototype.sum     = function() { return this.reduce((a, b) => a + b, 0); };
Array.prototype.average = function() { return this.length === 0 ? NaN : this.sum() / this.length; };
Array.prototype.even    = function() { return this.filter(n => n % 2 === 0); };
Array.prototype.odd     = function() { return this.filter(n => n % 2 !== 0); };

17. function cache(func) {
  let memo={};
  
  return function(...args){
    let key=JSON.stringify(args);
    if (!(key in memo)){
      memo[key]=func.apply(this,arguments);
    }
    return memo[key];
  };
}

18. function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}