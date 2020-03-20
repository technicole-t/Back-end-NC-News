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

// take an array of comments & ref object
// returns a new array of formatted comments.
// 1. created_by property renamed to an author key
// 2. belongs_to property renamed to an article_id key
// 3. value of the new article_id key must be the id corresponding to the original title value provided
// 4. created_at value converted into a javascript date object
// The rest of the comment's properties must be maintained
exports.formatComments = (comments, ref) => {
  const newComments = comments.map(comment => {
    const commentData = {
      ...comment,
      author: comment.created_by,
      article_id: ref[comment.belongs_to]
    };
    delete commentData.created_by;
    delete commentData.belongs_to;
    return commentData;
  });
  return newComments;
};
