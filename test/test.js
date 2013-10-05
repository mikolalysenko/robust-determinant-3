"use strict"

var glm = require("gl-matrix")
var det3 = require("../det3.js")

require("tape")(function(t) {

	t.same(det3([[1, 0, 0],
							 [0, 1, 0],
							 [0, 0, 1]]), [1])

  for(var i=0; i<100; ++i) {
    var r = new Array(3)
    for(var j=0; j<3; ++j) {
      r[j] = [ (10*Math.random())|0, (10*Math.random())|0, (10*Math.random())|0 ]
    }
    t.same(det3(r), [glm.mat3.determinant(r[0].concat(r[1]).concat(r[2]))])
  }

	t.end()
})