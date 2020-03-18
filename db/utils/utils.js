// Takes an array (list) of objects returns a new array, each item must have a timestamp
// converted into a Javascript date object. Everything else in each item must be maintained.
exports.formatDates = list => {
  let convertedList = list.map(item => {
    return { ...item };
  });
  convertedList.forEach(item => {
    item.created_at = new Date(item.created_at);
  });
  return convertedList;
};

// takes an array (list) of objects and return a reference object.s
// [{ article_id: 1, title: 'A' }] becomes { A: 1 }
exports.makeRefObj = list => {
  let refObj = {};
  for (let i = 0; i < list.length; i++) {
    refObj[list[i].title] = list[i].article_id;
  }
  return refObj;
};

// This utility function should be able to take an array of comment objects (comments)
// and a reference object, and return a new array of formatted comments.
// Each formatted comment must have:
// Its created_by property renamed to an author key
// Its belongs_to property renamed to an article_id key
// The value of the new article_id key must be the id corresponding to the original title value provided
// Its created_at value converted into a javascript date object
// The rest of the comment's properties must be maintained
exports.formatComments = (comments, articleRef) => {};
