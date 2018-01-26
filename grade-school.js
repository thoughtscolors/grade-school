var enrollment = {
  "Grade 1": ["Anna", "Barb", "Charlie"],
  "Grade 2": ["Alex", "Peter", "Zoe"],
  "Grade 3": ["Meow"]
};

function humanSay(string) {
  var strArray = string.match(/[\w]+/g);
  var grade = "";
  // console.log(strArray);
  //This is the if for character 1 is A (Add), then pull the name and grade
  //and add to array and sort and replace grade names value with new array
  if (strArray[0][0].charCodeAt() === 65) {
    name = strArray[1];
    grade = "Grade " + strArray[4];
    var newArray = enrollment[grade];
    newArray.push(name);
    newArray.sort();
    enrollment[grade] = newArray;
    // console.log(enrollment[grade]);
    return "OK. Added " + name + " to " + grade;
  }
  // This is the if statement for if character 3 in the first word is an i (which)
  else if (strArray[0][2].charCodeAt() === 105) {
    grade = "Grade " + string.match(/\d/g);
    if (enrollment[grade].length === 1) {
      name = enrollment[grade][0];
      return "We've only got " + name + " just now.";
    } else if (enrollment[grade].length > 1) {
      kids = enrollment[grade].map(function(list) {
        return list;
      });
      return kids.join(", ").replace(/,([^,]*)$/, ' and$1');

    }
  } else if (strArray[0][2].charCodeAt() === 111) {
    all = "";
    kids = [];
    lastComma = 0;
    for (var key in enrollment) {
      kids = enrollment[key];
      if (kids.length > 2) {
      kids = kids.join(", ") + ".";
      kids = kids.replace(/,([^,]*)$/, ' and$1');
      all += key + ": " + kids + " ";
    } else {
      all += key + ": " + kids + " ";
    }
    }
    return all;
  }
}


console.log(humanSay("Add Jim to grade 2."));
// console.log(humanSay("Add Jim to grade 2.") === "OK.");
console.log(humanSay("Which students are in grade 3?"));
console.log(humanSay("Which students are in grade 2?"));
console.log(humanSay("Who all is enrolled in school right now?"));
// console.log(humanSay("Who all is enrolled in school right now?") === "Grade 1: Anna, Barb, and Charlie. Grade 2: Alex, Peter, and Zoe.");
