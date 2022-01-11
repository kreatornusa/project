      var cat = function(json) {
       var categories = json.feed.category;
       var lst = [];
       var listspan = document.createElement('span');
       listspan.id = 'listspan';

       categories
         // get the labels starting with "A" ONLY.
         .filter(function(category) {
           return category.term.toLowerCase().indexOf('a') === 0;
         })
         // not required
         .sort(function(a, b) {
           return +(a.term > b.term) || +(a.term === b.term) - 1;
         })
         // insert a tag to listspan, instead of using string, this way maybe more efficient.
         .forEach(function(category) {
           var a = document.createElement('a');
           a.href = '/search/label/' + category.term;
           a.innerText = category.term;
           listspan.appendChild(a);
           listspan.appendChild(document.createElement('br'));
           lst.push(category.term);
         });

       // insert the list to DOM
       document.getElementById('containerc').appendChild(listspan);
      }
  
