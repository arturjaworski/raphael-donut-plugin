Raphael.fn.donut = function(x, y, innerRadius, outerRadius) {
  y -= outerRadius;
  return this.path('M'+x+' '+y+'a'+outerRadius+' '+outerRadius+' 0 1 0 1 0m-1 '+(outerRadius - innerRadius)+'a'+innerRadius+' '+innerRadius+' 0 1 1 -1 0');
};
