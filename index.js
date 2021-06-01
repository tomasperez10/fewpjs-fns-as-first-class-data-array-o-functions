const wakeDog = function wakeDog(dogName, dogBreed) {
  const wakeString = `Wake ${dogName} the ${dogBreed}`
  console.log(wakeString);
  return wakeString;
}

const leashDog = function leashDog(dogName, dogBreed) {
  const leashString = `Leash ${dogName} the ${dogBreed}`
  console.log(leashString);
  return leashString;
}

const walkToPark = function walkToPark(dogName, dogBreed) {
  const walkParkString = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(walkParkString);
  return walkParkString;
}

const throwFrisbee = function throwFrisbee(dogName, dogBreed) {
  const frisbeeString = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(frisbeeString);
  return frisbeeString
}

const walkHome = function walkHome(dogName, dogBreed) {
  const homeString = `Walk home with ${dogName} the ${dogBreed}`
  console.log(homeString);
  return homeString;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
  const unleashString = `Unleash ${dogName} the ${dogBreed}`
  console.log(unleashString);
  return unleashString;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  const messages = [];

  for (let i = 0; i < routine.length; i++) {
    const activity = routine[i](dogName, dogBreed)
    messages.push(activity)
  }

  return messages;
}
