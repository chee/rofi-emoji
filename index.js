#!/usr/bin/env node
let list = require('emoji.json')
let exec = require('child_process').exec

let sanitizeKeywords = keywords =>
	keywords.replace(/[|] /, '')

let emojiString = list.reduce((emojiString, emoji) =>
	emojiString.concat(
		`${emoji.char} ${emoji.name.toLowerCase()} (${sanitizeKeywords(emoji.keywords)})
`)
, '')

exec(
  `echo '${emojiString}' | rofi -dmenu`,
  (error, choice) => {
    if (error) throw error
    let emoji = choice.split(' ')[0]
    exec(`echo -n ${emoji} | xsel -b`)
  }
)
