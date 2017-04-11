// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
  var sandbox = d3.select('#sandbox');
  sandbox.append('div');
  var myDiv = sandbox.select('div');

  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
  var mySvg = myDiv.append('svg');

  // Set both the width and height attributes of your `svg` to 300 
  mySvg.attr('width', 300)
       .attr('height', 300);

  // Append a `circle` element to your `svg`, setting the properties noted in index.html
  var circle = mySvg.append('circle');
  circle.attr('r', 30)
        .attr('cx', 100)
        .attr('cy', 100)
        .style('fill', 'blue');

  // Append a `rect` element to your `svg`, setting the properties noted in index.html
  var rect = mySvg.append('rect');
  rect.attr('width', 10)
      .attr('height', 100)
      .attr('x', 95)
      .attr('y', 100)
});
