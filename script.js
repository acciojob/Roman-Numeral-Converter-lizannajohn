function convertToRoman(n) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

  let res = ""

  while(n)
  {
      if(n >= 1000)
      {
        res += "M"
        n -= 1000;
      }
      else if(n >= 500)
      {
          if(n >= 900)
          {
            res += "CM"
            n -= 900;
          }
          else
          {
            res += "D"
            n -= 500
          }
      }
      else if(n >= 100)
      {
        if(n >= 400)
        {
            res += "CD"
            n -= 400
        }
        else
        {
          res += "C"
          n -= 100
        }
      }
      else if(n >= 50)
      {
          if(n >= 90)
          {
            res += "XC"
            n -= 90
          }
          else
          {
            res += "L"
            n -= 50
          }
      }
      else if(n >= 10)
      {
        if(n >= 40)
        {
          res += "XL"
          n -= 40
        }
        else
        {
          res += "X"
          n -= 10
        }
      }
      else if(n >= 5)
      {
        if(n >= 9)
        {
          res += "IX"
          n -= 9
        }
        else
        {
          res += "V"
          n -= 5
        }
      }
      else
      {
        if(n >= 4)
        {
          res += "IV"
          n -= 4
        }
        else
        {
          res += "I"
          n -= 1
        }
      }
    }

    return res;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
