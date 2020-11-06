// Build restful server using nodejs
// building web apps -- split server & client
// server - centralize & store data(http response)
// client - interact with the data(http request)

//promisify

/** API 
 * EventEmitter
 * 
 * 
 * emitter.on('data', (msg) => {
 * console.log(msg)})
 * */
//emits funtion with event & event payload
 emitter.emit('data', 'Hello World!')

 emitter.on('data', (msg) => {
     console.log(msg)})
