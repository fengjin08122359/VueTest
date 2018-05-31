var tooTree = function (data, keyName, parentName, rootKey) {
  var fa = function (parentid) {
    var _array = []
    for (var i = 0; i < data.length; i++) {
      var n = data[i]
      if (n[parentName] === parentid) {
        n.children = fa(n[keyName])
        _array.push(n)
      }
    }
    return _array
  }
  return fa(rootKey)
}

export default {
  tooTree: tooTree
}
