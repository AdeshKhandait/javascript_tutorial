// How html render
// Its Start from top start parsing if
// 1: img came is download img behind and continue to parsing and later on render img
// 2: js came it stop parshing and download js and then execute
// this behaviour can be can be change using @defer and @async keyword

// @defer and @Async is added at will adding script tag

// Async: when js comes it continue to parse and download js in background and once downloaded it stop parsing and execute js
// defer: when js comes it continue to parse and download js background and once download it does not stop it continue parsing until entire html is done and then execute js
