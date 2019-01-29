const scavenge = require('scavenge')

// Loads an external JSON file with scavenging instructions
function scavengeJsonFile (name) {
  var instructions
  try {
    instructions = require(name)
  } catch (e) {
    console.log('Cannot require', name)
  }
  if (instructions) {
    scavenge(instructions)
  } else {
    console.warn('Could not load JSON configuration', name)
  }
}

scavengeJsonFile('./examples/audioarchiv.json')
