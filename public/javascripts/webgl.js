
fetch('/shader.glsl')
  .then(function (response) {
    return response.text();
  }).then(function (body) {
    console.log(body);
  });
