//6)
//Iterate through the garden and place any 🌷 that you find into the basket.

//Replace any 🌷 that you pick up with "dirt".  

//Then print how many 🌷 are in your basket.

// var garden = ["dirt","🌷","dirt","🌷","dirt","dirt","🌷","dirt","🌷","dirt"]
// var basket = [String]()

// for (index, item) in garden.enumerate() {
//   if item == "🌷" {
//     basket.append("🌷")
//     garden[index] = "dirt"
//   }
// }
// print(basket.count)

//13)
//Find the second smallest Int in ages
var ages = [53, 31, 88, 65, 25, 44, 77, 18, 24, 84, 46, 42, 50, 28, 78, 67, 83, 70, 38, 69, 66, 71, 68, 61, 86, 85, 41, 15, 81, 40]

var smallestInt = ages[0]
var smallestIntIndex = 0

for (i, num) in ages.enumerate() {
  if num < smallestInt {
    smallestInt = num;
    smallestIntIndex = i
  }
}

var newArray = ages.removeAtIndex(smallestIntIndex)

for (i, num) in newArray.enumerate() {
  if num < smallestInt {
    smallestInt = num;
    smallestIntIndex = i
  }
}

print(smallestInt) 