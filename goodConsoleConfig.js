const options = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout'],
    file: [{ // this bit create log file
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ ops: '*' }]
    }, {
      module: 'good-squeeze',
      name: 'SafeJson'
    }, {
      module: 'good-file',
      args: ['./test/fixtures/awesome_log']
    }],
    http: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ error: '*' }]
    }, {
      module: 'good-http',
      args: ['http://prod.logs:3000', {
        wreck: {
          headers: { 'x-api-key': 12345 }
        }
      }]
    }]
  }
}


server.register({
    register: require('good'),
    options: options
  },(err)=>{})


