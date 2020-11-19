'use strict';

const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./src/tracker');
const download = require('./src/download');
const torrentParser = require('./src/torrent-parser');
const torrent = torrentParser.open('puppy.torrent');

tracker.getPeers(torrent, peers => {
  console.log('list of peers: ', peers);
});