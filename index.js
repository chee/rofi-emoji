#!/usr/bin/env node
const list = require('emoji.json/emoji-compact.json')
const exec = require('child_process').exec

console.log(
  process.argv[2]
  ? process.argv[2].split(' ')[0]
  : list.data.map(item => `${item[1]} ${item[2].toLowerCase()} (${item[3].replace(/\| /g, '')})`).join('\n')
)
