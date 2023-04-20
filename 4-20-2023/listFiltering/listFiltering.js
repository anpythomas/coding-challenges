// function filter_list(l) {
//     let newArray = []
    
//     for (i = 0; i < l.length; i++) {
//       if (typeof(l[i]) == 'number') {
//         newArray.push(l[i])
//       }
//     }
//     return newArray
//   }

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'} )
}


  console.log(filter_list([1, 3, "a", "b"]))