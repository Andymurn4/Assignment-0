function titleCaseEdit(title) {
    var splitTitle = title.split(' ')
    for (i = 0; i < splitTitle.length; i++) {
      splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substring(1);
    }
    return splitTitle.join(' ')
}

// Do not edit this line;
module.exports = titleCaseEdit;