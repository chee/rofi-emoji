#!/usr/bin/env node
const list = require('emoji.json/emoji-compact.json')
const exec = require('child_process').exec

exec(
  `echo '${list.data.map(item => `${item[1]} ${item[2].toLowerCase()} (${item[3].replace(/\| /g, '')})`).join('\n')}' | rofi -dmenu`,
  (error, choice) => error
    ? console.error(error)
    : exec(`xdotool type ${choice.split(' ')[0]}`)
)
