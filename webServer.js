/* jshint node: true */

//const session = require('express-session');
const bodyParser = require('body-parser');
//const multer = require('multer');
//const processFormBody = multer({storage: multer.memoryStorage()}).single('uploadedphoto');
//const fs = require("fs");

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var async = require('async');

var express = require('express');
var cors = require('cors');
var app = express();
//app.use(session({secret: 'secretKey', resave: false, saveUninitialized: false}));
app.use(cors());
app.use(bodyParser.json());

var Company = require('./schema/company.js');

mongoose.connect('mongodb://127.0.0.1/company_navigator', { useNewUrlParser: true, useUnifiedTopology: true });

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));

app.get('/', function (request, response) {
  response.send('Simple web server of files from ' + __dirname);
});

app.get('/company/npages', function (request, response) {
  Company.find({}, function (err, info) {
    if (err) {
      response.status(500).send(JSON.stringify(err));
      return;
    }
    if (info.length === 0) {
      response.status(500).send('No companies found');
      return;
    }
    let companies = JSON.parse(JSON.stringify(info));
    response.status(200).send(JSON.stringify(Math.ceil(companies.length / 100)));
  });
});

function sortList(list, param) {
  let ret = list.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    const h2aA = a.h2aViolations;
    const h2aB = b.h2aViolations;
    if (param === 'h2a-violations') {
      if (h2aA > h2aB) {
        return -1;
      }
      if (h2aA < h2aB) {
        return 1;
      }
    }
    else if (param === 'h2a-violations-up') {
      if (h2aA < h2aB) {
        return -1;
      }
      if (h2aA > h2aB) {
        return 1;
      }
    }
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return ret;
}

app.get('/company/list/:index/:sort', function (request, response) {
  let index = parseInt(request.params.index);
  let sort = request.params.sort;
  Company.find({}, function (err, info) {
    if (err) {
      response.status(500).send(JSON.stringify(err));
      return;
    }
    if (info.length === 0) {
      response.status(500).send('No companies found');
      return;
    }
    let companies = JSON.parse(JSON.stringify(info));
    companies = sortList(companies, sort);
    response.status(200).send(JSON.stringify(companies.slice(index * 100, (index + 1) * 100)));
  });
});

app.get('/company/state/:state/:sort', function (request, response) {
  let st = String(request.params.state);
  let sort = request.params.sort;
  Company.find({state: st}, function (err, info) {
    if (err) {
      response.status(500).send(JSON.stringify(err));
      return;
    }
    if (info.length === 0) {
      response.status(200).send(JSON.stringify(info));
      return;
    }
    let companies = JSON.parse(JSON.stringify(info));
    companies = sortList(companies, sort);
    response.status(200).send(JSON.stringify(companies));
  });
});

app.get('/company/industry/:industry/:sort', function (request, response) {
  let st = String(request.params.industry);
  let sort = request.params.sort;
  Company.find({industry: st}, function (err, info) {
    if (err) {
      response.status(500).send(JSON.stringify(err));
      return;
    }
    if (info.length === 0) {
      response.status(200).send(JSON.stringify(info));
      return;
    }
    let companies = JSON.parse(JSON.stringify(info));
    companies = sortList(companies, sort);
    response.status(200).send(JSON.stringify(companies));
  });
});

app.get('/company/search/:search/:sort', function (request, response) {
  let search = String(request.params.search);
  let sort = request.params.sort;
  console.log(search);
  Company.find({name: {$regex: search, $options: 'i'}}, function (err, info) {
    if (err) {
      response.status(500).send(JSON.stringify(err));
      return;
    }
    if (info.length === 0) {
      response.status(200).send(JSON.stringify(info));
      return;
    }
    let companies = JSON.parse(JSON.stringify(info));
    companies = companies.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      const h2aA = a.h2aViolations;
      const h2aB = b.h2aViolations;
      if (sort === 'h2a-violations') {
        if (h2aA > h2aB) {
          return -1;
        }
        if (h2aA < h2aB) {
          return 1;
        }
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    response.status(200).send(JSON.stringify(companies));
  });
});

app.get('/company/:id', function (request, response) {
  console.log('get /company/ called with id = ', request.params.id);
  let id = mongoose.Types.ObjectId(request.params.id);
  Company.findOne({_id: id}, function (err, info) {
    if (err) {
      response.status(500).send(JSON.stringify(err));
      return;
    }
    let c = JSON.parse(JSON.stringify(info));
    console.log(c);
    if (!c) {
      response.status(200).send({});
    } else {
      response.status(200).send(c);
    }
  });
});

var server = app.listen(5000, function () {
  var port = server.address().port;
  console.log('Listening at http://127.0.0.1:' + port + ' exporting the directory ' + __dirname);
});


