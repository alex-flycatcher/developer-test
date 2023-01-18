const reformat = (input) => {
  const regex = /([^aeiou])/gi
  const nonVowel = input.match(regex);
  const newString = nonVowel?.join('').toLowerCase()
  const capitalizedString = newString?.charAt(0).toUpperCase() + newString?.slice(1);
  console.log(capitalizedString);
}

reformat("liMeSHArp DeveLoper TEST")
reformat("")
reformat("a")
reformat("A")
reformat("b")
reformat("B")

/** RESULTS:
Lmshrp dvlpr tst
NaN
NaN
NaN
B
B
 */