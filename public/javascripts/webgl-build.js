(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// index.js


var src = "precision mediump float;\n#define GLSLIFY 1\n\nvoid main() {\n  gl_FragColor = vec4(1.0);\n}\n"

console.log(src)


window.fetch('/shader.glsl')
  .then(function (response) {
    return response.text()
  }).then(function (body) {
    console.log(body)
  })

var main = function () {
  // from http://www.webglacademy.com/courses.php?courses=0|1|20|2|3|4|23|5|6|7|10#1
  var CANVAS = document.getElementById('expertimentalCanvas')

  /* ========================= GET WEBGL CONTEXT ========================= */
  var GL
  try {
    GL = CANVAS.getContext('experimental-webgl', { antialias: true })
  } catch (e) {
    window.alert('You are not webgl compatible :(')
    return false
  }

  /* ========================= SHADERS ========================= */
  /* jshint multistr: true */
  var shader_vertex_source = `
    attribute vec2 position //the position of the point
    attribute vec3 color  //the color of the point

    varying vec3 vColor
    void main(void) { //pre-built function
    gl_Position = vec4(position, 0., 1.) //0. is the z, and 1 is w
    vColor=color
    }`

  var shader_fragment_source = `
    precision mediump float

    varying vec3 vColor
    void main(void) {
    gl_FragColor = vec4(vColor, 1.)
  }`

  var get_shader = function (source, type, typeString) {
    var shader = GL.createShader(type)
    GL.shaderSource(shader, source)
    GL.compileShader(shader)
    if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
      window.alert('ERROR IN ' + typeString + ' SHADER : ' + GL.getShaderInfoLog(shader))
      return false
    }
    return shader
  }

  var shader_vertex = get_shader(shader_vertex_source, GL.VERTEX_SHADER, 'VERTEX')

  var shader_fragment = get_shader(shader_fragment_source, GL.FRAGMENT_SHADER, 'FRAGMENT')

  var SHADER_PROGRAM = GL.createProgram()
  GL.attachShader(SHADER_PROGRAM, shader_vertex)
  GL.attachShader(SHADER_PROGRAM, shader_fragment)

  GL.linkProgram(SHADER_PROGRAM)

  var _color = GL.getAttribLocation(SHADER_PROGRAM, 'color')
  var _position = GL.getAttribLocation(SHADER_PROGRAM, 'position')

  GL.enableVertexAttribArray(_color)
  GL.enableVertexAttribArray(_position)

  GL.useProgram(SHADER_PROGRAM)

  /* ========================= THE TRIANGLE ========================= */
  // POINTS :
  var triangle_vertex = [
    -1, -1, // first summit -> bottom left of the viewport
    0, 0, 1,
    1, -1, // bottom right of the viewport
    1, 1, 0,
    1, 1, // top right of the viewport
    1, 0, 0
  ]

  var TRIANGLE_VERTEX = GL.createBuffer()
  GL.bindBuffer(GL.ARRAY_BUFFER, TRIANGLE_VERTEX)
  GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(triangle_vertex), GL.STATIC_DRAW)

  // FACES :
  var triangle_faces = [0, 1, 2]
  var TRIANGLE_FACES = GL.createBuffer()
  GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TRIANGLE_FACES)
  GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(triangle_faces), GL.STATIC_DRAW)

  /* ========================= DRAWING ========================= */
  GL.clearColor(0.0, 0.0, 0.0, 0.0)

  var animate = function () {
    GL.viewport(0.0, 0.0, CANVAS.width, CANVAS.height)
    GL.clear(GL.COLOR_BUFFER_BIT)

    GL.bindBuffer(GL.ARRAY_BUFFER, TRIANGLE_VERTEX)

    GL.vertexAttribPointer(_position, 2, GL.FLOAT, false, 4 * (2 + 3), 0)
    GL.vertexAttribPointer(_color, 3, GL.FLOAT, false, 4 * (2 + 3), 2 * 4)

    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, TRIANGLE_FACES)
    GL.drawElements(GL.TRIANGLES, 3, GL.UNSIGNED_SHORT, 0)
    GL.flush()

    window.requestAnimationFrame(animate)
  }

  animate()
}

document.addEventListener('DOMContentLoaded', function (event) {
  main()
})

},{}]},{},[1]);
