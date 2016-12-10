#!/usr/bin/env node
const list = require('emoji.json/emoji-compact.json')
const exec = require('child_process').exec

exec(
  `echo '${list.data.map(item => `${item[1]} ${item[2].toLowerCase()} (${item[3].replace(/\| /g, '')})`).join('\n')}' | rofi -dmenu`,
  (error, choice) => {
    if (error) throw error
    const emoji = choice.split(' ')[0]
    exec(`xdotool type ' ${emoji}'`)
    exec(`echo -n ${emoji} | xsel -b`)
  }
)
